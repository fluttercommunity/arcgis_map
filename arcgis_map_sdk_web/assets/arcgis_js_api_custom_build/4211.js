"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[4211,9420],{24211:(e,t,r)=>{r.r(t),r.d(t,{load:()=>i});var s=r(69420);const i=()=>{window.MapImageLayer=s.default}},69420:(e,t,r)=>{r.r(t),r.d(t,{default:()=>q});var s=r(36663),i=r(66341),a=r(37956),o=r(70375),n=r(53280),l=r(63592),y=r(61681),p=r(15842),c=r(78668),h=r(81977),u=r(7283),d=(r(7753),r(34248)),m=r(40266),b=r(39835),f=r(65943),g=r(91772),v=r(68577),S=r(38481),_=r(91223),x=r(81432),C=r(87232),I=r(27668),w=r(63989),L=r(43330),O=r(18241),E=r(12478),N=r(95874),P=r(80002),D=r(2030),R=r(51599),T=r(24065),F=r(4452),M=r(23875),J=r(93698),j=r(76912),k=r(9593);let V=class extends((0,I.h)((0,D.n)((0,N.M)((0,P.x)((0,x.O)((0,C.Y)((0,L.q)((0,O.I)((0,p.R)((0,E.Q)((0,_.V)((0,w.N)((0,n.p)(S.Z)))))))))))))){constructor(...e){super(...e),this.dateFieldsTimeReference=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeReference=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=(0,y.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(c.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("PNG32")?"png32":"png24"}writeSublayers(e,t,r,s){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let a=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap?.supportsDynamicLayers){const e=(0,f.M9)(s.origin);if(e===f.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;a=(0,J.QV)(i,e,f.s3.SERVICE)}else if(e>f.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");a=(0,J.QV)(i,e.sublayers,(0,f.M9)(e.origin))}}const o=[],n={writeSublayerStructure:a,...s};let l=a;i.forEach((e=>{const t=e.write({},n);o.push(t),l=l||"user"===e.originOf("visible")})),o.some((e=>Object.keys(e).length>1))&&(t.layers=o),l&&(t.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,s){const i=s&&s.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const a=new T.R({layer:this,floors:s?.floors,scale:(0,v.yZ)({extent:e,width:t})*i}),o=a.toJSON();a.destroy();const n=!s||!s.rotation||this.version<10.3?{}:{rotation:-s.rotation},l=e&&e.spatialReference,y=l.wkid||JSON.stringify(l.toJSON());o.dpi*=i;const p={};if(s?.timeExtent){const{start:e,end:t}=s.timeExtent.toJSON();p.time=e&&t&&e===t?""+e:`${e??"null"},${t??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(p.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:y,imageSR:y,size:t+","+r,...o,...n,...p}}async fetchImage(e,t,r,s){const{data:i}=await this._fetchImage("image",e,t,r,s);return i}async fetchImageBitmap(e,t,r,s){const{data:i,url:a}=await this._fetchImage("blob",e,t,r,s);return(0,F.g)(i,a)}async fetchRecomputedExtents(e={}){const t={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:r}=await(0,i.default)(this.url,t),{extent:s,fullExtent:o,timeExtent:n}=r,l=s||o;return{fullExtent:l&&g.Z.fromJSON(l),timeExtent:n&&a.Z.fromJSON({start:n[0],end:n[1]})}}loadAll(){return(0,l.G)(this,(e=>{e(this.allSublayers)}))}serviceSupportsSpatialReference(e){return(0,j.D)(this,e)}async _fetchImage(e,t,r,s,a){const n={responseType:e,signal:a?.signal??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(t,r,s,a),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},l=this.parsedUrl.path+"/export";if(null!=n.query?.dynamicLayers&&!this.capabilities?.exportMap?.supportsDynamicLayers)throw new o.Z("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:e}=await(0,i.default)(l,n);return{data:e,url:l}}catch(e){if((0,c.D_)(e))throw e;throw new o.Z("mapimagelayer:image-fetch-error",`Unable to load image: ${l}`,{error:e})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await(0,i.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};(0,s._)([(0,h.Cb)({type:k.Z})],V.prototype,"dateFieldsTimeReference",void 0),(0,s._)([(0,h.Cb)({type:Boolean})],V.prototype,"datesInUnknownTimezone",void 0),(0,s._)([(0,h.Cb)()],V.prototype,"dpi",void 0),(0,s._)([(0,h.Cb)()],V.prototype,"gdbVersion",void 0),(0,s._)([(0,h.Cb)()],V.prototype,"imageFormat",void 0),(0,s._)([(0,d.r)("imageFormat",["supportedImageFormatTypes"])],V.prototype,"readImageFormat",null),(0,s._)([(0,h.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],V.prototype,"imageMaxHeight",void 0),(0,s._)([(0,h.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],V.prototype,"imageMaxWidth",void 0),(0,s._)([(0,h.Cb)()],V.prototype,"imageTransparency",void 0),(0,s._)([(0,h.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],V.prototype,"isReference",void 0),(0,s._)([(0,h.Cb)({json:{read:!1,write:!1}})],V.prototype,"labelsVisible",void 0),(0,s._)([(0,h.Cb)({type:["ArcGISMapServiceLayer"]})],V.prototype,"operationalLayerType",void 0),(0,s._)([(0,h.Cb)({json:{read:!1,write:!1}})],V.prototype,"popupEnabled",void 0),(0,s._)([(0,h.Cb)({type:k.Z})],V.prototype,"preferredTimeReference",void 0),(0,s._)([(0,h.Cb)()],V.prototype,"sourceJSON",void 0),(0,s._)([(0,h.Cb)({json:{write:{ignoreOrigin:!0}}})],V.prototype,"sublayers",void 0),(0,s._)([(0,b.c)("sublayers",{layers:{type:[M.Z]},visibleLayers:{type:[u.z8]}})],V.prototype,"writeSublayers",null),(0,s._)([(0,h.Cb)({type:["show","hide","hide-children"]})],V.prototype,"listMode",void 0),(0,s._)([(0,h.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],V.prototype,"type",void 0),(0,s._)([(0,h.Cb)(R.HQ)],V.prototype,"url",void 0),V=(0,s._)([(0,m.j)("esri.layers.MapImageLayer")],V);const q=V},24065:(e,t,r)=>{r.d(t,{R:()=>d});var s=r(36663),i=r(53443),a=r(53280),o=r(61681),n=r(84684),l=r(81977),y=(r(7283),r(7753),r(40266)),p=r(51599),c=r(21586),h=r(93698);const u={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let d=class extends((0,a.p)(i.Z)){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=(0,c.f)(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,h.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(u[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,t=this.visibleSublayers.filter((t=>null!=t.definitionExpression||e&&null!=t.floorInfo));return t.length?JSON.stringify(t.reduce(((e,t)=>{const r=(0,c.f)(this.floors,t),s=(0,n._)(r,t.definitionExpression);return(0,o.pC)(s)&&(e[t.id]=s),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,r=t=>{const s=this.scale,i=0===s,a=0===t.minScale||s<=t.minScale,o=0===t.maxScale||s>=t.maxScale;t.visible&&(i||a&&o)&&(t.sublayers?t.sublayers.forEach(r):e.unshift(t))};t&&t.forEach(r);const s=this._get("visibleSublayers");return!s||s.length!==e.length||s.some(((t,r)=>e[r]!==t))?e:s}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,s._)([(0,l.Cb)({readOnly:!0})],d.prototype,"dynamicLayers",null),(0,s._)([(0,l.Cb)()],d.prototype,"floors",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],d.prototype,"hasDynamicLayers",null),(0,s._)([(0,l.Cb)()],d.prototype,"layer",null),(0,s._)([(0,l.Cb)({readOnly:!0})],d.prototype,"layers",null),(0,s._)([(0,l.Cb)({readOnly:!0})],d.prototype,"layerDefs",null),(0,s._)([(0,l.Cb)({type:Number})],d.prototype,"scale",void 0),(0,s._)([(0,l.Cb)(p.qG)],d.prototype,"timeExtent",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],d.prototype,"version",null),(0,s._)([(0,l.Cb)({readOnly:!0})],d.prototype,"visibleSublayers",null),d=(0,s._)([(0,y.j)("esri.layers.mixins.ExportImageParameters")],d)},21586:(e,t,r)=>{function s(e){const t=e.layer;return"floorInfo"in t&&t.floorInfo?.floorField&&"floors"in e.view?a(e.view.floors,t.floorInfo.floorField):null}function i(e,t){return"floorInfo"in t&&t.floorInfo?.floorField?a(e,t.floorInfo.floorField):null}function a(e,t){if(!e?.length)return null;const r=e.filter((e=>""!==e)).map((e=>`'${e}'`));return r.push("''"),`${t} IN (${r.join(",")}) OR ${t} IS NULL`}r.d(t,{c:()=>s,f:()=>i})}}]);