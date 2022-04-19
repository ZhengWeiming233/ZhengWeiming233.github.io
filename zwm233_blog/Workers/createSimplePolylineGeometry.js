define(["./when-36d93783","./Cartesian2-ea0bdebd","./ArcType-2b58731c","./Transforms-0dc324f8","./Color-733a35f4","./ComponentDatatype-9a953f81","./Check-89257fc2","./GeometryAttribute-f9d8dfd6","./GeometryAttributes-08e0be8a","./IndexDatatype-d09b3e61","./Math-9699ca15","./PolylinePipeline-6613b2a4","./RuntimeError-a449ba63","./WebGLConstants-95ceb4e9","./EllipsoidGeodesic-bd610e02","./EllipsoidRhumbLine-765f7b5a","./IntersectionTests-e942b823","./Plane-2ce3bda6"],function(L,V,x,S,I,R,e,O,M,U,N,F,o,t,r,a,l,i){"use strict";function y(e){var o=(e=L.defaultValue(e,L.defaultValue.EMPTY_OBJECT)).positions,t=e.colors,r=L.defaultValue(e.colorsPerVertex,!1);this._positions=o,this._colors=t,this._colorsPerVertex=r,this._arcType=L.defaultValue(e.arcType,x.ArcType.GEODESIC),this._granularity=L.defaultValue(e.granularity,N.CesiumMath.RADIANS_PER_DEGREE),this._ellipsoid=L.defaultValue(e.ellipsoid,V.Ellipsoid.WGS84),this._workerName="createSimplePolylineGeometry";o=1+o.length*V.Cartesian3.packedLength;o+=L.defined(t)?1+t.length*I.Color.packedLength:1,this.packedLength=o+V.Ellipsoid.packedLength+3}y.pack=function(e,o,t){var r;t=L.defaultValue(t,0);var a=e._positions,l=a.length;for(o[t++]=l,r=0;r<l;++r,t+=V.Cartesian3.packedLength)V.Cartesian3.pack(a[r],o,t);var i=e._colors,l=L.defined(i)?i.length:0;for(o[t++]=l,r=0;r<l;++r,t+=I.Color.packedLength)I.Color.pack(i[r],o,t);return V.Ellipsoid.pack(e._ellipsoid,o,t),t+=V.Ellipsoid.packedLength,o[t++]=e._colorsPerVertex?1:0,o[t++]=e._arcType,o[t]=e._granularity,o},y.unpack=function(e,o,t){o=L.defaultValue(o,0);for(var r=e[o++],a=new Array(r),l=0;l<r;++l,o+=V.Cartesian3.packedLength)a[l]=V.Cartesian3.unpack(e,o);var i=0<(r=e[o++])?new Array(r):void 0;for(l=0;l<r;++l,o+=I.Color.packedLength)i[l]=I.Color.unpack(e,o);var n=V.Ellipsoid.unpack(e,o);o+=V.Ellipsoid.packedLength;var s=1===e[o++],p=e[o++],d=e[o];return L.defined(t)?(t._positions=a,t._colors=i,t._ellipsoid=n,t._colorsPerVertex=s,t._arcType=p,t._granularity=d,t):new y({positions:a,colors:i,ellipsoid:n,colorsPerVertex:s,arcType:p,granularity:d})};var H=new Array(2),W=new Array(2),Y={positions:H,height:W,ellipsoid:void 0,minDistance:void 0,granularity:void 0};return y.createGeometry=function(e){var o=e._positions,t=e._colors,r=e._colorsPerVertex,a=e._arcType,l=e._granularity,e=e._ellipsoid,i=N.CesiumMath.chordLength(l,e.maximumRadius),n=L.defined(t)&&!r,s=o.length,p=0;if(a===x.ArcType.GEODESIC||a===x.ArcType.RHUMB){var d,y,c=a===x.ArcType.GEODESIC?(d=N.CesiumMath.chordLength(l,e.maximumRadius),y=F.PolylinePipeline.numberOfPoints,F.PolylinePipeline.generateArc):(d=l,y=F.PolylinePipeline.numberOfPointsRhumbLine,F.PolylinePipeline.generateRhumbArc),f=F.PolylinePipeline.extractHeights(o,e),u=Y;if(a===x.ArcType.GEODESIC?u.minDistance=i:u.granularity=l,u.ellipsoid=e,n){for(var h=0,C=0;C<s-1;C++)h+=y(o[C],o[C+1],d)+1;B=new Float64Array(3*h),A=new Uint8Array(4*h),u.positions=H,u.height=W;var T=0;for(C=0;C<s-1;++C){H[0]=o[C],H[1]=o[C+1],W[0]=f[C],W[1]=f[C+1];var g=c(u);if(L.defined(t))for(var m=g.length/3,b=t[C],P=0;P<m;++P)A[T++]=I.Color.floatToByte(b.red),A[T++]=I.Color.floatToByte(b.green),A[T++]=I.Color.floatToByte(b.blue),A[T++]=I.Color.floatToByte(b.alpha);B.set(g,p),p+=g.length}}else if(u.positions=o,u.height=f,B=new Float64Array(c(u)),L.defined(t)){for(A=new Uint8Array(B.length/3*4),C=0;C<s-1;++C)p=function(e,o,t,r,a,l,i){var n=F.PolylinePipeline.numberOfPoints(e,o,a),s=t.red,p=t.green,d=t.blue,y=t.alpha,c=r.red,e=r.green,o=r.blue,a=r.alpha;if(I.Color.equals(t,r)){for(g=0;g<n;g++)l[i++]=I.Color.floatToByte(s),l[i++]=I.Color.floatToByte(p),l[i++]=I.Color.floatToByte(d),l[i++]=I.Color.floatToByte(y);return i}for(var f=(c-s)/n,u=(e-p)/n,h=(o-d)/n,C=(a-y)/n,T=i,g=0;g<n;g++)l[T++]=I.Color.floatToByte(s+g*f),l[T++]=I.Color.floatToByte(p+g*u),l[T++]=I.Color.floatToByte(d+g*h),l[T++]=I.Color.floatToByte(y+g*C);return T}(o[C],o[C+1],t[C],t[C+1],i,A,p);var _=t[s-1];A[p++]=I.Color.floatToByte(_.red),A[p++]=I.Color.floatToByte(_.green),A[p++]=I.Color.floatToByte(_.blue),A[p++]=I.Color.floatToByte(_.alpha)}}else{var v=n?2*s-2:s,B=new Float64Array(3*v),A=L.defined(t)?new Uint8Array(4*v):void 0,E=0,k=0;for(C=0;C<s;++C){var G=o[C];if(n&&0<C&&(V.Cartesian3.pack(G,B,E),E+=3,b=t[C-1],A[k++]=I.Color.floatToByte(b.red),A[k++]=I.Color.floatToByte(b.green),A[k++]=I.Color.floatToByte(b.blue),A[k++]=I.Color.floatToByte(b.alpha)),n&&C===s-1)break;V.Cartesian3.pack(G,B,E),E+=3,L.defined(t)&&(b=t[C],A[k++]=I.Color.floatToByte(b.red),A[k++]=I.Color.floatToByte(b.green),A[k++]=I.Color.floatToByte(b.blue),A[k++]=I.Color.floatToByte(b.alpha))}}_=new M.GeometryAttributes;_.position=new O.GeometryAttribute({componentDatatype:R.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:B}),L.defined(t)&&(_.color=new O.GeometryAttribute({componentDatatype:R.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:4,values:A,normalize:!0})),v=B.length/3;var w=U.IndexDatatype.createTypedArray(v,2*(v-1)),D=0;for(C=0;C<v-1;++C)w[D++]=C,w[D++]=C+1;return new O.Geometry({attributes:_,indices:w,primitiveType:O.PrimitiveType.LINES,boundingSphere:S.BoundingSphere.fromPoints(o)})},function(e,o){return(e=L.defined(o)?y.unpack(e,o):e)._ellipsoid=V.Ellipsoid.clone(e._ellipsoid),y.createGeometry(e)}});
