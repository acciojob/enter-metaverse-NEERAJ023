//your JS code here. If required.

let p=document.getElementById("status");
let btn=document.getElementById("enterBtn");

btn.addEventListener("click",f);
function f(){
	let para=document.createElement("h1");
	para.innerHTML="Entered Metaverse";
	p.replaceWith(para);
}