(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-view_appraise","components-zaiui-common-basics-orderdetail"],{"0059":function(t,i,a){"use strict";var e=a("7905"),n=a.n(e);n.a},"091d":function(t,i,a){"use strict";a.r(i);var e=a("41c3"),n=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},"2fb6":function(t,i,a){"use strict";a.r(i);var e=a("db45"),n=a("091d");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(o);a("0059");var s=a("f0c5"),u=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"1f1d0f19",null,!1,e["a"],void 0);i["default"]=u.exports},"3a93":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-1f1d0f19]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-1f1d0f19]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-1f1d0f19]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-1f1d0f19]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-1f1d0f19]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-1f1d0f19]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-1f1d0f19]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=i},"41c3":function(t,i,a){"use strict";a("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},opacity:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};i.default=e},"4af7":function(t,i,a){"use strict";a.r(i);var e=a("6ff3"),n=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},"4c4f":function(t,i,a){"use strict";a.r(i);var e=a("cfdf"),n=a("4af7");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(o);a("d1f2");var s=a("f0c5"),u=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"104132f5",null,!1,e["a"],void 0);i["default"]=u.exports},5998:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,"uni-page-body[data-v-104132f5]{background:#fff}body.?%PAGE?%[data-v-104132f5]{background:#fff}.zaiui-goods-details-box[data-v-104132f5]{position:relative;padding:%?27.27?%}.zaiui-goods-details-box .cu-avatar[data-v-104132f5]{position:absolute;width:%?81.81?%;height:%?81.81?%}.zaiui-goods-details-box .goods-info-view[data-v-104132f5]{position:relative;padding-left:%?109.09?%;height:%?81.81?%;line-height:1.7}.zaiui-goods-details-box .zaiui-goods-tip-view[data-v-104132f5]{position:relative;margin-top:%?27.27?%}.zaiui-hight-view[data-v-104132f5]{width:100%;height:%?36.36?%;background:#fafafa}.zaiui-appraise-view[data-v-104132f5]{position:relative;background-color:#f8f8f8;margin:%?27.27?% %?27.27?% %?27.27?% %?136.36?%;border-radius:%?9.09?%;padding:%?21.81?%}.zaiui-appraise-view .title-view[data-v-104132f5]{position:relative}.zaiui-appraise-view .title-view .name[data-v-104132f5]{position:absolute}.zaiui-appraise-view .title-view .content[data-v-104132f5]{position:relative;padding-left:%?136.36?%}.zaiui-appraise-view .time-view[data-v-104132f5]{position:relative;margin-top:%?14.54?%}.zaiui-appraise-view .time-view .time[data-v-104132f5]{position:relative;padding-right:%?145.45?%}.zaiui-appraise-view .time-view .status[data-v-104132f5]{position:absolute;right:0;top:0}.zaiui-foot-tip-view[data-v-104132f5]{position:relative;text-align:center;margin-top:%?72.72?%;margin:%?27.27?% 0}.zaiui-foot-tip-view .img-view[data-v-104132f5]{position:relative;margin-bottom:%?9.09?%}.zaiui-foot-tip-view .img-view .cu-avatar[data-v-104132f5]{background:#fff;background-size:cover;background-position:50%}.zaiui-btn-view[data-v-104132f5]{position:fixed;width:100%;bottom:calc(env(safe-area-inset-bottom) / 2)}.zaiui-btn-view .flex[data-v-104132f5]{padding:%?18.18?%}",""]),t.exports=i},"6ff3":function(t,i,a){"use strict";a("7a82");var e=a("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("2fb6")),o=e(a("0bcb")),s={components:{barTitle:n.default},data:function(){return{bg_img:"/static/images/home/goods/1.png"}},onLoad:function(){},onReady:function(){o.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{addTap:function(){uni.navigateTo({url:"/pages/order/add_appraise"})}}};i.default=s},7905:function(t,i,a){var e=a("3a93");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("124e0950",e,!0,{sourceMap:!1,shadowMode:!1})},8578:function(t,i,a){var e=a("5998");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("29326104",e,!0,{sourceMap:!1,shadowMode:!1})},cfdf:function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[a("template",{attrs:{slot:"content"},slot:"content"},[t._v("评价详情")])],2),a("v-uni-view",{staticClass:"bg-white zaiui-goods-details-box"},[a("v-uni-view",{staticClass:"cu-avatar radius",style:[{backgroundImage:"url("+t.bg_img+")"}]}),a("v-uni-view",{staticClass:"goods-info-view"},[a("v-uni-view",{staticClass:"text-cut text-black"},[t._v("商品名称 99新 苹果 iPhoneX 256G 银色")]),a("v-uni-view",{staticClass:"text-gray text-sm"},[t._v("交易时间: 2020-04-02 15:22")])],1),a("v-uni-view",{staticClass:"text-gray text-sm text-cut zaiui-goods-tip-view"},[t._v("您购买的商品信息仅对您本人可见,不会对他人展示。")])],1),a("v-uni-view",{staticClass:"zaiui-hight-view"}),a("v-uni-view",{staticClass:"zaiui-appraise-view"},[a("v-uni-view",{staticClass:"title-view"},[a("v-uni-view",{staticClass:"name"},[t._v("我的评价：")]),a("v-uni-view",{staticClass:"content"},[t._v("很棒，66666")])],1),a("v-uni-view",{staticClass:"text-sm text-gray time-view"},[a("v-uni-view",{staticClass:"time"},[t._v("买家 2020-04-02")]),a("v-uni-view",{staticClass:"status"},[t._v("非常满意")])],1)],1),a("v-uni-view",{staticClass:"zaiui-foot-tip-view"},[a("v-uni-view",{staticClass:"img-view"},[a("v-uni-view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url('/static/zaiui/img/acn.png')"}})],1),a("v-uni-view",{staticClass:"text-gray"},[t._v("hi,到底啦~")])],1),a("v-uni-view",{staticClass:"zaiui-btn-view"},[a("v-uni-view",{staticClass:"flex flex-direction"},[a("v-uni-button",{staticClass:"cu-btn bg-red",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.addTap.apply(void 0,arguments)}}},[t._v("追加评价")])],1)],1)],1)},n=[]},d1f2:function(t,i,a){"use strict";var e=a("8578"),n=a.n(e);n.a},db45:function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"zaiui-bar-title-box",style:{opacity:1==t.opacity?0:1}},[a("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"}),a("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),a("v-uni-view",{staticClass:"content",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?a("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},n=[]}}]);