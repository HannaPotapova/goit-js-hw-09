!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i"),i={formElement:document.querySelector(".form"),firstDelay:document.querySelector('[name="delay"]'),delayStep:document.querySelector('[name="step"]'),amountEl:document.querySelector('[name="amount"]')};function a(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}i.formElement.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(i.firstDelay.value),t=Number(i.delayStep.value),o=Number(i.amountEl.value),l=1;l<=o;l+=1)a(l,n).then((function(e){var n=e.position,t=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),n+=t}))}();
//# sourceMappingURL=03-promises.d9f91a56.js.map