(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{211:function(t,e,o){var content=o(213);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("b1ba54a6",content,!0,{sourceMap:!1})},212:function(t,e,o){"use strict";o(211)},213:function(t,e,o){var r=o(8)(!1);r.push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{transform:rotateX(0deg)}}@keyframes turn{to{transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""]),t.exports=r},214:function(t,e,o){"use strict";o(32);var r={name:"index",data:function(){return{showMenu:!1,loggedIn:!1,showUserMenu:!1,showCategories:!0,showStores:!0,showBrands:!0,searchEnabled:!1,categories:[],stores:[],brands:[],complete:{categories:[],stores:[],brands:[]},showMoreCategoriesBool:!1,showMoreStoresBool:!1,showMoreBrandsBool:!1}},methods:{showMenuToggle:function(){this.showMenu?this.showMenu=!1:this.showMenu=!0},showUserMenuToggle:function(){this.showUserMenu?this.showUserMenu=!1:this.showUserMenu=!0},showMoreCategories:function(){var t=this;this.categories=this.complete.categories.filter((function(e,o){return 0==t.showMoreCategoriesBool?o<5&&e:e})),this.showMoreCategoriesBool?this.showMoreCategoriesBool=!1:this.showMoreCategoriesBool=!0},showMoreStores:function(){var t=this;this.stores=this.complete.stores.filter((function(e,o){return 0==t.showMoreStoresBool?o<5&&e:e})),this.showMoreStoresBool?this.showMoreStoresBool=!1:this.showMoreStoresBool=!0},showMoreBrands:function(){var t=this;this.brands=this.complete.brands.filter((function(e,o){return 0==t.showMoreBrandsBool?o<5&&e:e})),this.showMoreBrandsBool?this.showMoreBrandsBool=!1:this.showMoreBrandsBool=!0},getHeaderApiData:function(){var t=this;fetch(this.$global.base_url+"https://spacemall.tk/api/v1/public/list-categories",{method:"get",headers:{"Content-Type":"text/plain","Access-Control-Request-Headers":"*"}}).then((function(t){return t.json()})).then((function(e){t.isLoading=!1,t.complete.categories=e.items,t.showMoreCategories()})).catch((function(t){console.log("Request failed",t)})),fetch(this.$global.base_url+"https://spacemall.tk/api/v1/public/list-stores?limit=5",{method:"get",headers:{"Content-Type":"text/plain","Access-Control-Request-Headers":"*"}}).then((function(t){return t.json()})).then((function(e){t.isLoading=!1,t.complete.stores=e.items,t.showMoreStores()})).catch((function(t){console.log("Request failed",t)})),fetch(this.$global.base_url+"https://spacemall.tk/api/v1/public/list-brands?limit=5",{method:"get",headers:{"Content-Type":"text/plain","Access-Control-Request-Headers":"*"}}).then((function(t){return t.json()})).then((function(e){t.isLoading=!1,t.complete.brands=e.items,t.showMoreBrands()})).catch((function(t){console.log("Request failed",t)}))}},mounted:function(){this.getHeaderApiData(),this.loggedIn=null!=sessionStorage.getItem("token")}},n=(o(212),o(31)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"dashbord-left",style:this.showMenu?"left:0;":""},[o("div",{staticClass:"cross"},[o("a",{attrs:{href:"#"},on:{click:t.showMenuToggle}},[o("i",{staticClass:"fal fa-times",staticStyle:{color:"white"}})])]),t._v(" "),o("div",{staticClass:"dashbord-left-menu",staticStyle:{height:"100%",overflow:"scroll"}},[o("div",{staticClass:"dashbord-single-left-menu"},[o("h3",{attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"},on:{click:function(e){t.showCategories=1!=t.showCategories}}},[t._v("Categories")]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showCategories,expression:"showCategories"}],staticClass:"cata-menu collapse",staticStyle:{display:"block"},attrs:{id:"collapseExample"}},[o("ul",t._l(t.categories,(function(e,r){return o("li",{key:r},[o("a",{attrs:{href:"/browsing?category="+e._id}},[t._v(t._s(e.name))])])})),0),t._v(" "),o("div",{staticClass:"menu-btn"},[o("a",{attrs:{href:"#"},on:{click:t.showMoreCategories}},[t._v(t._s(t.showMoreCategoriesBool?"Show More":"Show Less"))])])])]),t._v(" "),o("div",{staticClass:"dashbord-single-left-menu"},[o("h3",{attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseExample1","aria-expanded":"false","aria-controls":"collapseExample"},on:{click:function(e){t.showStores=1!=t.showStores}}},[t._v("Stores")]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showStores,expression:"showStores"}],staticClass:"cata-menu collapse",staticStyle:{display:"block"},attrs:{id:"collapseExample1"}},[o("ul",t._l(t.stores,(function(e,r){return o("li",{key:r},[o("a",{attrs:{href:"/browsing?store="+e._id}},[t._v(t._s(e.name))])])})),0),t._v(" "),o("div",{staticClass:"menu-btn"},[o("a",{attrs:{href:"#"},on:{click:t.showMoreStores}},[t._v(t._s(t.showMoreStoresBool?"Show More":"Show Less"))])])])]),t._v(" "),o("div",{staticClass:"dashbord-single-left-menu"},[o("h3",{attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseExample2","aria-expanded":"false","aria-controls":"collapseExample"},on:{click:function(e){t.showBrands=1!=t.showBrands}}},[t._v("Brands")]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showBrands,expression:"showBrands"}],staticClass:"cata-menu collapse",staticStyle:{display:"block"},attrs:{id:"collapseExample2"}},[o("ul",t._l(t.brands,(function(e,r){return o("li",{key:r},[o("a",{attrs:{href:"/browsing?brand="+e._id}},[t._v(t._s(e.name))])])})),0),t._v(" "),o("div",{staticClass:"menu-btn"},[o("a",{attrs:{href:"#"},on:{click:t.showMoreBrands}},[t._v(t._s(t.showMoreBrandsBool?"Show More":"Show Less"))])])])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"dashbord-single-left-menu"},[o("a",{attrs:{href:"/about-us"}},[o("h3",[t._v("About Us")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"dashbord-single-left-menu"},[o("a",{attrs:{href:"/contact-us"}},[o("h3",[t._v("Contact us")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"dashbord-single-left-menu"},[o("a",{attrs:{href:"/my-account"}},[o("h3",[t._v("Settings")])])])}],!1,null,null,null);e.a=component.exports},279:function(t,e,o){var content=o(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("707eaf2b",content,!0,{sourceMap:!1})},355:function(t,e,o){"use strict";o(279)},356:function(t,e,o){var r=o(8),n=o(67),l=o(217),c=r(!1),d=n(l);c.push([t.i,'.cont{padding:20px}.sherd-fl .single-dashbord-product{width:90%!important}.owl-next,.owl-prev,.sherd-tty button{position:relative;left:2px;color:#fff;transform:translateY(-50%);height:60px;width:30px;background:#808389;background:linear-gradient(90deg,#808389 0,#717479)!important;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#808389",endColorstr="#717479",GradientType=1);border:0;border-radius:65px!important;border-top-right-radius:0!important;border-bottom-right-radius:0!important;box-shadow:0 0 10px rgba(0,0,0,.4902)!important;float:left;margin-top:-8%!important;z-index:99999}#goToNextSlide,.owl-next{left:auto;border-radius:0 65px 65px 0!important;float:right}.owl-next i,.owl-prev i{padding:20px 10px 10px 3px}.sherd-active{width:100%}.single-dashbord-zoom-product{background-image:url('+d+")}.sherd-title h3{font-size:32px;font-weight:600;z-index:200;position:relative;color:#fff;padding:18px;margin:0;margin-right:90px!important}.sherd-title a{width:208px;height:32px;display:flex;align-items:center;justify-content:center;background:#21e9fb;border-radius:4px;box-shadow:0 0 20px rgba(0,0,0,.56863);font-size:22px;color:#000;font-weight:500;text-transform:uppercase;text-shadow:0 0 10px rgba(0,0,0,.58039);position:absolute!important;margin-top:-50px;margin-left:23%;margin-bottom:20px}",""]),t.exports=c},431:function(t,e,o){"use strict";o.r(e);var r=o(216),n=o(220),l=o(214),c=o(219),d=o(218),h=o.n(d),f=o(215),m=o.n(f),v={components:{Logo:r.a,carousel:h.a,Header:n.a,HeaderNav:l.a,Footer:c.a},name:"index",data:function(){return{id:""}},methods:{getIndexApiData:function(){m.a.get("https://spacemall.tk/api/v1/public/start-list",{params:{},headers:{"Access-Control-Request-Headers":"*"}}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})).then((function(){}))},changeButtons:function(){console.log("mounted");document.querySelectorAll("body .owl-prev,body .owl-next").forEach((function(t){"owl-next"==t.className?t.innerHTML='<i class="fal fa-chevron-right"></i>':t.innerHTML='<i class="fal fa-chevron-left"></i>'}))}},updated:function(){this.changeButtons()},mounted:function(){this.changeButtons(),this.getIndexApiData()}},w=(o(355),o(31)),component=Object(w.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"cont"},[o("div",[o("div",{staticClass:"dashbord-area"},[o("HeaderNav"),t._v(" "),o("div",{staticClass:"dashbord-mid"},[o("Header"),t._v(" "),t._m(0)],1),t._v(" "),o("Footer")],1)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"dashbord-page-mid-area"},[o("div",{staticClass:"singin-area"},[o("div",{staticClass:"singin-form"},[o("form",{attrs:{action:"#"}},[o("div",{staticClass:"single-in-input-box"},[o("div",{staticClass:"single-form-title"},[o("h3",[t._v("Settings")])]),t._v(" "),o("div",{staticClass:"prog-title"},[o("h3",[t._v("Display Transparency")])]),t._v(" "),o("div",{staticClass:"prog-fl"},[o("div",{staticClass:"prog-text"},[o("label",{staticClass:"form-label",attrs:{for:"customRange1"}},[t._v("Back Layer")]),t._v(" "),o("input",{staticClass:"form-range",attrs:{type:"range",id:"customRange1"}})]),t._v(" "),o("div",{staticClass:"prog-text"},[o("label",{staticClass:"form-label",attrs:{for:"customRange2"}},[t._v("Back Layer")]),t._v(" "),o("input",{staticClass:"form-range",attrs:{type:"range",id:"customRange2"}})]),t._v(" "),o("div",{staticClass:"prog-text"},[o("label",{staticClass:"form-label",attrs:{for:"customRange3"}},[t._v("Back Layer")]),t._v(" "),o("input",{staticClass:"form-range",attrs:{type:"range",id:"customRange3"}})])]),t._v(" "),o("div",{staticClass:"prog-fl"},[o("div",{staticClass:"prog-text"},[o("label",{staticClass:"form-label",attrs:{for:"customRange1"}},[t._v("Back Layer")]),t._v(" "),o("div",{staticClass:"llk"},[o("div",{staticClass:"ssk"},[o("a",{attrs:{href:"#"}},[t._v("Small")]),t._v(" "),o("a",{attrs:{href:"#"}},[t._v("Small")]),t._v(" "),o("a",{attrs:{href:"#"}},[t._v("Small")])]),t._v(" "),o("input",{staticClass:"form-range",attrs:{type:"range",id:"customRange1"}})])]),t._v(" "),o("div",{staticClass:"prog-text"},[o("label",{staticClass:"form-label",attrs:{for:"customRange2"}},[t._v("Back Layer")]),t._v(" "),o("input",{staticClass:"form-range",attrs:{type:"range",id:"customRange2"}})])]),t._v(" "),o("div",{staticClass:"prog-fl"},[o("div",{staticClass:"prog-text"},[o("label",{staticClass:"form-label",attrs:{for:"customRange2"}},[t._v("Background Brightness")]),t._v(" "),o("input",{staticClass:"form-range",attrs:{type:"range",id:"customRange2"}})])]),t._v(" "),o("div",{staticClass:"prog-bag"},[o("h3",[t._v("Background 3D Model")]),t._v(" "),o("div",{staticClass:"porg-bag-img"},[o("a",{attrs:{href:"#"}},[o("img",{attrs:{src:"assets/img/porg-img.png",alt:""}})]),t._v(" "),o("a",{attrs:{href:"#"}},[o("img",{attrs:{src:"assets/img/porg-img.png",alt:""}})])])]),t._v(" "),o("div",{staticClass:"single-input"},[o("button",{attrs:{type:"submit"}},[t._v("SAVE")])])])])])])])}],!1,null,null,null);e.default=component.exports}}]);