(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["noticeDetail"],{"0ad8":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"notice-detail-wrapper"},[i("div",{staticClass:"notice-detail-inner"},[i("el-breadcrumb",{staticClass:"notice-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},[i("el-breadcrumb-item",{attrs:{to:{name:"Home"}}},[e._v("首页")]),i("el-breadcrumb-item",{attrs:{to:{name:"Notice"}}},[e._v("平台公告")]),i("el-breadcrumb-item",[e._v(e._s(e.noticeDetail.title))])],1),i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[i("h1",{staticClass:"notice-title"},[e._v(e._s(e.noticeDetail.title))]),i("MarkdownPreview",{staticClass:"notice-content",model:{value:e.noticeDetail.content,callback:function(t){e.$set(e.noticeDetail,"content",t)},expression:"noticeDetail.content"}}),i("div",{staticClass:"create-time"},[e._v("创建时间："+e._s(e.noticeDetail.createTime))]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.noticeDetail.modifyTime,expression:"noticeDetail.modifyTime"}],staticClass:"modify-time"},[e._v(" 更新时间："+e._s(e.noticeDetail.modifyTime)+" ")])],1)],1)])},a=[],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"markdown-body",domProps:{innerHTML:e._s(e.value)}})},c=[],s=(i("2e5b"),i("a112"),{name:"MarkdownPreview",props:{value:{type:String,default:""}}}),l=s,r=i("2877"),d=Object(r["a"])(l,o,c,!1,null,null,null),u=d.exports,m=i("fa27"),v={name:"NotieDetail",components:{MarkdownPreview:u},data:function(){return{loading:!1,noticeDetail:{}}},computed:{noticeId:function(){return this.$route.params.noticeId}},watch:{noticeId:function(){this.getNoticeDetailInfo()}},mounted:function(){this.getNoticeDetailInfo()},methods:{getNoticeDetailInfo:function(){var e=this;this.loading=!0,Object(m["a"])({noticeId:this.noticeId}).then(function(t){e.loading=!1,t.success&&(e.noticeDetail=t.data)})}}},f=v,p=(i("986e"),Object(r["a"])(f,n,a,!1,null,"7a35b2c5",null));t["default"]=p.exports},4827:function(e,t,i){},"986e":function(e,t,i){"use strict";i("4827")}}]);