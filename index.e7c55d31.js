var panels=document.querySelectorAll(".panel");function removeActiveClasses(){panels.forEach((function(e){e.classList.remove("active")}))}panels.forEach((function(e){e.addEventListener("click",(function(){removeActiveClasses(),e.classList.add("active")}))}));
//# sourceMappingURL=index.e7c55d31.js.map
