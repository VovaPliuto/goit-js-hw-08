!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,g=Math.max,v=Math.min,b=function(){return s.Date.now()};function p(e,t,n){var r,i,l,a,f,u,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function h(e){return c=e,f=setTimeout(j,t),d?p(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=l}function j(){var e=b();if(S(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?v(n,l-(e-c)):n}(e))}function O(e){return f=void 0,m&&r?p(e):(r=i=void 0,a)}function w(){var e=b(),n=S(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(j,t),p(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=E(t)||0,y(n)&&(d=!!n.leading,l=(s="maxWait"in n)?g(E(n.maxWait)||0,t):l,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=i=f=void 0},w.flush=function(){return void 0===f?a:O(b())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function E(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||f.test(t)?u(t.slice(2),o?2:8):l.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var h={formEl:document.querySelector(".feedback-form")};h.formEl.addEventListener("input",e(t)((function(e){"email"===e.target.name?(S.email=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S)),console.log(localStorage)):(S.message=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S)),console.log(localStorage))}),500)),h.formEl.addEventListener("submit",e(t)((function(e){e.preventDefault(),console.log(S),localStorage.clear(),h.formEl.firstElementChild.children[0].value="",h.formEl.firstElementChild.nextElementSibling.children[0].value=""}),500));var S={};null!==localStorage.getItem("feedback-form-state")&&(S=JSON.parse(localStorage.getItem("feedback-form-state")),h.formEl.firstElementChild.children[0].value=S.email,h.formEl.firstElementChild.nextElementSibling.children[0].value=S.message)}();
//# sourceMappingURL=03-feedback.7084e17a.js.map