function resize()
{document.body.style.height=window.innerHeight+"px",document.body.style.width=window.innerWidth+"px",document.querySelector("html").style.height=window.innerHeight+"px",document.querySelector("html").style.width=window.innerWidth+"px"}
function loadPage(e){console.log("loaded"+e),window.location.href=e}
function fadePage(e){document.body.classList.add("loading"),e()}
function navDes(){var e=document.getElementById("nav-container"),t=[{a:-360,b:-40,c:-250,d:180},{a:-180,b:-170,c:-150,d:10},{a:0,b:-110,c:0,d:70},{a:150,b:-170,c:120,d:10},{a:250,b:-40,c:140,d:180}];
if(isExpanded){e.style.transitionDelay="1s";
for(var o=window.innerWidth/2,n=window.innerHeight/2,a=0;5>a;a++)
drawLine(document.getElementById("line"+(a+1)),o+t[a].a,n+t[a].b,o+t[a].c,n+t[a].d,1);e.classList.add("show"),e.style.bottom="15%"}
else{e.style.transitionDelay="unset",e.classList.remove("show");
for(var a=0;5>a;a++)drawLine(document.getElementById("line"+(a+1)),0,0,0,0,1);
setTimeout(function(){e.style.bottom="10%"},300)}}
function drawLine(e,t,o,n,a,i)
{var r=Math.ceil(Math.sqrt((t-n)*(t-n)+(o-a)*(o-a))),s=180*Math.atan2(a-o,n-t)/Math.PI,d=r-Math.abs(n-t),l=Math.abs(o-a)/2;e.style.transition="width .5s ease, opacity .5s ease",e.style.opacity=1,e.style.top=Math.min(o,a)+l+"px",e.style.width=r+"px",e.style.WebkitTransform="rotate("+s+"deg)",e.style.MozTransform="rotate("+s+"deg)",1===i?(e.style.left="unset",e.style.right=window.innerWidth-r-(t-d/2)+"px"):(e.style.right="unset",e.style.left=t-d/2+"px")}
var isExpanded=!1,isDesktop=Modernizr.mq("(min-width: 768px)"),isTouch=Modernizr.touchevents;window.onload=function(){!isDesktop&&isTouch?document.body.innerHTML="<h2 class='text-white text-center flex flex-column center-x center-y' style='height: 100%; margin: 0 10px'>Sorry, Mobile Version is Under Construction<br><small class='text-light text-shine'><br><a href=''><u></u></a></small></h2>":Modernizr.csstransforms3d||(document.body.innerHTML="<h2 class='text-white'>Sorry, Your browser doesn't support 3d Transform.<br>How about using <a href='https://www.google.com/intl/en/chrome/browser/features.html'><u>Chrome</u></a>?</h2>"),document.body.style.transition="background-image .5s linear, opacity .5s linear, visibility .5s linear",setTimeout(function(){document.body.classList.remove("loading")},500)};
var stars=document.querySelectorAll(".stars div"),scatterStar=function(e,t,o)
{var n=Math.floor(35*Math.random()+5),a=Math.floor(90*Math.random()+5),i=Math.random(),r=Math.floor(-5e3*Math.random()+7500);t%2==0?e.style.right=n+"%":e.style.left=n+"%",e.style.top=a+"%",e.style.transform="scale("+i+")",e.style.animationDuration=r+"ms"};stars.forEach(scatterStar);
for(var navLink=document.querySelectorAll("a"),i=0;i<navLink.length;i++)
navLink[i].onclick=function(e){e.preventDefault();var t=this.href;
    fadePage(function(){setTimeout(function(){loadPage(t)},1e3)})};
    window.onresize=function(){isDesktop?(isExpanded&&navDes(),Modernizr.mq("(max-width: 767px)")&&location.reload()):Modernizr.mq("(min-width: 768px)")&&location.reload()};
    var navbar=document.querySelector("#nav");
    document.querySelector("#nav-toggle").onclick=function(e){e.preventDefault(),isExpanded?(isExpanded=!1,document.querySelector("#nav-toggle").disabled=!0,document.body.style.overflow="",document.querySelector(".cube-container").classList.remove("show"),navbar.classList.remove("expanded"),document.querySelector(".cube-container .cube").style.bottom=0,navDes(),document.querySelector("#nav-toggle").disabled=!1):(isExpanded=!0,document.querySelector("#nav-toggle").disabled=!0,document.body.style.overflow="hidden",document.querySelector(".cube-container").classList.add("show"),navbar.classList.add("expanded"),Modernizr.mq("(min-width: 768px)")&&(document.querySelector(".cube").style.bottom="15%"),navDes(),document.querySelector("#nav-toggle").disabled=!1)};