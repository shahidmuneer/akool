(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{272:function(t,e,o){var content=o(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("20e4392d",content,!0,{sourceMap:!1})},343:function(t,e,o){"use strict";o(272)},344:function(t,e,o){var r=o(8),n=o(67),l=o(217),c=r(!1),d=n(l);c.push([t.i,'.cont{padding:20px}.sherd-fl .single-dashbord-product{width:90%!important}.owl-next,.owl-prev,.sherd-tty button{position:relative;left:2px;color:#fff;transform:translateY(-50%);height:60px;width:30px;background:#808389;background:linear-gradient(90deg,#808389 0,#717479)!important;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#808389",endColorstr="#717479",GradientType=1);border:0;border-radius:65px!important;border-top-right-radius:0!important;border-bottom-right-radius:0!important;box-shadow:0 0 10px rgba(0,0,0,.4902)!important;float:left;margin-top:-8%!important;z-index:99999}#goToNextSlide,.owl-next{left:auto;border-radius:0 65px 65px 0!important;float:right}.owl-next i,.owl-prev i{padding:20px 10px 10px 3px}.sherd-active{width:100%}.single-dashbord-zoom-product{background-image:url('+d+")}.sherd-title h3{font-size:32px;font-weight:600;z-index:200;position:relative;color:#fff;padding:18px;margin:0;margin-right:90px!important}.sherd-title a{width:208px;height:32px;display:flex;align-items:center;justify-content:center;background:#21e9fb;border-radius:4px;box-shadow:0 0 20px rgba(0,0,0,.56863);font-size:22px;color:#000;font-weight:500;text-transform:uppercase;text-shadow:0 0 10px rgba(0,0,0,.58039);position:absolute!important;margin-top:-50px;margin-left:23%;margin-bottom:20px}",""]),t.exports=c},425:function(t,e,o){"use strict";o.r(e);o(123);var r=o(216),n=o(220),l=o(219),c=o(218),d=o.n(c),h=o(215),f=o.n(h),m={components:{Logo:r.a,carousel:d.a,Header:n.a,Footer:l.a},name:"index",data:function(){return{id:"",image:"",elseimage:""}},methods:{goBack:function(){this.$router.go(-1)},getIndexApiData:function(){f.a.get("https://spacemall.tk/api/v1/public/start-list",{params:{},headers:{"Access-Control-Request-Headers":"*"}}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})).then((function(){}))},changeButtons:function(){console.log("mounted");document.querySelectorAll("body .owl-prev,body .owl-next").forEach((function(t){"owl-next"==t.className?t.innerHTML='<i class="fal fa-chevron-right"></i>':t.innerHTML='<i class="fal fa-chevron-left"></i>'}))},getMediaUrl:function(){var t="";return this.ThreeDObject()&&(t=this.image),this.$global.api_model_view_url+t+"&elseImage="+this.elseimage+"&size=500"},ThreeDObject:function(){return!!this.image.match(/.zip/g)}},updated:function(){this.changeButtons()},mounted:function(){this.changeButtons(),this.image=this.$route.query.image,this.elseimage=this.$route.query.elseimage}},x=(o(343),o(31)),component=Object(x.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"cont"},[o("div",{staticClass:"dashbord-area"},[o("div",{staticClass:"dashbord-full"},[o("div",{staticClass:"dash-src-hd"},[o("div",{staticClass:"dashbord-page-mid-area-full mmsh"},[o("div",{staticClass:"ful-page-scrl"},[o("a",{staticStyle:{"font-size":"30px",color:"white"},attrs:{href:"#"},on:{click:function(e){return t.goBack()}}},[o("i",{staticClass:"fa fa-arrow-left"}),t._v("\n                      Go Back\n                      ")]),t._v(" "),o("a",{attrs:{href:"#"}},[t.ThreeDObject()?t._e():o("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:this.image,alt:""}}),t._v(" "),t.ThreeDObject()?o("iframe",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.getMediaUrl()}}):t._e()])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);