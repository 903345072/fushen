(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-edit-phone"],{"0b33":function(t,i,e){var a=e("f8a8");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("651cb2b8",a,!0,{sourceMap:!1,shadowMode:!1})},"11e3":function(t,i,e){var a=e("f57f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("f71e8b82",a,!0,{sourceMap:!1,shadowMode:!1})},"341b":function(t,i,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("730a")),c=a(e("5500")),o={components:{barTitle:n.default},data:function(){return{state:!1,totalTime:120,recordingTime:0,currentTime:0}},onLoad:function(){},onReady:function(){c.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{checking:function(){this.currentTime=this.totalTime,this.state=!0,this.checkingTime()},checkingTime:function(){var t=this;this.state&&this.currentTime>0&&this.recordingTime<=this.totalTime?(this.recordingTime=this.recordingTime+1,this.currentTime=this.totalTime-this.recordingTime,setTimeout((function(){t.checkingTime()}),1e3)):(this.state=!1,this.recordingTime=0,this.currentTime=this.totalTime)}}};i.default=o},"5c02":function(t,i,e){"use strict";e.r(i);var a=e("341b"),n=e.n(a);for(var c in a)["default"].indexOf(c)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(c);i["default"]=n.a},"730a":function(t,i,e){"use strict";e.r(i);var a=e("d7c9"),n=e("fa9b");for(var c in n)["default"].indexOf(c)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(c);e("8ed4");var o=e("f0c5"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"d67b7c4c",null,!1,a["a"],void 0);i["default"]=s.exports},"8ed4":function(t,i,e){"use strict";var a=e("11e3"),n=e.n(a);n.a},"90f6":function(t,i,e){"use strict";e.r(i);var a=e("c2b4"),n=e("5c02");for(var c in n)["default"].indexOf(c)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(c);e("b69d");var o=e("f0c5"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"628e1e1c",null,!1,a["a"],void 0);i["default"]=s.exports},b69d:function(t,i,e){"use strict";var a=e("0b33"),n=e.n(a);n.a},c2b4:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v("手机号换绑")]),e("template",{attrs:{slot:"right"},slot:"right"},[e("v-uni-text",{staticClass:"text-orange"},[t._v("保存")])],1)],2),e("v-uni-view",{staticClass:"text-black text-center margin-top padding"},[t._v("完成短信验证进行换绑手机号")]),e("v-uni-view",{staticClass:"cu-list menu sm-border margin-top"},[e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"content"},[t._v("当前手机号")]),e("v-uni-view",{staticClass:"action"},[t._v("138****8000")])],1)],1),e("v-uni-view",{staticClass:"cu-form-group solid-top"},[e("v-uni-view",{staticClass:"title"},[t._v("新手机号")]),e("v-uni-input",{attrs:{value:""}})],1),e("v-uni-view",{staticClass:"cu-form-group code"},[e("v-uni-view",{staticClass:"title"},[t._v("验证码")]),e("v-uni-input",{attrs:{value:""}}),t.state?e("v-uni-text",{staticClass:"text-orange text-btn"},[t._v(t._s(t.currentTime)+"s")]):e("v-uni-text",{staticClass:"text-orange text-btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.checking.apply(void 0,arguments)}}},[t._v("发送验证码")])],1),e("v-uni-view",{staticClass:"text-sm text-gray padding-sm"},[t._v("验证码将会发送到您的手机号中~")]),e("v-uni-view",{staticClass:"bg-white wecanui-footer-fixed foot-pb"},[e("v-uni-view",{staticClass:"flex flex-direction padding-sm"},[e("v-uni-button",{staticClass:"cu-btn bg-red"},[t._v("换绑手机号")])],1)],1)],1)},n=[]},d7c9:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"zaiui-bar-title-box"},[e("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?e("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.BackPage.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-back"}),e("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():e("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),e("v-uni-view",{staticClass:"content",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),e("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?e("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},n=[]},f57f:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-d67b7c4c]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-d67b7c4c]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-d67b7c4c]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-d67b7c4c]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-d67b7c4c]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-d67b7c4c]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-d67b7c4c]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=i},f79d:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};i.default=a},f8a8:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".cu-form-group[data-v-628e1e1c]{position:relative}.cu-form-group uni-input[data-v-628e1e1c]{text-align:right;padding-right:0}.cu-form-group.code .text-btn[data-v-628e1e1c]{margin-left:%?27.27?%}",""]),t.exports=i},fa9b:function(t,i,e){"use strict";e.r(i);var a=e("f79d"),n=e.n(a);for(var c in a)["default"].indexOf(c)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(c);i["default"]=n.a}}]);