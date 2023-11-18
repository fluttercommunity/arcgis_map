"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[2084,7710],{57989:(e,t,a)=>{function s(e){return e=e||globalThis.location.hostname,c.some((t=>null!=e?.match(t)))}function n(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(l)||null!=t.match(o)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(r)||null!=t.match(i)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}a.d(t,{XO:()=>s,pJ:()=>n});const l=/^devext.arcgis.com$/,r=/^qaext.arcgis.com$/,o=/^[\w-]*\.mapsdevext.arcgis.com$/,i=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,l,r,/^jsapps.esri.com$/,o,i]},52084:(e,t,a)=>{a.r(t),a.d(t,{getPatternDescriptor:()=>C,getSizeFromOptions:()=>D,getSymbolLayerFill:()=>z,previewSymbol3D:()=>F});var s=a(36567),n=a(39043),l=(a(39994),a(70375)),r=a(13802),o=a(61681),i=a(78668),c=a(95550),p=a(89298),u=a(52285),h=a(4125),m=a(83773),y=a(64194),f=a(59672),b=a(77710);const d=m.b_.size,g=m.b_.maxSize,w=m.b_.maxOutlineSize,v=m.b_.lineWidth,k=m.b_.tallSymbolWidth,x=r.Z.getLogger("esri.symbols.support.previewSymbol3D");function M(e){const t=e.outline,a=(0,o.pC)(e.material)?e.material.color:null,s=(0,o.pC)(a)?a.toHex():null;if((0,o.Wi)(t)||"pattern"in t&&(0,o.pC)(t.pattern)&&"style"===t.pattern.type&&"none"===t.pattern.style)return"fill"===e.type&&"#ffffff"===s?{color:"#bdc3c7",width:.75}:null;const n=(0,c.F2)(t.size)||0;return{color:"rgba("+((0,o.pC)(t.color)?t.color.toRgba():"255,255,255,1")+")",width:Math.min(n,w),style:"pattern"in t&&(0,o.pC)(t.pattern)&&"style"===t.pattern.type?(0,p.Sp)(t.pattern.style):null,join:"butt",cap:"patternCap"in t?t.patternCap:"butt"}}function S(e,t=1){const a=e.a,s=(0,n._Y)(e),l=s.h,r=s.s/t,o=100-(100-s.v)/t,{r:i,g:c,b:p}=(0,n.xr)({h:l,s:r,v:o});return[i,c,p,a]}function L(e){return"water"===e.type?(0,o.Wi)(e.color)?null:e.color:(0,o.Wi)(e.material)||(0,o.Wi)(e.material.color)?null:e.material.color}function z(e,t=0){const a=L(e);if(!a){if("fill"===e.type)return null;const a=p.Ne.r,s=(0,m.uH)(a,t);return[s,s,s,100]}const s=a.toRgba();for(let e=0;e<3;e++)s[e]=(0,m.uH)(s[e],t);return s}async function C(e,t){const a=e.style;return"none"===a?null:{type:"pattern",x:0,y:0,src:await(0,p.Od)((0,s.V)(`esri/symbols/patterns/${a}.png`),t.toCss(!0)),width:5,height:5}}function j(e){return e.outline?M(e):{color:"rgba(0, 0, 0, 1)",width:1.5}}function P(e,t){const a=L(e);if(!a)return null;let s="rgba(";return s+=(0,m.uH)(a.r,t)+",",s+=(0,m.uH)(a.g,t)+",",s+=(0,m.uH)(a.b,t)+",",s+a.a+");"}function Z(e,t){const a=P(e,t);return a?"pattern"in e&&(0,o.pC)(e.pattern)&&"style"===e.pattern.type&&"none"===e.pattern.style?null:{color:a,width:Math.min(e.size?(0,c.F2)(e.size):.75,w),style:"pattern"in e&&(0,o.pC)(e.pattern)&&"style"===e.pattern.type?(0,p.Sp)(e.pattern.style):null,cap:"cap"in e?e.cap:null,join:"join"in e?"miter"===e.join?(0,c.F2)(2):e.join:null}:{}}function N(e,t,a){const s=.75*a;return{type:"linear",x1:s?.25*s:0,y1:s?.5*s:0,x2:s||4,y2:s?.5*s:4,colors:[{color:e,offset:0},{color:t,offset:1}]}}function D(e){const t="number"==typeof e?.size?e?.size:null;return t?(0,c.F2)(t):null}function F(e,t){if(0===e.symbolLayers.length)return Promise.reject(new l.Z("symbolPreview: renderPreviewHTML3D","No symbolLayers in the symbol."));switch(e.type){case"point-3d":return function(e,t){const a=D(t),n=t&&t.maxSize?(0,c.F2)(t.maxSize):null,l=t&&t.disableUpsampling,r=e.symbolLayers,o=[];let p=0,w=0;const v=r.getItemAt(r.length-1);let S;return v&&"icon"===v.type&&(S=v.size&&(0,c.F2)(v.size)),r.forEach((r=>{if("icon"!==r.type&&"object"!==r.type)return;const i="icon"===r.type?r.size&&(0,c.F2)(r.size):0,v=a||i?Math.ceil(Math.min(a||i,n||g)):d;if(r&&r.resource&&r.resource.href){const t=function(e,t){const a=t&&t.resource,n=a&&a.href;if(e.thumbnail&&e.thumbnail.url)return Promise.resolve(e.thumbnail.url);if(n&&"object"!==t.type)return Promise.resolve((0,f.nf)(e,t));const l=(0,s.V)("esri/images/Legend/legend3dsymboldefault.png");return e.styleOrigin&&(e.styleOrigin.styleName||e.styleOrigin.styleUrl)?(0,b.resolveWebStyleSymbol)(e.styleOrigin,{portal:e.styleOrigin.portal},"webRef").catch((e=>e)).then((e=>e?.thumbnail?.url||l)):Promise.resolve(l)}(e,r).then((e=>{const t=r.get("material.color"),a=function(e){return"icon"===e.type?"multiply":"tint"}(r);return(0,y.r)(e,v,t,a,l)})).then((e=>{const t=e.width,a=e.height;return p=Math.max(p,t),w=Math.max(w,a),[{shape:{type:"image",x:0,y:0,width:t,height:a,src:e.url},fill:null,stroke:null}]}));o.push(t)}else{let e=v;"icon"===r.type&&S&&a&&(e=v*(i/S));const s="tall"===t?.symbolConfig||t?.symbolConfig?.isTall||"object"===r.type&&function(e){const t=e.depth,a=e.height,s=e.width;return s&&t&&a&&s===t&&s<a}(r);p=Math.max(p,s?k:e),w=Math.max(w,e),o.push(Promise.resolve(function(e,t,a){const s=[];if(!e)return s;switch(e.type){case"icon":{const a=0,n=0,l=t,r=t;switch(e.resource&&e.resource.primitive||u.S){case"circle":s.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:z(e,0),stroke:M(e)});break;case"square":s.push({shape:{type:"path",path:[{command:"M",values:[a,r]},{command:"L",values:[a,n]},{command:"L",values:[l,n]},{command:"L",values:[l,r]},{command:"Z",values:[]}]},fill:z(e,0),stroke:M(e)});break;case"triangle":s.push({shape:{type:"path",path:[{command:"M",values:[a,r]},{command:"L",values:[.5*l,n]},{command:"L",values:[l,r]},{command:"Z",values:[]}]},fill:z(e,0),stroke:M(e)});break;case"cross":s.push({shape:{type:"path",path:[{command:"M",values:[.5*l,n]},{command:"L",values:[.5*l,r]},{command:"M",values:[a,.5*r]},{command:"L",values:[l,.5*r]}]},stroke:j(e)});break;case"x":s.push({shape:{type:"path",path:[{command:"M",values:[a,n]},{command:"L",values:[l,r]},{command:"M",values:[l,n]},{command:"L",values:[a,r]}]},stroke:j(e)});break;case"kite":s.push({shape:{type:"path",path:[{command:"M",values:[a,.5*r]},{command:"L",values:[.5*l,n]},{command:"L",values:[l,.5*r]},{command:"L",values:[.5*l,r]},{command:"Z",values:[]}]},fill:z(e,0),stroke:M(e)})}break}case"object":switch(e.resource&&e.resource.primitive||h.S){case"cone":{const n=N(z(e,0),z(e,-.6),a?k:t),l=(0,m.TE)(t,a);s.push({shape:l[0],fill:n}),s.push({shape:l[1],fill:n});break}case"inverted-cone":{const a=z(e,0),n=N(a,z(e,-.6),t),l=(0,m.DY)(t);s.push({shape:l[0],fill:n}),s.push({shape:l[1],fill:a});break}case"cube":{const n=(0,m.Pc)(t,a);s.push({shape:n[0],fill:z(e,0)}),s.push({shape:n[1],fill:z(e,-.3)}),s.push({shape:n[2],fill:z(e,-.5)});break}case"cylinder":{const n=N(z(e,0),z(e,-.6),a?k:t),l=(0,m.EB)(t,a);s.push({shape:l[0],fill:n}),s.push({shape:l[1],fill:n}),s.push({shape:l[2],fill:z(e,0)});break}case"diamond":{const a=(0,m.XX)(t);s.push({shape:a[0],fill:z(e,-.3)}),s.push({shape:a[1],fill:z(e,0)}),s.push({shape:a[2],fill:z(e,-.3)}),s.push({shape:a[3],fill:z(e,-.7)});break}case"sphere":{const a=N(z(e,0),z(e,-.6));a.x1=0,a.y1=0,a.x2=.25*t,a.y2=.25*t,s.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:a});break}case"tetrahedron":{const a=(0,m.tp)(t);s.push({shape:a[0],fill:z(e,-.3)}),s.push({shape:a[1],fill:z(e,0)}),s.push({shape:a[2],fill:z(e,-.6)});break}}}return s}(r,e,s)))}})),(0,i.as)(o).then((e=>{const a=[];return e.forEach((e=>{e.value?a.push(e.value):e.error&&x.warn("error while building swatchInfo!",e.error)})),(0,y.w)(a,[p,w],{node:t&&t.node,scale:!1,opacity:t&&t.opacity})}))}(e,t);case"line-3d":return function(e,t){const a=e.symbolLayers,s=[],n=(0,f.YW)(e),l=D(t),r=(t&&t.maxSize?(0,c.F2)(t.maxSize):null)||w;let i,p=0,u=0;return a.forEach(((e,t)=>{if(!e)return;if("line"!==e.type&&"path"!==e.type)return;const a=[];switch(e.type){case"line":{const s=Z(e,0);if((0,o.Wi)(s))break;const n=s&&s.width||0;0===t&&(i=n);const c=Math.min(l||n,r),h=0===t?c:l?c*(n/i):c,m=h>v/2?2*h:v;u=Math.max(u,h),p=Math.max(p,m),s.width=h,a.push({shape:{type:"path",path:[{command:"M",values:[0,.5*u]},{command:"L",values:[p,.5*u]}]},stroke:s});break}case"path":{const t=Math.min(l||d,r),s=z(e,0),n=z(e,-.2),o=P(e,-.4),i=o?{color:o,width:1}:{};if("quad"===e.profile){const t=e.width,l=e.height,r=(0,m.eb)(t&&l?t/l:1,0===l,0===t),o={...i,join:"bevel"};a.push({shape:r[0],fill:n,stroke:o}),a.push({shape:r[1],fill:n,stroke:o}),a.push({shape:r[2],fill:s,stroke:o})}else a.push({shape:m.JZ.pathSymbol3DLayer[0],fill:n,stroke:i}),a.push({shape:m.JZ.pathSymbol3DLayer[1],fill:s,stroke:i});u=Math.max(u,t),p=u}}s.push(a)})),Promise.resolve((0,y.w)(s,[p,u],{node:t&&t.node,scale:n,opacity:t&&t.opacity}))}(e,t);case"polygon-3d":case"mesh-3d":return async function(e,t){const a="mesh-3d"===e.type,s=e.symbolLayers,n=D(t),l=t&&t.maxSize?(0,c.F2)(t.maxSize):null,r=n||d,i=[];let p=0,u=0,h=!1;for(let e=0;e<s.length;e++){const t=s.getItemAt(e),n=[];if(a&&"fill"!==t.type)continue;const c=m.JZ.fill[0];switch(t.type){case"fill":{const e=M(t),s=Math.min(r,l||g);p=Math.max(p,s),u=Math.max(u,s),h=!0;let i=z(t,0);const m="pattern"in t&&t.pattern,y=L(t);!a&&(0,o.pC)(m)&&"style"===m.type&&"solid"!==m.style&&y&&(i=await C(m,y)),n.push({shape:c,fill:i,stroke:e});break}case"line":{const e=Z(t,0);if((0,o.Wi)(e))break;const a={stroke:e,shape:c};p=Math.max(p,d),u=Math.max(u,d),n.push(a);break}case"extrude":{const e={join:"round",width:1,...Z(t,-.4)},a=z(t,0),s=z(t,-.2),o=Math.min(r,l||g),i=(0,m.EV)(o);e.width=1,n.push({shape:i[0],fill:s,stroke:e}),n.push({shape:i[1],fill:s,stroke:e}),n.push({shape:i[2],fill:a,stroke:e});const c=d,h=.7*d+.5*o;p=Math.max(p,c),u=Math.max(u,h);break}case"water":{const e=L(t),a=S(e),s=S(e,2),o=S(e,3),i=(0,m.ht)();h=!0,n.push({shape:i[0],fill:a}),n.push({shape:i[1],fill:s}),n.push({shape:i[2],fill:o});const c=Math.min(r,l||g);p=Math.max(p,c),u=Math.max(u,c);break}}i.push(n)}return(0,y.w)(i,[p,u],{node:t&&t.node,scale:h,opacity:t&&t.opacity})}(e,t)}return Promise.reject(new l.Z("symbolPreview: swatchInfo3D","symbol not supported."))}},77710:(e,t,a)=>{a.r(t),a.d(t,{fetchSymbolFromStyle:()=>f,resolveWebStyleSymbol:()=>y});var s=a(95156),n=a(57989),l=a(70375),r=a(61681),o=a(3466),i=a(26869),c=a(16641),p=a(47308),u=a(85068),h=a(38453),m=a(3032);function y(e,t,a,s){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,a){const s=h.wm.replace(/\{SymbolName\}/gi,e.name),n=(0,r.pC)(t.portal)?t.portal:i.Z.getDefault();return(0,h.EJ)(s,a).then((e=>{const t=(0,h.KV)(e.data);return(0,p.im)(t,{portal:n,url:(0,o.mN)((0,o.Yd)(s)),origin:"portal-item"})}))}(e,t,s):(0,h.n2)(e,t,s).then((n=>f(n,e.name,t,a,s))):Promise.reject(new l.Z("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function f(e,t,a,y,f){const b=e.data,d=a&&(0,r.pC)(a.portal)?a.portal:i.Z.getDefault(),g={portal:d,url:(0,o.mN)(e.baseUrl),origin:"portal-item"},w=b.items.find((e=>e.name===t));if(!w){const e=`The symbol name '${t}' could not be found`;return Promise.reject(new l.Z("symbolstyleutils:symbol-name-not-found",e,{symbolName:t}))}let v=(0,c.f)((0,h.v9)(w,y),g),k=w.thumbnail&&w.thumbnail.href;const x=w.thumbnail&&w.thumbnail.imageData;(0,n.XO)()&&(v=(0,n.pJ)(v),k=(0,n.pJ)(k));const M={portal:d,url:(0,o.mN)((0,o.Yd)(v)),origin:"portal-item"};return(0,h.EJ)(v,f).then((n=>{const l="cimRef"===y?(0,h.KV)(n.data):n.data,r=(0,p.im)(l,M);if(r&&(0,s.dU)(r)){if(k){const e=(0,c.f)(k,g);r.thumbnail=new m.p({url:e})}else x&&(r.thumbnail=new m.p({url:`data:image/png;base64,${x}`}));e.styleUrl?r.styleOrigin=new u.Z({portal:a.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(r.styleOrigin=new u.Z({portal:a.portal,styleName:e.styleName,name:t}))}return r}))}}}]);