(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-edit-address"],{"11e3":function(t,e,a){var i=a("f57f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("f71e8b82",i,!0,{sourceMap:!1,shadowMode:!1})},"12a5":function(t,e,a){"use strict";a.r(e);var i=a("31a7"),n=a("cef8");for(var u in n)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(u);a("c525");var l=a("f0c5"),c=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"2096751c",null,!1,i["a"],void 0);e["default"]=c.exports},"31a7":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[a("template",{attrs:{slot:"content"},slot:"content"},[t._v("编辑地址")]),a("template",{attrs:{slot:"right"},slot:"right"},[a("v-uni-text",{staticClass:"text-orange"},[t._v("保存")])],1)],2),a("v-uni-view",{staticClass:"cu-form-group margin-top"},[a("v-uni-view",{staticClass:"title"},[t._v("收货人名")]),a("v-uni-input",{attrs:{placeholder:"您的姓名"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.nameInput.apply(void 0,arguments)}}}),t.nameClose?a("v-uni-text",{staticClass:"cuIcon-roundclosefill text-grey"}):t._e()],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("手机号码")]),a("v-uni-input",{attrs:{placeholder:"卖家和快递员联系您的方式"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.phoneInput.apply(void 0,arguments)}}}),t.phoneClose?a("v-uni-text",{staticClass:"cuIcon-roundclosefill text-grey"}):t._e()],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("邮政编码")]),a("v-uni-input",{attrs:{placeholder:"可以不用那么精确"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.zipCodeInput.apply(void 0,arguments)}}}),t.zipCodeClose?a("v-uni-text",{staticClass:"cuIcon-roundclosefill text-grey"}):t._e()],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("所在地区")]),a("v-uni-picker",{attrs:{mode:"multiSelector",value:t.multiIndex,range:t.multiArray},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.MultiChange.apply(void 0,arguments)},columnchange:function(e){arguments[0]=e=t.$handleEvent(e),t.MultiColumnChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.multiArray[0][t.multiIndex[0]])+"，"+t._s(t.multiArray[1][t.multiIndex[1]])+"，"+t._s(t.multiArray[2][t.multiIndex[2]]))])],1)],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("详细地址")]),a("v-uni-input",{attrs:{placeholder:"请输入详细的地址信息"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.addressInput.apply(void 0,arguments)}}}),t.addressClose?a("v-uni-text",{staticClass:"cuIcon-roundclosefill text-grey"}):t._e()],1),a("v-uni-view",{staticClass:"cu-list menu margin-top"},[a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-red"},[t._v("删除地址")])],1)],1)],1)],1)},n=[]},"440d":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("730a")),u=i(a("5500")),l={components:{barTitle:n.default},data:function(){return{multiIndex:[0,0,0],nameClose:!1,phoneClose:!1,zipCodeClose:!1,addressClose:!1,multiArray:[["重庆市","四川省"],["渝中区","渝北区","江北区","南岸区"],["周边","周边地区"]]}},onLoad:function(){},onReady:function(){u.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{nameInput:function(t){var e=t.detail.value;this.nameClose=""!=e},phoneInput:function(t){var e=t.detail.value;this.phoneClose=""!=e},zipCodeInput:function(t){var e=t.detail.value;this.zipCodeClose=""!=e},addressInput:function(t){var e=t.detail.value;this.addressClose=""!=e},MultiChange:function(t){this.multiIndex=t.detail.value},MultiColumnChange:function(t){var e={multiArray:this.multiArray,multiIndex:this.multiIndex};switch(e.multiIndex[t.detail.column]=t.detail.value,t.detail.column){case 0:switch(e.multiIndex[0]){case 0:e.multiArray[1]=["渝中区","渝北区","江北区","南岸区"],e.multiArray[2]=["周边","周边地区"];break;case 1:e.multiArray[1]=["渝中区","渝北区","江北区","南岸区"],e.multiArray[2]=["周边","周边地区"];break}e.multiIndex[1]=0,e.multiIndex[2]=0;break;case 1:switch(e.multiIndex[0]){case 0:switch(e.multiIndex[1]){case 0:e.multiArray[2]=["周边","周边地区"];break;case 1:e.multiArray[2]=["周边","周边地区"];break;case 2:e.multiArray[2]=["周边","周边地区"];break;case 3:e.multiArray[2]=["周边","周边地区"];break;case 4:e.multiArray[2]=["周边","周边地区"];break}break;case 1:switch(e.multiIndex[1]){case 0:e.multiArray[2]=["周边","周边地区"];break;case 1:e.multiArray[2]=["周边","周边地区"];break;case 2:e.multiArray[2]=["周边","周边地区"];break}break}e.multiIndex[2]=0;break}this.multiArray=e.multiArray,this.multiIndex=e.multiIndex}}};e.default=l},"6a3e":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".wecanui-footer-fixed .flex-direction[data-v-2096751c]{padding:%?18.18?%}",""]),t.exports=e},"730a":function(t,e,a){"use strict";a.r(e);var i=a("d7c9"),n=a("fa9b");for(var u in n)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(u);a("8ed4");var l=a("f0c5"),c=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"d67b7c4c",null,!1,i["a"],void 0);e["default"]=c.exports},"8ed4":function(t,e,a){"use strict";var i=a("11e3"),n=a.n(i);n.a},c525:function(t,e,a){"use strict";var i=a("e6db"),n=a.n(i);n.a},cef8:function(t,e,a){"use strict";a.r(e);var i=a("440d"),n=a.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(u);e["default"]=n.a},d7c9:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"zaiui-bar-title-box"},[a("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"}),a("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),a("v-uni-view",{staticClass:"content",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?a("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},n=[]},e6db:function(t,e,a){var i=a("6a3e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("e5f83040",i,!0,{sourceMap:!1,shadowMode:!1})},f57f:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-d67b7c4c]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-d67b7c4c]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-d67b7c4c]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-d67b7c4c]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-d67b7c4c]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-d67b7c4c]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-d67b7c4c]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=e},f79d:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};e.default=i},fa9b:function(t,e,a){"use strict";a.r(e);var i=a("f79d"),n=a.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(u);e["default"]=n.a}}]);