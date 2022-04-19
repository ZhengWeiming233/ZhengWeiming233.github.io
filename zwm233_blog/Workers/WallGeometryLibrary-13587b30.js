define(["exports","./when-ca071c93","./Math-59a6c1e7","./Cartesian2-5bd3176a","./arrayRemoveDuplicates-f8b74e4d","./PolylinePipeline-fe320a77"],function(e,f,A,C,w,P){"use strict";var i={};var b=new C.Cartographic,M=new C.Cartographic;function E(e,i,t,a){var r=(i=w.arrayRemoveDuplicates(i,C.Cartesian3.equalsEpsilon)).length;if(!(r<2)){var n=f.defined(a),o=f.defined(t),l=new Array(r),s=new Array(r),h=new Array(r),g=i[0];l[0]=g;var p=e.cartesianToCartographic(g,b);o&&(p.height=t[0]),s[0]=p.height,h[0]=n?a[0]:0;for(var u,c,d=s[0]===h[0],v=1,y=1;y<r;++y){var m=i[y],P=e.cartesianToCartographic(m,M);o&&(P.height=t[y]),d=d&&0===P.height,u=p,c=P,A.CesiumMath.equalsEpsilon(u.latitude,c.latitude,A.CesiumMath.EPSILON10)&&A.CesiumMath.equalsEpsilon(u.longitude,c.longitude,A.CesiumMath.EPSILON10)?p.height<P.height&&(s[v-1]=P.height):(l[v]=m,s[v]=P.height,h[v]=n?a[y]:0,d=d&&s[v]===h[v],C.Cartographic.clone(P,p),++v)}if(!(d||v<2))return l.length=v,s.length=v,h.length=v,{positions:l,topHeights:s,bottomHeights:h}}}var F=new Array(2),H=new Array(2),L={positions:void 0,height:void 0,granularity:void 0,ellipsoid:void 0};i.computePositions=function(e,i,t,a,r,n){var o=E(e,i,t,a);if(f.defined(o)){i=o.positions,t=o.topHeights,a=o.bottomHeights;var l,s,h=i.length,o=h-2,g=A.CesiumMath.chordLength(r,e.maximumRadius),p=L;if(p.minDistance=g,p.ellipsoid=e,n){for(var u=0,c=0;c<h-1;c++)u+=P.PolylinePipeline.numberOfPoints(i[c],i[c+1],g)+1;l=new Float64Array(3*u),s=new Float64Array(3*u);var d=F,v=H;p.positions=d,p.height=v;var y=0;for(c=0;c<h-1;c++){d[0]=i[c],d[1]=i[c+1],v[0]=t[c],v[1]=t[c+1];var m=P.PolylinePipeline.generateArc(p);l.set(m,y),v[0]=a[c],v[1]=a[c+1],s.set(P.PolylinePipeline.generateArc(p),y),y+=m.length}}else p.positions=i,p.height=t,l=new Float64Array(P.PolylinePipeline.generateArc(p)),p.height=a,s=new Float64Array(P.PolylinePipeline.generateArc(p));return{bottomPositions:s,topPositions:l,numCorners:o}}},e.WallGeometryLibrary=i});
