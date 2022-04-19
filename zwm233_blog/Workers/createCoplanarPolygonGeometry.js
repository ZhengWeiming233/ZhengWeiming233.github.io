define(["./arrayRemoveDuplicates-446f9699","./BoundingRectangle-39315f67","./Transforms-0dc324f8","./Cartesian2-ea0bdebd","./Check-89257fc2","./ComponentDatatype-9a953f81","./CoplanarPolygonGeometryLibrary-2bc7fdbb","./when-36d93783","./GeometryAttribute-f9d8dfd6","./GeometryAttributes-08e0be8a","./GeometryInstance-2775f41d","./GeometryPipeline-2cc5c9d7","./IndexDatatype-d09b3e61","./Math-9699ca15","./PolygonGeometryLibrary-aae45988","./PolygonPipeline-6b218338","./VertexFormat-9a9d1c72","./RuntimeError-a449ba63","./WebGLConstants-95ceb4e9","./OrientedBoundingBox-e9330be9","./EllipsoidTangentPlane-03e5500f","./IntersectionTests-e942b823","./Plane-2ce3bda6","./AttributeCompression-8242d03d","./EncodedCartesian3-d0715677","./ArcType-2b58731c","./EllipsoidRhumbLine-765f7b5a"],function(h,e,L,E,t,T,C,l,D,_,f,v,k,V,x,R,s,n,a,r,o,i,p,y,c,m,u){"use strict";var I=new E.Cartesian3,P=new e.BoundingRectangle,M=new E.Cartesian2,H=new E.Cartesian2,w=new E.Cartesian3,A=new E.Cartesian3,F=new E.Cartesian3,G=new E.Cartesian3,B=new E.Cartesian3,O=new E.Cartesian3,z=new L.Quaternion,S=new L.Matrix3,N=new L.Matrix3,Q=new E.Cartesian3;function d(e){var t=(e=l.defaultValue(e,l.defaultValue.EMPTY_OBJECT)).polygonHierarchy,n=l.defaultValue(e.vertexFormat,s.VertexFormat.DEFAULT);this._vertexFormat=s.VertexFormat.clone(n),this._polygonHierarchy=t,this._stRotation=l.defaultValue(e.stRotation,0),this._ellipsoid=E.Ellipsoid.clone(l.defaultValue(e.ellipsoid,E.Ellipsoid.WGS84)),this._workerName="createCoplanarPolygonGeometry",this.packedLength=x.PolygonGeometryLibrary.computeHierarchyPackedLength(t)+s.VertexFormat.packedLength+E.Ellipsoid.packedLength+2}d.fromPositions=function(e){return new d({polygonHierarchy:{positions:(e=l.defaultValue(e,l.defaultValue.EMPTY_OBJECT)).positions},vertexFormat:e.vertexFormat,stRotation:e.stRotation,ellipsoid:e.ellipsoid})},d.pack=function(e,t,n){return n=l.defaultValue(n,0),n=x.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,n),E.Ellipsoid.pack(e._ellipsoid,t,n),n+=E.Ellipsoid.packedLength,s.VertexFormat.pack(e._vertexFormat,t,n),n+=s.VertexFormat.packedLength,t[n++]=e._stRotation,t[n]=e.packedLength,t};var g=E.Ellipsoid.clone(E.Ellipsoid.UNIT_SPHERE),b=new s.VertexFormat,j={polygonHierarchy:{}};return d.unpack=function(e,t,n){t=l.defaultValue(t,0);var a=x.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);t=a.startingIndex,delete a.startingIndex;var r=E.Ellipsoid.unpack(e,t,g);t+=E.Ellipsoid.packedLength;var o=s.VertexFormat.unpack(e,t,b);t+=s.VertexFormat.packedLength;var i=e[t++],t=e[t];return(n=!l.defined(n)?new d(j):n)._polygonHierarchy=a,n._ellipsoid=E.Ellipsoid.clone(r,n._ellipsoid),n._vertexFormat=s.VertexFormat.clone(o,n._vertexFormat),n._stRotation=i,n.packedLength=t,n},d.createGeometry=function(e){var t=e._vertexFormat,n=e._polygonHierarchy,a=e._stRotation,r=n.positions;if(!((r=h.arrayRemoveDuplicates(r,E.Cartesian3.equalsEpsilon,!0)).length<3)){var o=w,i=A,l=F,s=B,p=O;if(C.CoplanarPolygonGeometryLibrary.computeProjectTo2DArguments(r,G,s,p)){o=E.Cartesian3.cross(s,p,o);o=E.Cartesian3.normalize(o,o),E.Cartesian3.equalsEpsilon(G,E.Cartesian3.ZERO,V.CesiumMath.EPSILON6)||(y=e._ellipsoid.geodeticSurfaceNormal(G,Q),E.Cartesian3.dot(o,y)<0&&(o=E.Cartesian3.negate(o,o),s=E.Cartesian3.negate(s,s)));var y=C.CoplanarPolygonGeometryLibrary.createProjectPointsTo2DFunction(G,s,p),c=C.CoplanarPolygonGeometryLibrary.createProjectPointTo2DFunction(G,s,p);t.tangent&&(i=E.Cartesian3.clone(s,i)),t.bitangent&&(l=E.Cartesian3.clone(p,l));var n=x.PolygonGeometryLibrary.polygonsFromHierarchy(n,y,!1),y=n.hierarchy,m=n.polygons;if(0!==y.length){for(var r=y[0].outerRing,n=L.BoundingSphere.fromPoints(r),u=x.PolygonGeometryLibrary.computeBoundingRectangle(o,c,r,a,P),d=[],g=0;g<m.length;g++){var b=new f.GeometryInstance({geometry:function(e,t,n,a,r,o,i,l){var s=e.positions,p=R.PolygonPipeline.triangulate(e.positions2D,e.holes);p.length<3&&(p=[0,1,2]),(e=k.IndexDatatype.createTypedArray(s.length,p.length)).set(p);var y=S;0!==a?(p=L.Quaternion.fromAxisAngle(o,a,z),y=L.Matrix3.fromQuaternion(p,y),(t.tangent||t.bitangent)&&(p=L.Quaternion.fromAxisAngle(o,-a,z),u=L.Matrix3.fromQuaternion(p,N),i=E.Cartesian3.normalize(L.Matrix3.multiplyByVector(u,i,i),i),t.bitangent&&(l=E.Cartesian3.normalize(E.Cartesian3.cross(o,i,l),l)))):y=L.Matrix3.clone(L.Matrix3.IDENTITY,y);var c=H;t.st&&(c.x=n.x,c.y=n.y);for(var m=s.length,u=3*m,d=new Float64Array(u),g=t.normal?new Float32Array(u):void 0,b=t.tangent?new Float32Array(u):void 0,h=t.bitangent?new Float32Array(u):void 0,C=t.st?new Float32Array(2*m):void 0,f=0,v=0,x=0,P=0,w=0,A=0;A<m;A++){var F,G=s[A];d[f++]=G.x,d[f++]=G.y,d[f++]=G.z,t.st&&(F=r(L.Matrix3.multiplyByVector(y,G,I),M),E.Cartesian2.subtract(F,c,F),G=V.CesiumMath.clamp(F.x/n.width,0,1),F=V.CesiumMath.clamp(F.y/n.height,0,1),C[w++]=G,C[w++]=F),t.normal&&(g[v++]=o.x,g[v++]=o.y,g[v++]=o.z),t.tangent&&(b[P++]=i.x,b[P++]=i.y,b[P++]=i.z),t.bitangent&&(h[x++]=l.x,h[x++]=l.y,h[x++]=l.z)}return u=new _.GeometryAttributes,t.position&&(u.position=new D.GeometryAttribute({componentDatatype:T.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:d})),t.normal&&(u.normal=new D.GeometryAttribute({componentDatatype:T.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:g})),t.tangent&&(u.tangent=new D.GeometryAttribute({componentDatatype:T.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:b})),t.bitangent&&(u.bitangent=new D.GeometryAttribute({componentDatatype:T.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:h})),t.st&&(u.st=new D.GeometryAttribute({componentDatatype:T.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:C})),new D.Geometry({attributes:u,indices:e,primitiveType:D.PrimitiveType.TRIANGLES})}(m[g],t,u,a,c,o,i,l)});d.push(b)}y=v.GeometryPipeline.combineInstances(d)[0];y.attributes.position.values=new Float64Array(y.attributes.position.values),y.indices=k.IndexDatatype.createTypedArray(y.attributes.position.values.length/3,y.indices);r=y.attributes;return t.position||delete r.position,new D.Geometry({attributes:r,indices:y.indices,primitiveType:y.primitiveType,boundingSphere:n})}}}},function(e,t){return l.defined(t)&&(e=d.unpack(e,t)),d.createGeometry(e)}});
