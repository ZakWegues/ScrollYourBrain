/**
 * The page that hosts the YouTube player inside the app.
 *
 * YouTube only plays embeds whose page identifies the app (HTTP Referer / origin). Loading this HTML with
 * `baseUrl: APP_ORIGIN` gives the page an https origin named after the app package, which is what
 * YouTube asks WebView apps to send.
 */
export const APP_ORIGIN = "https://com.zakwegues.scrollyourbrain";

export interface EmbedOptions {
  id: string;
  start?: number;
  play?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
}

/** Messages the page sends back. `state` uses the IFrame API codes (1 playing, 2 paused, 0 ended, 3 buffering). */
export type EmbedMessage =
  | { t: "ready" }
  | { t: "state"; s: number }
  | { t: "error"; code: number }
  | { t: "muted" };

/** Errors that mean the video itself is gone (removed or private), so the card can be skipped. */
export const isGoneError = (code: number) => code === 100;

export const YT_ID = /^[\w-]{11}$/;

export function playerVars(o: EmbedOptions) {
  return {
    playsinline: 1,
    controls: o.controls ? 1 : 0,
    rel: 0,
    fs: 0,
    modestbranding: 1,
    iv_load_policy: 3,
    hl: "pt",
    cc_lang_pref: "pt",
    start: Math.max(0, Math.floor(o.start ?? 0)),
    ...(o.loop ? { loop: 1, playlist: o.id } : {}),
    enablejsapi: 1,
    origin: APP_ORIGIN,
    widget_referrer: APP_ORIGIN,
  };
}

/** The embed address used by the direct mode: the iframe starts loading the player right away. */
export function embedUrl(o: EmbedOptions): string {
  if (!YT_ID.test(o.id)) throw new Error(`invalid YouTube id: ${o.id}`);
  const params = { ...playerVars(o), autoplay: o.play ? 1 : 0, mute: o.muted ? 1 : 0 };
  const qs = Object.entries(params).map(([k, v]) => `${k}=${encodeURIComponent(String(v))}`).join("&");
  return `https://www.youtube.com/embed/${o.id}?${qs}`;
}

/** Without a ready signal by then, the direct mode gives way to the IFrame API. */
export const DIRECT_TIMEOUT_MS = 6000;

/**
 * The player page. By default ("direct") it creates the embed iframe at once and talks to it with the
 * embed's own postMessage protocol (the one YouTube's widget API uses), which saves the two script
 * downloads of the IFrame API before the player even starts loading. If the player does not answer in
 * DIRECT_TIMEOUT_MS, or with mode "api", the page uses the IFrame API instead.
 */
export function embedHtml(o: EmbedOptions, mode: "direct" | "api" = "direct"): string {
  if (!YT_ID.test(o.id)) throw new Error(`invalid YouTube id: ${o.id}`);
  const cfg = JSON.stringify({ id: o.id, play: !!o.play, muted: !!o.muted, vars: playerVars(o), url: embedUrl(o), mode, timeout: DIRECT_TIMEOUT_MS });
  return `<!doctype html><html><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<meta name="referrer" content="strict-origin-when-cross-origin">
<link rel="preconnect" href="https://www.youtube.com"><link rel="preconnect" href="https://i.ytimg.com"><link rel="preconnect" href="https://www.google.com">
<style>html,body{margin:0;padding:0;width:100%;height:100%;background:#000;overflow:hidden}#p,iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:0}</style>
</head><body><div id="p"></div><script>
var CFG=${cfg};
var YT_ORIGIN="https://www.youtube.com";
function send(m){m=JSON.stringify(m);if(window.ReactNativeWebView)window.ReactNativeWebView.postMessage(m);else if(window.parent!==window)window.parent.postMessage({__syb:m},"*");}
var want=CFG.play,state=-1,muted=CFG.muted,ready=false,checker=null,api=null,frame=null,listen=null;
// Direct mode: commands go to the embed by postMessage; API mode: through YT.Player.
function call(fn,args){
  if(api){try{api[fn].apply(api,args||[]);}catch(e){}return;}
  if(frame&&frame.contentWindow)frame.contentWindow.postMessage(JSON.stringify({event:"command",func:fn,args:args||[],id:1,channel:"widget"}),YT_ORIGIN);
}
function onReady(){if(ready)return;ready=true;clearInterval(listen);if(CFG.muted)call("mute");if(want){call("playVideo");ensure();}send({t:"ready"});}
function onState(s){state=s;send({t:"state",s:s});}
// Some devices refuse to start with sound without a tap: fall back to muted so the video still plays.
function ensure(){clearTimeout(checker);if(!want)return;checker=setTimeout(function(){if(!ready||!want)return;if(state!==1&&state!==3&&!muted){muted=true;call("mute");call("playVideo");send({t:"muted"});}},2500);}
window.__cmd=function(c,a){if(!ready)return;
  if(c==="play"){want=true;call("playVideo");ensure();}
  else if(c==="pause"){want=false;call("pauseVideo");}
  else if(c==="mute"){muted=!!a;call(a?"mute":"unMute");}
  else if(c==="rate"){call("setPlaybackRate",[a]);}
  else if(c==="seek"){call("seekTo",[a,true]);}
};
function useApi(){
  if(api||ready)return;
  clearInterval(listen);
  var box=document.getElementById("p");if(frame){frame.remove();frame=null;}
  window.onYouTubeIframeAPIReady=function(){
    var pl=new YT.Player(box,{width:"100%",height:"100%",videoId:CFG.id,host:YT_ORIGIN,playerVars:CFG.vars,events:{
      onReady:function(){api=pl;onReady();},
      onStateChange:function(e){onState(e.data);},
      onError:function(e){send({t:"error",code:e.data});}
    }});};
  var s=document.createElement("script");s.src=YT_ORIGIN+"/iframe_api";s.onerror=function(){send({t:"error",code:-1});};
  document.head.appendChild(s);
}
window.addEventListener("message",function(e){
  if(api||!frame||e.source!==frame.contentWindow||e.origin!==YT_ORIGIN)return;
  var d;try{d=typeof e.data==="string"?JSON.parse(e.data):e.data;}catch(x){return;}
  if(!d||!d.event)return;
  if(d.event==="onReady")onReady();
  else if(d.event==="onStateChange")onState(d.info);
  else if(d.event==="onError")send({t:"error",code:d.info});
  else if(d.event==="infoDelivery"&&d.info){
    if(!ready&&d.info.playerState!==undefined)onReady();
    if(typeof d.info.muted==="boolean")muted=d.info.muted;
    if(d.info.playerState!==undefined&&d.info.playerState!==state)onState(d.info.playerState);
  }
});
if(CFG.mode==="api"){useApi();}else{
  frame=document.createElement("iframe");
  frame.src=CFG.url;
  frame.allow="autoplay; encrypted-media; picture-in-picture";
  frame.referrerPolicy="strict-origin-when-cross-origin";
  document.getElementById("p").appendChild(frame);
  // Say "listening" from the start, so the player reports ready as soon as it is (not after every asset loads).
  var hello=function(){if(!ready&&frame&&frame.contentWindow)frame.contentWindow.postMessage(JSON.stringify({event:"listening",id:1,channel:"widget"}),YT_ORIGIN);};
  var n=0;listen=setInterval(function(){if(ready||++n>120){clearInterval(listen);return;}hello();},50);
  frame.onload=hello;
  setTimeout(function(){if(!ready)useApi();},CFG.timeout);
}
</script></body></html>`;
}

/** JavaScript to run inside the page for a command. */
export const command = (c: "play" | "pause" | "mute" | "rate" | "seek", arg?: number | boolean) =>
  `window.__cmd&&window.__cmd(${JSON.stringify(c)},${JSON.stringify(arg ?? null)});true;`;

/** YouTube's own mobile page, used by the in-app watch screen when the embed is refused. */
export const watchUrl = (id: string, vertical: boolean) => (vertical ? `https://m.youtube.com/shorts/${id}` : `https://m.youtube.com/watch?v=${id}`);
