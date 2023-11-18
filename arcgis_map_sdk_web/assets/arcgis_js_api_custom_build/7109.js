"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[7109],{86602:(e,t,i)=>{i.d(t,{JZ:()=>c,RL:()=>g,eY:()=>y});var s=i(61681),r=i(78668),a=i(1662),o=i(19710),n=i(55542),h=i(51118),l=i(7349),d=i(36172),p=i(91907),u=i(43487);function c(e){return e&&"render"in e}function g(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}class y extends h.s{constructor(e=null,t){super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this._texture=null,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=t.immutable??!1,this.requestRenderOnSourceChangedEnabled=t.requestRenderOnSourceChangedEnabled??!0,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),(0,s.pC)(this._uploadStatus)&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){null==e&&null==this._source||(this._source=e,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width),this.invalidateTexture())}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}async setSourceAsync(e,t){(0,s.pC)(this._uploadStatus)&&this._uploadStatus.controller.abort();const i=new AbortController,a=(0,r.hh)();return(0,r.$F)(t,(()=>i.abort())),(0,r.$F)(i,(e=>a.reject(e))),this._uploadStatus={controller:i,resolver:a},this.source=e,a.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}updateTransitionProperties(e,t){e>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),super.updateTransitionProperties(e,t)}setTransform(e){const t=(0,a.g)(this.transforms.dvs),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),r=this.resolution/this.pixelRatio/e.resolution,o=r*this.width,h=r*this.height,l=Math.PI*this.rotation/180;(0,a.h)(t,t,(0,n.f)(i,s)),(0,a.h)(t,t,(0,n.f)(o/2,h/2)),(0,a.r)(t,t,-l),(0,a.h)(t,t,(0,n.f)(-o/2,-h/2)),(0,a.k)(t,t,(0,n.f)(o,h)),(0,a.m)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}async updateTexture({context:e,painter:t}){if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(e)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const i=c(a=this.source)?a instanceof l.Z?(0,s.yw)(a.getRenderedRasterPixels(),(e=>e.renderedRasterPixels)):g(a):a;var a;try{if((0,s.pC)(this._uploadStatus)){const{controller:e,resolver:s}=this._uploadStatus,r={signal:e.signal},{width:a,height:o}=this,n=this._texture,h=t.textureUploadManager;await h.enqueueTextureUpdate({data:i,texture:n,width:a,height:o},r),s.resolve(),this._uploadStatus=null}else this._texture.setData(i);this.ready()}catch(e){(0,r.H9)(e)}}onDetach(){this.destroy()}_createTransforms(){return{dvs:(0,o.c)()}}_createTexture(e){const t=this.immutable&&e.type===d.zO.WEBGL2;return new u.x(e,{target:p.No.TEXTURE_2D,pixelFormat:p.VI.RGBA,internalFormat:t?p.lP.RGBA8:p.VI.RGBA,dataType:p.Br.UNSIGNED_BYTE,wrapMode:p.e8.CLAMP_TO_EDGE,isImmutable:t,width:this._sourceWidth,height:this._sourceHeight})}}},12688:(e,t,i)=>{i.d(t,{c:()=>o});var s=i(51865),r=i(38716),a=i(10994);class o extends a.Z{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade()}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[s.U.bitmap],target:()=>this.children,drawPhase:r.jx.MAP});return[...super.prepareRenderPasses(e),t]}_manageFade(){this.children.reduce(((e,t)=>e+(t.inFadeTransition?1:0)),0)>=2?(this.children.forEach((e=>e.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((e=>e.blendFunction="standard")),this._hasCrossfade=!1)}}},7349:(e,t,i)=>{i.d(t,{Z:()=>r});var s=i(61681);class r{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if((0,s.Wi)(t))return;const i=this.filter({extent:this.extent,pixelBlock:this.originalPixelBlock??t});if((0,s.Wi)(i.pixelBlock))return;i.pixelBlock.maskIsAlpha&&(i.pixelBlock.premultiplyAlpha=!0);const r=i.pixelBlock.getAsRGBA(),a=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);a.data.set(r),e.putImageData(a,0,0)}getRenderedRasterPixels(){const e=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return(0,s.Wi)(e.pixelBlock)?null:(e.pixelBlock.maskIsAlpha&&(e.pixelBlock.premultiplyAlpha=!0),{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)})}}},80347:(e,t,i)=>{i.d(t,{y:()=>B});var s=i(36663),r=i(41831),a=i(58811),o=i(70375),n=i(76868),h=i(81977),l=(i(7283),i(7753),i(40266)),d=i(10530),p=i(98114),u=i(82064);let c=class extends u.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,h.Cb)({readOnly:!0})],c.prototype,"version",null),c=(0,s._)([(0,l.j)("esri.views.layers.support.ClipArea")],c);const g=c;var y;let m=y=class extends g{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new y({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,s._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],m.prototype,"left",void 0),(0,s._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],m.prototype,"right",void 0),(0,s._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],m.prototype,"top",void 0),(0,s._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],m.prototype,"bottom",void 0),m=y=(0,s._)([(0,l.j)("esri.views.layers.support.ClipRect")],m);const _=m;i(91957);var v,f=i(20031),b=i(53736),x=i(91772),w=i(89542);const R={base:f.Z,key:"type",typeMap:{extent:x.Z,polygon:w.Z}};let C=v=class extends g{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){return new v({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,s._)([(0,h.Cb)({types:R,json:{read:b.im,write:!0}})],C.prototype,"geometry",void 0),C=v=(0,s._)([(0,l.j)("esri.views.layers.support.Geometry")],C);const S=C;let P=class extends g{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,s._)([(0,h.Cb)({type:[[[Number]]],json:{write:!0}})],P.prototype,"path",void 0),P=(0,s._)([(0,l.j)("esri.views.layers.support.Path")],P);const k=P,M=r.Z.ofType({key:"type",base:null,typeMap:{rect:_,path:k,geometry:S}}),B=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new M,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new o.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new d.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,n.YP)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),n.tX),(0,n.YP)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),n.tX),(0,n.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),n.tX),(0,n.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),n.tX),(0,n.YP)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),n.tX),(0,n.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),n.tX),(0,n.YP)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(({scale:e})=>{const t=null!=e&&this.isVisibleAtScale(e);t!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",t)}),n.tX)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0===i||e<=i)&&(0===s||e>=s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,s._)([(0,h.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,h.Cb)({type:M,set(e){const t=(0,a.Z)(e,this._get("clips"),M);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,h.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,h.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,s._)([(0,h.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,h.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,h.Cb)()],t.prototype,"updating",null),(0,s._)([(0,h.Cb)()],t.prototype,"view",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,s._)([(0,h.Cb)({type:p.Z})],t.prototype,"highlightOptions",void 0),t=(0,s._)([(0,l.j)("esri.views.2d.layers.LayerView2D")],t),t}},23134:(e,t,i)=>{i.d(t,{Z:()=>P});var s=i(36663),r=i(53443),a=(i(39994),i(78668)),o=i(81977),n=(i(7283),i(7753),i(40266)),h=i(24568),l=i(35925),d=i(81590);const p=Math.PI/180;function u(e){return e*p}function c(e,t){const i=u(t.rotation),s=Math.abs(Math.cos(i)),r=Math.abs(Math.sin(i)),[a,o]=t.size;return e[0]=Math.round(o*r+a*s),e[1]=Math.round(o*s+a*r),e}var g=i(86602),y=i(64970),m=i(87241);const _=(0,h.Ue)(),v=[0,0],f=new m.Z(0,0,0,0),b=2048,x=2048,w=!1,R=!1,C=!1;let S=class extends r.Z{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=C,this.imageMaxWidth=b,this.imageMaxHeight=x,this.imageRotationSupported=w,this.imageNormalizationSupported=R,this.update=(0,a.Ds)((async(e,t)=>{if((0,a.k_)(t),!e.stationary||this.destroyed)return;const i=e.state,s=(0,l.C5)(i.spatialReference),r=this.hidpi?e.pixelRatio:1,o=this.imageNormalizationSupported&&i.worldScreenWidth&&i.worldScreenWidth<i.size[0],n=this.imageMaxWidth??0,h=this.imageMaxHeight??0;o?(v[0]=i.worldScreenWidth,v[1]=i.size[1]):this.imageRotationSupported?(v[0]=i.size[0],v[1]=i.size[1]):c(v,i);const d=Math.floor(v[0]*r)>n||Math.floor(v[1]*r)>h,p=s&&(i.extent.xmin<s.valid[0]||i.extent.xmax>s.valid[1]),u=!this.imageNormalizationSupported&&p,g=!d&&!u,y=this.imageRotationSupported?i.rotation:0,m=this.container.children.slice();if(g){const e=o?i.paddedViewState.center:i.center;this._imagePromise&&console.error("Image promise was not defined!"),this._imagePromise=this._singleExport(i,v,e,i.resolution,y,r,t)}else{let e=Math.min(n,h);u&&(e=Math.min(i.worldScreenWidth,e)),this._imagePromise=this._tiledExport(i,e,r,t)}try{const e=await this._imagePromise??[];(0,a.k_)(t);const i=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=e;for(const t of m)e.includes(t)||i.push(t.fadeOut().then((()=>{t.remove(),t.destroy()})));for(const t of e)i.push(t.fadeIn());await Promise.all(i)}catch(e){this._imagePromise=null,(0,a.r9)(e)}}),5e3),this.updateExports=(0,a.Ds)((async e=>{const t=[];for(const i of this.container.children){if(!i.visible||!i.stage)return;t.push(e(i).then((()=>{i.invalidateTexture(),i.requestRender()})))}this._imagePromise=(0,a.as)(t).then((()=>this._imagePromise=null)),await this._imagePromise}))}destroy(){this.bitmaps.forEach((e=>e.destroy())),this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}async _export(e,t,i,s,r,o){const n=await this.fetchSource(e,Math.floor(t*r),Math.floor(i*r),{rotation:s,pixelRatio:r,signal:o});(0,a.k_)(o);const h=new g.eY(null,{immutable:!0,requestRenderOnSourceChangedEnabled:!0});return h.x=e.xmin,h.y=e.ymax,h.resolution=e.width/t,h.rotation=s,h.pixelRatio=r,h.opacity=0,this.container.addChild(h),await h.setSourceAsync(n,o),(0,a.k_)(o),h}async _singleExport(e,t,i,s,r,a,o){!function(e,t,i,s){const[r,a]=t,[o,n]=s,h=.5*i;e[0]=r-h*o,e[1]=a-h*n,e[2]=r+h*o,e[3]=a+h*n}(_,i,s,t);const n=(0,h.HH)(_,e.spatialReference);return[await this._export(n,t[0],t[1],r,a,o)]}_tiledExport(e,t,i,s){const r=d.Z.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),a=new y.Z(r),o=a.getTileCoverage(e);if(!o)return null;const n=[];return o.forEach(((r,o,l,d)=>{f.set(r,o,l,0),a.getTileBounds(_,f);const p=(0,h.HH)(_,e.spatialReference);n.push(this._export(p,t,t,0,i,s).then((e=>(0!==d&&(f.set(r,o,l,d),a.getTileBounds(_,f),e.x=_[0],e.y=_[3]),e))))})),Promise.all(n)}};(0,s._)([(0,o.Cb)()],S.prototype,"_imagePromise",void 0),(0,s._)([(0,o.Cb)()],S.prototype,"bitmaps",void 0),(0,s._)([(0,o.Cb)()],S.prototype,"container",void 0),(0,s._)([(0,o.Cb)()],S.prototype,"fetchSource",void 0),(0,s._)([(0,o.Cb)()],S.prototype,"hidpi",void 0),(0,s._)([(0,o.Cb)()],S.prototype,"imageMaxWidth",void 0),(0,s._)([(0,o.Cb)()],S.prototype,"imageMaxHeight",void 0),(0,s._)([(0,o.Cb)()],S.prototype,"imageRotationSupported",void 0),(0,s._)([(0,o.Cb)()],S.prototype,"imageNormalizationSupported",void 0),(0,s._)([(0,o.Cb)()],S.prototype,"requestUpdate",void 0),(0,s._)([(0,o.Cb)()],S.prototype,"updating",null),S=(0,s._)([(0,n.j)("esri.views.2d.layers.support.ExportStrategy")],S);const P=S},26216:(e,t,i)=>{i.d(t,{Z:()=>g});var s=i(36663),r=i(53443),a=i(31355),o=i(53280),n=i(86618),h=i(13802),l=i(61681),d=i(64189),p=i(81977),u=(i(7283),i(7753),i(40266));let c=class extends((0,o.p)((0,n.IG)((0,d.v)(a.Z.EventedMixin(r.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";h.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}get fullOpacity(){return(0,l.Pt)(this.get("layer.opacity"),1)*(0,l.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,p.Cb)()],c.prototype,"fullOpacity",null),(0,s._)([(0,p.Cb)()],c.prototype,"layer",void 0),(0,s._)([(0,p.Cb)()],c.prototype,"parent",void 0),(0,s._)([(0,p.Cb)({readOnly:!0})],c.prototype,"suspended",null),(0,s._)([(0,p.Cb)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,s._)([(0,p.Cb)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,s._)([(0,p.Cb)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,s._)([(0,p.Cb)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,s._)([(0,p.Cb)()],c.prototype,"visible",null),(0,s._)([(0,p.Cb)()],c.prototype,"view",void 0),c=(0,s._)([(0,u.j)("esri.views.layers.LayerView")],c);const g=c},55068:(e,t,i)=>{i.d(t,{Z:()=>l});var s=i(36663),r=i(13802),a=i(78668),o=i(76868),n=i(81977),h=(i(7283),i(7753),i(40266));const l=e=>{let t=class extends e{initialize(){this.handles.add((0,o.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,a.D_)(e)||r.Z.getLogger(this.declaredClass).error(e)}))})),"RefreshableLayerView")}};return(0,s._)([(0,n.Cb)()],t.prototype,"layer",void 0),t=(0,s._)([(0,h.j)("esri.layers.mixins.RefreshableLayerView")],t),t}}}]);