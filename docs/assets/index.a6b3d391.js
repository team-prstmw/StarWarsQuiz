!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();class e{constructor(e=[],t=null,n="",r={}){this.classList=e,this.htmlTag=t,this.label=n,this.props=r}render(){const e=document.createElement(this.htmlTag);Array.isArray(this.classList)&&this.classList.forEach((t=>{e.classList.add(t)})),this.label&&(e.innerHTML=this.label);for(const[t,n]of Object.entries(this.props))e.setAttribute(t,n);return e}}class t extends e{constructor(e="",t=[],n=null){super(t,n,e)}}class n extends e{constructor(e=[],t){super(e,t)}}class r extends e{constructor(e="",t=[],n="p"){super(t,n,e)}}class o{render(){const e=document.createElement("div"),o=new t("Mode Rules",["main__subheader"],"h3"),s=new r("You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select who from Star Wars is showed on the left (Jar Jar Binks right now) from available options.",["main__description"]),i=new n(["main__subheader-container"],"div").render(),a=document.createElement("img");return a.src="/StarWarsQuiz/school_24px.svg",i.appendChild(a),i.appendChild(o.render()),e.append(i),e.append(s.render()),e}}class s extends e{constructor({label:e="",onClick:t=null,buttonType:n="default",imageSrc:r=null,id:o,width:s="auto"}){super(["button"],"button",e),this.id=o,this.onClick=t,this.buttonType=n,this.imageSrc=r,this.width=s}render(){const e=super.render();if(this.imageSrc){const t=document.createElement("img");t.src=this.imageSrc,e.appendChild(t)}return"default"===this.buttonType&&e.classList.add("default"),"vanilla"===this.buttonType&&e.classList.add("vanilla"),"hof"===this.buttonType&&e.classList.add("hof"),"ptg"===this.buttonType&&e.classList.add("ptg"),"error-page__button"===this.buttonType&&e.classList.add("error-page__button"),"auto"===this.width&&(e.style.width="auto"),"full"===this.width&&(e.style.width="100%"),"half"===this.width&&(e.style.width="50%"),e.addEventListener("click",this.onClick),e}}class i{constructor(e){var t;this.leaderBoardMode=null==(t=JSON.parse(localStorage.getItem("hallOfFame")))?void 0:t[e]}render(){const r=new e(["container-hof"],"div").render(),o=new t("Hall Of Fame",["main__subheader"],"h3"),s=new n(["main__subheader-container"],"div").render(),i=document.createElement("img");if(i.src="/StarWarsQuiz/assets/hall_of_fame.d7e2c3da.svg",s.appendChild(i),s.appendChild(o.render()),r.appendChild(s),void 0===this.leaderBoardMode){const t=new e(["message"],"p","Leaderboard is empty.").render();return r.appendChild(t),r}const a=new e(["leaderboard"],"ol").render();let c=new e(["item"],"li").render(),d=new e(["bold"],"p","Place").render(),l=new e(["bold"],"p","Name").render(),p=new e(["bold"],"p","Score").render();return c.innerHTML+=d.outerHTML+l.outerHTML+p.outerHTML,a.appendChild(c),this.leaderBoardMode.forEach(((t,n)=>{var r;n+=1,c=new e(["item"],"li").render(),d=new e([],"p",n+(r=n,["st","nd","rd"][((r+90)%100-10)%10-1]||"th")).render(),l=new e([],"p",t.name).render(),p=new e([],"p",`${t.questions.correct} / ${t.questions.all}`).render(),c.innerHTML+=d.outerHTML+l.outerHTML+p.outerHTML,a.appendChild(c)})),r.appendChild(a),r}}var a="/StarWarsQuiz/assets/school_24px.ee1a6244.svg";const c=e=>{const t=document.querySelector("section.container button"),n=document.querySelector(".main__modes-container"),r=document.createElement("img");if(e){t.innerText="Hall of Fame",r.src=a,t.appendChild(r);const e=(new o).render();n.innerHTML=e.outerHTML}else{t.innerText="Rules",r.src=a,t.appendChild(r);const e=new i(document.mode).render();n.innerHTML=e.outerHTML}t.removeEventListener("click",(()=>c(e)),{once:!0}),t.addEventListener("click",(()=>c(!e)),{once:!0})};class d extends e{constructor(e){super(["question-text"],"div",e)}}class l extends e{constructor(e){super(["quiz-answer"],"div",e)}}const p={people:["people/1","people/10","people/11","people/12","people/13","people/14","people/15","people/16","people/18","people/19","people/2","people/20","people/21","people/22","people/23","people/24","people/25","people/26","people/27","people/28","people/29","people/3","people/30","people/31","people/32","people/33","people/34","people/35","people/36","people/37","people/38","people/39","people/4","people/40","people/41","people/42","people/43","people/44","people/45","people/46","people/47","people/48","people/49","people/5","people/50","people/51","people/52","people/53","people/54","people/55","people/56","people/57","people/58","people/59","people/6","people/60","people/61","people/62","people/63","people/64","people/65","people/66","people/67","people/68","people/69","people/7","people/70","people/71","people/72","people/73","people/74","people/75","people/76","people/77","people/78","people/79","people/8","people/80","people/81","people/82","people/83","people/9"],vehicles:["vehicles/14","vehicles/16","vehicles/18","vehicles/19","vehicles/20","vehicles/24","vehicles/25","vehicles/26","vehicles/30","vehicles/33","vehicles/34","vehicles/35","vehicles/36","vehicles/37","vehicles/38","vehicles/4","vehicles/42","vehicles/6","vehicles/7","vehicles/8"],starships:["starships/10","starships/11","starships/12","starships/13","starships/15","starships/21","starships/22","starships/23","starships/27","starships/28","starships/29","starships/31","starships/39","starships/40","starships/41","starships/43","starships/47","starships/48","starships/5","starships/9"]};function m(e="",t=[]){const n=t.length?t:p[e];return`/modes/${n[Math.floor(Math.random()*n.length)]}.jpg`}const h=async e=>{try{const t=await fetch(`https://swapi.dev/api/${e}`);if(200!==t.status)throw new Error("can't fetch the data");const n=await t.json();return n.category=e,n}catch(t){console.log("Error",t)}};document.correctAnswers=[],document.MODES={people:"Who is this character?",vehicles:"What kind of vehicle is this?",starships:"What kind of starship is this?"};const u=["people","vehicles","starships"];document.mode=u[Math.floor(Math.random()*u.length)];const w=document.MODES[document.mode],g=new class extends e{constructor(e=""){super(["main-photo"],"img","randomPicture",{id:"main-photo",src:m(e)})}}(document.mode);document.getElementById("main-grid-container").appendChild(g.render()),document.setOfQuestion=p[document.mode];const f=new class{constructor(e,t){this.container=document.createElement("div"),this.container.id="quiz-container",this.container.className="quiz-container content-container",this.questionText=e,this.answersList=t}render(){const e=new d(this.questionText).render();this.container.appendChild(e);const t=document.createElement("div");t.className="answer-container";for(let n=0;n<this.answersList.length;n+=1){const e=new l(this.answersList[n]).render();t.appendChild(e),e.id=`answer-${n+1}`}return this.container.appendChild(t),this.container}}(w,["","","",""]);document.getElementById("main-grid-container").appendChild(f.render());const v=document.getElementById("main-photo").src.split("/"),y=v[v.length-1].split(".")[0];let E=document.mode+"/"+y;function T(e=""){const t=e||document.setOfQuestion[Math.floor(Math.random()*document.setOfQuestion.length)];return document.setOfQuestion.splice(document.setOfQuestion.indexOf(t),1),t}function _(){E=T(),h(E).then((e=>{document.correctAnswer=e.name,h(document.mode).then((async e=>{const t=[];for(;t.length<4;){const n=Math.floor(Math.random()*e.count);t.indexOf(n)<0&&t.push(n)}const n=await Promise.all(t.map((async e=>{const t=Math.floor(e/10)+1,n=e%10,r=`${document.mode}/?page=${t}`;return await h(r).then((e=>e.results[n].name))})));let r=[document.correctAnswer,...n.filter((e=>e!==document.correctAnswer)).slice(0,3)];var o;r=function(e){let t,n=e.length;for(;0!=n;)t=Math.floor(Math.random()*n),n--,[e[n],e[t]]=[e[t],e[n]];return e}(r),function(e=["a","b","c","d"]){const t=document.querySelectorAll(".quiz-answer");for(let n=0;n<t.length;++n)t[n].innerHTML=e[n]}(r),document.getElementById("main-photo").src=(o=E,`${new URL("/StarWarsQuiz/",window.location).href}/modes/${o}.jpg`)}))}))}document.setOfQuestion.splice(document.setOfQuestion.indexOf(E),1),E=T(E),_(),document.addEventListener("click",(function(e){let t;if("quiz-answer"===e.target.className){const n=document.querySelectorAll(".quiz-answer");if(e.target.innerHTML===document.correctAnswer)e.target.style.background="green",t=e.target.innerHTML;else{e.target.style.background="red";for(let e=0;e<n.length;e++)n[e].innerHTML===document.correctAnswer&&(n[e].style.background="green",t=n[e].innerHTML)}document.correctAnswers.push([this.getElementById("main-photo").src,e.target.innerHTML,t]),setTimeout((()=>{for(let e=0;e<n.length;e++)n[e].style.background="var(--starwars-yellow)";_()}),1e3)}}));class C extends e{constructor(e={}){super(["answer-row-container"],"div"),this.answer=e}render(){const e=document.createElement("tr"),t=document.createElement("td"),n=document.createElement("td"),r=document.createElement("td"),o=document.createElement("img"),s=document.createElement("p"),i=document.createElement("p");return e.className="answers-list-container",t.className="answer-image-td",o.className="answer-image",s.classList=["answer"],n.className="user-answer-td",r.className="correct-answer-td",this.answer.userAnswer!==this.answer.correctAnswer?s.classList.add("answer-incorrect"):s.classList.add("answer-correct"),i.className="answer",o.src=this.answer.image,s.innerText=this.answer.userAnswer.toLowerCase(),i.innerText=this.answer.correctAnswer.toLowerCase(),t.appendChild(o),n.appendChild(s),r.appendChild(i),e.appendChild(t),e.appendChild(n),e.appendChild(r),e}}class b extends e{constructor(e=[]){super(["answers-list-container"],"div"),this.answers=e}render(){const e=document.createElement("table");e.className="answers-list-table";const t=document.createElement("thead");t.className="answers-list-thead";const n=document.createElement("tr");n.className="answers-header-row";["","You","Answer"].forEach((e=>{const t=document.createElement("th");t.className="answers-header",t.innerText=e,n.append(t)})),t.append(n),e.append(t);const r=document.createElement("tbody");return r.className="answers-list-tbody",e.append(r),this.answers.forEach((({image:e,userAnswer:t,correctAnswer:n})=>{const o=new C({image:e,userAnswer:t,correctAnswer:n});r.appendChild(o.render())})),e}}class L{constructor(e=(()=>{})){this.onDone=e,this.inputValue="",this.container=document.createElement("div")}open(){this.container.classList.remove("hidden")}close(){this.container.remove(),document.location.reload()}handleDone(){return this.inputValue.length>0?(this.close(),this.onDone(this.inputValue)):null}render(){let e=0;this.container.classList=["modal-container"];const t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("h1"),o=document.createElement("p"),i=document.createElement("div"),a=document.createElement("div"),c=document.createElement("h4"),d=document.createElement("img"),l=document.createElement("div"),p=document.createElement("input"),m=document.createElement("p"),h=document.createElement("div"),u=new s({label:"MAY THE FORCE BE WITH YOU!",width:"full",buttonType:"ptg",onClick:()=>this.handleDone()}),w=document.createElement("div"),g=new s({label:"x",width:"full",onClick:()=>this.close(),buttonType:"vanilla"});c.innerText="Detailed answers";let f=[];f=document.correctAnswers&&0!==document.correctAnswers.length?document.correctAnswers.map((e=>({image:e[0],userAnswer:e[1],correctAnswer:e[2]}))):[{image:"images/modes/people/1.jpg",userAnswer:"Luke Skywalker",correctAnswer:"Luke Skywalker"},{image:"images/modes/people/2.jpg",userAnswer:"Han Solo",correctAnswer:"C-3PO"},{image:"images/modes/people/3.jpg",userAnswer:"R2-D2",correctAnswer:"R2-D2"},{image:"images/modes/people/4.jpg",userAnswer:"Darth Wiadro",correctAnswer:"Darth Vader"},{image:"images/modes/people/5.jpg",userAnswer:"Leia",correctAnswer:"Leia"}],e=f.filter((e=>e.userAnswer===e.correctAnswer)).length;const v=new b(f);return t.className="modal-container__overlay",n.className="modal-container__game-over-modal",r.className="modal-container__header",o.className="modal-container__summary",i.className="modal-container__main",c.className="modal-container__answers__header",a.className="modal-container__answers",d.className="modal-container__yoda-image",l.className="modal-container__input-container",p.className="modal-container__input",m.className="modal-container__input-description",h.className="modal-container__button",w.className="modal-container__close-button-container",r.innerText="game over",o.innerText=`The force is strong in you, Padawan! During 1 minute you have answered ${e} questions.`,m.innerText="Please, fill your name in order to receive eternal glory in whole Galaxy!",d.src="/StarWarsQuiz/assets/Yoda.d3d89f40.png",p.onchange=e=>{this.inputValue=e.target.value},this.container.appendChild(t),this.container.appendChild(n),n.appendChild(r),n.appendChild(o),n.appendChild(i),n.appendChild(w),w.appendChild(g.render()),a.appendChild(c),a.appendChild(v.render()),i.appendChild(a),i.appendChild(d),n.appendChild(l),l.appendChild(p),l.appendChild(m),n.appendChild(h),h.appendChild(u.render()),this.container}}document.getElementById("main-grid-container");class S{constructor(){this.limitTime=null,this.currentTime=0,this.remainingTime=null,this.clock=null}displayTime(e){document.querySelector(".time").textContent=e}start(e){this.limitTime=S.parseSeconds(e),this.displayTime(this.calcRemainingTime()),this.clock=setInterval((()=>{if(this.currentTime+=1e3,this.displayTime(this.calcRemainingTime()),this.isStopped()){this.stop();const e=new L;document.getElementById("main-grid-container").appendChild(e.render())}}),1e3)}stop(){clearInterval(this.clock)}isStopped(){return this.currentTime===this.limitTime}calcRemainingTime(){return this.remainingTime=this.limitTime-this.currentTime,this.loadingBar(),S.reParseTime(this.remainingTime)}static parseSeconds(e){const[t,n]=e.split(":").map(Number);return 60*t*1e3+1e3*n}static reParseTime(e){let t=Math.floor(e/1e3/60),n=Math.floor(e/1e3%60);return t=String(t).padStart(2,"0"),n=String(n).padStart(2,"0"),`${t}:${n}`}loadingBar(){const e=document.querySelector(".sabre"),t=S.countPercent(this.limitTime,this.remainingTime);e.style.width=`${t}%`,t<=0&&((e,t,n)=>{const r=document.querySelector(e);if(r.querySelector(n))return;const o=(new t).render();r.appendChild(o)})("#main-grid-container",L,".modal-container")}static countPercent(e,t){return Math.round(100*t/e)}setTime(){!function(){const e=document.createElement("div");e.id="lightSabreProgresBar";const t=document.createElement("div");t.classList="sabreCont";const n=document.createElement("img");n.src="/StarWarsQuiz/assets/sabre.405af368.png",n.alt="Saber shaft";const r=document.createElement("div");r.classList="progresBar";const o=document.createElement("div");o.classList="sabre";const s=document.createElement("div");s.classList="timer",s.innerHTML="Time Left:";const i=document.createElement("span");i.classList="time",document.body.appendChild(e),t.appendChild(n),t.appendChild(r),e.appendChild(t),e.appendChild(s),r.appendChild(o),s.appendChild(i),document.getElementById("main-grid-container").appendChild(e)}(),this.start("1:00")}}const M=()=>{const e=document.querySelector(".intro__container");document.body.style.overflow="auto",e.remove()};let A=!1;function k(e){return A?(e.preventDefault(),document.removeEventListener("touchstart",(e=>{document.querySelector(".intro__container")&&k(e)}),!1),M()):(A=!0,setTimeout((()=>{A=!1}),300),!1)}const q=e=>{(e=>{const t=document.createElement("audio");t.classList.add("background-audio"),t.src=e,t.loop=!0,document.querySelector("body").appendChild(t)})(e),document.querySelector(".background-audio").play()},N=new class{constructor(){this.container=null}render(){this.container=document.createElement("section"),this.container.className="container";const e=new s({label:"Hall of fame",buttonType:"hof",width:"half"}),t=new s({label:"PLAY THE GAME",buttonType:"ptg",width:"half"}),n=e.render(),r=t.render(),o=document.createElement("img");o.src="/StarWarsQuiz/assets/hall_of_fame.d7e2c3da.svg",n.appendChild(o),n.addEventListener("click",(()=>c(!1)),{once:!0});const i=new S;return r.addEventListener("click",(()=>{const e=document.querySelector(".quiz-container");console.log(e),e.classList.add("show")})),r.addEventListener("click",(()=>{(e=>{if(document.querySelector(e)){const t=document.querySelector(e);t.parentNode.removeChild(t)}})(".index-page__container"),((e,t,n)=>{const r=document.querySelector(e);r.querySelector(n)||r.appendChild(t)})("#main-grid-container",i.setTime(),".lightSabreProgresBar")})),this.container.appendChild(n),this.container.appendChild(r),this.container}},x=new class{render(){const e=new n(["intro__container"],"section").render(),o=new n(["intro"],"div"),s=new t("A long time ago, in a a galaxy far,<br> far away....",["intro__header"],"h2"),i=new n(["intro__logo-container"],"div"),a=document.createElement("img");a.src="/StarWarsQuiz/assets/starwars_logo.4ab79c09.png",a.alt="Star Wars logo";const c=new n(["slider__container"],"div"),d=new n(["description__container"],"div"),l=new r("It is a period of Coders Wars in the galaxy. A brave group of underground young programmers has challenged the tyranny and oppression of the awesome PROGRAMMERS COMMUNITY.",["slider__description"],"p"),p=new r("Striking from a fortress hidden among the few houses in Poland, rebel programmers have won their first victory in a battle with the difficult Trello Tasks. The COMMUNITY fears that another defeat could bring a thousand more motivated people into the market, and Seniors control over the galaxy would be lost forever.",["slider__description"],"p"),m=new r("To crush the newbies once and for all, the COMMUNITY is constructing a sinister new battle task. Powerful enough to destroy an entire planet, its incompletion spells certain doom for the champions of keyboards.",["slider__description"],"p"),h=o.render(),u=i.render(),w=c.render(),g=d.render(),f=l.render(),v=p.render(),y=m.render();return h.appendChild(s.render()),u.appendChild(a),g.append(f,document.createElement("br"),v,document.createElement("br"),y),w.appendChild(g),e.append(h,u,w),e}};document.body.appendChild(x.render()),window.innerWidth<768?setTimeout((function(){M()}),59e3):window.innerWidth<1024?setTimeout((function(){M()}),85e3):window.innerWidth<1396?window.innerHeight>window.innerWidth?setTimeout((function(){M()}),1e5):setTimeout((function(){M()}),88e3):setTimeout((function(){M()}),79e3),document.addEventListener("keydown",(e=>{document.querySelector(".intro__container")&&"Escape"===e.key&&M()}),{once:!0}),document.addEventListener("touchstart",(e=>{document.querySelector(".intro__container")&&k(e)}),{passive:!1}),document.MODES={people:{header:"Who is this character?",description:"who from Star Wars is showed on the left from available options."},vehicles:{header:"What kind of vehicle is this?",description:"what vehicle from Star Wars is showed in the picture."},starships:{header:"What kind of starship is this?",description:"what starship from Star Wars is showed in the picture."}};const H=new class{render(){const e=document.createElement("section");e.innerHTML="",e.classList.add("index-page__container");const r=new n(["main__header-container"],"div"),s=new t("MODE: Who is this character?",["main__header"],"h2"),i=new n(["main__modes-container"],"div").render(),a=(new o).render();i.appendChild(a);const c=r.render();return c.appendChild(s.render()),e.appendChild(c),e.appendChild(i),e}};document.getElementById("main-grid-container").appendChild(H.render()).appendChild(N.render());const O=document.getElementById("main-photo").src.split("/");document.mode=O[O.length-2];const W=`MODE: ${document.MODES[document.mode].header}`;document.querySelector("h2.main__header").innerText=W,document.querySelector(".quiz-main-menu").addEventListener("click",(e=>{window.mode=e.target.innerText.toLowerCase(),"characters"===window.mode&&(window.mode="people");const t=document.MODES[window.mode];document.querySelector(".main__header").innerHTML=`MODE: ${t.header}`,document.querySelector(".main__description").innerHTML=`You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select ${t.description}`})),document.addEventListener("mouseover",(()=>{q("/audio/galacticIntro.mp3")}),{once:!0}),document.addEventListener("touchstart",(()=>{q("/audio/galacticIntro.mp3")}),{once:!0});
