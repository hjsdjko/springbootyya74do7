(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-forum-add-or-update-forum-add-or-update"],{"073b":function(t,n,e){"use strict";e.r(n);var i=e("2a04"),r=e("96a8");for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("e433");var o,u=e("f0c5"),s=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"f6088bce",null,!1,i["a"],o);n["default"]=s.exports},"27f5":function(t,n,e){var i=e("b657");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=e("4f06").default;r("b526279c",i,!0,{sourceMap:!1,shadowMode:!1})},"2a04":function(t,n,e){"use strict";var i={"xia-editor":e("064f").default},r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{style:{width:"100%",padding:"20rpx 0 120rpx 0",position:"relative",background:" #162A68",height:"100%"}},[e("v-uni-form",{style:{padding:"40rpx 20rpx",margin:"0 20rpx",borderRadius:"20rpx",background:"rgba(255,255,255,0.3)",display:"block",position:"relative",height:"auto"}},[e("v-uni-view",{style:{width:"100%",padding:"0 24rpx",margin:"0 0 20rpx 0",background:"#141332",height:"auto"}},[e("v-uni-input",{style:{border:"0",margin:"0px",color:"#666",flex:"1",background:"#141332",fontSize:"28rpx",height:"88rpx"},attrs:{placeholder:"标题"},model:{value:t.forum.title,callback:function(n){t.$set(t.forum,"title",n)},expression:"forum.title"}})],1),e("v-uni-view",{style:{width:"100%",padding:"0 24rpx",margin:"0 0 20rpx 0",background:"#141332",height:"auto"}},[e("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:t.index,range:t.options},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.setIsDoneTap.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-picker-type",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#666"}},[t._v(t._s(t.options[t.index]))])],1)],1),e("v-uni-view",{style:{width:"100%",padding:"0 24rpx",margin:"0 0 20rpx 0",background:"#141332",height:"auto"}},[e("xia-editor",{style:{padding:"0",margin:"0px",color:"#666",flex:"1",background:"rgba(255, 255, 255, 0)",lineHeight:"88rpx",height:"auto"},attrs:{placeholder:"内容"},on:{editorChange:function(n){arguments[0]=n=t.$handleEvent(n),t.contentChange.apply(void 0,arguments)}},model:{value:t.forum.content,callback:function(n){t.$set(t.forum,"content",n)},expression:"forum.content"}})],1),e("v-uni-view",{style:{width:"100%",padding:"0 20rpx ",margin:"40rpx 0",background:"none",height:"auto"}},[e("v-uni-button",{staticClass:"bg-red margin-tb-sm",style:{border:"0",padding:"0px",color:"#fff",borderRadius:"50rpx",background:"linear-gradient(to right, #2DF1FD, #2148D9)",width:"100%",letterSpacing:"2rpx",lineHeight:"88rpx",fontSize:"36rpx",fontWeight:"900",height:"88rpx"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onSubmitTap.apply(void 0,arguments)}}},[t._v("确认提交")])],1)],1)],1)],1)},a=[];e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}))},4280:function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("96cf");var r=i(e("3b8d")),a=i(e("064f")),o={data:function(){return{forum:{content:"",id:"",title:"",isdone:"开放",parentid:0},index:0,options:["开放","关闭"],username:"",user:{}}},components:{xiaEditor:a.default},onLoad:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(n){var e,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=uni.getStorageSync("nowTable"),t.next=3,this.$api.session(e);case 3:if(i=t.sent,this.user=i.data,"yonghu"==e&&(this.username=this.user.yonghuzhanghao),!n.id){t.next=12;break}return this.id=n.id,t.next=10,this.$api.info("forum",this.id);case 10:r=t.sent,this.forum=r.data;case 12:this.styleChange();case 13:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),methods:{contentChange:function(t){this.forum.content=t},styleChange:function(){this.$nextTick((function(){}))},onSubmitTap:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.forum.username=this.username,!this.id){t.next=6;break}return t.next=4,this.$api.update("forum",this.forum);case 4:t.next=8;break;case 6:return t.next=8,this.$api.save("forum",this.forum);case 8:this.$utils.msgBack("操作成功");case 9:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),setIsDoneTap:function(t){this.index=t.target.value,this.forum.isdone=this.options[this.index]}}};n.default=o},"96a8":function(t,n,e){"use strict";e.r(n);var i=e("4280"),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=r.a},b657:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-f6088bce]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),t.exports=n},e433:function(t,n,e){"use strict";var i=e("27f5"),r=e.n(i);r.a}}]);