!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body");var r=null;t.addEventListener("click",(function(){r=setInterval((function(){n.style.cssText="\n      background-color: ".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)),";\n      margin: 16px;\n      text-align: center;\n    ")}),1e3),t.setAttribute("disabled",!0)})),e.addEventListener("click",(function(){clearInterval(r),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.d1684972.js.map
