/* Copyright 2008-9 Google Inc. All Rights Reserved. */ (function(){var h,m=this,n=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},q=function(a){return"string"==typeof a},r=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},aa=Date.now||function(){return+new Date},t=function(a,b){var c=a.split("."),d=m;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b},u=function(a,b){function c(){}
c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c};var v=function(a){Error.captureStackTrace?Error.captureStackTrace(this,v):this.stack=Error().stack||"";a&&(this.message=String(a))};u(v,Error);var ba=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},x=function(a){a=String(a);var b=a.indexOf(".");-1==b&&(b=a.length);b=Math.max(0,2-b);return Array(b+1).join("0")+a};var y=function(a,b){b.unshift(a);v.call(this,ba.apply(null,b));b.shift()};u(y,v);var z=function(a,b,c){if(!a){var d=Array.prototype.slice.call(arguments,2),e="Assertion failed";if(b)var e=e+(": "+b),f=d;throw new y(""+e,f||[]);}};var A=Array.prototype,B=A.indexOf?function(a,b,c){z(null!=a.length);return A.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ca=A.forEach?function(a,b,c){z(null!=a.length);A.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},da=A.filter?function(a,b,c){z(null!=a.length);return A.filter.call(a,b,
c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var w=g[k];b.call(c,w,k,a)&&(e[f++]=w)}return e},C=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]},ea=function(a,b,c){z(null!=a.length);return 2>=arguments.length?A.slice.call(a,b):A.slice.call(a,b,c)};var D,E,F,G,fa=function(){return m.navigator?m.navigator.userAgent:null};G=F=E=D=!1;var H;if(H=fa()){var ga=m.navigator;D=0==H.lastIndexOf("Opera",0);E=!D&&(-1!=H.indexOf("MSIE")||-1!=H.indexOf("Trident"));F=!D&&-1!=H.indexOf("WebKit");G=!D&&!F&&!E&&"Gecko"==ga.product}var ha=D,I=E,J=G,K=F,ia=function(){var a=m.document;return a?a.documentMode:void 0},L;
n:{var M="",N;if(ha&&m.opera)var O=m.opera.version,M="function"==typeof O?O():O;else if(J?N=/rv\:([^\);]+)(\)|;)/:I?N=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:K&&(N=/WebKit\/(\S+)/),N)var ja=N.exec(fa()),M=ja?ja[1]:"";if(I){var ka=ia();if(ka>parseFloat(M)){L=String(ka);break n}}L=M}
var la=L,ma={},P=function(a){var b;if(!(b=ma[a])){b=0;for(var c=String(la).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"",w=RegExp("(\\d*)(\\D*)","g"),p=RegExp("(\\d*)(\\D*)","g");do{var l=w.exec(g)||["","",""],s=p.exec(k)||["","",""];if(0==l[0].length&&0==s[0].length)break;b=((0==l[1].length?0:parseInt(l[1],10))<(0==s[1].length?0:parseInt(s[1],10))?-1:(0==l[1].length?
0:parseInt(l[1],10))>(0==s[1].length?0:parseInt(s[1],10))?1:0)||((0==l[2].length)<(0==s[2].length)?-1:(0==l[2].length)>(0==s[2].length)?1:0)||(l[2]<s[2]?-1:l[2]>s[2]?1:0)}while(0==b)}b=ma[a]=0<=b}return b},na=m.document,oa=na&&I?ia()||("CSS1Compat"==na.compatMode?parseInt(la,10):5):void 0;!J&&!I||I&&I&&9<=oa||J&&P("1.9.1");I&&P("9");var pa=function(a){a=a.className;return q(a)&&a.match(/\S+/g)||[]},qa=function(a,b){for(var c=pa(a),d=ea(arguments,1),e=c,f=0;f<d.length;f++)0<=B(e,d[f])||e.push(d[f]);c=c.join(" ");a.className=c},sa=function(a,b){var c=pa(a),d=ea(arguments,1),c=ra(c,d).join(" ");a.className=c},ra=function(a,b){return da(a,function(a){return!(0<=B(b,a))})};var Q=function(a,b,c){var d=document;c=c||d;a=a&&"*"!=a?a.toUpperCase():"";if(c.querySelectorAll&&c.querySelector&&(a||b))return c.querySelectorAll(a+(b?"."+b:""));if(b&&c.getElementsByClassName){c=c.getElementsByClassName(b);if(a){for(var d={},e=0,f=0,g;g=c[f];f++)a==g.nodeName&&(d[e++]=g);d.length=e;return d}return c}c=c.getElementsByTagName(a||"*");if(b){d={};for(f=e=0;g=c[f];f++)a=g.className,"function"==typeof a.split&&0<=B(a.split(/\s+/),b)&&(d[e++]=g);d.length=e;return d}return c};var R=function(a){R[" "](a);return a};R[" "]=function(){};var ta=!I||I&&9<=oa,ua=I&&!P("9");!K||P("528");J&&P("1.9b")||I&&P("8")||ha&&P("9.5")||K&&P("528");J&&!P("8")||I&&P("9");var S=function(a,b){this.type=a;this.currentTarget=this.target=b};S.prototype.i=!1;S.prototype.defaultPrevented=!1;S.prototype.preventDefault=function(){this.defaultPrevented=!0};var T=function(a,b){if(a){var c=this.type=a.type;S.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(J){var e;n:{try{R(d.nodeName);e=!0;break n}catch(f){}e=!1}e||(d=null)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=K||void 0!==a.offsetX?a.offsetX:a.layerX;this.offsetY=K||void 0!==a.offsetY?a.offsetY:a.layerY;this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:
a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.j=a;a.defaultPrevented&&this.preventDefault();delete this.i}};u(T,S);h=T.prototype;h.target=null;h.relatedTarget=null;h.offsetX=0;h.offsetY=0;h.clientX=0;h.clientY=0;h.screenX=0;h.screenY=0;h.button=0;h.keyCode=0;
h.charCode=0;h.ctrlKey=!1;h.altKey=!1;h.shiftKey=!1;h.metaKey=!1;h.j=null;h.preventDefault=function(){T.o.preventDefault.call(this);var a=this.j;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ua)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var va="closure_listenable_"+(1E6*Math.random()|0),wa=function(a){try{return!(!a||!a[va])}catch(b){return!1}},xa=0;var ya=function(a,b,c,d,e){this.c=a;this.e=null;this.src=b;this.type=c;this.capture=!!d;this.f=e;this.key=++xa;this.d=this.g=!1},za=function(a){a.d=!0;a.c=null;a.e=null;a.src=null;a.f=null};var U=function(a){this.src=a;this.b={};this.h=0};U.prototype.add=function(a,b,c,d,e){var f=this.b[a];f||(f=this.b[a]=[],this.h++);var g;n:{for(g=0;g<f.length;++g){var k=f[g];if(!k.d&&k.c==b&&k.capture==!!d&&k.f==e)break n}g=-1}-1<g?(a=f[g],c||(a.g=!1)):(a=new ya(b,this.src,a,!!d,e),a.g=c,f.push(a));return a};var Aa=function(a,b){var c=b.type;if(c in a.b){var d=a.b[c],e=B(d,b),f;if(f=0<=e)z(null!=d.length),A.splice.call(d,e,1);f&&(za(b),0==a.b[c].length&&(delete a.b[c],a.h--))}};var V="closure_lm_"+(1E6*Math.random()|0),W={},Ba=0,Da=function(){var a=Ca,b=ta?function(c){return a.call(b.src,b.c,c)}:function(c){c=a.call(b.src,b.c,c);if(!c)return c};return b},Ea=function(a,b,c,d,e){if("array"==n(b))for(var f=0;f<b.length;f++)Ea(a,b[f],c,d,e);else if(c=Fa(c),wa(a))a.k.add(String(b),c,!0,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=X(a);g||(a[V]=g=new U(a));c=g.add(b,c,!0,d,e);c.e||(d=Da(),c.e=d,d.src=a,d.c=c,a.addEventListener?a.addEventListener(b,d,f):a.attachEvent(b in
W?W[b]:W[b]="on"+b,d),Ba++)}},Ha=function(a,b,c,d){var e=1;if(a=X(a))if(b=a.b[b])for(b=C(b),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.d&&(e&=!1!==Ga(f,d))}return Boolean(e)},Ga=function(a,b){var c=a.c,d=a.f||a.src;if(a.g&&"number"!=typeof a&&a&&!a.d){var e=a.src;if(wa(e))Aa(e.k,a);else{var f=a.type,g=a.e;e.removeEventListener?e.removeEventListener(f,g,a.capture):e.detachEvent&&e.detachEvent(f in W?W[f]:W[f]="on"+f,g);Ba--;(f=X(e))?(Aa(f,a),0==f.h&&(f.src=null,e[V]=null)):za(a)}}return c.call(d,
b)},Ca=function(a,b){if(a.d)return!0;if(!ta){var c;if(!(c=b))n:{c=["window","event"];for(var d=m,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break n}c=d}e=c;c=new T(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){n:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break n}catch(g){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,k=e.length-1;!c.i&&0<=k;k--)c.currentTarget=e[k],d&=Ha(e[k],f,!0,c);for(k=0;!c.i&&k<e.length;k++)c.currentTarget=
e[k],d&=Ha(e[k],f,!1,c)}return d}return Ga(a,new T(b,this))},X=function(a){a=a[V];return a instanceof U?a:null},Ia="__closure_events_fn_"+(1E9*Math.random()>>>0),Fa=function(a){z(a,"Listener can not be null.");if("function"==n(a))return a;z(a.handleEvent,"An object listener must have handleEvent method.");return a[Ia]||(a[Ia]=function(b){return a.handleEvent(b)})};var Z=function(a,b,c){"number"==typeof a?(this.a=new Date(a,b||0,c||1),Y(this,c||1)):(b=typeof a,"object"==b&&null!=a||"function"==b?(this.a=new Date(a.getFullYear(),a.getMonth(),a.getDate()),Y(this,a.getDate())):(this.a=new Date(aa()),this.a.setHours(0),this.a.setMinutes(0),this.a.setSeconds(0),this.a.setMilliseconds(0)))};h=Z.prototype;h.getFullYear=function(){return this.a.getFullYear()};h.getYear=function(){return this.getFullYear()};h.getMonth=function(){return this.a.getMonth()};h.getDate=function(){return this.a.getDate()};
h.getTime=function(){return this.a.getTime()};h.getUTCHours=function(){return this.a.getUTCHours()};h.setFullYear=function(a){this.a.setFullYear(a)};h.setMonth=function(a){this.a.setMonth(a)};h.setDate=function(a){this.a.setDate(a)};
h.add=function(a){if(a.n||a.m){var b=this.getMonth()+a.m+12*a.n,c=this.getYear()+Math.floor(b/12),b=b%12;0>b&&(b+=12);var d;n:{switch(b){case 1:d=0!=c%4||0==c%100&&0!=c%400?28:29;break n;case 5:case 8:case 10:case 3:d=30;break n}d=31}d=Math.min(d,this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.l&&(b=new Date(this.getYear(),this.getMonth(),this.getDate(),12),a=new Date(b.getTime()+864E5*a.l),this.setDate(1),this.setFullYear(a.getFullYear()),this.setMonth(a.getMonth()),
this.setDate(a.getDate()),Y(this,a.getDate()))};h.r=function(){return[this.getFullYear(),x(this.getMonth()+1),x(this.getDate())].join("")+""};h.toString=function(){return this.r()};var Y=function(a,b){if(a.getDate()!=b){var c=a.getDate()<b?1:-1;a.a.setUTCHours(a.a.getUTCHours()+c)}};Z.prototype.valueOf=function(){return this.a.valueOf()};var $=function(){};$.p=function(){$.q||($.q=new $)};$.p();new Z(0,0,1);new Z(9999,11,31);I||K&&P("525");t("ae.init",function(){Ja();Ka();Ea(window,"load",function(){});La()});
var Ja=function(){var a;a=document;if(a=q("ae-content")?a.getElementById("ae-content"):"ae-content"){a=Q("table","ae-table-striped",a);for(var b=0,c;c=a[b];b++){c=Q("tbody",null,c);for(var d=0,e;e=c[d];d++){e=Q("tr",null,e);for(var f=0,g;g=e[f];f++)f%2&&qa(g,"ae-even")}}}},Ka=function(){var a=Q(null,"ae-noscript",void 0);ca(C(a),function(a){sa(a,"ae-noscript")})},La=function(){m._gaq=m._gaq||[];m._gaq.push(function(){m._gaq._createAsyncTracker("UA-3739047-3","ae")._trackPageview()});(function(){var a=
document.createElement("script");a.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";a.setAttribute("async","true");document.documentElement.firstChild.appendChild(a)})()};t("ae.trackPageView",function(){m._gaq&&m._gaq._getAsyncTracker("ae")._trackPageview()});var Na=function(a){if(void 0==a||null==a||0==a.length)return 0;a=Math.max.apply(Math,a);return Ma(a)},Ma=function(a){var b=5;2>b&&(b=2);b-=1;return Math.ceil(a/b)*b},Oa=function(a,b,c){a=a.getSelection();1==a.length&&(a=a[0],null!=a.row&&(null!=b.starttime&&(c+="&starttime="+b.starttime),null!=b.endtime&&(c+="&endtime="+b.endtime),null!=b.latency_lower&&(c+="&latency_lower="+b.latency_lower),null!=b.latency_upper&&(c+="&latency_upper="+b.latency_upper),b=c+"&detail="+a.row,window.location.href=b))},
Pa=function(a,b,c,d,e){var f=new google.visualization.DataTable;f.addColumn("string","");f.addColumn("number","");f.addColumn({type:"string",role:"tooltip"});for(var g=0;g<b.length;g++)f.addRow(["",b[g],c[g]]);c=Math.max(10*b.length,200);b=Na(b);a=new google.visualization.ColumnChart(document.getElementById("rpctime-"+a));a.draw(f,{height:100,width:c,legend:"none",chartArea:{left:40},fontSize:11,vAxis:{minValue:0,maxValue:b,gridlines:{count:5}}});google.visualization.events.addListener(a,"select",
r(Oa,a,d,e))};t("ae.Charts.latencyHistogram",function(a,b,c){var d=new google.visualization.DataTable;d.addColumn("string","");d.addColumn("number","");for(var e=0;e<b.length;e++)d.addRow([""+a[e],b[e]]);for(e=b.length;e<a.length;e++)d.addRow([""+a[e],0]);b=Na(b);(new google.visualization.ColumnChart(document.getElementById("latency-"+c))).draw(d,{legend:"none",width:20*a.length,height:200,vAxis:{maxValue:b,gridlines:{count:5}}})});
t("ae.Charts.latencyTimestampScatter",function(a,b,c,d,e){var f=new google.visualization.DataTable;f.addColumn("number","Time (seconds from start)");f.addColumn("number","Latency");for(var g=0;g<a.length;g++){var k=Math.round(a[g]-c);f.addRow([k,b[g]])}a=d.starttime?d.starttime:0;b=new google.visualization.ScatterChart(document.getElementById("LatencyVsTimestamp"));b.draw(f,{hAxis:{title:"Time (seconds from start of recording)",minValue:a},vAxis:{title:"Request Latency (milliseconds)",minValue:0},
tooltip:{trigger:"none"},legend:"none"});google.visualization.events.addListener(b,"select",r(Oa,b,d,e))});
t("ae.Charts.entityCountBarChart",function(a,b,c,d){var e=new google.visualization.DataTable;e.addColumn("string","");e.addColumn("number","Reads");e.addColumn({type:"string",role:"tooltip"});e.addColumn("number","Misses");e.addColumn({type:"string",role:"tooltip"});e.addColumn("number","Writes");e.addColumn({type:"string",role:"tooltip"});var f=50;f>b.length&&(f=b.length);for(var g=0;g<f;g++)e.addRow(["",b[g][1]-b[g][3],b[g][0],b[g][3],b[g][0],b[g][2],b[g][0]]);b=20*f;f=b+130;a=new google.visualization.ColumnChart(document.getElementById(d+
"-"+a));c=Ma(c);a.draw(e,{height:100,width:f,chartArea:{width:b},fontSize:10,isStacked:!0,vAxis:{minValue:0,maxValue:c,gridlines:{count:5}}})});
t("ae.Charts.rpcVariationCandlestick",function(a){var b=new google.visualization.DataTable;b.addColumn("string","");b.addColumn("number","");b.addColumn("number","");b.addColumn("number","");b.addColumn("number","");b.addRows(a);(new google.visualization.CandlestickChart(document.getElementById("rpcvariation"))).draw(b,{vAxis:{title:"RPC Latency variation (milliseconds)"},hAxis:{textPosition:"out",slantedText:!0,slantedTextAngle:45,textStyle:{fontSize:13}},height:250,chartArea:{top:10,height:100},
legend:"none",tooltip:{trigger:"none"}})});t("ae.Charts.totalTimeBarChart",function(a,b,c,d){for(var e=[],f=0;f<b.length;f++)e[f]=b[f]+" milliseconds";Pa(a,b,e,c,d)});t("ae.Charts.rpcTimeBarChart",function(a,b,c,d,e){var f=[],g=[],k=c.indices,w=c.times;c=c.stats;for(var p=0;p<b;p++)f[p]=0,g[p]=null;for(p=0;p<k.length;p++){f[k[p]]=w[p];b=c[p];var l="Calls: "+b[0];if(0<b[1]||0<b[2]||0<b[3])l+=" Entities";0<b[1]&&(l+=" R:"+b[1]);0<b[2]&&(l+=" W:"+b[2]);0<b[3]&&(l+=" M:"+b[3]);g[k[p]]=l}Pa(a,f,g,d,e)});})();