/* Graphery SVG library - 0.1.2 */ let r=new WeakMap;function g(s,e){Object.assign(e.prototype,{resizeObserver(a){let k=this,t=this.el.tagName.toLowerCase()==="svg"?this.el:this.parent("svg").el;if(r.has(t))return r.get(t).push(a);r.set(t,[a]);let o={};let d=()=>{let p=t.getScreenCTM();if(p.a!==o.a||p.b!==o.b||p.c!==o.c||p.d!==o.d||p.e!==o.e||p.f!==o.f){let n=r.get(t);for(let _ of n)_(k,p,o);o=p}window.requestAnimationFrame(d)};return d(),k}})}function i(s,e){g(s,e),Object.assign(e.prototype,{keepAspect(){let a=this.closest("svg");switch(this.el.tagName.toLowerCase()){case"text":h(a,this);break;case"line":l(a,this);break}return this}})}function h(s,e){let a=s.getScreenCTM();e.el._keepX=e.x(),e.el._keepY=e.y(),s.resizeObserver((k,t)=>{e.transform(`scale( ${a.a/t.a}, ${a.d/t.d})`),e.x(e.el._keepX/(a.a/t.a)),e.y(e.el._keepY/(a.d/t.d))})}function l(s,e){let a=s.getScreenCTM();e.el._keepX1=e.x1(),e.el._keepX2=e.x2(),e.el._keepY1=e.y1(),e.el._keepY2=e.y2(),s.resizeObserver((k,t)=>{e.transform(`scale( ${a.a/t.a}, ${a.d/t.d})`),e.x1(e.el._keepX1/(a.a/t.a)),e.x2(e.el._keepX2/(a.a/t.a)),e.y1(e.el._keepY1/(a.d/t.d)),e.y2(e.el._keepY2/(a.d/t.d))})}var y=i;export{y as default};