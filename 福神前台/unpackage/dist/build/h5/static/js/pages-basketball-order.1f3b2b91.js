(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-basketball-order"],{"09b0":function(e,t,n){"use strict";n.r(t);var i=n("9c4f"),r=n("1f33");for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("d872");var o=n("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"63dc4688",null,!1,i["a"],void 0);t["default"]=c.exports},"1f33":function(e,t,n){"use strict";n.r(t);var i=n("597c"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},"597c":function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("4de4"),n("d3b7"),n("e9c4"),n("14d9"),n("4e82"),n("e25e"),n("acd8"),n("07ac"),n("13d5"),n("159b"),n("99af"),n("a434");var r=i(n("cdb6")),a=i(n("2fb6")),o=i(n("044e")),c={name:"order",components:{barTitle:a.default,ldSelect:r.default,payorder:o.default},data:function(){return{shop_money:0,is_order_open:!1,chuan_arr:[],is_open:!1,bei:50,type:"foot",check_game:[]}},methods:{launchFlow:function(){var e=this.chuan_arr;e=e.filter((function(e){return 1==e["checked"]}));var t=this.getPlzh(),n={type:"basket",num:t.length,checkGame:JSON.stringify(t),bei:this.bei,mode:1,chuan:JSON.stringify(e),en_type:"竞彩篮球",money:t.length*this.bei*2,check_game:t,chuan_arr:e,expect_min_award:this.getExpectMinAward(),expect_max_award:this.getExpectMaxAward()};uni.navigateTo({url:"/pages/flow/index?data="+encodeURIComponent(JSON.stringify(n))})},doorder:function(){var e=this.chuan_arr;e=e.filter((function(e){return 1==e["checked"]}));var t={type:"foot",num:this.getPlzh().length,checkGame:JSON.stringify(this.getPlzh()),bei:this.bei,mode:1,chuan:JSON.stringify(e)};this.$api.doorder_(t).then((function(e){var t=encodeURIComponent(JSON.stringify(e.data));uni.navigateTo({url:"/pages/order/orderdetail?str="+t})}))},goOptimize:function(){if(this.getPlzh().length>1){var e=encodeURIComponent(JSON.stringify(this.getPlzh())),t=this.getPlzh().length*this.bei*2;uni.navigateTo({url:"/pages/football/optimize?str="+e+"&money="+t+"&type="+this.type})}},getPlzh:function(){var e=this.chuan_arr,t=[];for(var n in e)1==e[n]["checked"]&&t.push(e[n]["value"]);var i=[],r=[];for(var a in t){var o="单关"!=t[a]?t[a]:1;r.push(this.pl(this.check_game,o))}for(var c in r){var s=r[c];for(var u in s){var l=this.dikaer(s[u]);for(var h in l)i.push(l[h])}}return i},clone:function(e){var t;if(e instanceof Array){t=[];var n=e.length;while(n--)t[n]=this.clone(e[n]);return t}if(e instanceof Object){for(var i in t={},e)t[i]=this.clone(e[i]);return t}return e},getExpectMinAward:function(){var e=this.clone(this.check_game),t=[];for(var n in e){var i=e[n]["bet"],r=[],a=[],o=[],c=[],s=[],u=[];for(var l in i){var h=i[l],p=h["met"].split("-");1==p[0]&&a.push(h),2==p[0]&&o.push(h),3==p[0]&&c.push(h),4==p[0]&&s.push(h),5==p[0]&&u.push(h)}a.length>0&&r.push(a),o.length>0&&r.push(o),c.length>0&&r.push(c),s.length>0&&r.push(s),u.length>0&&r.push(u);var d=this.dikaer(r),v=[];for(var f in d){var g=d[f];Array.isArray(g)||(g=[g]),v.push(this.filter_game(g))}var x=v.sort((function(e,t){var n=0,i=0;for(var r in e)n+=parseInt(e[r]["pl"]);for(var a in t)i+=parseInt(t[a]["pl"]);return i-n}))[0];t.push(x)}var _=this.chuan_arr,y=[];for(var m in _)1==_[m]["checked"]&&y.push(_[m]["value"]);var b=[],w=[],k={};for(var E in y){var S="单关"!=y[E]?y[E]:1,A={};A["chuan"]=y[E],A["content"]=this.pl(this.check_game,S),w.push(A),k[y[E]]=9999999}var M=[];for(var $ in w){var z=w[$]["content"],C=w[$]["chuan"];for(var j in z){var I=this.dikaer(z[j]);for(var O in I){if("单关"!=C){var F=2;for(var P in I[O])F*=parseFloat(I[O][P]["pl"]);M.push(F),F<k[C]&&(k[C]=F)}else{F=2*parseFloat(I[O]["pl"]);M.push(F),F<k[C]&&(k[C]=F)}b.push(I[O])}}}M=M.sort((function(e,t){return e-t}));return k=Object.values(k).sort((function(e,t){return e-t})),0==k.length?0:parseFloat(k[0]*this.bei).toFixed(2)},getExpectMaxAward:function(){var e=this.clone(this.check_game),t=[];for(var n in e){var i=e[n]["bet"],r=[],a=[],o=[],c=[],s=[],u=[];for(var l in i){var h=i[l],p=h["met"].split("-");1==p[0]&&a.push(h),2==p[0]&&o.push(h),3==p[0]&&c.push(h),4==p[0]&&s.push(h),5==p[0]&&u.push(h)}a.length>0&&r.push(a),o.length>0&&r.push(o),c.length>0&&r.push(c),s.length>0&&r.push(s),u.length>0&&r.push(u);var d=this.dikaer(r),v=[];for(var f in d){var g=d[f];Array.isArray(g)||(g=[g]),v.push(this.filter_game(g))}var x=v.sort((function(e,t){var n=0,i=0;for(var r in e)n+=parseInt(e[r]["pl"]);for(var a in t)i+=parseInt(t[a]["pl"]);return i-n}))[0];t.push(x)}var _=this.chuan_arr,y=[];for(var m in _)1==_[m]["checked"]&&y.push(_[m]["value"]);var b=[],w=[],k={};for(var E in y){var S="单关"!=y[E]?y[E]:1,A={};A["chuan"]=y[E],A["content"]=this.pl(t,S),w.push(A),k[y[E]]=9999999}var M=[];for(var $ in w){var z=w[$]["content"],C=w[$]["chuan"];for(var j in z){var I=this.dikaer(z[j]);for(var O in I){if("单关"!=C){var F=2;for(var P in I[O])F*=parseFloat(I[O][P]["pl"]);M.push(F),F<k[C]&&(k[C]=F)}else{F=2*parseFloat(I[O]["pl"]);M.push(F),F<k[C]&&(k[C]=F)}b.push(I[O])}}}M=M.sort((function(e,t){return e-t}));var B=0;for(var J in M)B+=M[J];return 0==M.length?0:M.length>=1?parseFloat(B*this.bei).toFixed(2):void 0},filter_game:function(e){var t=[],n=[],i=[],r=[],a=[],o=[],c=[];for(var s in e){var u=e[s],l=u["met"].split("-"),h=parseFloat(u["p_goal"]);if(h<0){if("1-2"==u["met"]&&n.push(u),4==l[0]&&l[1]>=7){var p=u["name"].substr(2,1);Math.abs(h)<parseFloat(p)&&n.push(u)}"2-2"==u["met"]&&n.push(u),3==l[0]&&n.push(u)}if(h<0){if("1-2"==u["met"]&&i.push(u),4==l[0]&&l[1]>=7){p=u["name"].substr(2,1);Math.abs(h)>parseFloat(p)&&i.push(u)}"2-1"==u["met"]&&i.push(u),3==l[0]&&i.push(u)}if(h>0&&("1-2"==u["met"]&&r.push(u),"2-2"==u["met"]&&r.push(u),4==l[0]&&l[1]>=7&&r.push(u),3==l[0]&&r.push(u)),h>0){if("1-1"==u["met"]&&a.push(u),4==l[0]&&l[1]>=1&&l[1]<=6){p=u["name"].substr(2,1);Math.abs(h)>parseFloat(p)&&a.push(u)}"2-2"==u["met"]&&a.push(u),3==l[0]&&a.push(u)}if(h>0){if("1-1"==u["met"]&&o.push(u),4==l[0]&&l[1]>=1&&l[1]<=6){p=u["name"].substr(2,1);Math.abs(h)<parseFloat(p)&&o.push(u)}"2-1"==u["met"]&&o.push(u),3==l[0]&&o.push(u)}h<0&&("1-1"==u["met"]&&c.push(u),4==l[0]&&l[1]>=1&&l[1]<=6&&c.push(u),"2-1"==u["met"]&&c.push(u),3==l[0]&&c.push(u))}n.length>0&&t.push(n),i.length>0&&t.push(i),r.length>0&&t.push(r),a.length>0&&t.push(a),o.length>0&&t.push(o),c.length>0&&t.push(c);var d=t.sort((function(e,t){var n=0,i=0;for(var r in e)n+=parseFloat(e[r]["pl"]);for(var a in t)i+=parseFloat(t[a]["pl"]);return i-n}))[0];return d},pl:function(e,t){for(var n=e.length,i=Math.pow(2,n),r=Math.pow(2,t)-1,a=[],o=r;o<i;o++){for(var c=0,s=[],u=0;u<n;u++){var l=Math.pow(2,u),h=o&l;h==l&&(e[u]["bet"]?s.push(e[u]["bet"]):s.push(e[u]),c++)}c==t&&a.push(s)}return a},dikaer:function(e){return e.length<2?e[0]||[]:[].reduce.call(e,(function(e,t){var n=[];return Object.values(e).forEach((function(e){Object.values(t).forEach((function(t){var i=[].concat(Array.isArray(e)?e:[e]);i.push(t),n.push(i)}))})),n}))},checkedChuan:function(e){this.chuan_arr[e]["checked"]=!this.chuan_arr[e]["checked"]},getChuanStr:function(){var e=this.chuan_arr;e=e.filter((function(e){return 1==e["checked"]}));var t="";return 0==e.length&&(t+="请选择"),1==e.length&&(t+="单关"==e[0]["value"]?"单关":e[0]["value"]+"串1 "),2==e.length&&(t+="单关"==e[0]["value"]?"单关":e[0]["value"]+"串1 ",t+="单关"==e[1]["value"]?"单关":e[1]["value"]+"串1 "),e.length>2&&(t+="单关"==e[0]["value"]?"单关":e[0]["value"]+"串1 ",t+="...",t+="单关"==e[e.length-1]["value"]?"单关":e[e.length-1]["value"]+"串1 "),t},getChuanArr:function(){var e=[],t=this.check_game.length;if(0==t)return this.chuan_arr=[],[];if(2==t&&(e=[{value:2,checked:!0}]),t>2)for(var n=2;n<=t;n++){var i=!1;n==t&&(i=!0),e.push({value:n,checked:i})}var r=!0;for(var a in this.check_game){var o=this.check_game[a];for(var c in o["bet"])if(0==o["bet"][c]["p_single"]){r=!1;break}}return 1==r&&(0==e.length?e.push({value:"单关",checked:!0}):e.push({value:"单关",checked:!1})),this.chuan_arr=e,e},subBei:function(){this.bei>1&&this.bei--},addBei:function(){this.bei++},starBlur:function(e,t){e.detail.value<1&&(this.bei=1)},starBlur_:function(e){e<1&&(this.bei=1)},cancel:function(){this.$refs.popup.close("bottom")},open:function(e){0==this.is_open?(this.$refs.popup.open("bottom"),this.is_open=!0):(this.$refs.popup.close("bottom"),this.is_open=!1)},getUserInfo:function(){var e=this;this.$api.getUserInfo({}).then((function(t){var n=t.data.data;e.shop_money=n.total_money,e.$refs.orderpop_.$refs.orderpop.open("bottom"),e.is_order_open=!0}))},closeopendoor:function(){this.$refs.orderpop_.$refs.orderpop.close("bottom"),this.is_order_open=!1},openorderpop:function(){0==this.is_order_open&&this.getPlzh().length>0?this.getUserInfo():(this.$refs.orderpop_.$refs.orderpop.close("bottom"),this.is_order_open=!1)},selectChange:function(e){this.value=e},selectChange2:function(e){this.value2=e},selectChange4:function(e){this.value4=e},selectChange5:function(e){this.value5=e},goBack:function(){uni.navigateBack()},deleteItem:function(e){this.check_game.splice(e,1),this.getChuanArr()},can_order:function(){var e=this.check_game.length;if(0==e)return!1;if(1==e){var t=!0,n=this.check_game[0];for(var i in n["bet"])"1"!=n["bet"][i]["p_single"]&&(t=!1);return 1==t}return!0}},onLoad:function(e){var t=JSON.parse(decodeURIComponent(e.data));for(var n in this.type=t["type"],this.check_game=t["check_game"],this.check_game){var i=this.check_game[n]["bet"];for(var r in i)i[r]["met"]=r,i[r]["h_name"]=this.check_game[n]["h_name"],i[r]["a_name"]=this.check_game[n]["a_name"]}this.getChuanArr()}};t.default=c},"63a8":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"uni-page-body[data-v-63dc4688]{background:#f3f3f3}body.?%PAGE?%[data-v-63dc4688]{background:#f3f3f3}.border-style[data-v-63dc4688]{padding:%?5?% %?20?%;margin:0 %?10?%;border:1px solid #d1d1d1}.checked[data-v-63dc4688]{background-color:#09f;color:#fff}.unchecked[data-v-63dc4688]{background-color:#fff;color:#000}",""]),e.exports=t},"6c43":function(e,t,n){var i=n("63a8");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("356ed662",i,!0,{sourceMap:!1,shadowMode:!1})},"9c4f":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uniPopup:n("6055").default},r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[i("template",{attrs:{slot:"content"},slot:"content"},[e._v("投注单")])],2),1==e.can_order()?i("v-uni-view",{staticStyle:{display:"flex",width:"100%","justify-content":"space-around","margin-top":"30rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","background-color":"white",width:"40%","justify-content":"center",padding:"10rpx 0","border-radius":"10rpx"}},[i("v-uni-view",{staticClass:"cuIcon-add",staticStyle:{"font-weight":"bold","margin-right":"10rpx"}}),i("v-uni-view",{staticStyle:{"font-weight":"bold"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goBack()}}},[e._v("添加赛事")])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","background-color":"white",width:"40%","justify-content":"center",padding:"10rpx 0","border-radius":"10rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.launchFlow()}}},[i("v-uni-view",{staticClass:"cuIcon-people",staticStyle:{"font-weight":"bold","margin-right":"10rpx"}}),i("v-uni-view",{staticStyle:{"font-weight":"bold"}},[e._v("发起跟单")])],1)],1):e._e(),0==e.can_order()?i("v-uni-view",{staticStyle:{display:"flex",width:"100%","justify-content":"space-around","margin-top":"30rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","background-color":"white",width:"90%","justify-content":"center",padding:"10rpx 0","border-radius":"10rpx"}},[i("v-uni-view",{staticClass:"cuIcon-add",staticStyle:{"font-weight":"bold","margin-right":"10rpx"}}),i("v-uni-view",{staticStyle:{"font-weight":"bold"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goBack()}}},[e._v("添加赛事")])],1)],1):e._e(),i("v-uni-view",{staticStyle:{width:"100%",display:"flex","justify-content":"center","margin-top":"20rpx"}},[i("v-uni-image",{staticStyle:{height:"30rpx",width:"680rpx"},attrs:{src:n("8ebf")}})],1),i("v-uni-view",{staticStyle:{width:"100%",display:"flex","justify-content":"center"}},[i("v-uni-view",{staticStyle:{"background-color":"white",width:"655rpx","margin-top":"-20rpx","box-shadow":"11rpx 2rpx 15rpx 12rpx #DCDCDC"}},e._l(e.check_game,(function(t,n){return i("v-uni-view",{key:n,staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center","border-bottom":"1px dashed #acacac",padding:"20rpx 0"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-around",width:"100%",padding:"20rpx 0"}},[i("v-uni-view",{staticStyle:{width:"250rpx",display:"flex","align-items":"center","justify-content":"space-around","font-size":"25rpx"}},[i("v-uni-view",[e._v("周"+e._s(t["week"])+e._s(t["suffix_num"]))]),i("v-uni-view",[e._v(e._s(t["h_name"]))])],1),i("v-uni-view",[e._v("VS")]),i("v-uni-view",{staticStyle:{width:"250rpx",display:"flex","align-items":"center","justify-content":"space-around","font-size":"25rpx"}},[i("v-uni-view",[e._v(e._s(t["a_name"]))]),i("v-uni-view",{staticClass:"cuIcon-roundclose",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.deleteItem(n)}}})],1)],1),i("v-uni-view",{staticStyle:{"background-color":"#f3f3f3",width:"90%",height:"70rpx",display:"flex","justify-content":"center","align-items":"center",color:"#4e90f7","font-size":"26rpx"}},e._l(t["bet"],(function(t,n){return i("v-uni-view",{key:n,staticStyle:{display:"flex",padding:"0 6rpx"}},[e._v(e._s(t["name"]))])})),1)],1)})),1)],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center",position:"relative"}},[i("v-uni-image",{staticStyle:{height:"100rpx",width:"655rpx"},attrs:{src:n("aab4")}}),e.check_game.length>0?i("v-uni-text",{staticStyle:{position:"absolute",left:"280rpx",top:"15rpx",color:"grey","font-size":"25rpx"}},[e._v("您已选择"+e._s(e.check_game.length)+"场比赛")]):e._e(),0==e.check_game.length?i("v-uni-text",{staticStyle:{position:"absolute",left:"320rpx",top:"15rpx",color:"grey","font-size":"25rpx"}},[e._v("请选择比赛")]):e._e()],1),i("uni-popup",{ref:"popup",staticStyle:{"z-index":"99",height:"600rpx"},attrs:{"mask-click":!0,type:"bottom","background-color":"#fff"}},[i("v-uni-view",{staticStyle:{"min-height":"300rpx",padding:"15rpx 20rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between",color:"grey","padding-bottom":"20rpx"}},[i("v-uni-view",[e._v("自由过关")]),e._v("、"),i("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.open()}}},[e._v("收起")])],1),e._l(e.chuan_arr,(function(t,n){return i("v-uni-view",{key:n,staticStyle:{display:"inline-block"}},[i("v-uni-view",{class:["border-style",{checked:1==t["checked"]},{unchecked:0==t["checked"]}],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.checkedChuan(n)}}},[e._v(e._s("单关"!=t["value"]?t["value"]+"串1":"单关"))])],1)}))],2)],1),i("payorder",{ref:"orderpop_",attrs:{expect_min_award:e.getExpectMinAward(),expect_max_award:e.getExpectMaxAward(),amount:e.getPlzh().length*e.bei*2,shop_money:this.shop_money,bei:e.bei,check_game:e.getPlzh(),mode:1,chuan_arr:e.chuan_arr,game_type:e.type},on:{closeopendoor:function(t){arguments[0]=t=e.$handleEvent(t),e.closeopendoor()}}}),i("v-uni-view",{staticStyle:{position:"fixed",left:"0",right:"0",bottom:"0","background-color":"white","z-index":"999",display:"flex","flex-direction":"column"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center","border-top":"2px solid #EEEEEE","padding-top":"20rpx","padding-left":"30rpx"}},[i("v-uni-view",{staticStyle:{border:"1px solid #d1d1d1",display:"flex","align-items":"center","justify-content":"center","min-width":"200rpx",padding:"0 20rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.open()}}},[i("v-uni-view",{staticStyle:{"margin-right":"40rpx"}},[e._v(e._s(e.getChuanStr()))]),i("v-uni-view",{staticClass:"cuIcon-unfold"})],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel()}}},[e._v("投")]),i("v-uni-view",{staticStyle:{"background-color":"#EEEEEE",height:"50rpx","text-align":"center",width:"50rpx","margin-left":"20rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.subBei()}}},[e._v("一")]),i("v-uni-input",{staticStyle:{background:"#EEEEEE",width:"50rpx",margin:"0 5rpx",height:"50rpx","text-align":"center"},attrs:{type:"number"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.starBlur_(e.bei)},input:function(t){arguments[0]=t=e.$handleEvent(t),e.starBlur(t,3)}},model:{value:e.bei,callback:function(t){e.bei=t},expression:"bei"}}),i("v-uni-view",{staticClass:"cuIcon-add",staticStyle:{color:"#000000","background-color":"#EEEEEE",height:"50rpx","text-align":"center",width:"50rpx","line-height":"50rpx","margin-right":"20rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addBei()}}}),i("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[e._v("倍")])],1)],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center",padding:"10rpx 20rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},[i("v-uni-view",{staticStyle:{"font-size":"25rpx"}},[i("v-uni-text",[e._v("共")]),i("v-uni-text",[e._v(e._s(e.getPlzh().length)+"注")]),i("v-uni-text",[e._v(e._s(e.bei)+"倍")]),i("v-uni-text",[e._v(e._s(e.getPlzh().length*e.bei*2)+"元")])],1),0==e.getExpectMaxAward()?i("v-uni-view",{staticStyle:{color:"red","font-size":"25rpx"}},[e._v("预测奖金 0.00元")]):e._e(),e.getExpectMaxAward()==e.getExpectMinAward()&&e.getExpectMinAward()>0?i("v-uni-view",{staticStyle:{color:"red","font-size":"25rpx"}},[e._v("预测奖金 "+e._s(e.getExpectMinAward())+"元")]):e._e(),e.getExpectMaxAward()>0&&e.getExpectMaxAward()!=e.getExpectMinAward()?i("v-uni-view",{staticStyle:{color:"red","font-size":"25rpx"}},[e._v("预测奖金 "+e._s(e.getExpectMinAward())+" ~ "+e._s(e.getExpectMaxAward()))]):e._e()],1),i("v-uni-view",[i("v-uni-view",{staticStyle:{display:"inline-block","background-color":"#dcf4f2",padding:"10rpx 20rpx","border-radius":"20rpx 0 0 20rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goOptimize()}}},[e._v("奖金优化")]),i("v-uni-view",{staticStyle:{display:"inline-block",background:"linear-gradient(to right,#97e2e2,#ffaaff)",padding:"10rpx 50rpx","border-radius":"0 20rpx 20rpx 0"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openorderpop()}}},[e._v("提交")])],1)],1)],1)],1)},a=[]},d872:function(e,t,n){"use strict";var i=n("6c43"),r=n.n(i);r.a}}]);