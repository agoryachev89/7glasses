(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3,4,5],{249:function(t,e,o){var content=o(251);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(70).default)("388901aa",content,!0,{sourceMap:!1})},250:function(t,e,o){"use strict";o(249)},251:function(t,e,o){var r=o(68)(!1);r.push([t.i,"b-button{font-size:18px;margin-left:7px}.row{padding:3px}",""]),t.exports=r},252:function(t,e,o){var content=o(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(70).default)("0de7c166",content,!0,{sourceMap:!1})},253:function(t,e,o){"use strict";o.r(e);o(4),o(3),o(1),o(5),o(2),o(6);var r=o(0),n=(o(20),o(69));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var c={data:function(){return{entered_value:this.value}},mounted:function(){this.focusInput(),this.entered_value=this.value},computed:{validation:function(){return!isNaN(parseFloat(this.entered_value))},operation:function(){return this.$store.state.modal.operation},current_glass:function(){return this.$store.state.modal.current_glass},current_glass_name:function(){return this.$store.state.glasses[this.current_glass].name},value:function(){return this.$store.state.modal.entered_value},to_invest:function(){return this.validation?.05*this.entered_value*2:0},to_sber_sber:function(){return this.validation?.05*this.entered_value*7:0}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({focusInput:function(){this.$refs.summ_data.focus()},save:function(){if(this.validation){switch(this.entered_value=parseFloat(this.entered_value),this.operation){case"plus":this.$store.commit("plus",{glass:this.current_glass,value:this.entered_value});break;case"minus":this.$store.commit("minus",{glass:this.current_glass,value:this.entered_value});break;case"set":this.$store.commit("set",{glass:this.current_glass,value:this.entered_value});break;case"income":var t=.05*this.entered_value;this.$store.commit("plus",{glass:"common",value:11*t}),this.$store.commit("plus",{glass:"invest",value:2*t}),this.$store.commit("plus",{glass:"enjoy",value:2*t}),this.$store.commit("plus",{glass:"learn",value:2*t}),this.$store.commit("plus",{glass:"buy",value:2*t}),this.$store.commit("plus",{glass:"gift",value:1*t})}this.toggle_modal()}else this.focusInput()}},Object(n.b)({toggle_modal:"modal/toggle_modal"}))},_=o(59),component=Object(_.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-row",["plus"===t.operation?o("b-col",[t._v("Приход в стакан "+t._s(t.current_glass_name))]):t._e(),t._v(" "),"minus"===t.operation?o("b-col",[t._v("Расход из стакана "+t._s(t.current_glass_name))]):t._e(),t._v(" "),"set"===t.operation?o("b-col",[t._v("Редактируем стакан "+t._s(t.current_glass_name))]):t._e(),t._v(" "),"income"===t.operation?o("b-col",[t._v("Поступление средств")]):t._e()],1),t._v(" "),o("b-row",[o("b-col",[o("b-form",{on:{submit:function(t){t.stopPropagation(),t.preventDefault()}}},[o("b-form-input",{ref:"summ_data",attrs:{type:"number",state:t.validation,id:"modal_data"},model:{value:t.entered_value,callback:function(e){t.entered_value=e},expression:"entered_value"}}),t._v(" "),o("b-form-invalid-feedback",{attrs:{state:t.validation}},[t._v("\n          Введите число в формате 14.27\n        ")])],1)],1)],1),t._v(" "),o("b-row",[o("b-col",[o("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){return t.save()}}},[t._v("Сохранить")])],1),t._v(" "),o("b-col",[o("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.toggle_modal()}}},[t._v("Отмена")])],1)],1),t._v(" "),"income"===t.operation?o("b-row",[o("b-col",[t._v("На инвестиции: "+t._s(t.to_invest.toFixed(2))+" ₽")])],1):t._e(),t._v(" "),"income"===t.operation?o("b-row",[o("b-col",[t._v("На сбер сбер: "+t._s(t.to_sber_sber.toFixed(2))+" ₽")])],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},254:function(t,e,o){"use strict";o.r(e);o(4),o(3),o(1),o(5),o(6);var r=o(0),n=(o(2),o(69));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var c={computed:{total:function(){var t=this,e=0;return this.$store.state.glasses_names.forEach((function(element){return e+=t.$store.state.glasses[element].value})),e}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({create_modal:function(){this.$store.commit("modal/set_value",""),this.$store.commit("modal/set_operation","income"),this.toggle_modal()}},Object(n.b)({toggle_modal:"modal/toggle_modal"}))},_=o(59),component=Object(_.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",[o("b-row",[o("b-col",[o("b",[t._v("Итого")])]),t._v(" "),o("b-col",[t._v(t._s(t.total.toFixed(2))+" ₽")]),t._v(" "),o("b-col",[o("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){return t.create_modal()}}},[t._v("+")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},255:function(t,e,o){"use strict";o.r(e);o(4),o(3),o(1),o(5),o(2),o(6);var r=o(0),n=o(69);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var c={props:["glass_name"],computed:{glass:function(){return this.$store.state.glasses[this.glass_name]}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({create_modal:function(t){"set"===t?this.$store.commit("modal/set_value",this.$store.state.glasses[this.glass_name].value):this.$store.commit("modal/set_value",""),this.$store.commit("modal/set_operation",t),this.$store.commit("modal/set_current_glass",this.glass_name),this.toggle_modal()}},Object(n.b)({toggle_modal:"modal/toggle_modal"}))},_=(o(250),o(59)),component=Object(_.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",[o("b-row",[o("b-col",{attrs:{cols:"5"}},[t._v(t._s(t.glass.name))]),t._v(" "),o("b-col",{attrs:{cols:"2"}},[t._v(t._s(t.glass.value.toFixed(2))+" ₽")]),t._v(" "),o("b-col",[o("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){return t.create_modal("plus")}}},[t._v("+")])],1),t._v(" "),o("b-col",[o("b-button",{attrs:{variant:"outline-danger"},on:{click:function(e){return t.create_modal("minus")}}},[t._v("-")])],1),t._v(" "),o("b-col",[o("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.create_modal("set")}}},[t._v("✎")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},256:function(t,e,o){"use strict";o.r(e);var r={computed:{sb_sb:function(){var t=this,e=0;return["enjoy","learn","buy","gift","save"].forEach((function(element){return e+=t.$store.state.glasses[element].value})),e},sb_main:function(){return this.$store.state.glasses.common.value},tinkoff:function(){return this.$store.state.glasses.invest.value}}},n=o(59),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",[o("b-row",[o("b-col",[o("b",[t._v("Счета")])])],1),t._v(" "),o("b-row",[o("b-col",[t._v("Сбер сбер")]),o("b-col",[t._v(t._s(t.sb_sb.toFixed(2))+" ₽")])],1),t._v(" "),o("b-row",[o("b-col",[t._v("Сбер осн")]),o("b-col",[t._v(t._s(t.sb_main.toFixed(2))+" ₽")])],1),t._v(" "),o("b-row",[o("b-col",[t._v("Тиньков")]),o("b-col",[t._v(t._s(t.tinkoff.toFixed(2))+" ₽")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},257:function(t,e,o){"use strict";o(252)},258:function(t,e,o){var r=o(68)(!1);r.push([t.i,".title-panel{font-weight:700;font-size:18pt}.title{width:300px}",""]),t.exports=r},259:function(t,e,o){"use strict";o.r(e);var r={computed:{show_modal:function(){return this.$store.state.modal.show_modal}},mounted:function(){"serviceWorker"in navigator&&navigator.serviceWorker.register("https://agoryachev89.github.io/7glasses/dist/service-worker.js").then((function(t){console.log("Registration successful, scope is:",t.scope)})).catch((function(t){console.log("Service worker registration failed, error:",t)}))},data:function(){return{glasses_names:this.$store.state.glasses_names}}},n=(o(257),o(59)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[t._m(0),t._v(" "),t.show_modal?o("Modal"):o("div",[o("Total"),t._v(" "),t._l(t.glasses_names,(function(t){return o("div",[o("Glass",{attrs:{glass_name:t}})],1)})),t._v(" "),o("Bills")],2)],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mx-auto title-panel"},[o("h1",{staticClass:"title"},[t._v("\n      7 стаканов v2.0\n    ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Modal:o(253).default,Total:o(254).default,Glass:o(255).default,Bills:o(256).default})}}]);