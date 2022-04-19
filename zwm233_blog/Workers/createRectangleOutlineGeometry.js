define(["./when-36d93783","./Cartesian2-ea0bdebd","./GeometryOffsetAttribute-157324ea","./Transforms-0dc324f8","./ComponentDatatype-9a953f81","./Check-89257fc2","./GeometryAttribute-f9d8dfd6","./GeometryAttributes-08e0be8a","./IndexDatatype-d09b3e61","./Math-9699ca15","./PolygonPipeline-6b218338","./RectangleGeometryLibrary-7b6dd423","./RuntimeError-a449ba63","./WebGLConstants-95ceb4e9","./EllipsoidRhumbLine-765f7b5a"],function(d,s,p,c,m,e,_,v,E,g,f,A,t,i,a){"use strict";var h=new c.BoundingSphere,y=new c.BoundingSphere,G=new s.Cartesian3,b=new s.Rectangle;function R(e,t){var i=e._ellipsoid,a=t.height,r=t.width,n=t.northCap,o=t.southCap,l=a,u=2,s=0,e=4;n&&(--u,--l,s+=1,e-=2),o&&(--u,--l,s+=1,e-=2),s+=u*r+2*l-e;var d,p=new Float64Array(3*s),c=0,g=0,f=G;if(n)A.RectangleGeometryLibrary.computePosition(t,i,!1,g,0,f),p[c++]=f.x,p[c++]=f.y,p[c++]=f.z;else for(d=0;d<r;d++)A.RectangleGeometryLibrary.computePosition(t,i,!1,g,d,f),p[c++]=f.x,p[c++]=f.y,p[c++]=f.z;for(d=r-1,g=1;g<a;g++)A.RectangleGeometryLibrary.computePosition(t,i,!1,g,d,f),p[c++]=f.x,p[c++]=f.y,p[c++]=f.z;if(g=a-1,!o)for(d=r-2;0<=d;d--)A.RectangleGeometryLibrary.computePosition(t,i,!1,g,d,f),p[c++]=f.x,p[c++]=f.y,p[c++]=f.z;for(d=0,g=a-2;0<g;g--)A.RectangleGeometryLibrary.computePosition(t,i,!1,g,d,f),p[c++]=f.x,p[c++]=f.y,p[c++]=f.z;for(var o=p.length/3*2,h=E.IndexDatatype.createTypedArray(p.length/3,o),y=0,b=0;b<p.length/3-1;b++)h[y++]=b,h[y++]=b+1;h[y++]=p.length/3-1,h[y++]=0;o=new _.Geometry({attributes:new v.GeometryAttributes,primitiveType:_.PrimitiveType.LINES});return o.attributes.position=new _.GeometryAttribute({componentDatatype:m.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:p}),o.indices=h,o}function P(e){var t=(e=d.defaultValue(e,d.defaultValue.EMPTY_OBJECT)).rectangle,i=d.defaultValue(e.granularity,g.CesiumMath.RADIANS_PER_DEGREE),a=d.defaultValue(e.ellipsoid,s.Ellipsoid.WGS84),r=d.defaultValue(e.rotation,0),n=d.defaultValue(e.height,0),o=d.defaultValue(e.extrudedHeight,n);this._rectangle=s.Rectangle.clone(t),this._granularity=i,this._ellipsoid=a,this._surfaceHeight=Math.max(n,o),this._rotation=r,this._extrudedHeight=Math.min(n,o),this._offsetAttribute=e.offsetAttribute,this._workerName="createRectangleOutlineGeometry"}P.packedLength=s.Rectangle.packedLength+s.Ellipsoid.packedLength+5,P.pack=function(e,t,i){return i=d.defaultValue(i,0),s.Rectangle.pack(e._rectangle,t,i),i+=s.Rectangle.packedLength,s.Ellipsoid.pack(e._ellipsoid,t,i),i+=s.Ellipsoid.packedLength,t[i++]=e._granularity,t[i++]=e._surfaceHeight,t[i++]=e._rotation,t[i++]=e._extrudedHeight,t[i]=d.defaultValue(e._offsetAttribute,-1),t};var w=new s.Rectangle,L=s.Ellipsoid.clone(s.Ellipsoid.UNIT_SPHERE),C={rectangle:w,ellipsoid:L,granularity:void 0,height:void 0,rotation:void 0,extrudedHeight:void 0,offsetAttribute:void 0};P.unpack=function(e,t,i){t=d.defaultValue(t,0);var a=s.Rectangle.unpack(e,t,w);t+=s.Rectangle.packedLength;var r=s.Ellipsoid.unpack(e,t,L);t+=s.Ellipsoid.packedLength;var n=e[t++],o=e[t++],l=e[t++],u=e[t++],t=e[t];return d.defined(i)?(i._rectangle=s.Rectangle.clone(a,i._rectangle),i._ellipsoid=s.Ellipsoid.clone(r,i._ellipsoid),i._surfaceHeight=o,i._rotation=l,i._extrudedHeight=u,i._offsetAttribute=-1===t?void 0:t,i):(C.granularity=n,C.height=o,C.rotation=l,C.extrudedHeight=u,C.offsetAttribute=-1===t?void 0:t,new P(C))};var D=new s.Cartographic;return P.createGeometry=function(e){var t=e._rectangle,i=e._ellipsoid,a=A.RectangleGeometryLibrary.computeOptions(t,e._granularity,e._rotation,0,b,D);if(!g.CesiumMath.equalsEpsilon(t.north,t.south,g.CesiumMath.EPSILON10)&&!g.CesiumMath.equalsEpsilon(t.east,t.west,g.CesiumMath.EPSILON10)){var r,n,o,l,u=e._surfaceHeight,s=e._extrudedHeight;return u=!g.CesiumMath.equalsEpsilon(u,s,0,g.CesiumMath.EPSILON2)?(n=function(e,t){var i=e._surfaceHeight,a=e._extrudedHeight,r=e._ellipsoid,n=a,o=i,l=R(e,t),a=t.height,i=t.width,u=(e=f.PolygonPipeline.scaleToGeodeticHeight(l.attributes.position.values,o,r,!1)).length;(o=new Float64Array(2*u)).set(e),n=f.PolygonPipeline.scaleToGeodeticHeight(l.attributes.position.values,n,r),o.set(n,u),l.attributes.position.values=o,r=t.northCap,n=t.southCap,t=4,r&&--t,n&&--t;for(var t=2*(o.length/3+t),s=E.IndexDatatype.createTypedArray(o.length/3,t),u=o.length/6,d=0,p=0;p<u-1;p++)s[d++]=p,s[d++]=p+1,s[d++]=p+u,s[d++]=p+u+1;return s[d++]=u-1,s[d++]=0,s[d++]=u+u-1,s[d++]=u,s[d++]=0,s[d++]=u,a=r?a-1:(s[d++]=r=i-1,s[d++]=r+u,i+a-2),s[d++]=a,s[d++]=a+u,n||(s[d++]=a=i+a-1,s[d]=a+u),l.indices=s,l}(e,a),d.defined(e._offsetAttribute)&&(r=n.attributes.position.values.length/3,o=new Uint8Array(r),o=e._offsetAttribute===p.GeometryOffsetAttribute.TOP?p.arrayFill(o,1,0,r/2):(l=e._offsetAttribute===p.GeometryOffsetAttribute.NONE?0:1,p.arrayFill(o,l)),n.attributes.applyOffset=new _.GeometryAttribute({componentDatatype:m.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:o})),o=c.BoundingSphere.fromRectangle3D(t,i,u,y),s=c.BoundingSphere.fromRectangle3D(t,i,s,h),c.BoundingSphere.union(o,s)):((n=R(e,a)).attributes.position.values=f.PolygonPipeline.scaleToGeodeticHeight(n.attributes.position.values,u,i,!1),d.defined(e._offsetAttribute)&&(a=n.attributes.position.values.length,a=new Uint8Array(a/3),l=e._offsetAttribute===p.GeometryOffsetAttribute.NONE?0:1,p.arrayFill(a,l),n.attributes.applyOffset=new _.GeometryAttribute({componentDatatype:m.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:a})),c.BoundingSphere.fromRectangle3D(t,i,u)),new _.Geometry({attributes:n.attributes,indices:n.indices,primitiveType:_.PrimitiveType.LINES,boundingSphere:u,offsetAttribute:e._offsetAttribute})}},function(e,t){return(e=d.defined(t)?P.unpack(e,t):e)._ellipsoid=s.Ellipsoid.clone(e._ellipsoid),e._rectangle=s.Rectangle.clone(e._rectangle),P.createGeometry(e)}});
