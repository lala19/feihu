!function(i){i(function(){var e=i(".good-color").children("ul").children("li"),s=i(".good-type").children("ul").children("li"),a=i(".sel-good").children("b").children("span")[0],o=i(".sel-good").children("b").children("span")[1];e.on("click",function(){i(this).addClass("currcolor").siblings("li").removeClass("currcolor"),i(a).html(i(this).html())}),s.on("click",function(){i(this).addClass("currcolor").siblings("li").removeClass("currcolor"),i(o).html(i(this).html())}),i(".num").children("span:nth-of-type(1)").on("click",function(){var e=parseInt(i("#good-num").val())-1;e>=1&&i("#good-num").val(e)}),i(".num").children("span:nth-of-type(2)").on("click",function(){var e=parseInt(i("#good-num").val())+1;e<=99&&i("#good-num").val(e)}),i(".rank-tab").children("li").on("mouseenter",function(){var e=i(this).index();i(this).addClass("rank-tab-curr").siblings("li").removeClass("rank-tab-curr"),i(".rank-list").children("ul").eq(e).css("display","block").siblings("ul").css("display","none")}),i(".tab-item").children("li").on("mouseenter",function(){i(this).addClass("rank-list-cuur").siblings("li").removeClass("rank-list-cuur")}),i(".clear").on("click",function(){}),i(".good-tab").children("li").on("click",function(){var e=i(this).index();i(this).addClass("tabcurr").siblings("li").removeClass("tabcurr"),i(".good-tab-con").children("div").eq(e).css("display","block").siblings("div").css("display","none")}),i(".comment-tab").children("li").on("click",function(){i(this).addClass("tabcurr").siblings("li").removeClass("tabcurr")}),i(".consult-tab").children("li").on("click",function(){i(this).addClass("tabcurr").siblings("li").removeClass("tabcurr")}),i(".nav-allgoods").on("mouseenter",function(){i(this).addClass("nav-allgoods-curr")}).on("mouseleave",function(){i(this).removeClass("nav-allgoods-curr")}),i(".cotegory-item").on("mouseenter",function(){i(this).addClass("cotegory-item-curr")}).on("mouseleave",function(){i(this).removeClass("cotegory-item-curr")}),i(".close-item").on("click",function(){i(".nav-allgoods").removeClass("nav-allgoods-curr")});var c=["http://image.efeihu.com/images/wap/android/fb715b9d-2dd6-4647-ace3-488c27babb53.jpg","http://image.efeihu.com/images/wap/android/7946ed4a-55fa-49fc-ada5-2579b93bfa64.jpg","http://image.efeihu.com/images/wap/android/07d41142-ac31-4880-b5cb-c6b0517467f8.jpg","http://image.efeihu.com/images/wap/android/e09e09ca-3f0f-4244-a91f-75284d6d37f5.jpg","http://image.efeihu.com/images/wap/android/7946ed4a-55fa-49fc-ada5-2579b93bfa64.jpg","http://image.efeihu.com/images/wap/android/07d41142-ac31-4880-b5cb-c6b0517467f8.jpg"],n=["images/goodsinfo/bigview.jpg","http://image.efeihu.com/images/pdtimage/img_middle/7946ed4a-55fa-49fc-ada5-2579b93bfa64.jpg","http://image.efeihu.com/images/pdtimage/img_middle/07d41142-ac31-4880-b5cb-c6b0517467f8.jpg","http://image.efeihu.com/images/pdtimage/img_middle/e09e09ca-3f0f-4244-a91f-75284d6d37f5.jpg","http://image.efeihu.com/images/pdtimage/img_middle/7946ed4a-55fa-49fc-ada5-2579b93bfa64.jpg","http://image.efeihu.com/images/pdtimage/img_middle/07d41142-ac31-4880-b5cb-c6b0517467f8.jpg"];i(".img-list-con").children().on("mouseenter",function(){var e=i(this).index();i(this).addClass("curr").siblings("li").removeClass("curr"),i(".middleimg").attr("src",c[e]),i(".bigimg").attr("src",n[e])}),i(".imgview-list-left,.imgview-list-right").on("click",function(){console.log(parseInt(i(".img-list-con").css("left"))),6==parseInt(i(".img-list-con").css("left"))?i(".img-list-con").css("left","-274px"):i(".img-list-con").css("left","6px")}),i(".closewindow").on("click",function(){i(".cart-added").hide()}),i(".btn_continue").on("click",function(){i(".cart-added").hide()}),i(".add-cart").on("click",function(){i(".cart-added").show()}),i(".address-close").on("click",function(){i(".address-hide").hide(),i(".address-top").css({border:"solid 1px #ddd"}),i(".address-top").children("span").css({"background-position":"-120px 0"})}),i(".address-top").on("click",function(){i(".address-hide").css("display","block"),i(".address-top").css({border:"solid 1px #7B470E","border-bottom":"none"}),i(".address-top").children("span").css({"background-position":"-150px 0"})})})}(jQuery);