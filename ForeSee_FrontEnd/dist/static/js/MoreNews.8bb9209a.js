(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MoreNews"],{"07f1":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"moreNews"},[e("BackTop"),e("div",[t._m(0),e("div",{staticClass:"section banner-page backgroundImage"},[e("div",{staticClass:"content-wrap pos-relative"},[e("div",{staticClass:"container"},[e("div",{staticClass:"col-12 col-md-12"},[t._m(1),e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[t._v("共有 "),e("span",{attrs:{data:t.totalRecords}},[t._v(" "+t._s(t.totalRecords)+" ")]),t._v(" 篇相关企业新闻")])])])])])])]),e("div",{staticClass:"news-wrapper"},[e("el-card",{staticClass:"card-box-news",attrs:{shadow:"hover"}},[e("p",{staticClass:"tip"},[t._v("您正在搜索的企业是：")]),e("div",{staticClass:"tip-title",attrs:{data:t.company}},[t._v(" "+t._s(t.company)+" "),e("span",{staticClass:"tip-stockCode"},[t._v("（股票代码： "),e("span",{attrs:{data:t.stockCode}},[t._v(t._s(t.stockCode)+" ")]),t._v("） ")])])])],1),e("div",{staticClass:"card-box-news-2"},[e("div",{staticClass:"news-component"},[e("el-table",{staticClass:"table",attrs:{data:t.newslist}},[e("el-table-column",{attrs:{prop:"title",label:"标题"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("a",{staticClass:"TestCSS",attrs:{href:s.row.url,target:"_blank"}},[t._v(t._s(s.row.title)+" ")])]}}])}),e("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}})],1),e("div",{staticClass:"block"},[e("el-pagination",{ref:"changepage",attrs:{"page-size":10,"pager-count":7,layout:"prev, pager, next",total:t.totalRecords,"current-page":this.page},on:{"current-change":t.currentChange,"prev-click":t.prevpage,"next-click":t.nextpage}})],1)],1)]),e("CTA"),e("Footer")],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header header-1 sticky-header"},[a("div",{staticClass:"middlebar d-none d-sm-block"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-3 col-md-3"},[a("div",{staticClass:"logo"},[a("a",{attrs:{href:"index.html"}},[a("img",{attrs:{src:e("b260"),alt:"",width:"100%"}})])])]),a("div",{staticClass:"col-9 col-md-9"},[a("div",{staticClass:"contact-info"},[a("div",{staticClass:"rs-icon-1"},[a("div",{staticClass:"icon"},[a("a",{attrs:{href:"index.html"}},[a("div",{staticClass:"fas fa-home"})])]),a("div",{staticClass:"body-content"},[a("a",{attrs:{href:"index.html"}},[a("div",{staticClass:"heading"},[t._v("HOME")])])])]),a("div",{staticClass:"rs-icon-1"},[a("div",{staticClass:"icon"},[a("div",{staticClass:"fas fa-envelope"})]),a("div",{staticClass:"body-content"},[a("div",{staticClass:"heading"},[t._v("Email Support :")]),t._v(" info@foresee.com ")])])])])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-flex bd-highlight mb-2"},[e("div",{staticClass:"title-page"},[t._v("企业新闻")])])}],c=e("0bd5"),o=(e("6a61"),e("fc13"),e("9b5f"),e("9208")),n=e("9dc4"),r=e("fd2d"),l={components:{BackTop:o["a"],CTA:n["a"],Footer:r["a"]},data:function(){return{totalRecords:10530,newslist:[],stockCode:decodeURI(this.$route.query.stockCode),company:decodeURI(this.$route.query.company),page:parseInt(this.$route.query.page)}},methods:{loadMoreNews:function(t,s){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.page=s,console.log(s),1!=s&&e.$router.replace({path:e.$route.path,query:{stockCode:e.stockCode,page:s,company:e.company}}),t.next=5,e.$get("http://121.46.19.26:8288/ForeSee/companyNews/"+e.stockCode+"/"+s);case 5:a=t.sent,i=a.data,e.newslist=i.news,e.totalRecords=i.totalRecords;case 9:case"end":return t.stop()}}),t)})))()},currentChange:function(t){this.page=t,this.loadMoreNews(this.stockCode,t)},prevpage:function(t){this.page=t,this.loadMoreNews(this.stockCode,t)},nextpage:function(t){this.page=t,this.loadMoreNews(this.stockCode,t)}},created:function(){this.loadMoreNews(this.stockCode,1)}},d=l,p=(e("a990"),e("5d22")),v=Object(p["a"])(d,a,i,!1,null,"244ae942",null);s["default"]=v.exports},"2d12":function(t,s,e){"use strict";e("6283")},6283:function(t,s,e){},"9dc4":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"section bgi-cover-center bg-overlay-dark"},[e("div",{staticClass:"content-wrap"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-sm-12 col-md-8 offset-md-2"},[e("div",{staticClass:"cta-info"},[e("h2",{staticClass:"text-primary"},[t._v("Quality Construction. Honest service. Great value")]),e("p",{staticClass:"text-white"},[t._v("Our professional team works to increase productivity and cost effectiveness on the market")])])])])])])])}],c={},o=c,n=(e("cd37"),e("2c49"),e("edb48"),e("52f1"),e("f3df"),e("e547"),e("3e08"),e("ab80"),e("2d12"),e("5d22")),r=Object(n["a"])(o,a,i,!1,null,null,null);s["a"]=r.exports},a990:function(t,s,e){"use strict";e("b7b5")},b260:function(t,s,e){t.exports=e.p+"static/img/logo-black.ee6db47c.png"},b7b5:function(t,s,e){}}]);
//# sourceMappingURL=MoreNews.8bb9209a.js.map