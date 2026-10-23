
var WA="923032556356";
(function(){var i=document.getElementById("intro"),b=document.body;
function fin(){i.classList.add("done");b.classList.remove("lock");b.classList.add("ready")}
if(matchMedia("(prefers-reduced-motion:reduce)").matches){fin();return}
document.getElementById("il").src=document.querySelector(".logo img").src;
document.getElementById("it").innerHTML="THE CATALYST INSTITUTE".split("").map(function(c,k){return '<span style="animation-delay:'+(0.5+k*0.04)+'s">'+(c===" "?"&nbsp;":c)+'</span>'}).join("");
setTimeout(function(){i.classList.add("go");b.classList.add("ready")},2700);
setTimeout(fin,3900)})();
var pg=document.getElementById("pg");
window.addEventListener("scroll",function(){var h=document.documentElement;pg.style.width=(h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight)*100)+"%"},{passive:true});
var hero=document.querySelector(".hero"),sp=document.createElement("div");sp.className="spot";hero.appendChild(sp);
for(var k=0;k<18;k++){var d=document.createElement("i"),z=3+Math.random()*5;d.className="pt";d.style.cssText="left:"+Math.random()*100+"%;bottom:-10px;width:"+z+"px;height:"+z+"px;animation-duration:"+(8+Math.random()*8)+"s;animation-delay:-"+Math.random()*12+"s";hero.appendChild(d)}
hero.addEventListener("mousemove",function(e){var r=hero.getBoundingClientRect();hero.style.setProperty("--mx",(e.clientX-r.left)+"px");hero.style.setProperty("--my",(e.clientY-r.top)+"px")});
document.querySelectorAll(".teacher").forEach(function(x){x.addEventListener("mousemove",function(e){var r=x.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-0.5,py=(e.clientY-r.top)/r.height-0.5;x.style.transform="perspective(700px) rotateX("+(-py*10)+"deg) rotateY("+(px*10)+"deg) translateY(-6px)"});x.addEventListener("mouseleave",function(){x.style.transform=""})});
var type=document.getElementById("type");
document.querySelectorAll(".chips").forEach(function(c){c.querySelectorAll("span").forEach(function(x,i){x.style.setProperty("--i",i)})});
document.getElementById("adm").onsubmit=function(e){e.preventDefault();var f=e.target.elements,m=document.getElementById("msg");
if(!f.name.value.trim()||!f.father.value.trim()||!f.phone.value.trim()||!type.value){m.style.color="#c0392b";m.textContent="Please fill in student name, father’s name, phone and course.";return}
var t="Admission request – The Catalyst Institute\nStudent: "+f.name.value+"\nFather: "+f.father.value+"\nPhone: "+f.phone.value+"\nEmail: "+(f.email.value||"-")+"\nCourse: "+type.value+"\nPreferred time: "+f.batch.value+"\nNote: "+(f.note.value||"-");
m.style.color="";m.textContent="Thank you! Opening WhatsApp to send your request.";
window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(t),"_blank")};
document.getElementById("bn").src=document.querySelector(".logo img").src;
var rb=document.getElementById("rb"),h=rb.innerHTML;rb.innerHTML=h+h+h+h;
document.querySelectorAll("section h2,.lead,.tabs,#adm").forEach(function(x){x.classList.add("rv")});
document.querySelectorAll(".teacher").forEach(function(x,i){x.classList.add("rv");x.style.setProperty("--d",i*0.1+"s")});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.1});
document.querySelectorAll(".rv").forEach(function(x){io.observe(x)});
