(()=>{"use strict";var e={77:(e,r)=>{function n(e,r){r=r.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]".concat(r,"=([^&#]*)")).exec(e);return n&&n[1]?decodeURIComponent(n[1]).replace(/\+/g," "):""}function o(e,r){return"true"===n(e,r)}r.Z=function(e){return{getParameterFromQuery:n,isParameterTrueInQuery:o,getParameterByName:n.bind(null,e.location.search),isParameterTrue:o.bind(null,e.location.search)}}},282:(e,r)=>{r.T=void 0;var n=window;r.T=void 0!==n.Sentry&&Boolean(n.Sentry.captureException)?n.Sentry:(console.warn("mocked sentry used!"),{captureException:function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return console.error.apply(console,e),"mocked sentry exception"},captureMessage:function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return console.log.apply(console,e),"mocked sentry message"},setTags:function(){},setExtras:function(){},addBreadcrumb:function(){},breadcrumb:function(){},_addEventProcessor:function(){},configureScope:function(){},init:function(){},Transports:{FetchTransport:function(){}}})}},r={};function n(o){var t=r[o];if(void 0!==t)return t.exports;var i=r[o]={exports:{}};return e[o](i,i.exports,n),i.exports}(()=>{var e=n(282),r=n(77);class o extends e.T.Transports.FetchTransport{sendEvent(e){return super.sendEvent(e)}}window.Sentry=e.T;const t=(0,r.Z)(window),i=/\/(\d+\.\d+\.\d+)\/?$/;(()=>{const{editorModel:r,loggerModel:n,appStudioModel:s,serviceTopology:a}=window;var d;const c=function(e){const r=e.match(i);return r?r[1]:void 0}(null!==(d=r.editorBase)&&void 0!==d?d:a.scriptsLocationMap["santa-editor"]||""),l=t.isParameterTrue("force-enable-sentry")||!t.isParameterTrue("suppressbi")&&!t.isParameterTrue("isqa")&&!t.getParameterByName("EditorSource")&&!t.getParameterByName("santa-editor-override"),u="e352522e110d09b03153d75f9e51590d7c28f6889a8f35d8f1e72fa4",p=u?"santa-editor@".concat(u):void 0;e.T.init({dsn:"https://f432f47cfde34ebc9d320d006a71c57e@sentry-next.wixpress.com/7163",environment:"production",release:p,transport:o,autoSessionTracking:!0,enabled:l,ignoreErrors:["ResizeObserver loop limit exceeded"]}),e.T.configureScope((e=>{var o,t;e.setTags(((e,r,n,o)=>{var t,i,s,a;return{numberOfPages:null===(t=e.siteHeader)||void 0===t||null===(i=t.pageIdList)||void 0===i||null===(s=i.pages)||void 0===s?void 0:s.length,revision:null===(a=e.siteHeader)||void 0===a?void 0:a.revision,geo:e.geo,editorVersion:r,metaSiteId:e.metaSiteId,isDesktopEditor:!0,isMobileEditor:!1,esi:e.editorSessionId,editorLoaded:!1,isPreview:!1,isAppStudio:void 0!==o,ds:n.origin,isNewBundle:Boolean(n.isNewBundle)}})(r,c,n,s)),e.setExtras((e=>{var r;return{previewUrl:e.previewUrl,runningExperiments:e.runningExperiments,isPublished:null===(r=e.siteHeader)||void 0===r?void 0:r.published}})(r)),e.setUser({id:null===(o=r.permissionsInfo)||void 0===o?void 0:o.loggedInUserId,roles:null===(t=r.permissionsInfo)||void 0===t?void 0:t.loggedInUserRoles}),e.addEventProcessor(((e,n)=>{var o;return((e="")=>e.includes("play() failed because the user didn't interact with the document first")||e.includes("The play() request was interrupted by a call to pause()"))("string"==typeof(null==n?void 0:n.originalException)?n.originalException:null==n||null===(o=n.originalException)||void 0===o?void 0:o.message)?null:(e.extra={...e.extra,biHistoryUrl:"https://bo.wix.com/bi-ux/#/history?timezone=0&fields=date_created,src,evid,evid_desc,error_type,error_info,tags,extra,error_context,origin,uuid,msid,esi,dm_version,os_name,browser_family,browser_name,app_name,country_code"+"&uuid=".concat(r.permissionsInfo.ownerId)+"&start=".concat(String(Date.now()-24e4))+"&stop=".concat(String(Date.now()+24e4))+"&wql=msid%3D%22".concat(r.metaSiteId,"%22")+"&order=asc&levels=1,2,3,4"},e.tags=e.tags||{},(e=>{var r,n,o,t,i;return(null!==(i=null===(r=e.exception)||void 0===r||null===(n=r.values)||void 0===n||null===(o=n[0])||void 0===o||null===(t=o.stacktrace)||void 0===t?void 0:t.frames)&&void 0!==i?i:[]).filter((e=>e&&"string"==typeof e.filename)).some((e=>e.filename.includes("wixCode")||e.filename.includes("wix-code")))})(e)&&(e.tags={...e.tags,"wix-code-error":!0},e.fingerprint=(e.fingerprint||[]).concat(["wix-code-error"])),e.tags.hasOwnProperty("whiteScreenOfDeath")&&(e.fingerprint=["{{ default }}","whiteScreenOfDeath"]),e)}))}))})()})()})();