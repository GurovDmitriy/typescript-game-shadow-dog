function t(t,e,s,i){Object.defineProperty(t,e,{get:s,set:i,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var s,i,r,a,n,h,o,c,u,_,d,l,b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},m={},p={},g=b.parcelRequire85f8;null==g&&((g=function(t){if(t in m)return m[t].exports;if(t in p){var e=p[t];delete p[t];var s={id:t,exports:{}};return m[t]=s,e.call(s.exports,s,s.exports),s.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){p[t]=e},b.parcelRequire85f8=g),g.register("hqokU",function(e,s){t(e.exports,"register",function(){return i},function(t){return i=t}),t(e.exports,"resolve",function(){return r},function(t){return r=t});var i,r,a={};i=function(t){for(var e=Object.keys(t),s=0;s<e.length;s++)a[e[s]]=t[e[s]]},r=function(t){var e=a[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),g("hqokU").register(JSON.parse('{"9glld":"index.e9f05672.js","aUfZo":"layer-1.f9314bef.png","eBxSj":"layer-2.f0729543.png","3xtpF":"layer-3.f03874ef.png","hySiX":"layer-4.2f06f6cb.png","bnHCH":"layer-5.74c839b4.png","gAuLI":"shadow_dog.cb635850.png","3iahM":"enemy1.9d120ce0.png","j1Zq5":"enemy2.71053ea9.png","96ont":"enemy3.b1b6f8d3.png","dIY7z":"enemy4.df022c7e.png"}')),(s=n||(n={})).keydown="keydown",s.keyup="keyup",(i=h||(h={})).w="KeyW",i.a="KeyA",i.s="KeyS",i.d="KeyD",i.q="KeyQ",i.e="KeyE",i.space="Space",i.arrowUp="arrowUp",i.arrowDown="arrowDown",i.arrowLeft="arrowLeft",i.arrowRight="arrowRight";class f{constructor(t,e){this._context={...this.createCanvas(),keyboard:new t},this.loop=this.run.bind(this),this._game=new e(this._context),this._date=Date.now(),this._setFps(60)}static create(t,e){return f._instance||(f._instance=new f(t,e)),f._instance}_loop(){this._context.ctx.clearRect(0,0,this._context.canvas.width,this._context.canvas.height),this._game.run()}run(){Date.now()>this._date+this._fps&&(this._loop(),this._date=Date.now()),requestAnimationFrame(this.loop)}createCanvas(){let t=document.getElementById("canvas");if(!t)throw Error("Error found HTMLCanvasElement");let e=t.getContext("2d");return t.width=1e3,t.height=600,{ctx:e,canvas:t}}_setFps(t){let e=Math.floor(1e3/t);this._fps=e>10?e:0}}class w{constructor(){this.subscribers=new Set}subscribe(t){this.subscribers.add(t);let e=this.unsubscribe.bind(this,t);return t.addUnsubscribe&&t.addUnsubscribe(e),e}unsubscribe(t){this.subscribers.delete(t)}notify(t){this.subscribers.forEach(e=>{e.update&&e.update(t)})}}class y{constructor(){this._observable=new w}subscribe(t){return this._observable.subscribe(t)}unsubscribe(t){this._observable.unsubscribe(t)}update(){this._observable.subscribers.forEach(t=>{if(0!==t.model.y){if(t.cb&&"function"==typeof t.cb&&t.cb(),t.model.y+10<0)t.model.y=-10;else{let e=t.model.y;t.model.y=e,t.cbEnd&&"function"==typeof t.cbEnd&&t.cbEnd()}}})}}class v{constructor(){this._observable=new w}update(){let t=Array.from(this._observable.subscribers);t.forEach((t,e)=>{this._findCollision(t,e)})}subscribe(t){return this._observable.subscribe(t)}unsubscribe(t){this._observable.unsubscribe(t)}_findCollision(t,e){let s=Array.from(this._observable.subscribers);for(let i=e+1;i<s.length;i++){let e=this._circle(t.model,s[i].model);e&&(t.cb(s[i]),s[i].cb(t))}}_square(t,e){return t.y<e.y+e.height&&t.y+t.height>e.y&&t.x+t.width>e.x&&t.x<e.x+e.width}_circle(t,e,s=.8){let i=e.x+e.width/2-(t.x+t.width/2),r=e.y+e.height/2-(t.y+t.height/2),a=Math.sqrt(i*i+r*r),n=t.width/2*s+e.width/2*s;return a<n||a===n}}class x{constructor(){this._observable=new w,this.distance=0,this.distanceCurrent=0,this.end=!0}subscribe(t){return this._observable.subscribe(t)}unsubscribe(t){this._observable.unsubscribe(t)}notify(){this._observable.notify(this)}init(t=0,e=0){this.distance=t,this.distanceCurrent=e,this.end=t<e}moveLeft(t){this.end||(this.speed=t,this.distanceCurrent-=t,this._checkDistance(),this.notify())}moveRight(t){this.end||(this.speed=t,this.distanceCurrent+=t,this._checkDistance(),this.notify())}stop(){this.speed=0,this.notify()}setEnd(){this.end=!0,this.speed=0}_checkDistance(){this.distanceCurrent>=this.distance&&this.setEnd()}}class k{constructor(){this._observable=new w}update(){this._observable.notify(void 0)}subscribe(t){return this._observable.subscribe(t)}unsubscribe(t){return this.unsubscribe(t)}}class E{constructor(t){this._canvas=t,this._observable=new w}update(){this._observable.subscribers.forEach(t=>{(t.x<-200||t.x>this._canvas.width+200||t.y<-1*this._canvas.height-200||t.y>500)&&(t.destroy(),this.unsubscribe(t))})}subscribe(t){return this._observable.subscribe(t)}unsubscribe(t){this._observable.unsubscribe(t)}}var S={};S=new URL(g("hqokU").resolve("aUfZo"),import.meta.url).toString();var L={};L=new URL(g("hqokU").resolve("eBxSj"),import.meta.url).toString();var H={};H=new URL(g("hqokU").resolve("3xtpF"),import.meta.url).toString();var U={};U=new URL(g("hqokU").resolve("hySiX"),import.meta.url).toString();var R={};function z(t){let e=new Image;return e.src=t,e}R=new URL(g("hqokU").resolve("bnHCH"),import.meta.url).toString();const M=z(/*@__PURE__*/e(S)),C=z(/*@__PURE__*/e(L)),D=z(/*@__PURE__*/e(H)),q=z(/*@__PURE__*/e(U)),A=z(/*@__PURE__*/e(R)),F=[{image:M,speedModifier:0,width:2400,height:700},{image:D,speedModifier:.1,width:2400,height:700},{image:C,speedModifier:.2,width:2400,height:700},{image:q,speedModifier:.4,width:2400,height:700},{image:A,speedModifier:.6,width:2400,height:700}];class j{constructor(t,e,s){this._width=t,this._height=e,this._x=0,this._y=0,this._x2=0,this._speed=0,this._speedModifier=s}get width(){return this._width}get height(){return this._height}get x(){return this._x}get y(){return this._y}get x2(){return this._x2}run(){this._x<=-this._width&&(this._x=this._width+this._x2-this._speed),this._x2<=-this._width&&(this._x2=this._width+this._x-this._speed),this._x=Math.floor(this._x-this._speed),this._x2=Math.floor(this._x2-this._speed)}updateSpeed(t){this._speed=t*this._speedModifier}}class T{constructor(t,e,s){this._animator=t,this._image=e,this._ctx=s}draw(){this._animator.run(),this._ctx.drawImage(this._image,this._animator.x,this._animator.y,this._animator.width,this._animator.height),this._ctx.drawImage(this._image,this._animator.x2,this._animator.y,this._animator.width,this._animator.height)}updateSpeed(t){this._animator.updateSpeed(t)}}class I{constructor(t,e){this._drawerList=t.map(t=>new T(new j(t.width,t.height,t.speedModifier),t.image,e.ctx)),this.updateSpeed(0)}update(){this._drawerList.forEach(t=>{t.draw()})}updateSpeed(t){this._drawerList.forEach(e=>{e.updateSpeed(t)})}}class W extends I{constructor(t){super(F,t)}}(r=o||(o={})).plain="plain",r.jump="jump",r.fall="fall",r.run="run",r.dizzy="dizzy",r.sit="sit",r.roll="roll",r.bite="bite",r.ko="ko",r.struck="struck";const B={image:{width:6876,height:5230,frameWidth:575,frameHeight:523,columns:12,rows:10},animation:[{name:o.plain,frames:7},{name:o.jump,frames:7},{name:o.fall,frames:7},{name:o.run,frames:9},{name:o.dizzy,frames:11},{name:o.sit,frames:5},{name:o.roll,frames:7},{name:o.bite,frames:7},{name:o.ko,frames:12},{name:o.struck,frames:4}]};var N={};N=new URL(g("hqokU").resolve("gAuLI"),import.meta.url).toString();class O{constructor(t){this.config=t,this._create()}_create(){let t={};this.config.animation.forEach((e,s)=>{let i={location:[]};for(let t=0;t<e.frames;t++){let e=t*this.config.image.frameWidth,r=s*this.config.image.frameHeight;i.location.push({x:e,y:r})}t[e.name]=i}),this.map=t}}class K{constructor(t){this._mapper=t,this._speed=2,this._counter=0,this._gap=null,this._once=!1,this._sx=0,this._sy=0,this._sw=this._mapper.config.image.frameWidth,this._sh=this._mapper.config.image.frameHeight,this._dw=this._mapper.config.image.frameWidth/2,this._dh=this._mapper.config.image.frameHeight/2}get sx(){return this._sx}get sy(){return this._sy}get sw(){return this._sw}get sh(){return this._sh}get dw(){return this._dw}get dh(){return this._dh}get width(){return this._mapper.config.image.frameWidth/2}get height(){return this._mapper.config.image.frameHeight/2}run(t){let e=null;e=this._gap&&this._once?this._gap:Math.floor(this._counter/this._speed)%this._mapper.map[t].location.length,this._sx=this._mapper.config.image.frameWidth*e,this._sy=this._mapper.map[t].location[e].y,this._counter+=1,e===this._mapper.map[t].location.length-1&&(this._counter=0,this._once&&(this._gap=e))}once(t){this._once=t}updateSpeed(t){this._speed=t}}class Z{constructor(){this._x=0,this._y=0}get x(){return this._x}get y(){return this._y}set x(t){this._x+=t}set y(t){this._y-=t}move(t,e){this._x=t,this._y=e}}class V{constructor(t,e,s,i){this._name="",this._animator=t,this._mover=e,this._image=s,this._context=i,this._yNormalize=328}setName(t){this._name=t}draw(){this._animator.run(this._name),this._context.ctx.drawImage(this._image,this._animator.sx,this._animator.sy,this._animator.sw,this._animator.sh,this._mover.x,this._mover.y+this._yNormalize,this._animator.dw,this._animator.dh)}once(t){this._animator.once(t)}updateSpeed(t){this._animator.updateSpeed(t)}}class X{constructor(){this.subscribers={}}update(){Object.values(this.subscribers).forEach(t=>{t.update()})}subscribe(t,e){this.subscribers[t]=e;let s=this.unsubscribe.bind(this,t);return s}unsubscribe(t){delete this.subscribers[t]}destroy(){this.subscribers={}}}class Y{constructor(){this._list=[]}add(t){this._list.push(t)}destroy(){this._list.forEach(t=>{t()})}}class ${constructor(t,e,s){let i=new O(t);this._animator=new K(i),this._mover=new Z,this._drawer=new V(this._animator,this._mover,e,s),this._subscribe=new X,this._unsubscribe=new Y}update(){this._subscribe.update(),this._drawer.draw()}get subscribeList(){return this._subscribe.subscribers}subscribe(t,e){let s=this._subscribe.subscribe(t,e);return this.addUnsubscribe(s),s}unsubscribe(t){this._subscribe.unsubscribe(t)}addUnsubscribe(t){this._unsubscribe.add(t)}animate(t){this._drawer.setName(t)}get x(){return this._mover.x}get y(){return this._mover.y}get width(){return this._animator.width}get height(){return this._animator.height}set x(t){this._mover.x=t}set y(t){this._mover.y=t}move(t,e){this._mover.move(t,e)}destroy(){this._subscribe.destroy(),this._unsubscribe.destroy()}once(t){return this._drawer.once(t),this}updateSpeed(t){this._drawer.updateSpeed(t)}}const J=z(/*@__PURE__*/e(N));class P extends ${constructor(t){super(B,J,t)}plain(){this.animate(o.plain)}jump(){this.animate(o.jump)}fall(){this.animate(o.fall)}run(){this.animate(o.run)}dizzy(){this.animate(o.dizzy)}sit(){this.animate(o.sit)}roll(){this.animate(o.roll)}bite(){this.animate(o.bite)}ko(){this.animate(o.ko)}struck(){this.animate(o.struck)}}class Q{constructor(t,e,s,i){this._character=t,this._cb=e,this._destroy=s,this._update=i}}class G extends Q{constructor(t,e,s){super(t,e,s),this.active=!1,this._distance=0}update(){}make(){this.active=!0,this._cb(),this._distance<=100&&(this._character.x=25,this._distance+=25)}destroy(){this.active=!1,this._character.move(0,null),this._distance=0,this._destroy()}}class tt extends Q{constructor(t,e,s){super(t,e,s),this._distance=0,this._power=0,this._distanceCurrent=0,this.active=!1}update(){this._distance>this._distanceCurrent&&(this._cb(),this._distanceCurrent+=this._power,this._character.y=this._power),this._distanceCurrent>=this._distance&&(this._distance=0),0===this._character.y&&(this.active=!1)}make(t=200,e=20){0===this._character.y&&(this.active=!0,this._distance=t,this._power=e,this._distanceCurrent=0)}destroy(){this._destroy()}}class te extends Q{constructor(t,e,s,i){super(t,e,s,i),this._value=100}update(){this._update()}get value(){return this._value}make(t=10){this._value-t>0?this._value-=t:this._value=0,this._cb()}destroy(t=10){this._value+t<100?this._value+=t:this._value=100,this._destroy()}}class ts extends Q{constructor(t,e,s){super(t,e,s),this._date=0,this._model=null,this.active=!1,this._delay=!1}update(){}make(t,e=20,s=0,i=0){if(0===this._date&&(this._date=Date.now()),!(!this._delay&&Date.now()<this._date+i)){if(this.active=!0,Date.now()>this._date+s){this._delay=!0;let s=t||this._model;if(null!==s&&s.model.subscribeList.health){let t=s.model.subscribeList.health;t.make(e)}this._date=Date.now()}this._cb(),this._unBind()}}bind(t){this._model=t}destroy(){this._destroy(),this._unBind(),this.active=!1}_unBind(){this._model=null}}class ti extends Q{constructor(t,e,s){super(t,e,s),this._date=0,this._model=null,this._distance=0,this.active=!1}update(){}make(t,e=20,s=2e3,i=3e3){if(0===this._date&&(this._date=Date.now()),0!==this._date&&Date.now()>this._date+i&&(this._date=0,this._distance=0),Date.now()<this._date+s){this.active=!0,this._cb(),this._distance<=400&&(this._character.x=40,this._distance+=40);let s=t||this._model;if(null!==s&&s.model.subscribeList.health){let t=s.model.subscribeList.health;t.make(e)}}else this.destroy();this._unBind()}bind(t){this._model=t}destroy(){this._unBind(),this._destroy(),this._character.move(0,null),this.active=!1}_unBind(){this._model=null}}class tr extends Q{constructor(t,e,s){super(t,e,s),this._date=Date.now()}update(){}make(t=5,e=2e3){let s=this._character.subscribeList?.health;s&&Date.now()>this._date+e&&(s.destroy(t),this._date=Date.now()),this._cb()}destroy(){this._destroy()}}(a=c||(c={})).start="start",a.stop="stop";class ta{constructor(t,e){this._instance=t,this._context=e}update(t){t.end&&this._context.switcher.execute("restart"),this._instance.updateSpeed(t.speed)}}class tn{constructor(t,e,s,i=!0,r="",a=!1){this._model=t,this._ctx=e,this._position=s,this._percentage=i,this._invert=a,this.name=r}update(){this._setValue(),this.draw()}_setValue(){let t=this._model.value,e=this._model.amount;"string"==typeof t?this._value=t:"number"!=typeof t||this._percentage?"number"==typeof t&&this._percentage&&(e||0===e)&&(t<0?this._value=0:this._value=Math.round(100*t/e)):this._value=t,this._invert&&"number"==typeof this._value&&(this._value=100-this._value)}}class th extends tn{constructor(t,e,s,i=!0,r="Health",a=100,n=20){super(t,e,s,i,r),this._width=a,this._height=n}draw(){this._ctx.rect(this._position.x,this._position.y,this._width,this._height),this._ctx.stroke(),this._ctx.fillRect(this._position.x,this._position.y,this._value,this._height),this._ctx.font="16px Arial",this._ctx.fillText(this.name,this._position.x,this._position.y+40)}}class to extends tn{constructor(t,e,s,i=!0,r="Distance",a=!0){super(t,e,s,i,r,a)}draw(){this._ctx.font="16px Arial",this._ctx.fillText(String(this._value),this._position.x,this._position.y),this._ctx.fillText(this.name,this._position.x,this._position.y+20)}}class tc{constructor(t){this._instance=t}get value(){return this._instance.distanceCurrent}get amount(){return this._instance.distance}}class tu{constructor(t){this._instance=t}get value(){return this._instance.subscribeList.health.value}get amount(){return 100}}class t_{constructor(t){this._switcher=t}execute(){this._switcher.execute("stop"),setTimeout(()=>this._switcher.execute("start"),3e3)}}(u||(u={})).plain="plain";const td={image:{width:1768,height:155,frameWidth:293,frameHeight:155,columns:6,rows:1},animation:[{name:u.plain,frames:6}]};var tl={};tl=new URL(g("hqokU").resolve("3iahM"),import.meta.url).toString();const tb=z(/*@__PURE__*/e(tl));class tm extends ${constructor(t){super(td,tb,t)}plain(){this.animate(u.plain)}}(_||(_={})).plain="plain";const tp={image:{width:1596,height:188,frameWidth:266,frameHeight:188,columns:6,rows:1},animation:[{name:_.plain,frames:6}]};var tg={};tg=new URL(g("hqokU").resolve("j1Zq5"),import.meta.url).toString();const tf=z(/*@__PURE__*/e(tg));class tw extends ${constructor(t){super(tp,tf,t)}plain(){this.animate(_.plain)}}(d||(d={})).plain="plain";const ty={image:{width:1308,height:177,frameWidth:218,frameHeight:177,columns:6,rows:1},animation:[{name:d.plain,frames:6}]};var tv={};tv=new URL(g("hqokU").resolve("96ont"),import.meta.url).toString();const tx=z(/*@__PURE__*/e(tv));class tk extends ${constructor(t){super(ty,tx,t)}plain(){this.animate(d.plain)}}(l||(l={})).plain="plain";const tE={image:{width:1917,height:212,frameWidth:213,frameHeight:212,columns:6,rows:1},animation:[{name:l.plain,frames:6}]};var tS={};tS=new URL(g("hqokU").resolve("dIY7z"),import.meta.url).toString();const tL=z(/*@__PURE__*/e(tS));class tH extends ${constructor(t){super(tE,tL,t)}plain(){this.animate(l.plain)}}function tU(t,e){return Math.round(t-.5+Math.random()*(e-t+1))}class tR{constructor(t,e){this._x=t.x,this._y=t.y,this._angle=0,this._character=t,this._mode=e}update(){this[`_${this._mode}`]()}_random(){this._x=this._character.x+this.getRandomInteger(-1,1),this._y=this._character.y+this.getRandomInteger(-1,1),this._move()}_move(){this._character.move(this._x,this._y)}getRandomInteger(t,e){return Math.round(t-.5+Math.random()*(e-t+1))}}class tz{constructor(t){this._instance=t}update(t){this._instance.x=-1*t.speed}addUnsubscribe(t){this._instance.addUnsubscribe(t)}}class tM{constructor(){this._commands=[]}install(t,e){this._commands[t]=e}execute(t){this._commands[t]?this._commands[t].execute():console.error(`Not found command: ${t}`)}}class tC{start(t){t.context.keyboard.destroy(),t.init()}stop(t){t.context.camera.setEnd()}}class tD{constructor(t,e){this._receiver=t,this._game=e}execute(){this._receiver.start(this._game)}}class tq{constructor(t,e){this._receiver=t,this._game=e}execute(){this._receiver.stop(this._game)}}class tA{constructor(t){this._invoker=new tM,this._receiver=new tC,this._game=t,this.status=c.start,this._invoker.install(c.start,new tD(this._receiver,this._game)),this._invoker.install(c.stop,new tq(this._receiver,this._game))}execute(t){this._invoker.execute(t),this.status=t}install(t,e){this._invoker.install(t,e)}}const tF=f.create(class{constructor(){this._listeners=[]}define(t,e,s=()=>{},i=!1){let r=null,a={action:n.keydown,cb(s){s.code===t&&(i?function t(){clearTimeout(r),r=setTimeout(()=>{e(),t()},20)}():e())}};document.addEventListener(a.action,a.cb);let h={action:n.keyup,cb(e){e.code===t&&(clearTimeout(r),s())}};document.addEventListener(h.action,h.cb),this._listeners.push(a),this._listeners.push(h)}destroy(){this._listeners.forEach(t=>{document.removeEventListener(t.action,t.cb)})}},class{constructor(t){this._contextEngine=t,this.init()}init(){this._context={ctx:this._contextEngine.ctx,canvas:this._contextEngine.canvas,keyboard:this._contextEngine.keyboard,physics:new y,collision:new v,camera:new x,destroyer:new E(this._contextEngine.canvas),initializer:new k,switcher:new tA(this)},function(t){// ******
// command
// ******
t.switcher.install("restart",new t_(t.switcher));// ******
// background
// ******
let e=new W(t);!function(t,e){t.camera.init(2e4);let s=new ta(e,t);t.camera.subscribe(s)}(t,e);// ******
// shadowDog
// ******
let s=new P(t);s.plain(),function(t,e){t.physics.subscribe({model:e,cb:()=>e.fall(),cbEnd:()=>e.plain()}),t.collision.subscribe({model:e,cb:t=>{let s=e.subscribeList.bite,i=e.subscribeList.roll;s.active&&s.bind(t),i.active&&i.bind(t)}}),e.subscribe("health",new te(e,()=>{s.health.cb()},()=>{s.health.destroy()},()=>{s.health.update()})),e.subscribe("run",new G(e,()=>{t.camera.moveRight(10),e.run()},()=>{t.camera.stop(),e.plain()})),e.subscribe("jump",new tt(e,()=>e.jump(),()=>e.plain())),e.subscribe("bite",new ts(e,()=>e.bite(),()=>e.plain())),e.subscribe("roll",new ti(e,()=>{e.roll()},()=>{e.plain()})),e.subscribe("sit",new tr(e,()=>e.sit(),()=>e.plain()));let s=function(){let s;let i=e.subscribeList.health;return{health:{cb:()=>{e.struck(),setTimeout(()=>e.plain(),200),0===i.value&&t.switcher.status===c.start&&t.switcher.execute("restart")},destroy:()=>{e.plain()},update:(s=!1,()=>{i.value<50&&!s&&(e.dizzy(),setTimeout(()=>{s=!0,e.plain()},2e3)),0===i.value&&e.once(!0).ko()})}}}()}(t,s),function(t,e){let s=e.subscribeList.run,i=e.subscribeList.jump,r=e.subscribeList.bite,a=e.subscribeList.roll,n=e.subscribeList.sit;t.keyboard.define(h.d,()=>{a.active||s.make()},()=>{a.active||s.destroy()},!0),t.keyboard.define(h.w,()=>{i.make(400,30)},()=>{i.destroy()}),t.keyboard.define(h.q,()=>{i.make(600,40)},()=>{i.destroy()}),t.keyboard.define(h.e,()=>{r.make(null,50,200)},()=>{r.destroy()}),t.keyboard.define(h.space,()=>{!s.active&&(i.active||a.make(null,100,1e3))},()=>{!s.active&&(i.active||a.destroy())}),t.keyboard.define(h.s,()=>{n.make()},()=>{n.destroy()})}(t,s),function(t){let e=[tm,tw,tk,tH],s=(t,e)=>(t-e)%200==0,i=()=>new e[tU(0,e.length-1)](t),r=()=>[tU(t.canvas.width-50,t.canvas.width-100),tU(-100,400)];t.camera.subscribe({update(e){if(s(e.distance,e.distanceCurrent)){let e=i();e.plain(),e.move(...r()),e.subscribe("ai",new tR(e,"random")),function(t,e){t.destroyer.subscribe(e);let s=new tz(e);t.camera.subscribe(s),t.collision.subscribe({model:e,cb:t=>{if(t){let s=e.subscribeList.bite;s&&s.make(t,10,1e3,100)}}}),e.subscribe("health",new te(e,()=>{e.plain()},()=>{},()=>{let t=e.subscribeList.health;0===t.value&&e.destroy()})),e.subscribe("bite",new ts(e,()=>{},()=>{}))}(t,e),t.initializer.subscribe(e)}}})}(t);// ******
// display
// ******
let i=new th(new tu(s),t.ctx,{x:20,y:20}),r=new to(new tc(t.camera),t.ctx,{x:20,y:100});// init
t.initializer.subscribe(e),t.initializer.subscribe(s),t.initializer.subscribe(i),t.initializer.subscribe(r)}(this._context)}run(){this._context.destroyer.update(),this._context.physics.update(),this._context.collision.update(),this._context.initializer.update()}get context(){return this._context}});tF.run();//# sourceMappingURL=index.e9f05672.js.map

//# sourceMappingURL=index.e9f05672.js.map