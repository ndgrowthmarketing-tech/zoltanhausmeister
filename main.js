(function(){var d=document,$=function(s){return d.querySelector(s)};$("#y").textContent=new Date().getFullYear();
$("#mb").onclick=function(){$("#nv").classList.toggle("open")};
var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.15});
d.querySelectorAll(".rv").forEach(function(el){io.observe(el)});
d.querySelectorAll("[data-n]").forEach(function(el){var n=+el.dataset.n,i=0,t=setInterval(function(){i+=Math.ceil(n/30);if(i>=n){i=n;clearInterval(t)}el.textContent=i},40)});
var c=$("#cal");if(c)$("#calbtn").onclick=function(){c.innerHTML='<iframe src="'+c.dataset.src+'" title="Terminbuchung" loading="lazy"></iframe>'}})();