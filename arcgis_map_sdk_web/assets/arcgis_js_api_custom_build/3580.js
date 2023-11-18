"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[3580],{28817:(e,t,a)=>{var r;a.d(t,{i:()=>r}),function(e){e[e.PROJECT_VERTICES=1]="PROJECT_VERTICES"}(r||(r={}))},13580:(e,t,a)=>{a.r(t),a.d(t,{applyEdits:()=>f});var r,s=a(80085),i=a(41831),n=a(70375),d=a(67134),o=a(61681),l=a(3466),u=a(12173),p=a(29927),c=a(28817),h=a(15801);!function(e){e.GLTF_BINARY="3D_glb",e.GLTF_JSON="3D_gltf"}(r||(r={}));var y=a(54957);async function f(e,t,a,s={}){let l,u;const p={edits:a,result:new Promise(((e,t)=>{l=e,u=t}))};e.emit("apply-edits",p);try{const{results:u,edits:p}=await async function(e,t,a,s){if(await e.load(),!function(e){return e&&null!=e.applyEdits}(t))throw new n.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!(0,y.ln)(e))throw new n.Z(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:d,options:l}=await async function(e,t,a){const s=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),d=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),l=(0,o.pC)(e.infoFor3D);if(!t||!s&&!d)throw new n.Z(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");const u=(0,y.S1)(e);if(!u.data.isVersioned&&a?.gdbVersion)throw new n.Z(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!u.editing.supportsRollbackOnFailure&&a?.rollbackOnFailureEnabled)throw new n.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!u.editing.supportsGlobalId&&a?.globalIdUsed)throw new n.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!u.editing.supportsGlobalId&&d)throw new n.Z(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!a?.globalIdUsed&&d)throw new n.Z(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const p={...a};if(null!=p.rollbackOnFailureEnabled||u.editing.supportsRollbackOnFailure||(p.rollbackOnFailureEnabled=!0),!1===p.rollbackOnFailureEnabled&&"original-and-current-features"===p.returnServiceEditsOption)throw new n.Z(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");if(!u.editing.supportsReturnServiceEditsInSourceSpatialReference&&p.returnServiceEditsInSourceSR)throw new n.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(p.returnServiceEditsInSourceSR&&"original-and-current-features"!==p.returnServiceEditsOption)throw new n.Z(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const c={...t};if(c.addFeatures=t&&i.Z.isCollection(t.addFeatures)?t.addFeatures.toArray():c.addFeatures||[],c.updateFeatures=t&&i.Z.isCollection(t.updateFeatures)?t.updateFeatures.toArray():c.updateFeatures||[],c.deleteFeatures=t&&i.Z.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():c.deleteFeatures||[],c.addFeatures.length&&!u.operations.supportsAdd)throw new n.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(c.updateFeatures.length&&!u.operations.supportsUpdate)throw new n.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(c.deleteFeatures.length&&!u.operations.supportsDelete)throw new n.Z(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");c.addAttachments=c.addAttachments||[],c.updateAttachments=c.updateAttachments||[],c.deleteAttachments=c.deleteAttachments||[],c.addFeatures=c.addFeatures.map(w),c.updateFeatures=c.updateFeatures.map(w),c.addAssets=[];const h=a?.globalIdUsed||l;return c.addFeatures.forEach((t=>function(e,t,a){m(e,t,a)}(t,e,h))),c.updateFeatures.forEach((t=>function(e,t,a){m(e,t,a);const r=(0,y.S1)(t);if("geometry"in e&&(0,o.pC)(e.geometry)&&!r?.editing.supportsGeometryUpdate)throw new n.Z(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}(t,e,h))),c.deleteFeatures.forEach((t=>function(e,t,a){m(e,t,a)}(t,e,h))),c.addAttachments.forEach((t=>g(t,e))),c.updateAttachments.forEach((t=>g(t,e))),l&&await async function(e,t){if((0,o.Wi)(t.infoFor3D))return;const{infoFor3D:a}=t;let s=!1;for(const e of a.editFormats)if(e===r.GLTF_BINARY){s=!0;break}const i=[];for(const a of e.addFeatures??[])i.push(F(a,e,t,s));for(const a of e.updateFeatures??[])i.push(F(a,e,t,s));const n=await Promise.allSettled(i);for(const e of n)if("rejected"===e.status)throw e.reason}(c,e),{edits:await b(c),options:p}}(e,a,s);return d.addFeatures?.length||d.updateFeatures?.length||d.deleteFeatures?.length||d.addAttachments?.length||d.updateAttachments?.length||d.deleteAttachments?.length?{edits:d,results:await t.applyEdits(d,l)}:{edits:d,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,a,s),c=e=>e.filter((e=>!e.error)).map(d.d9),f={edits:p,addedFeatures:c(u.addFeatureResults),updatedFeatures:c(u.updateFeatureResults),deletedFeatures:c(u.deleteFeatureResults),addedAttachments:c(u.addAttachmentResults),updatedAttachments:c(u.updateAttachmentResults),deletedAttachments:c(u.deleteAttachmentResults),exceededTransferLimit:!1};return u.editedFeatureResults?.length&&(f.editedFeatures=u.editedFeatureResults),(f.addedFeatures.length||f.updatedFeatures.length||f.deletedFeatures.length||f.addedAttachments.length||f.updatedAttachments.length||f.deletedAttachments.length)&&(e.emit("edits",f),(0,h.lQ)(e)&&h.dU.emit("edits",{layer:e,event:f})),l(f),u}catch(e){throw u(e),e}}function m(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new n.Z(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new n.Z(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&(0,o.pC)(e.geometry)){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new n.Z(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new n.Z(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function g(e,t){const{feature:a,attachment:r}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new n.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new n.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new n.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new n.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name||r.name))throw new n.Z(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&r.uploadId)throw new n.Z(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof r.data){const e=(0,l.sJ)(r.data);if(e&&!e.isBase64)throw new n.Z(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function b(e){const t=e.addFeatures??[],a=e.updateFeatures??[],r=t.concat(a).map((e=>e.geometry)),s=await(0,p.aX)(r),i=t.length,n=a.length;return s.slice(0,i).forEach(((e,a)=>t[a].geometry=e)),s.slice(i,i+n).forEach(((e,t)=>a[t].geometry=e)),e}function w(e){const t=new s.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}async function F(e,t,a,s){if((0,o.Wi)(e.geometry)||"mesh"!==e.geometry.type)return;const i=e.geometry,d=a.globalIdField;if((0,o.pC)(a.parsedUrl)&&(0,o.pC)(i.external)&&Array.isArray(i.external.source)&&1===i.external.source.length&&"source"in i.external.source[0]&&"string"==typeof i.external.source[0].source&&i.external.source[0].source.startsWith(a.parsedUrl.path))return;if(!s)throw new n.Z(`${a.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");const l=await i.toBinaryGLTF({ignoreLocalTransform:!0}),p=await l.buffer(),h=`{${(0,u.D)()}}`,y=`${h}.glb`;t.addAssets?.push({featureGlobalId:e.getAttribute(d),assetMapGlobalId:h,assetName:y,flags:(0,o.pC)(i.transform)&&i.transform.geographic?c.i.PROJECT_VERTICES:0,data:p.data,mimeType:p.type,assetType:r.GLTF_BINARY,feature:e})}}}]);