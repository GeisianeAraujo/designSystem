!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lit"),require("lit/directives/class-map.js")):"function"==typeof define&&define.amd?define(["lit","lit/directives/class-map.js"],t):"object"==typeof exports?exports["dsc-design-system-core"]=t(require("lit"),require("lit/directives/class-map.js")):e["dsc-design-system-core"]=t(e.lit,e["lit/directives/class-map.js"])}(self,(function(e,t){return(()=>{"use strict";var r={870:t=>{t.exports=e},536:e=>{e.exports=t}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{i.r(o),i.d(o,{default:()=>h});var e,t=i(870),r=i(536);function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function a(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return l(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(n){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(y,n);var i,o,h,f,p,b=(f=y,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(f);if(p){var r=u(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return a(this,e)});function y(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),d(l(e=b.call(this)),"_handleDispatchEvent",(function(){e.dispatchEvent(new CustomEvent("dscChange",{detail:{checked:e.checked},bubbles:!0,composed:!0}))})),e.id="dsc-switch",e.name="dsc-switch",e.label="",e.checked=!1,e.required=!1,e.disabled=!1,e}return i=y,h=[{key:"styles",get:function(){return(0,t.unsafeCSS)('.switch{display:flex;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:var(--font-family-01);font-size:var(--font-size-xs);font-weight:var(--font-weight-regular);line-height:var(--line-height-default);color:var(--neutral-elements-03)}.switch input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.switch .switch-checkmark{box-sizing:border-box;display:flex;align-items:center;padding:2px;width:40px;height:24px;border:var(--border-width-thin) solid var(--neutral-elements-03);border-radius:var(--border-radius-pill);margin-right:var(--spacing-size-nano);transition-duration:.275s;transition-timing-function:cubic-bezier(0.48, 0, 0.48, 1)}.switch .switch-checkmark:after{content:"";width:16px;height:16px;border-radius:var(--border-radius-circular);background-color:var(--neutral-elements-03)}.switch:hover:not(.switch--disabled):not(.switch--checked) .switch-checkmark{background-color:var(--neutral-surface-02)}.switch input:checked~.switch-checkmark{padding-left:calc(22px - var(--border-width-thin))}.switch input:checked:not(:disabled)~.switch-checkmark{background-color:var(--brand-color-pure);border-color:var(--brand-color-pure)}.switch input:checked:not(:disabled)~.switch-checkmark:after{background-color:var(--contrast-color-brand)}.switch input:focus-visible~.switch-checkmark{outline-color:var(--highlight-color-pure);outline-width:var(--border-width-thin);outline-style:solid}.switch input:disabled~.switch-checkmark{border-color:var(--neutral-elements-01);color:var(--neutral-elements-01)}.switch input:disabled~.switch-checkmark:after{background-color:var(--neutral-elements-01)}.switch--disabled{color:var(--neutral-elements-01)}')}},{key:"properties",get:function(){return{id:{type:String},name:{type:String},label:{type:String},checked:{type:Boolean},required:{type:Boolean},disabled:{type:Boolean}}}}],(o=[{key:"hiddenInput",get:function(){var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("input")}},{key:"updated",value:function(e){var t=this;e.forEach((function(e,r){"checked"===r&&void 0!==e&&(t.hiddenInput.checked=t.checked,t._handleDispatchEvent())}))}},{key:"_handleChange",value:function(){this.checked=!this.checked,this._handleDispatchEvent()}},{key:"render",value:function(){var n,i,o;return(0,t.html)(e||(i=['\n      <label\n        class="','"\n        for="','"\n      >\n        <input\n          type="checkbox"\n          .id="','"\n          .name="','"\n          ?disabled=',"\n          ?checked=","\n          ?required=","\n          aria-checked=",'\n          @change="','"\n        >\n        <span class="switch-checkmark"></span>\n        ',"\n      </label>\n    "],o||(o=i.slice(0)),e=Object.freeze(Object.defineProperties(i,{raw:{value:Object.freeze(o)}}))),(0,r.classMap)((d(n={},"switch",!0),d(n,"switch--checked",this.checked),d(n,"switch--disabled",this.disabled),n)),this.name,this.id,this.name,this.disabled,this.checked,this.required,this.checked,this._handleChange,this.label)}}])&&c(i.prototype,o),h&&c(i,h),Object.defineProperty(i,"prototype",{writable:!1}),y}(t.LitElement);customElements.get("dsc-switch")||customElements.define("dsc-switch",h)})(),o})()}));