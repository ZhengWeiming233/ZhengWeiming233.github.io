define(["exports","./Transforms-f27da714","./ComponentDatatype-8f71e605","./when-ca391574","./Check-64f87f7d","./Cartesian2-1c4d6ffc","./GeometryAttribute-4dd33a68","./GeometryAttributes-a356f820","./GeometryPipeline-67acf87f","./IndexDatatype-e33b917b","./WebMercatorProjection-93e7684b"],function(e,P,k,y,t,f,C,w,b,A,c){"use strict";function m(e,t,r){e=y.defaultValue(e,0),t=y.defaultValue(t,0),r=y.defaultValue(r,0),this.value=new Float32Array([e,t,r])}function v(e,t){var r=e.attributes,e=r.position,n=e.values.length/e.componentsPerAttribute;r.batchId=new C.GeometryAttribute({componentDatatype:k.ComponentDatatype.FLOAT,componentsPerAttribute:1,values:new Float32Array(n)});for(var i=r.batchId.values,o=0;o<n;++o)i[o]=t}function l(e){var t=e.instances,r=e.projection,n=e.elementIndexUintSupported,i=e.scene3DOnly,o=e.vertexCacheOptimize,a=e.compressVertices,e=e.modelMatrix,s=t.length;for(g=0;g<s;++g)if(y.defined(t[g].geometry)){t[g].geometry.primitiveType;break}if(!function(e,t,r){var n=!r,i=e.length;if(!n&&1<i)for(var o=e[0].modelMatrix,a=1;a<i;++a)if(!P.Matrix4.equals(o,e[a].modelMatrix)){n=!0;break}if(n)for(a=0;a<i;++a)y.defined(e[a].geometry)&&b.GeometryPipeline.transformToWorldCoordinates(e[a]);else P.Matrix4.multiplyTransformation(t,e[0].modelMatrix,t)}(t,e,i),!i)for(g=0;g<s;++g)y.defined(t[g].geometry)&&b.GeometryPipeline.splitLongitude(t[g]);if(!function(e){for(var t=e.length,r=0;r<t;++r){var n=e[r];y.defined(n.geometry)?v(n.geometry,r):y.defined(n.westHemisphereGeometry)&&y.defined(n.eastHemisphereGeometry)&&(v(n.westHemisphereGeometry,r),v(n.eastHemisphereGeometry,r))}}(t),o)for(g=0;g<s;++g){var d=t[g];y.defined(d.geometry)?(b.GeometryPipeline.reorderForPostVertexCache(d.geometry),b.GeometryPipeline.reorderForPreVertexCache(d.geometry)):y.defined(d.westHemisphereGeometry)&&y.defined(d.eastHemisphereGeometry)&&(b.GeometryPipeline.reorderForPostVertexCache(d.westHemisphereGeometry),b.GeometryPipeline.reorderForPreVertexCache(d.westHemisphereGeometry),b.GeometryPipeline.reorderForPostVertexCache(d.eastHemisphereGeometry),b.GeometryPipeline.reorderForPreVertexCache(d.eastHemisphereGeometry))}var p=b.GeometryPipeline.combineInstances(t);for(s=p.length,g=0;g<s;++g){var u,f,c,m,h=(u=p[g]).attributes;if(i)for(f in h)h.hasOwnProperty(f)&&h[f].componentDatatype===k.ComponentDatatype.DOUBLE&&b.GeometryPipeline.encodeAttribute(u,f,f+"3DHigh",f+"3DLow");else for(f in h)h.hasOwnProperty(f)&&h[f].componentDatatype===k.ComponentDatatype.DOUBLE&&(b.GeometryPipeline.projectTo2D(u,f,c=f+"3D",m=f+"2D",r),y.defined(u.boundingSphere)&&"position"===f&&(u.boundingSphereCV=P.BoundingSphere.fromVertices(u.attributes.position2D.values)),b.GeometryPipeline.encodeAttribute(u,c,c+"High",c+"Low"),b.GeometryPipeline.encodeAttribute(u,m,m+"High",m+"Low"));a&&b.GeometryPipeline.compressVertices(u)}if(!n){for(var l=[],s=p.length,g=0;g<s;++g)u=p[g],l=l.concat(b.GeometryPipeline.fitToUnsignedShortIndices(u));p=l}return p}function g(e,t,r,n){var i,o,a,s=n.length-1;a=0<=s?(i=(s=n[s]).offset+s.count,r[o=s.index].indices.length):r[o=i=0].indices.length;for(var d=e.length,p=0;p<d;++p){var u=e[p][t];y.defined(u)&&(a<i+(u=u.indices.length)&&(i=0,a=r[++o].indices.length),n.push({index:o,offset:i,count:u}),i+=u)}}Object.defineProperties(m.prototype,{componentDatatype:{get:function(){return k.ComponentDatatype.FLOAT}},componentsPerAttribute:{get:function(){return 3}},normalize:{get:function(){return!1}}}),m.fromCartesian3=function(e){return new m(e.x,e.y,e.z)},m.toValue=function(e,t){return(t=!y.defined(t)?new Float32Array([e.x,e.y,e.z]):t)[0]=e.x,t[1]=e.y,t[2]=e.z,t};var h={};function i(e,t){for(var r=e.length,n=0;n<r;++n)!function(e,t){var r,n,i=e.attributes;for(r in i)i.hasOwnProperty(r)&&(n=i[r],y.defined(n)&&y.defined(n.values)&&t.push(n.values.buffer));y.defined(e.indices)&&t.push(e.indices.buffer)}(e[n],t)}function o(e){var t=e.length,r=1+(P.BoundingSphere.packedLength+1)*t,n=new Float32Array(r),i=0;n[i++]=t;for(var o=0;o<t;++o){var a=e[o];y.defined(a)?(n[i++]=1,P.BoundingSphere.pack(e[o],n,i)):n[i++]=0,i+=P.BoundingSphere.packedLength}return n}function r(e){for(var t=new Array(e[0]),r=0,n=1;n<e.length;)1===e[n++]&&(t[r]=P.BoundingSphere.unpack(e,n)),++r,n+=P.BoundingSphere.packedLength;return t}h.combineGeometry=function(e){var t,r,n,i,o,a,s=e.instances,d=s.length,p=!1;0<d&&(0<(t=l(e)).length&&(r=b.GeometryPipeline.createAttributeLocations(t[0]),e.createPickOffsets&&(g(i=s,"geometry",o=t,a=[]),g(i,"westHemisphereGeometry",o,a),g(i,"eastHemisphereGeometry",o,a),a=a)),y.defined(s[0].attributes)&&y.defined(s[0].attributes.offset)&&(n=new Array(d),p=!0));for(var u=new Array(d),f=new Array(d),c=0;c<d;++c){var m=s[c],h=m.geometry;y.defined(h)&&(u[c]=h.boundingSphere,f[c]=h.boundingSphereCV,p&&(n[c]=m.geometry.offsetAttribute));h=m.eastHemisphereGeometry,m=m.westHemisphereGeometry;y.defined(h)&&y.defined(m)&&(y.defined(h.boundingSphere)&&y.defined(m.boundingSphere)&&(u[c]=P.BoundingSphere.union(h.boundingSphere,m.boundingSphere)),y.defined(h.boundingSphereCV)&&y.defined(m.boundingSphereCV)&&(f[c]=P.BoundingSphere.union(h.boundingSphereCV,m.boundingSphereCV)))}return{geometries:t,modelMatrix:e.modelMatrix,attributeLocations:r,pickOffsets:a,offsetInstanceExtend:n,boundingSpheres:u,boundingSpheresCV:f}},h.packCreateGeometryResults=function(e,t){var r=new Float64Array(function(e){for(var t=1,r=e.length,n=0;n<r;n++){var i=e[n];if(++t,y.defined(i)){var o,a=i.attributes;for(o in t+=7+2*P.BoundingSphere.packedLength+(y.defined(i.indices)?i.indices.length:0),a)a.hasOwnProperty(o)&&y.defined(a[o])&&(t+=5+a[o].values.length)}}return t}(e)),n=[],i={},o=e.length,a=0;r[a++]=o;for(var s=0;s<o;s++){var d=e[s],p=y.defined(d);if(r[a++]=p?1:0,p){r[a++]=d.primitiveType,r[a++]=d.geometryType,r[a++]=y.defaultValue(d.offsetAttribute,-1);p=y.defined(d.boundingSphere)?1:0;(r[a++]=p)&&P.BoundingSphere.pack(d.boundingSphere,r,a),a+=P.BoundingSphere.packedLength;p=y.defined(d.boundingSphereCV)?1:0;(r[a++]=p)&&P.BoundingSphere.pack(d.boundingSphereCV,r,a),a+=P.BoundingSphere.packedLength;var u,f=d.attributes,c=[];for(u in f)f.hasOwnProperty(u)&&y.defined(f[u])&&(c.push(u),y.defined(i[u])||(i[u]=n.length,n.push(u)));r[a++]=c.length;for(var m=0;m<c.length;m++){var h=c[m],l=f[h];r[a++]=i[h],r[a++]=l.componentDatatype,r[a++]=l.componentsPerAttribute,r[a++]=l.normalize?1:0,r[a++]=l.values.length,r.set(l.values,a),a+=l.values.length}p=y.defined(d.indices)?d.indices.length:0;0<(r[a++]=p)&&(r.set(d.indices,a),a+=p)}}return t.push(r.buffer),{stringTable:n,packedData:r}},h.unpackCreateGeometryResults=function(e){for(var t=e.stringTable,r=e.packedData,n=new Array(r[0]),i=0,o=1;o<r.length;)if(1===r[o++]){var a,s,d=r[o++],p=r[o++],u=r[o++];-1===u&&(u=void 0),1===r[o++]&&(a=P.BoundingSphere.unpack(r,o)),o+=P.BoundingSphere.packedLength,1===r[o++]&&(s=P.BoundingSphere.unpack(r,o)),o+=P.BoundingSphere.packedLength;var f=new w.GeometryAttributes,c=r[o++];for(S=0;S<c;S++){for(var m=t[r[o++]],h=r[o++],l=r[o++],g=0!==r[o++],y=r[o++],b=k.ComponentDatatype.createTypedArray(h,y),v=0;v<y;v++)b[v]=r[o++];f[m]=new C.GeometryAttribute({componentDatatype:h,componentsPerAttribute:l,normalize:g,values:b})}if(0<(y=r[o++]))for(var G=b.length/l,x=A.IndexDatatype.createTypedArray(G,y),S=0;S<y;S++)x[S]=r[o++];n[i++]=new C.Geometry({primitiveType:d,geometryType:p,boundingSphere:a,boundingSphereCV:s,indices:x,attributes:f,offsetAttribute:u})}else n[i++]=void 0;return n},h.packCombineGeometryParameters=function(e,t){for(var r=e.createGeometryResults,n=r.length,i=0;i<n;i++)t.push(r[i].packedData.buffer);return{createGeometryResults:e.createGeometryResults,packedInstances:function(e,t){var r=e.length,n=new Float64Array(1+19*r),i=0;n[i++]=r;for(var o=0;o<r;o++){var a=e[o];P.Matrix4.pack(a.modelMatrix,n,i),i+=P.Matrix4.packedLength,y.defined(a.attributes)&&y.defined(a.attributes.offset)&&(a=a.attributes.offset.value,n[i]=a[0],n[i+1]=a[1],n[i+2]=a[2]),i+=3}return t.push(n.buffer),n}(e.instances,t),ellipsoid:e.ellipsoid,isGeographic:e.projection instanceof P.GeographicProjection,elementIndexUintSupported:e.elementIndexUintSupported,scene3DOnly:e.scene3DOnly,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:e.modelMatrix,createPickOffsets:e.createPickOffsets}},h.unpackCombineGeometryParameters=function(e){for(var t=function(e){for(var t=e,r=new Array(t[0]),n=0,i=1;i<t.length;){var o,a=P.Matrix4.unpack(t,i);i+=P.Matrix4.packedLength,y.defined(t[i])&&(o={offset:new m(t[i],t[i+1],t[i+2])}),i+=3,r[n++]={modelMatrix:a,attributes:o}}return r}(e.packedInstances),r=e.createGeometryResults,n=r.length,i=0,o=0;o<n;o++)for(var a=h.unpackCreateGeometryResults(r[o]),s=a.length,d=0;d<s;d++){var p=a[d];t[i].geometry=p,++i}var u=f.Ellipsoid.clone(e.ellipsoid);return{instances:t,ellipsoid:u,projection:new(e.isGeographic?P.GeographicProjection:c.WebMercatorProjection)(u),elementIndexUintSupported:e.elementIndexUintSupported,scene3DOnly:e.scene3DOnly,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:P.Matrix4.clone(e.modelMatrix),createPickOffsets:e.createPickOffsets}},h.packCombineGeometryResults=function(e,t){y.defined(e.geometries)&&i(e.geometries,t);var r=o(e.boundingSpheres),n=o(e.boundingSpheresCV);return t.push(r.buffer,n.buffer),{geometries:e.geometries,attributeLocations:e.attributeLocations,modelMatrix:e.modelMatrix,pickOffsets:e.pickOffsets,offsetInstanceExtend:e.offsetInstanceExtend,boundingSpheres:r,boundingSpheresCV:n}},h.unpackCombineGeometryResults=function(e){return{geometries:e.geometries,attributeLocations:e.attributeLocations,modelMatrix:e.modelMatrix,pickOffsets:e.pickOffsets,offsetInstanceExtend:e.offsetInstanceExtend,boundingSpheres:r(e.boundingSpheres),boundingSpheresCV:r(e.boundingSpheresCV)}},e.PrimitivePipeline=h});
