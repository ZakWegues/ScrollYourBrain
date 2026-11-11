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

export function embedHtml(o: EmbedOptions): string {
  if (!YT_ID.test(o.id)) throw new Error(`invalid YouTube id: ${o.id}`);
  const cfg = JSON.stringify({ id: o.id, play: !!o.play, muted: !!o.muted, vars: playerVars(o) });
  return `<!doctype html><html><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<meta name="referrer" content="strict-origin-when-cross-origin">
<style>html,body{margin:0;padding:0;width:100%;height:100%;background:#000;overflow:hidden}#p,iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:0}</style>
</head><body><div id="p"></div><script>
var CFG=${cfg};
function send(m){m=JSON.stringify(m);if(window.ReactNativeWebView)window.ReactNativeWebView.postMessage(m);else if(window.parent!==window)window.parent.postMessage({__syb:m},"*");}
var player=null,want=CFG.play,checker=null;
function ok(){return player&&typeof player.playVideo==="function";}
// Some devices refuse to start with sound without a tap: fall back to muted so the video still plays.
function ensure(){clearTimeout(checker);if(!want)return;checker=setTimeout(function(){if(!ok()||!want)return;var s=player.getPlayerState();if(s!==1&&s!==3&&!player.isMuted()){player.mute();player.playVideo();send({t:"muted"});}},2500);}
window.__cmd=function(c,a){if(!ok())return;try{
if(c==="play"){want=true;player.playVideo();ensure();}
else if(c==="pause"){want=false;player.pauseVideo();}
else if(c==="mute"){a?player.mute():player.unMute();}
else if(c==="rate"){player.setPlaybackRate(a);}
else if(c==="seek"){player.seekTo(a,true);}
}catch(e){}};
window.onYouTubeIframeAPIReady=function(){
player=new YT.Player("p",{width:"100%",height:"100%",videoId:CFG.id,host:"https://www.youtube.com",playerVars:CFG.vars,events:{
onReady:function(e){if(CFG.muted)e.target.mute();if(want){e.target.playVideo();ensure();}send({t:"ready"});},
onStateChange:function(e){send({t:"state",s:e.data});},
onError:function(e){send({t:"error",code:e.data});}
}});};
var s=document.createElement("script");s.src="https://www.youtube.com/iframe_api";s.onerror=function(){send({t:"error",code:-1});};
document.head.appendChild(s);
</script></body></html>`;
}

/** JavaScript to run inside the page for a command. */
export const command = (c: "play" | "pause" | "mute" | "rate" | "seek", arg?: number | boolean) =>
  `window.__cmd&&window.__cmd(${JSON.stringify(c)},${JSON.stringify(arg ?? null)});true;`;

/** YouTube's own mobile page, used by the in-app watch screen when the embed is refused. */
export const watchUrl = (id: string, vertical: boolean) => (vertical ? `https://m.youtube.com/shorts/${id}` : `https://m.youtube.com/watch?v=${id}`);
