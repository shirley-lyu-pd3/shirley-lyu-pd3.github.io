import{S as s,i as e,s as t,e as a,a as n,t as i,c,b as r,f as o,g as l,d,h as v,j as u,k as f,n as p,o as g}from"./client.3c6d0298.js";function h(s){let e,t,g,h,m,w,E,I,k,x,D,b,y,V,M,j,G,L,X,Y,_,A,T;return{c(){e=a("div"),t=a("div"),g=a("img"),m=n(),w=a("div"),E=a("div"),I=n(),k=a("img"),D=n(),b=a("a"),y=i("Later"),V=n(),M=a("a"),j=i("Exercise"),G=n(),L=a("div"),X=a("img"),_=n(),A=a("div"),T=i("Move this to keep working anyway"),this.h()},l(s){e=c(s,"DIV",{id:!0,class:!0});var a=r(e);t=c(a,"DIV",{id:!0,class:!0});var n=r(t);g=c(n,"IMG",{src:!0,alt:!0,class:!0}),n.forEach(o),m=l(a),w=c(a,"DIV",{id:!0,class:!0});var i=r(w);E=c(i,"DIV",{id:!0,class:!0}),r(E).forEach(o),I=l(i),k=c(i,"IMG",{id:!0,src:!0,alt:!0,class:!0}),D=l(i),b=c(i,"A",{href:!0,class:!0,id:!0});var v=r(b);y=d(v,"Later"),v.forEach(o),V=l(i),M=c(i,"A",{href:!0,class:!0,id:!0});var u=r(M);j=d(u,"Exercise"),u.forEach(o),i.forEach(o),G=l(a),L=c(a,"DIV",{id:!0,class:!0});var f=r(L);X=c(f,"IMG",{src:!0,alt:!0,id:!0,class:!0}),_=l(f),A=c(f,"DIV",{id:!0,class:!0});var p=r(A);T=d(p,"Move this to keep working anyway"),p.forEach(o),f.forEach(o),a.forEach(o),this.h()},h(){g.src!==(h="background2.jpg")&&v(g,"src","background2.jpg"),v(g,"alt","background"),v(g,"class","svelte-1s079ve"),v(t,"id","background"),v(t,"class","svelte-1s079ve"),v(E,"id","card"),v(E,"class","svelte-1s079ve"),v(k,"id","warning"),k.src!==(x="warning_tri.png")&&v(k,"src","warning_tri.png"),v(k,"alt","Warning Triangle"),v(k,"class","svelte-1s079ve"),v(b,"href","static-standing"),v(b,"class","button svelte-1s079ve"),v(b,"id","later"),v(M,"href","exercise"),v(M,"class","button svelte-1s079ve"),v(M,"id","exercise"),v(w,"id","inner-container"),v(w,"class","svelte-1s079ve"),X.src!==(Y="pointer.png")&&v(X,"src","pointer.png"),v(X,"alt","pointer"),v(X,"id","pointer"),v(X,"class","svelte-1s079ve"),v(A,"id","tip_text"),v(A,"class","svelte-1s079ve"),v(L,"id","tip"),v(L,"class","svelte-1s079ve"),v(e,"id","container"),v(e,"class","svelte-1s079ve")},m(s,a){u(s,e,a),f(e,t),f(t,g),f(e,m),f(e,w),f(w,E),f(w,I),f(w,k),f(w,D),f(w,b),f(b,y),f(w,V),f(w,M),f(M,j),f(e,G),f(e,L),f(L,X),f(L,_),f(L,A),f(A,T)},p:p,i:p,o:p,d(s){s&&o(e)}}}function m(s){return g((function(){!function(s){var e=0,t=0,a=0,n=0;function i(i){(i=i||window.event).preventDefault(),e=a-i.clientX,t=n-i.clientY,a=i.clientX,n=i.clientY,s.style.top=s.offsetTop-t+"px",s.style.left=s.offsetLeft-e+"px"}function c(){document.onmouseup=null,document.onmousemove=null}s.onmousedown=function(s){(s=s||window.event).preventDefault(),a=s.clientX,n=s.clientY,document.onmouseup=c,document.onmousemove=i}}(document.getElementById("warning"))})),[]}export default class extends s{constructor(s){super(),e(this,s,m,h,t,{})}}
