function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,g=function(){return l.Date.now()};function v(t,e,n){var o,i,r,a,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=o,r=i;return o=i=void 0,c=e,a=t.apply(r,n)}function j(t){return c=t,f=setTimeout(h,e),l?y(t):a}function T(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-c>=r}function h(){var t=g();if(T(t))return w(t);f=setTimeout(h,function(t){var n=e-(t-u);return s?p(n,r-(t-c)):n}(t))}function w(t){return f=void 0,v&&o?y(t):(o=i=void 0,a)}function x(){var t=g(),n=T(t);if(o=arguments,i=this,u=t,n){if(void 0===f)return j(u);if(s)return f=setTimeout(h,e),y(u)}return void 0===f&&(f=setTimeout(h,e)),a}return e=b(e)||0,m(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,e):r,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=i=f=void 0},x.flush=function(){return void 0===f?a:w(g())},x}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=r.test(t);return n||a.test(t)?f(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return m(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(t,e,{leading:o,maxWait:e,trailing:i})};const y=document.querySelector(".feedback-form");console.dir(y);const j={};y.addEventListener("input",t(e)((function(t){j[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),250)),y.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(y.input),console.log(y.textarea)})),function(){const t=localStorage.getItem("feedback-form-state"),e=JSON.parse(t);e&&(console.log(e),y.textarea=e.message,y.input=e.email)}();
//# sourceMappingURL=03-feedback.305e3210.js.map