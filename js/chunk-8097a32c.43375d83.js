(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8097a32c"],{"04c4":function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"b",(function(){return r})),a.d(e,"d",(function(){return s})),a.d(e,"a",(function(){return c}));a("99af");var n=a("2777");function i(t){return n["a"].get("team/race/achieve/".concat(t,"/top100"))}function s(t){return n["a"].get("team/race/achieve/finish/process",{params:{ids:t}})}function r(t,e){return n["a"].get("team/rank/events/".concat(t,"/live-tv-list"),{params:e})}function c(t,e){return n["a"].post("team/events/".concat(t,"/vote-team/").concat(e))}},1450:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return s}));var n=a("2777");function i(){return n["a"].get("team/my-team")}function s(t,e){return n["a"].get("team/rank/events/".concat(t,"/all-teams"),{params:e})}},"29c8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-rank-vote"},[a("div",{staticClass:"m-rank-vote-title"},[a("img",{attrs:{src:t.vote_title_img}})]),t._m(0),a("table",{staticClass:"m-rank-vote-table"},[t._m(1),a("tbody",t._l(t.data,(function(e,n){return a("tr",{key:n},[a("td",[a("i",{staticClass:"u-ranking"},[t._v(t._s(n+1))])]),a("td",[a("img",{staticClass:"u-logo",attrs:{loading:"lazy",src:t._f("teamLogo")(e.logo),alt:e.name}})]),a("td",[a("a",{staticClass:"u-name",attrs:{href:t._f("teamLink")(e.team_id),target:"_blank"}},[t._v(" "+t._s(e.name)+" ")])]),a("td",[a("span",{staticClass:"u-server"},[t._v(t._s(e.server))])]),a("td",[a("span",{staticClass:"u-count"},[t._v(t._s(e.votes))])]),a("td",{staticClass:"u-vote-wapper"},[a("button",{staticClass:"u-vote",class:{disabled:e.clicked},on:{click:function(a){return t.vote(e)}}})])])})),0)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-rank-vote-header"},[a("div",{staticClass:"u-tip"},[a("i",{staticClass:"el-icon-info"}),t._v(" 规则说明：需"),a("a",{attrs:{href:"/account/login/",target:"_blank"}},[t._v("登录")]),t._v("并有"),a("a",{attrs:{href:"/dashboard/#/connect",target:"_blank"}},[t._v("绑定微信")]),t._v("的用户方可投票，每天可给3支不同团队各投1票。10月29日开启通道，结榜后关闭通道。 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"120px"}},[t._v("排名")]),a("th",{attrs:{width:"120px"}}),a("th",{attrs:{width:"120px"}},[t._v("团队")]),a("th",[t._v("服务器")]),a("th",[t._v("票数")]),a("th",[t._v("参与投票")])])])}],s=a("64c7"),r=a("1450"),c=a("85e4"),o=a("04c4"),u=a("c9d2"),d=a.n(u);function l(){var t=encodeURIComponent(encodeURIComponent(location.href)),e="https://server.jx3box.com/oauth/wechat/callback?skip="+t;return'<iframe class="m-rank-pop-wechat" src="https://open.weixin.qq.com/connect/qrconnect?appid=wx7804c72000d28202&redirect_uri='.concat(e,'&response_type=code&scope=snsapi_login&state=jx3box#wechat_redirect"></iframe>\n    <p class="m-rank-pop-wechat-tips"><i class="el-icon-warning-outline"></i> 如绑定后仍提示绑定界面请重新登录</p>')}var v=l,m={props:[],data:function(){return{vote_title_img:s["__imgPath"]+"image/rank/common/vote.png",data:[],isLogin:d.a.isLogin(),dialog_visible:!1}},computed:{id:function(){return this.$store.state.id}},methods:{vote:function(t){var e=this;this.isLogin?d.a.hasBindwx()?Object(o["a"])(this.id,t.team_id).then((function(a){e.$message({message:"投票成功",type:"success",duration:1e3}),t.clicked=!0,t.votes=1+~~t.votes,e.$forceUpdate()})):this.$alert(v(),"提示",{confirmButtonText:"确定",dangerouslyUseHTMLString:!0}):d.a.toLogin()}},filters:{teamLogo:function(t){return t?Object(c["getThumbnail"])(t,48,!0):default_avatar},teamLink:function(t){return"/team/#/org/view/"+t}},created:function(){var t=this;Object(r["a"])(this.id,{orderBy:"votes"}).then((function(e){t.data=e.data.data.list}))},mounted:function(){var t=this.$route.query;t.bind_wx&&d.a.refresh("bind_wx",t.bind_wx)},components:{}},f=m,_=(a("fa95"),a("2877")),h=Object(_["a"])(f,n,i,!1,null,null,null);e["default"]=h.exports},"317b":function(t,e,a){},fa95:function(t,e,a){"use strict";var n=a("317b"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-8097a32c.43375d83.js.map