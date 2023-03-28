var panels=document.querySelectorAll(".panel");function removeActiveClasses(){panels.forEach((function(e){e.classList.remove("active")}))}panels.forEach((function(e){e.addEventListener("click",(function(){removeActiveClasses(),e.classList.add("active")}))}));
//# sourceMappingURL=1_project.a8ea0363.js.map
