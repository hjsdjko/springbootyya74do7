(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-detail"],{"4afa":function(e,t,i){"use strict";i.r(t);var r=i("ae17"),n=i("77ae");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("b644");var s,o=i("f0c5"),l=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"11a932ec",null,!1,r["a"],s);t["default"]=l.exports},"54df":function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-11a932ec]{--animate-duration:1s;--animate-delay:1s;--animate-repeat:1}.content[data-v-11a932ec]{min-height:calc(100vh - 44px);box-sizing:border-box}.seat-list[data-v-11a932ec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;background:#fff;margin:%?20?%;border-radius:%?20?%;padding:%?20?%;font-size:%?30?%}.seat-list .seat-item[data-v-11a932ec]{width:33.33%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:%?20?%}.seat-list .seat-item .seat-icon[data-v-11a932ec]{width:%?50?%;height:%?50?%;margin-bottom:%?10?%}uni-audio[data-v-11a932ec]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.audio[data-v-11a932ec] .uni-audio-default{width:inherit}',""]),e.exports=t},"77ae":function(e,t,i){"use strict";i.r(t);var r=i("ba6d"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a},9334:function(e,t,i){var r=i("54df");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("457cddc9",r,!0,{sourceMap:!1,shadowMode:!1})},ae17:function(e,t,i){"use strict";var r={"mescroll-uni":i("f05e").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("mescroll-uni",{attrs:{up:e.upOption,down:e.downOption},on:{init:function(t){arguments[0]=t=e.$handleEvent(t),e.mescrollInit.apply(void 0,arguments)},down:function(t){arguments[0]=t=e.$handleEvent(t),e.downCallback.apply(void 0,arguments)},up:function(t){arguments[0]=t=e.$handleEvent(t),e.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"container",style:{width:"100%",background:"#162A68",position:"relative"}},[i("v-uni-view",{staticClass:"detail-content",style:{borderRadius:"40rpx 40rpx 0 0",flexWrap:"wrap",background:"none",display:"flex",height:"auto"}},[i("v-uni-view",{staticClass:"detail-list-item price",style:{borderColor:"#ccc",margin:"0 auto",borderRadius:"24rpx 24rpx 0 0",borderWidth:"0",background:"rgba(255,255,255,0.5)",display:"block",width:"calc(100% - 80rpx)",borderStyle:"solid",height:"auto"}},[1==e.storeupFlag?i("v-uni-view",{style:{width:"200rpx",padding:"0 24rpx",float:"right",textAlign:"right",display:"inline-block",order:"1"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.shoucang.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"icon iconfont icon-shoucang12",style:{margin:"0 4rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#fdcb9e"}}),i("v-uni-text",{style:{color:"#fdcb9e",lineHeight:"80rpx",fontSize:"28rpx"}},[e._v("取消收藏")])],1):e._e(),0==e.storeupFlag?i("v-uni-view",{style:{padding:"0 24rpx",margin:"0",textAlign:"right",background:"none",display:"inline-block",width:"200rpx",float:"right",order:"1"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.shoucang.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"icon iconfont icon-shoucang11",style:{margin:"0 4rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#fdcb9e"}}),i("v-uni-text",{style:{color:"#fdcb9e",lineHeight:"80rpx",fontSize:"28rpx"}},[e._v("收藏")])],1):e._e()],1),i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"6rpx 20rpx",borderColor:"#ccc",margin:"0 auto",flexWrap:"wrap",borderWidth:"0 0 0px 0",background:"rgba(255,255,255,0.5)",display:"flex",width:"calc(100% - 80rpx)",borderStyle:"solid",height:"auto",order:"1"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("标题：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0 0 0 40rpx",lineHeight:"48rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[e._v(e._s(e.detail.title))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"6rpx 20rpx",borderColor:"#ccc",margin:"0 auto",flexWrap:"wrap",borderWidth:"0 0 0px 0",background:"rgba(255,255,255,0.5)",display:"flex",width:"calc(100% - 80rpx)",borderStyle:"solid",height:"auto",order:"1"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("分类名称：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0 0 0 40rpx",lineHeight:"48rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[e._v(e._s(e.detail.typename))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"6rpx 20rpx",borderColor:"#ccc",margin:"0 auto",flexWrap:"wrap",borderWidth:"0 0 0px 0",background:"rgba(255,255,255,0.5)",display:"flex",width:"calc(100% - 80rpx)",borderStyle:"solid",height:"auto",order:"1"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("发布人：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0 0 0 40rpx",lineHeight:"48rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[e._v(e._s(e.detail.name))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#ccc",borderWidth:"0 0 0px 0",display:"none",width:"100%",borderStyle:"solid",height:"auto",order:"3"}},[e.detail.headportrait?i("v-uni-image",{style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:e.baseUrl+e.detail.headportrait}}):e._e()],1),i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"6rpx 20rpx",borderColor:"#ccc",margin:"0 auto",flexWrap:"wrap",borderWidth:"0 0 0px 0",background:"rgba(255,255,255,0.5)",display:"flex",width:"calc(100% - 80rpx)",borderStyle:"solid",height:"auto",order:"1"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("点击次数：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0 0 0 40rpx",lineHeight:"48rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[e._v(e._s(e.detail.clicknum))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"6rpx 20rpx",borderColor:"#ccc",margin:"0 auto",flexWrap:"wrap",borderWidth:"0 0 0px 0",background:"rgba(255,255,255,0.5)",display:"flex",width:"calc(100% - 80rpx)",borderStyle:"solid",height:"auto",order:"1"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("收藏数：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0 0 0 40rpx",lineHeight:"48rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[e._v(e._s(e.detail.storeupnum))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{margin:"0 0 24rpx 0",borderColor:"#ccc",borderWidth:"0 0 0px 0",display:"none",width:"100%",borderStyle:"solid",height:"auto",order:"3"}},[e.detail.picture?i("v-uni-image",{style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:e.baseUrl+e.detail.picture}}):e._e()],1),e.thumbsupFlag||e.crazilyFlag?e._e():i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"20rpx  40rpx",margin:"0 0 20rpx  40rpx",borderColor:"#ccc",borderRadius:"0 0 0 24rpx",borderWidth:"0",background:"rgba(255,255,255,0.5)",display:"flex",width:"calc(50% - 40rpx)",borderStyle:"solid",height:"auto",order:"4"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.zan.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",borderRadius:"40rpx 0 0 40rpx",textAlign:"right",background:"linear-gradient(to right,#2DE4FB, #2254DB)",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx"}},[e._v("赞：")]),i("v-uni-view",{style:{width:"100%",flex:"1",justifyContent:"space-between",display:"flex",height:"auto"}},[i("v-uni-view",{style:{padding:"0 80rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#000000",borderRadius:"0  40rpx  40rpx 0",background:"linear-gradient(to left, #2254DB 100%,#2DE4FB 0%)"}},[e._v(e._s(e.detail.thumbsupnum))]),i("v-uni-view",{staticClass:"cuIcon-appreciate",style:{lineHeight:"80rpx",fontSize:"28rpx",color:"#333",display:"none"}})],1)],1),e.thumbsupFlag?i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"20rpx  40rpx",margin:"0 0 20rpx  40rpx",borderColor:"#ccc",borderRadius:"0 0 0 24rpx",borderWidth:"0",background:"rgba(255,255,255,0.5)",display:"flex",width:"calc(50% - 40rpx)",borderStyle:"solid",height:"auto",order:"4"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.zan.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#333",borderRadius:"40rpx 0 0 40rpx",textAlign:"right",background:"linear-gradient(to right,#2DE4FB, #2254DB)",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx"}},[e._v("已赞：")]),i("v-uni-view",{style:{width:"100%",flex:"1",justifyContent:"space-between",display:"flex",height:"auto"}},[i("v-uni-view",{style:{padding:"0 80rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#000000",borderRadius:"0  40rpx  40rpx 0",background:"linear-gradient(to left, #2254DB 100%,#2DE4FB 0%)"}},[e._v(e._s(e.detail.thumbsupnum))]),i("v-uni-view",{staticClass:"cuIcon-appreciate",style:{lineHeight:"80rpx",fontSize:"28rpx",color:"#333",display:"none"}})],1)],1):e._e(),e.thumbsupFlag||e.crazilyFlag?e._e():i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"20rpx 20rpx",margin:"0 20rpx 20rpx 0",borderColor:"#ccc",borderRadius:"0 0 24rpx 0 ",borderWidth:"0",background:"rgba(255,255,255,0.5)",display:"flex",width:"calc(50% - 40rpx)",borderStyle:"solid",height:"auto",order:"5"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cai.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#000000",borderRadius:"40rpx 0 0 40rpx",textAlign:"right",background:"#BFBFBF",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx"}},[e._v("踩：")]),i("v-uni-view",{style:{width:"100%",flex:"1",justifyContent:"space-between",display:"flex",height:"auto"}},[i("v-uni-view",{style:{padding:"0 80rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#000000",borderRadius:"0 40rpx  40rpx 0",background:"#BFBFBF"}},[e._v(e._s(e.detail.crazilynum))]),i("v-uni-view",{staticClass:"cuIcon-appreciate",staticStyle:{transform:"rotate(180deg)"},style:{lineHeight:"80rpx",fontSize:"28rpx",color:"#333",display:"none"}})],1)],1),e.crazilyFlag?i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"20rpx 20rpx",margin:"0 20rpx 20rpx 0",borderColor:"#ccc",borderRadius:"0 0 24rpx 0 ",borderWidth:"0",background:"rgba(255,255,255,0.5)",display:"flex",width:"calc(50% - 40rpx)",borderStyle:"solid",height:"auto",order:"5"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cai.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 20rpx 0 0",color:"#000000",borderRadius:"40rpx 0 0 40rpx",textAlign:"right",background:"#BFBFBF",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx"}},[e._v("踩：")]),i("v-uni-view",{style:{width:"100%",flex:"1",justifyContent:"space-between",display:"flex",height:"auto"}},[i("v-uni-view",{style:{padding:"0 80rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#000000",borderRadius:"0 40rpx  40rpx 0",background:"#BFBFBF"}},[e._v(e._s(e.detail.crazilynum))]),i("v-uni-view",{staticClass:"cuIcon-appreciate",staticStyle:{transform:"rotate(180deg)"},style:{lineHeight:"80rpx",fontSize:"28rpx",color:"#333",display:"none"}})],1)],1):e._e(),i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"6rpx 20rpx",borderColor:"#ccc",margin:"0 auto",flexWrap:"wrap",borderWidth:"0 0 0px 0",background:"rgba(255,255,255,0.5)",display:"flex",width:"calc(100% - 80rpx)",borderStyle:"solid",height:"auto",order:"1"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("简介")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0 0 0 40rpx",lineHeight:"48rpx",fontSize:"28rpx",color:"rgb(0, 0, 0)"}},[e._v(e._s(e.detail.introduction))])],1),i("v-uni-view",{staticClass:"detail-list-item rich",style:{padding:"6rpx 20rpx",margin:"0 auto",borderColor:"#ccc",borderWidth:"0 0 0px 0",background:"rgba(255,255,255,0.5)",display:"flex",width:"calc(100% - 80rpx)",borderStyle:"solid",height:"auto",order:"2"}},[i("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 10rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("内容")]),i("v-uni-view",{staticClass:"rich-text",style:{padding:"0px 24rpx 24rpx 0",margin:"0",lineHeight:"48rpx",flex:"1"}},[i("v-uni-rich-text",{attrs:{nodes:e.detail.content}})],1)],1),i("v-uni-view",{staticClass:"bottom-content bg-white tabbar border shop",style:{padding:"20rpx 0",margin:"0 auto",flexWrap:"wrap",background:"none",display:"flex",width:"calc(100% - 40rpx)",height:"auto",order:"50"}})],1)],1)],1)],1)],1)},a=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}))},b644:function(e,t,i){"use strict";var r=i("9334"),n=i.n(r);n.a},ba6d:function(e,t,i){"use strict";var r=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("a481"),i("ac6a"),i("f559"),i("55dd"),i("96cf");var n=r(i("3b8d")),a={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},storeupFlag:0,thumbsupFlag:0,crazilyFlag:0,count:0,timer:null,title:""}},components:{},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(i);case 3:r=e.sent,this.user=r.data,this.id=t.id,t.userid&&(this.userid=t.userid),this.init();case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onUnload:function(){this.timer&&clearInterval(this.timer)},onShow:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var i,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(i);case 3:if(r=e.sent,this.user=r.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.getStoreup(),this.getThumbsup(),n=uni.getStorageSync("crossCleanType"),!n){e.next=15;break}return uni.removeStorageSync("crossCleanType"),e.next=13,this.$api.info("news",this.id);case 13:r=e.sent,this.detail=r.data;case 15:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),destroyed:function(){},methods:{callClick:function(e){uni.makePhoneCall({phoneNumber:e})},onPayTap:function(){if(!this.user)return!1;uni.setStorageSync("paytable","news"),uni.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(e){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(e.id,"&userid=")+this.userid)},getStoreup:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.user){e.next=2;break}return e.abrupt("return",!1);case 2:return t={page:1,limit:1,refid:this.id,tablename:"news",userid:this.user.id,type:1},e.next=5,this.$api.list("storeup",t);case 5:i=e.sent,this.storeupFlag=i.data.list.length;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),shoucang:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.user){e.next=2;break}return e.abrupt("return",!1);case 2:return t=this,i={page:1,limit:1,refid:t.detail.id,tablename:"news",userid:t.user.id,type:1},e.next=6,t.$api.list("storeup",i);case 6:if(r=e.sent,1!=r.data.list.length){e.next=11;break}return a=r.data.list[0].id,uni.showModal({title:"提示",content:"是否取消",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=8;break}return t.detail.storeupnum--,e.next=4,t.$api.update("news",t.detail);case 4:return e.next=6,t.$api.del("storeup",JSON.stringify([a]));case 6:t.$utils.msg("取消成功"),t.getStoreup();case 8:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()}),e.abrupt("return");case 11:uni.showModal({title:"提示",content:"是否收藏",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=8;break}return e.next=3,t.$api.add("storeup",{userid:t.user.id,inteltype:t.detail.typename,picture:t.swiperList[0],refid:t.detail.id,tablename:"news",type:1});case 3:return t.detail.storeupnum++,e.next=6,t.$api.update("news",t.detail);case 6:t.$utils.msg("收藏成功"),t.getStoreup();case 8:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()});case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onAcrossTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t,i,r,n,a,s){var o,l,u=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(u.length>6&&void 0!==u[6]?u[6]:1,this.user){e.next=3;break}return e.abrupt("return",!1);case 3:if(uni.setStorageSync("crossTable","news"),uni.setStorageSync("crossObj",this.detail),uni.setStorageSync("statusColumnName",n),uni.setStorageSync("statusColumnValue",s),uni.setStorageSync("tips",a),""==n||n.startsWith("[")){e.next=18;break}o=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(o);case 11:if((e.t1=e.t0()).done){e.next=18;break}if(l=e.t1.value,l!=n||o[l]!=s){e.next=16;break}return this.$utils.msg(a),e.abrupt("return");case 16:e.next=11;break;case 18:this.$utils.jump("../".concat(t,"/add-or-update?cross=true"));case 19:case"end":return e.stop()}}),e,this)})));function t(t,i,r,n,a,s){return e.apply(this,arguments)}return t}(),init:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.timer&&clearInterval(this.timer),e.next=3,this.$api.info("news",this.id);case 3:t=e.sent,this.detail=t.data,this.detail.content=this.detail.content.replace(/img src/gi,'img style="width:100%;" src');case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.hasNext=!0,e.resetUpScroll()},upCallback:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.endSuccess(t.size,this.hasNext);case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var t=this;e=t.$base.url+e,uni.downloadFile({url:e,success:function(i){200===i.statusCode&&(t.$utils.msg("下载成功"),window.open(e))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},getThumbsup:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.user){e.next=2;break}return e.abrupt("return",!1);case 2:return t={page:1,limit:1,refid:this.id,tablename:"news",userid:this.user.id,type:"%2%"},e.next=5,this.$api.list("storeup",t);case 5:i=e.sent,i.data.list.length>0&&("21"==i.data.list[0].type?this.thumbsupFlag=1:this.crazilyFlag=1);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),zan:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.user){e.next=2;break}return e.abrupt("return",!1);case 2:return t=this,i={page:1,limit:1,refid:t.detail.id,tablename:"news",userid:t.user.id,type:"%2%"},e.next=6,t.$api.list("storeup",i);case 6:if(r=e.sent,!(r.data.list.length>0)){e.next=11;break}return a=r.data.list[0].id,uni.showModal({title:"提示",content:"是否取消点赞",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=8;break}return e.next=3,t.$api.del("storeup",JSON.stringify([a]));case 3:return t.detail.thumbsupnum=parseInt(t.detail.thumbsupnum)-1,e.next=6,t.$api.update("news",t.detail);case 6:t.$utils.msg("取消成功"),t.thumbsupFlag=0;case 8:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()}),e.abrupt("return");case 11:uni.showModal({title:"提示",content:"是否点赞",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=8;break}return e.next=3,t.$api.add("storeup",{userid:t.user.id,picture:t.swiperList[0],refid:t.detail.id,tablename:"news",type:"21"});case 3:return t.detail.thumbsupnum=parseInt(t.detail.thumbsupnum)+1,e.next=6,t.$api.update("news",t.detail);case 6:t.$utils.msg("点赞成功"),t.thumbsupFlag=1;case 8:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()});case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cai:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.user){e.next=2;break}return e.abrupt("return",!1);case 2:return t=this,i={page:1,limit:1,refid:t.detail.id,tablename:"news",userid:t.user.id,type:"%2%"},e.next=6,t.$api.list("storeup",i);case 6:if(r=e.sent,!(r.data.list.length>0)){e.next=11;break}return a=r.data.list[0].id,uni.showModal({title:"提示",content:"是否取消点踩",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=8;break}return e.next=3,t.$api.del("storeup",JSON.stringify([a]));case 3:return t.detail.crazilynum=parseInt(t.detail.crazilynum)-1,e.next=6,t.$api.update("news",t.detail);case 6:t.$utils.msg("取消成功"),t.crazilyFlag=0;case 8:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()}),e.abrupt("return");case 11:uni.showModal({title:"提示",content:"是否点踩",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.confirm){e.next=8;break}return e.next=3,t.$api.add("storeup",{userid:t.user.id,picture:t.swiperList[0],refid:t.detail.id,tablename:"news",type:"22"});case 3:return t.detail.crazilynum=parseInt(t.detail.crazilynum)+1,e.next=6,t.$api.update("news",t.detail);case 6:t.$utils.msg("点踩成功"),t.crazilyFlag=1;case 8:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()});case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}};t.default=a}}]);