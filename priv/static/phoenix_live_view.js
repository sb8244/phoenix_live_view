!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.phoenix_live_view=t():e.phoenix_live_view=t()}(this,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";var i,o="http://www.w3.org/1999/xhtml",r="undefined"==typeof document?void 0:document,s=r?r.body||r.createElement("div"):{},a=s.hasAttributeNS?function(e,t,n){return e.hasAttributeNS(t,n)}:s.hasAttribute?function(e,t,n){return e.hasAttribute(n)}:function(e,t,n){return null!=e.getAttributeNode(t,n)};function u(e,t){var n=e.nodeName,i=t.nodeName;return n===i||!!(t.actualize&&n.charCodeAt(0)<91&&i.charCodeAt(0)>90)&&n===i.toUpperCase()}function c(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n,""))}var l={OPTION:function(e,t){c(e,t,"selected")},INPUT:function(e,t){c(e,t,"checked"),c(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),a(t,null,"value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var i=e.firstChild;if(i){var o=i.nodeValue;if(o==n||!n&&o==e.placeholder)return;i.nodeValue=n}},SELECT:function(e,t){if(!a(t,null,"multiple")){for(var n=0,i=t.firstChild;i;){var o=i.nodeName;if(o&&"OPTION"===o.toUpperCase()){if(a(i,null,"selected")){n;break}n++}i=i.nextSibling}e.selectedIndex=n}}},h=1,f=3,d=8;function v(){}function p(e){return e.id}var y=function(e){return function(t,n,s){if(s||(s={}),"string"==typeof n)if("#document"===t.nodeName||"HTML"===t.nodeName){var a=n;(n=r.createElement("html")).innerHTML=a}else c=n,!i&&r.createRange&&(i=r.createRange()).selectNode(r.body),i&&i.createContextualFragment?y=i.createContextualFragment(c):(y=r.createElement("body")).innerHTML=c,n=y.childNodes[0];var c,y,m,g=s.getNodeKey||p,b=s.onBeforeNodeAdded||v,k=s.onNodeAdded||v,w=s.onBeforeElUpdated||v,C=s.onElUpdated||v,x=s.onBeforeNodeDiscarded||v,E=s.onNodeDiscarded||v,S=s.onBeforeElChildrenUpdated||v,A=!0===s.childrenOnly,j={};function T(e){m?m.push(e):m=[e]}function R(e,t,n){!1!==x(e)&&(t&&t.removeChild(e),E(e),function e(t,n){if(t.nodeType===h)for(var i=t.firstChild;i;){var o=void 0;n&&(o=g(i))?T(o):(E(i),i.firstChild&&e(i,n)),i=i.nextSibling}}(e,n))}function N(e){k(e);for(var t=e.firstChild;t;){var n=t.nextSibling,i=g(t);if(i){var o=j[i];o&&u(t,o)&&(t.parentNode.replaceChild(o,t),O(o,t))}N(t),t=n}}function O(i,o,s){var a,c=g(o);if(c&&delete j[c],!n.isSameNode||!n.isSameNode(t)){if(!s){if(!1===w(i,o))return;if(e(i,o),C(i),!1===S(i,o))return}if("TEXTAREA"!==i.nodeName){var v,p,y,m,k=o.firstChild,x=i.firstChild;e:for(;k;){for(y=k.nextSibling,v=g(k);x;){if(p=x.nextSibling,k.isSameNode&&k.isSameNode(x)){k=y,x=p;continue e}a=g(x);var E=x.nodeType,A=void 0;if(E===k.nodeType&&(E===h?(v?v!==a&&((m=j[v])?x.nextSibling===m?A=!1:(i.insertBefore(m,x),p=x.nextSibling,a?T(a):R(x,i,!0),x=m):A=!1):a&&(A=!1),(A=!1!==A&&u(x,k))&&O(x,k)):E!==f&&E!=d||(A=!0,x.nodeValue!==k.nodeValue&&(x.nodeValue=k.nodeValue))),A){k=y,x=p;continue e}a?T(a):R(x,i,!0),x=p}if(v&&(m=j[v])&&u(m,k))i.appendChild(m),O(m,k);else{var P=b(k);!1!==P&&(P&&(k=P),k.actualize&&(k=k.actualize(i.ownerDocument||r)),i.appendChild(k),N(k))}k=y,x=p}for(;x;)p=x.nextSibling,(a=g(x))?T(a):R(x,i,!0),x=p}var L=l[i.nodeName];L&&L(i,o)}}!function e(t){if(t.nodeType===h)for(var n=t.firstChild;n;){var i=g(n);i&&(j[i]=n),e(n),n=n.nextSibling}}(t);var P,L,_=t,I=_.nodeType,B=n.nodeType;if(!A)if(I===h)B===h?u(t,n)||(E(t),_=function(e,t){for(var n=e.firstChild;n;){var i=n.nextSibling;t.appendChild(n),n=i}return t}(t,(P=n.nodeName,(L=n.namespaceURI)&&L!==o?r.createElementNS(L,P):r.createElement(P)))):_=n;else if(I===f||I===d){if(B===I)return _.nodeValue!==n.nodeValue&&(_.nodeValue=n.nodeValue),_;_=n}if(_===n)E(t);else if(O(_,n,A),m)for(var M=0,U=m.length;M<U;M++){var J=j[m[M]];J&&R(J,J.parentNode,!1)}return!A&&_!==t&&t.parentNode&&(_.actualize&&(_=_.actualize(t.ownerDocument||r)),t.parentNode.replaceChild(_,t)),_}}(function(e,t){var n,i,o,r,s,u=t.attributes;for(n=u.length-1;n>=0;--n)o=(i=u[n]).name,r=i.namespaceURI,s=i.value,r?(o=i.localName||o,e.getAttributeNS(r,o)!==s&&e.setAttributeNS(r,o,s)):e.getAttribute(o)!==s&&e.setAttribute(o,s);for(n=(u=e.attributes).length-1;n>=0;--n)!1!==(i=u[n]).specified&&(o=i.name,(r=i.namespaceURI)?(o=i.localName||o,a(t,r,o)||e.removeAttributeNS(r,o)):a(t,null,o)||e.removeAttribute(o))});e.exports=y},function(e,t,n){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){(function(t){e.exports=t.Phoenix=n(2)}).call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.r(t),n.d(t,"Channel",function(){return g}),n.d(t,"Socket",function(){return k}),n.d(t,"LongPoll",function(){return w}),n.d(t,"Ajax",function(){return C}),n.d(t,"Presence",function(){return x});var a="undefined"!=typeof self?self:null,u="undefined"!=typeof window?window:null,c=a||u||void 0,l={connecting:0,open:1,closing:2,closed:3},h=1e4,f={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},d={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},v=[d.close,d.error,d.join,d.reply,d.leave],p={longpoll:"longpoll",websocket:"websocket"},y=function(e){return"function"==typeof e?e:function(){return e}},m=function(){function e(t,n,i,r){o(this,e),this.channel=t,this.event=n,this.payload=i||function(){return{}},this.receivedResp=null,this.timeout=r,this.timeoutTimer=null,this.recHooks=[],this.sent=!1}return s(e,[{key:"resend",value:function(e){this.timeout=e,this.reset(),this.send()}},{key:"send",value:function(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}},{key:"receive",value:function(e,t){return this.hasReceived(e)&&t(this.receivedResp.response),this.recHooks.push({status:e,callback:t}),this}},{key:"reset",value:function(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}},{key:"matchReceive",value:function(e){var t=e.status,n=e.response;e.ref,this.recHooks.filter(function(e){return e.status===t}).forEach(function(e){return e.callback(n)})}},{key:"cancelRefEvent",value:function(){this.refEvent&&this.channel.off(this.refEvent)}},{key:"cancelTimeout",value:function(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}},{key:"startTimeout",value:function(){var e=this;this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,function(t){e.cancelRefEvent(),e.cancelTimeout(),e.receivedResp=t,e.matchReceive(t)}),this.timeoutTimer=setTimeout(function(){e.trigger("timeout",{})},this.timeout)}},{key:"hasReceived",value:function(e){return this.receivedResp&&this.receivedResp.status===e}},{key:"trigger",value:function(e,t){this.channel.trigger(this.refEvent,{status:e,response:t})}}]),e}(),g=function(){function e(t,n,i){var r=this;o(this,e),this.state=f.closed,this.topic=t,this.params=y(n||{}),this.socket=i,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new m(this,d.join,this.params,this.timeout),this.pushBuffer=[],this.rejoinTimer=new E(function(){return r.rejoinUntilConnected()},this.socket.reconnectAfterMs),this.joinPush.receive("ok",function(){r.state=f.joined,r.rejoinTimer.reset(),r.pushBuffer.forEach(function(e){return e.send()}),r.pushBuffer=[]}),this.onClose(function(){r.rejoinTimer.reset(),r.socket.hasLogger()&&r.socket.log("channel","close ".concat(r.topic," ").concat(r.joinRef())),r.state=f.closed,r.socket.remove(r)}),this.onError(function(e){r.isLeaving()||r.isClosed()||(r.socket.hasLogger()&&r.socket.log("channel","error ".concat(r.topic),e),r.state=f.errored,r.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",function(){r.isJoining()&&(r.socket.hasLogger()&&r.socket.log("channel","timeout ".concat(r.topic," (").concat(r.joinRef(),")"),r.joinPush.timeout),new m(r,d.leave,y({}),r.timeout).send(),r.state=f.errored,r.joinPush.reset(),r.rejoinTimer.scheduleTimeout())}),this.on(d.reply,function(e,t){r.trigger(r.replyEventName(t),e)})}return s(e,[{key:"rejoinUntilConnected",value:function(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this.rejoin()}},{key:"join",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.timeout;if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.joinedOnce=!0,this.rejoin(e),this.joinPush}},{key:"onClose",value:function(e){this.on(d.close,e)}},{key:"onError",value:function(e){return this.on(d.error,function(t){return e(t)})}},{key:"on",value:function(e,t){var n=this.bindingRef++;return this.bindings.push({event:e,ref:n,callback:t}),n}},{key:"off",value:function(e,t){this.bindings=this.bindings.filter(function(n){return!(n.event===e&&(void 0===t||t===n.ref))})}},{key:"canPush",value:function(){return this.socket.isConnected()&&this.isJoined()}},{key:"push",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.timeout;if(!this.joinedOnce)throw new Error("tried to push '".concat(e,"' to '").concat(this.topic,"' before joining. Use channel.join() before pushing events"));var i=new m(this,e,function(){return t},n);return this.canPush()?i.send():(i.startTimeout(),this.pushBuffer.push(i)),i}},{key:"leave",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.timeout;this.state=f.leaving;var n=function(){e.socket.hasLogger()&&e.socket.log("channel","leave ".concat(e.topic)),e.trigger(d.close,"leave")},i=new m(this,d.leave,y({}),t);return i.receive("ok",function(){return n()}).receive("timeout",function(){return n()}),i.send(),this.canPush()||i.trigger("ok",{}),i}},{key:"onMessage",value:function(e,t,n){return t}},{key:"isLifecycleEvent",value:function(e){return v.indexOf(e)>=0}},{key:"isMember",value:function(e,t,n,i){return!(this.topic!==e||i&&i!==this.joinRef()&&this.isLifecycleEvent(t)&&(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:e,event:t,payload:n,joinRef:i}),1))}},{key:"joinRef",value:function(){return this.joinPush.ref}},{key:"sendJoin",value:function(e){this.state=f.joining,this.joinPush.resend(e)}},{key:"rejoin",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.timeout;this.isLeaving()||this.sendJoin(e)}},{key:"trigger",value:function(e,t,n,i){var o=this.onMessage(e,t,n,i);if(t&&!o)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");for(var r=0;r<this.bindings.length;r++){var s=this.bindings[r];s.event===e&&s.callback(o,n,i||this.joinRef())}}},{key:"replyEventName",value:function(e){return"chan_reply_".concat(e)}},{key:"isClosed",value:function(){return this.state===f.closed}},{key:"isErrored",value:function(){return this.state===f.errored}},{key:"isJoined",value:function(){return this.state===f.joined}},{key:"isJoining",value:function(){return this.state===f.joining}},{key:"isLeaving",value:function(){return this.state===f.leaving}}]),e}(),b={encode:function(e,t){var n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))},decode:function(e,t){var n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(JSON.parse(e),5);return t({join_ref:n[0],ref:n[1],topic:n[2],event:n[3],payload:n[4]})}},k=function(){function e(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,e),this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.timeout=i.timeout||h,this.transport=i.transport||c.WebSocket||w,this.defaultEncoder=b.encode,this.defaultDecoder=b.decode,this.transport!==w?(this.encode=i.encode||this.defaultEncoder,this.decode=i.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder),this.heartbeatIntervalMs=i.heartbeatIntervalMs||3e4,this.reconnectAfterMs=i.reconnectAfterMs||function(e){return[1e3,2e3,5e3,1e4][e-1]||1e4},this.logger=i.logger||null,this.longpollerTimeout=i.longpollerTimeout||2e4,this.params=y(i.params||{}),this.endPoint="".concat(t,"/").concat(p.websocket),this.heartbeatTimer=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new E(function(){n.teardown(function(){return n.connect()})},this.reconnectAfterMs)}return s(e,[{key:"protocol",value:function(){return location.protocol.match(/^https/)?"wss":"ws"}},{key:"endPointURL",value:function(){var e=C.appendParams(C.appendParams(this.endPoint,this.params()),{vsn:"2.0.0"});return"/"!==e.charAt(0)?e:"/"===e.charAt(1)?"".concat(this.protocol(),":").concat(e):"".concat(this.protocol(),"://").concat(location.host).concat(e)}},{key:"disconnect",value:function(e,t,n){this.reconnectTimer.reset(),this.teardown(e,t,n)}},{key:"connect",value:function(e){var t=this;e&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=y(e)),this.conn||(this.conn=new this.transport(this.endPointURL()),this.conn.timeout=this.longpollerTimeout,this.conn.onopen=function(){return t.onConnOpen()},this.conn.onerror=function(e){return t.onConnError(e)},this.conn.onmessage=function(e){return t.onConnMessage(e)},this.conn.onclose=function(e){return t.onConnClose(e)})}},{key:"log",value:function(e,t,n){this.logger(e,t,n)}},{key:"hasLogger",value:function(){return null!==this.logger}},{key:"onOpen",value:function(e){this.stateChangeCallbacks.open.push(e)}},{key:"onClose",value:function(e){this.stateChangeCallbacks.close.push(e)}},{key:"onError",value:function(e){this.stateChangeCallbacks.error.push(e)}},{key:"onMessage",value:function(e){this.stateChangeCallbacks.message.push(e)}},{key:"onConnOpen",value:function(){this.hasLogger()&&this.log("transport","connected to ".concat(this.endPointURL())),this.flushSendBuffer(),this.reconnectTimer.reset(),this.resetHeartbeat(),this.stateChangeCallbacks.open.forEach(function(e){return e()})}},{key:"resetHeartbeat",value:function(){var e=this;this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(function(){return e.sendHeartbeat()},this.heartbeatIntervalMs))}},{key:"teardown",value:function(e,t,n){this.conn&&(this.conn.onclose=function(){},t?this.conn.close(t,n||""):this.conn.close(),this.conn=null),e&&e()}},{key:"onConnClose",value:function(e){this.hasLogger()&&this.log("transport","close",e),this.triggerChanError(),clearInterval(this.heartbeatTimer),e&&1e3!==e.code&&this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(function(t){return t(e)})}},{key:"onConnError",value:function(e){this.hasLogger()&&this.log("transport",e),this.triggerChanError(),this.stateChangeCallbacks.error.forEach(function(t){return t(e)})}},{key:"triggerChanError",value:function(){this.channels.forEach(function(e){return e.trigger(d.error)})}},{key:"connectionState",value:function(){switch(this.conn&&this.conn.readyState){case l.connecting:return"connecting";case l.open:return"open";case l.closing:return"closing";default:return"closed"}}},{key:"isConnected",value:function(){return"open"===this.connectionState()}},{key:"remove",value:function(e){this.channels=this.channels.filter(function(t){return t.joinRef()!==e.joinRef()})}},{key:"channel",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new g(e,t,this);return this.channels.push(n),n}},{key:"push",value:function(e){var t=this;if(this.hasLogger()){var n=e.topic,i=e.event,o=e.payload,r=e.ref,s=e.join_ref;this.log("push","".concat(n," ").concat(i," (").concat(s,", ").concat(r,")"),o)}this.isConnected()?this.encode(e,function(e){return t.conn.send(e)}):this.sendBuffer.push(function(){return t.encode(e,function(e){return t.conn.send(e)})})}},{key:"makeRef",value:function(){var e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}},{key:"sendHeartbeat",value:function(){if(this.isConnected()){if(this.pendingHeartbeatRef)return this.pendingHeartbeatRef=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection"),void this.conn.close(1e3,"hearbeat timeout");this.pendingHeartbeatRef=this.makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef})}}},{key:"flushSendBuffer",value:function(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(function(e){return e()}),this.sendBuffer=[])}},{key:"onConnMessage",value:function(e){var t=this;this.decode(e.data,function(e){var n=e.topic,i=e.event,o=e.payload,r=e.ref,s=e.join_ref;r&&r===t.pendingHeartbeatRef&&(t.pendingHeartbeatRef=null),t.hasLogger()&&t.log("receive","".concat(o.status||""," ").concat(n," ").concat(i," ").concat(r&&"("+r+")"||""),o);for(var a=0;a<t.channels.length;a++){var u=t.channels[a];u.isMember(n,i,o,s)&&u.trigger(i,o,r,s)}for(var c=0;c<t.stateChangeCallbacks.message.length;c++)t.stateChangeCallbacks.message[c](e)})}}]),e}(),w=function(){function e(t){o(this,e),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(t),this.readyState=l.connecting,this.poll()}return s(e,[{key:"normalizeEndpoint",value:function(e){return e.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+p.websocket),"$1/"+p.longpoll)}},{key:"endpointURL",value:function(){return C.appendParams(this.pollEndpoint,{token:this.token})}},{key:"closeAndRetry",value:function(){this.close(),this.readyState=l.connecting}},{key:"ontimeout",value:function(){this.onerror("timeout"),this.closeAndRetry()}},{key:"poll",value:function(){var e=this;this.readyState!==l.open&&this.readyState!==l.connecting||C.request("GET",this.endpointURL(),"application/json",null,this.timeout,this.ontimeout.bind(this),function(t){if(t){var n=t.status,i=t.token,o=t.messages;e.token=i}else n=0;switch(n){case 200:o.forEach(function(t){return e.onmessage({data:t})}),e.poll();break;case 204:e.poll();break;case 410:e.readyState=l.open,e.onopen(),e.poll();break;case 0:case 500:e.onerror(),e.closeAndRetry();break;default:throw new Error("unhandled poll status ".concat(n))}})}},{key:"send",value:function(e){var t=this;C.request("POST",this.endpointURL(),"application/json",e,this.timeout,this.onerror.bind(this,"timeout"),function(e){e&&200===e.status||(t.onerror(e&&e.status),t.closeAndRetry())})}},{key:"close",value:function(e,t){this.readyState=l.closed,this.onclose()}}]),e}(),C=function(){function e(){o(this,e)}return s(e,null,[{key:"request",value:function(e,t,n,i,o,r,s){if(c.XDomainRequest){var a=new XDomainRequest;this.xdomainRequest(a,e,t,i,o,r,s)}else{var u=c.XMLHttpRequest?new c.XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");this.xhrRequest(u,e,t,n,i,o,r,s)}}},{key:"xdomainRequest",value:function(e,t,n,i,o,r,s){var a=this;e.timeout=o,e.open(t,n),e.onload=function(){var t=a.parseJSON(e.responseText);s&&s(t)},r&&(e.ontimeout=r),e.onprogress=function(){},e.send(i)}},{key:"xhrRequest",value:function(e,t,n,i,o,r,s,a){var u=this;e.open(t,n,!0),e.timeout=r,e.setRequestHeader("Content-Type",i),e.onerror=function(){a&&a(null)},e.onreadystatechange=function(){if(e.readyState===u.states.complete&&a){var t=u.parseJSON(e.responseText);a(t)}},s&&(e.ontimeout=s),e.send(o)}},{key:"parseJSON",value:function(e){if(!e||""===e)return null;try{return JSON.parse(e)}catch(t){return console&&console.log("failed to parse JSON response",e),null}}},{key:"serialize",value:function(e,t){var n=[];for(var o in e)if(e.hasOwnProperty(o)){var r=t?"".concat(t,"[").concat(o,"]"):o,s=e[o];"object"===i(s)?n.push(this.serialize(s,r)):n.push(encodeURIComponent(r)+"="+encodeURIComponent(s))}return n.join("&")}},{key:"appendParams",value:function(e,t){if(0===Object.keys(t).length)return e;var n=e.match(/\?/)?"&":"?";return"".concat(e).concat(n).concat(this.serialize(t))}}]),e}();C.states={complete:4};var x=function(){function e(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,e);var r=i.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=t,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(r.state,function(t){var i=n.caller,o=i.onJoin,r=i.onLeave,s=i.onSync;n.joinRef=n.channel.joinRef(),n.state=e.syncState(n.state,t,o,r),n.pendingDiffs.forEach(function(t){n.state=e.syncDiff(n.state,t,o,r)}),n.pendingDiffs=[],s()}),this.channel.on(r.diff,function(t){var i=n.caller,o=i.onJoin,r=i.onLeave,s=i.onSync;n.inPendingSyncState()?n.pendingDiffs.push(t):(n.state=e.syncDiff(n.state,t,o,r),s())})}return s(e,[{key:"onJoin",value:function(e){this.caller.onJoin=e}},{key:"onLeave",value:function(e){this.caller.onLeave=e}},{key:"onSync",value:function(e){this.caller.onSync=e}},{key:"list",value:function(t){return e.list(this.state,t)}},{key:"inPendingSyncState",value:function(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}}],[{key:"syncState",value:function(e,t,n,i){var o=this,r=this.clone(e),s={},a={};return this.map(r,function(e,n){t[e]||(a[e]=n)}),this.map(t,function(e,t){var n=r[e];if(n){var i=t.metas.map(function(e){return e.phx_ref}),u=n.metas.map(function(e){return e.phx_ref}),c=t.metas.filter(function(e){return u.indexOf(e.phx_ref)<0}),l=n.metas.filter(function(e){return i.indexOf(e.phx_ref)<0});c.length>0&&(s[e]=t,s[e].metas=c),l.length>0&&(a[e]=o.clone(n),a[e].metas=l)}else s[e]=t}),this.syncDiff(r,{joins:s,leaves:a},n,i)}},{key:"syncDiff",value:function(e,t,n,i){var o=t.joins,r=t.leaves,s=this.clone(e);return n||(n=function(){}),i||(i=function(){}),this.map(o,function(e,t){var i=s[e];if(s[e]=t,i){var o,r=s[e].metas.map(function(e){return e.phx_ref}),a=i.metas.filter(function(e){return r.indexOf(e.phx_ref)<0});(o=s[e].metas).unshift.apply(o,function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(a))}n(e,i,t)}),this.map(r,function(e,t){var n=s[e];if(n){var o=t.metas.map(function(e){return e.phx_ref});n.metas=n.metas.filter(function(e){return o.indexOf(e.phx_ref)<0}),i(e,n,t),0===n.metas.length&&delete s[e]}}),s}},{key:"list",value:function(e,t){return t||(t=function(e,t){return t}),this.map(e,function(e,n){return t(e,n)})}},{key:"map",value:function(e,t){return Object.getOwnPropertyNames(e).map(function(n){return t(n,e[n])})}},{key:"clone",value:function(e){return JSON.parse(JSON.stringify(e))}}]),e}(),E=function(){function e(t,n){o(this,e),this.callback=t,this.timerCalc=n,this.timer=null,this.tries=0}return s(e,[{key:"reset",value:function(){this.tries=0,clearTimeout(this.timer)}},{key:"scheduleTimeout",value:function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout(function(){e.tries=e.tries+1,e.callback()},this.timerCalc(this.tries+1))}}]),e}()}])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n(1),a=n(0),u=(i=a)&&i.__esModule?i:{default:i};function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l="data-phx-view",h="["+l+"]",f=["text","textarea","password"],d=100,v="phx-",p=function(e){return"object"===(void 0===e?"undefined":r(e))&&!(e instanceof Array)},y={mergeDiff:function(e,t){return this.isNewFingerprint(t)?t:(function e(t,n){for(var i in n){var o=n[i];p(o)&&t[i]?e(t[i],o):t[i]=o}}(e,t),e)},isNewFingerprint:function(e){return e.static},toString:function(e){var t={buffer:""};return this.toOutputBuffer(e,t),t.buffer},toOutputBuffer:function(e,t){if(e.dynamics)return this.comprehensionToBuffer(e,t);var n=e.static;t.buffer+=n[0];for(var i=1;i<n.length;i++)this.dynamicToBuffer(e[i-1],t),t.buffer+=n[i]},comprehensionToBuffer:function(e,t){for(var n=e.dynamics,i=e.static,o=0;o<n.length;o++){var r=n[o];t.buffer+=i[0];for(var s=1;s<i.length;s++)this.dynamicToBuffer(r[s-1],t),t.buffer+=i[s]}},dynamicToBuffer:function(e,t){p(e)?this.toOutputBuffer(e,t):t.buffer+=e}},m=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(this,e);var i=t;"string"==typeof t&&(i=new s.Socket(t,n)),this.socket=i,this.bindingPrefix=n.bindingPrefix||v,this.opts=n,this.views={},this.activeElement=null,this.prevActive=null}return o(e,[{key:"connect",value:function(){var e=this;return["complete","loaded","interactive"].indexOf(document.readyState)>=0?this.joinRootView():document.addEventListener("DOMContentLoaded",function(){e.joinRootView()}),this.socket.connect()}},{key:"disconnect",value:function(){return this.socket.disconnect()}},{key:"channel",value:function(e,t){return this.socket.channel(e,t||{})}},{key:"joinRootView",value:function(){var e=document.querySelector(h);e&&this.joinView(e)}},{key:"joinView",value:function(e,t){var n=new k(e,this,t);this.views[n.id]=n,n.join()}},{key:"getViewById",value:function(e){return this.views[e]}},{key:"onViewError",value:function(e){this.dropActiveElement(e)}},{key:"destroyViewById",value:function(e){var t=this.views[e];t&&(delete this.views[t.id],t.destroy())}},{key:"getBindingPrefix",value:function(){return this.bindingPrefix}},{key:"setActiveElement",value:function(e){var t=this;if(this.activeElement!==e){this.activeElement=e;var n=function(){e===t.activeElement&&(t.activeElement=null)};e.addEventListener("mouseup",n),e.addEventListener("touchend",n)}}},{key:"getActiveElement",value:function(){return document.activeElement===document.body&&this.activeElement||document.activeElement}},{key:"dropActiveElement",value:function(e){this.prevActive&&e.ownsElement(this.prevActive)&&(this.prevActive=null)}},{key:"restorePreviouslyActiveFocus",value:function(){this.prevActive&&this.prevActive!==document.body&&this.prevActive.focus()}},{key:"blurActiveElement",value:function(){this.prevActive=this.getActiveElement(),this.prevActive!==document.body&&this.prevActive.blur()}}]),e}();t.default=m;var g={setCookie:function(e,t){document.cookie=e+"="+t},getCookie:function(e){return document.cookie.replace(new RegExp("(?:(?:^|.*;s*)"+e+"s*=s*([^;]*).*$)|^.*$"),"$1")},redirect:function(e,t){t&&g.setCookie("__phoenix_flash__",t+"; max-age=60000; path=/"),window.location=e}},b={discardError:function(e){var t=e.getAttribute&&e.getAttribute("data-phx-error-for");if(t){var n=document.getElementById(t);!t||n.getAttribute("data-phx-has-focused")||n.form.getAttribute("data-phx-has-submitted")||(e.style.display="none")}},isPhxChild:function(e){return e.getAttribute&&e.getAttribute("data-phx-parent-id")},patch:function(e,t,n,i){var o=e.liveSocket.getActiveElement();e.liveSocket.restorePreviouslyActiveFocus();var r=null,s=null;b.isTextualInput(o)&&(r=o.selectionStart,s=o.selectionEnd),(0,u.default)(t,"<div>"+i+"</div>",{childrenOnly:!0,onBeforeNodeAdded:function(e){return b.discardError(e),e},onNodeAdded:function(t){if(b.isPhxChild(t)&&e.ownsElement(t))return e.onNewChildAdded(t),!0;e.maybeBindAddedNode(t)},onBeforeNodeDiscarded:function(t){if(b.isPhxChild(t))return e.liveSocket.destroyViewById(t.id),!0},onBeforeElUpdated:function(e,t){return b.isPhxChild(t)?(b.mergeAttrs(e,t),!1):(e.getAttribute&&e.getAttribute("data-phx-has-submitted")&&t.setAttribute("data-phx-has-submitted",!0),e.getAttribute&&e.getAttribute("data-phx-has-focused")&&t.setAttribute("data-phx-has-focused",!0),b.discardError(t),!b.isTextualInput(e)||e!==o||(b.mergeInputs(e,t),!1))}}),b.restoreFocus(o,r,s),document.dispatchEvent(new Event("phx:update"))},mergeAttrs:function(e,t){t.getAttributeNames().forEach(function(n){var i=t.getAttribute(n);e.setAttribute(n,i)})},mergeInputs:function(e,t){b.mergeAttrs(e,t),e.readOnly=t.readOnly},restoreFocus:function(e,t,n){b.isTextualInput(e)&&((""===e.value||e.readOnly)&&e.blur(),e.focus(),(e.setSelectionRange&&"text"===e.type||"textarea"===e.type)&&e.setSelectionRange(t,n))},isTextualInput:function(e){return f.indexOf(e.type)>=0}},k=function(){function e(t,n,i){var o=this;c(this,e),this.liveSocket=n,this.parent=i,this.newChildrenAdded=!1,this.gracefullyClosed=!1,this.el=t,this.prevKey=null,this.bindingPrefix=n.getBindingPrefix(),this.loader=this.el.nextElementSibling,this.id=this.el.id,this.view=this.el.getAttribute(l),this.hasBoundUI=!1,this.channel=this.liveSocket.channel("lv:"+this.id,function(){return{session:o.getSession()}}),this.loaderTimer=setTimeout(function(){return o.showLoader()},d),this.bindChannel()}return o(e,[{key:"getSession",value:function(){return this.el.getAttribute("data-phx-session")||this.parent.getSession()}},{key:"destroy",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};this.hasGracefullyClosed()?e():this.channel.leave().receive("ok",e).receive("error",e).receive("timeout",e)}},{key:"hideLoader",value:function(){clearTimeout(this.loaderTimer),this.loader.style.display="none"}},{key:"showLoader",value:function(){clearTimeout(this.loaderTimer),this.el.classList="phx-disconnected",this.loader.style.display="block";var e=Math.floor(this.el.clientHeight/2);this.loader.style.top="-"+e+"px"}},{key:"onJoin",value:function(e){var t=e.rendered;console.log("join",JSON.stringify(t)),this.rendered=t,this.hideLoader(),this.el.classList="phx-connected",b.patch(this,this.el,this.id,y.toString(this.rendered)),this.hasBoundUI||this.bindUI(),this.hasBoundUI=!0,this.joinNewChildren()}},{key:"joinNewChildren",value:function(){var e=this,t=h+'[data-phx-parent-id="'+this.id+'"]';document.querySelectorAll(t).forEach(function(t){e.liveSocket.getViewById(t.id)||e.liveSocket.joinView(t,e)})}},{key:"update",value:function(e){if(t=e,0!==Object.keys(t).length){var t;console.log("update",JSON.stringify(e)),this.rendered=y.mergeDiff(this.rendered,e);var n=y.toString(this.rendered);this.newChildrenAdded=!1,b.patch(this,this.el,this.id,n),this.newChildrenAdded&&this.joinNewChildren()}}},{key:"onNewChildAdded",value:function(e){this.newChildrenAdded=!0}},{key:"bindChannel",value:function(){var e=this;this.channel.on("render",function(t){return e.update(t)}),this.channel.on("redirect",function(e){var t=e.to,n=e.flash;return g.redirect(t,n)}),this.channel.on("session",function(t){var n=t.token;return e.el.setAttribute("data-phx-session",n)}),this.channel.onError(function(){return e.onError()}),this.channel.onClose(function(){return e.onGracefulClose()})}},{key:"onGracefulClose",value:function(){this.gracefullyClosed=!0,this.liveSocket.destroyViewById(this.id)}},{key:"hasGracefullyClosed",value:function(){return this.gracefullyClosed}},{key:"join",value:function(){var e=this;this.channel.join().receive("ok",function(t){return e.onJoin(t)}).receive("error",function(t){return e.onJoinError(t)})}},{key:"onJoinError",value:function(e){this.displayError(),console.log("Unable to join",e)}},{key:"onError",value:function(){this.liveSocket.onViewError(this),document.activeElement.blur(),this.displayError()}},{key:"displayError",value:function(){this.showLoader(),this.el.classList="phx-disconnected phx-error"}},{key:"pushWithReply",value:function(e,t){var n=this;this.channel.push(e,t,2e4).receive("ok",function(e){return n.update(e)})}},{key:"pushClick",value:function(e,t,n){t.preventDefault();var i=e.getAttribute(this.binding("value"))||e.value||"";this.pushWithReply("event",{type:"click",event:n,id:e.id,value:i})}},{key:"pushKey",value:function(e,t,n,i){this.prevKey!==n.key&&(this.prevKey=n.key,this.pushWithReply("event",{type:"key"+t,event:i,id:n.target.id,value:e.value||n.key}))}},{key:"pushInput",value:function(e,t,n){this.pushWithReply("event",{type:"form",event:n,id:t.target.id,value:this.serializeForm(e.form)})}},{key:"pushFormSubmit",value:function(e,t,n){t&&(t.target.disabled=!0),this.pushWithReply("event",{type:"form",event:n,id:t&&t.target.id||null,value:this.serializeForm(e)})}},{key:"eachChild",value:function(e,t){var n=this;return this.el.querySelectorAll(e).forEach(function(e){n.ownsElement(e)&&t(e)})}},{key:"ownsElement",value:function(e){return e.getAttribute("data-phx-parent-id")===this.id||((t=e.closest(h))?t["id"]:null)===this.id;var t}},{key:"bindUI",value:function(){var e=this;this.bindForms(),this.eachChild("["+this.binding("click")+"]",function(t){return e.bindClick(t)}),this.eachChild("["+this.binding("keyup")+"]",function(t){return e.bindKey(t,"up")}),this.eachChild("["+this.binding("keydown")+"]",function(t){return e.bindKey(t,"down")}),this.eachChild("["+this.binding("keypress")+"]",function(t){return e.bindKey(t,"press")})}},{key:"bindClick",value:function(e){var t=this;this.bindOwnAddedNode(e,e,this.binding("click"),function(n){e.addEventListener("click",function(i){return t.pushClick(e,i,n)})})}},{key:"bindKey",value:function(e,t){var n=this,i="key"+t;this.bindOwnAddedNode(e,e,this.binding(i),function(o){n.target(e).addEventListener(i,function(i){n.pushKey(e,t,i,o)})})}},{key:"bindForms",value:function(){var e=this,t=this.binding("change");this.eachChild("form["+t+"] input",function(t){e.bindChange(t)}),this.eachChild("form["+t+"] textarea",function(t){e.bindChange(t)});var n=this.binding("submit");this.eachChild("form["+n+"]",function(t){e.bindSubmit(t)})}},{key:"bindChange",value:function(e){var t=this;this.onInput(e,function(n,i){b.isTextualInput(e)?e.setAttribute("data-phx-has-focused",!0):t.liveSocket.setActiveElement(i.target),t.pushInput(e,i,n)})}},{key:"bindSubmit",value:function(e){var t=this;this.bindOwnAddedNode(e,e,this.binding("submit"),function(n){e.addEventListener("submit",function(i){i.preventDefault(),t.submitForm(e,n,i)}),t.scheduleSubmit(e,n)})}},{key:"submitForm",value:function(e,t,n){e.setAttribute("data-phx-has-submitted","true"),e.querySelectorAll("input").forEach(function(e){return e.readOnly=!0}),this.liveSocket.blurActiveElement(),this.pushFormSubmit(e,n,t)}},{key:"scheduleSubmit",value:function(e,t){var n=this,i=parseInt(e.getAttribute(this.binding("submit-every")));i&&this.el.contains(e)&&setTimeout(function(){n.submitForm(e,t),n.scheduleSubmit(e,t)},i)}},{key:"maybeBindAddedNode",value:function(e){e.getAttribute&&this.ownsElement(e)&&(this.bindClick(e),this.bindSubmit(e),this.bindChange(e),this.bindKey(e,"up"),this.bindKey(e,"down"),this.bindKey(e,"press"))}},{key:"binding",value:function(e){return""+this.bindingPrefix+e}},{key:"serializeForm",value:function(e){return new URLSearchParams(new FormData(e)).toString()}},{key:"bindOwnAddedNode",value:function(e,t,n,i){if(!t||t.getAttribute){var o=t.getAttribute(n);o&&!e.getAttribute("data-phx-bound")&&this.ownsElement(e)&&(e.setAttribute("data-phx-bound",!0),i(o))}}},{key:"onInput",value:function(e,t){e.form&&this.bindOwnAddedNode(e,e.form,this.binding("change"),function(n){var i="radio"===e.type?"change":"input";e.addEventListener(i,function(e){return t(n,e)})})}},{key:"target",value:function(e){var t=e.getAttribute(this.binding("target"));return"window"===t?window:"document"===t?document:t?document.getElementById(t):e}}]),e}()},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(t){t.Phoenix||(t.Phoenix={}),e.exports=t.Phoenix.LiveView=n(2)}).call(this,n(3))}])});