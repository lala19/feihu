(function($){
    $(function(){
        //商品信息选购商品
        var $goodcolor=$(".good-color").children("ul").children("li");
        var $goodtype=$(".good-type").children("ul").children("li");
        var msgcolor=$(".sel-good").children("b").children("span")[0];
        var msgtype=$(".sel-good").children("b").children("span")[1];
        $goodcolor.on("click",function(){
            $(this).addClass("currcolor").siblings("li").removeClass("currcolor");
            $(msgcolor).html($(this).html());
        });
        $goodtype.on("click",function(){
            $(this).addClass("currcolor").siblings("li").removeClass("currcolor");
            $(msgtype).html($(this).html());
        })
        $(".num").children("span:nth-of-type(1)").on("click",function(){
            var $num=parseInt($("#good-num").val())-1;
            if($num>=1){
                $("#good-num").val($num);
            }
        });
        $(".num").children("span:nth-of-type(2)").on("click",function(){
            var $num=parseInt($("#good-num").val())+1;
            if($num<=99){
                $("#good-num").val($num);
            }
        });
        //商品信息tab栏.  rank list  同类销量排行
        $(".rank-tab").children("li").on("mouseenter",function(){
            var $index=$(this).index();
            $(this).addClass("rank-tab-curr").siblings("li").removeClass("rank-tab-curr");
            $(".rank-list").children("ul").eq($index).css("display","block").siblings("ul").css("display","none");
        });
        $(".tab-item").children("li").on("mouseenter",function(){
            $(this).addClass("rank-list-cuur").siblings("li").removeClass("rank-list-cuur");
        });
        // 清空浏览记录
        $(".clear").on("click",function(){

        });
        //产品信息,用户评论... tab切换
        $(".good-tab").children("li").on("click",function(){
            var $index=$(this).index();
            $(this).addClass("tabcurr").siblings("li").removeClass("tabcurr");
            $(".good-tab-con").children("div").eq($index).css("display","block").siblings("div").css("display","none");
        });
        $(".comment-tab").children("li").on("click",function(){
            $(this).addClass("tabcurr").siblings("li").removeClass("tabcurr");
        });
        $(".consult-tab").children("li").on("click",function(){
            $(this).addClass("tabcurr").siblings("li").removeClass("tabcurr");
        })
        //导航栏 全部商品分类 菜单
        $(".nav-allgoods").on("mouseenter",function(){
            $(this).addClass("nav-allgoods-curr");
        }).on("mouseleave",function(){
            $(this).removeClass("nav-allgoods-curr");
        });
        $(".cotegory-item").on("mouseenter",function(){
            $(this).addClass("cotegory-item-curr");
        }).on("mouseleave",function(){
            $(this).removeClass("cotegory-item-curr");
        });
        $(".close-item").on("click",function(){
            $(".nav-allgoods").removeClass("nav-allgoods-curr");
        })
        //放大镜图片列表
        var middleimg=[
            "http://image.efeihu.com/images/wap/android/fb715b9d-2dd6-4647-ace3-488c27babb53.jpg",
            "http://image.efeihu.com/images/wap/android/7946ed4a-55fa-49fc-ada5-2579b93bfa64.jpg",
            "http://image.efeihu.com/images/wap/android/07d41142-ac31-4880-b5cb-c6b0517467f8.jpg",
            "http://image.efeihu.com/images/wap/android/e09e09ca-3f0f-4244-a91f-75284d6d37f5.jpg",
            "http://image.efeihu.com/images/wap/android/7946ed4a-55fa-49fc-ada5-2579b93bfa64.jpg",
            "http://image.efeihu.com/images/wap/android/07d41142-ac31-4880-b5cb-c6b0517467f8.jpg",
        ];
        var bigimg=[
            "images/goodsinfo/bigview.jpg",
            "http://image.efeihu.com/images/pdtimage/img_middle/7946ed4a-55fa-49fc-ada5-2579b93bfa64.jpg",
            "http://image.efeihu.com/images/pdtimage/img_middle/07d41142-ac31-4880-b5cb-c6b0517467f8.jpg",
            "http://image.efeihu.com/images/pdtimage/img_middle/e09e09ca-3f0f-4244-a91f-75284d6d37f5.jpg",
            "http://image.efeihu.com/images/pdtimage/img_middle/7946ed4a-55fa-49fc-ada5-2579b93bfa64.jpg",
            "http://image.efeihu.com/images/pdtimage/img_middle/07d41142-ac31-4880-b5cb-c6b0517467f8.jpg"
        ];
        $(".img-list-con").children().on("mouseenter",function(){
            var index=$(this).index();
            $(this).addClass("curr").siblings("li").removeClass("curr");
            $(".middleimg").attr("src",middleimg[index]);
            $(".bigimg").attr("src",bigimg[index])
        });
        $(".imgview-list-left,.imgview-list-right").on("click",function(){
            console.log(parseInt($(".img-list-con").css("left")));
            if(parseInt($(".img-list-con").css("left"))==6){
                $(".img-list-con").css("left","-274px");
            }else {
                $(".img-list-con").css("left","6px");
            }
        });
        //购物车弹出框关闭
        $(".closewindow").on("click",function(){
            $(".cart-added").hide();
        });
        $(".btn_continue").on("click",function(){
            $(".cart-added").hide();
        });

        //加入购物车
        //cookie ajax
        //显示 成功框
        $(".add-cart").on("click",function(){
            $(".cart-added").show();
        });
        //
        $(".address-close").on("click",function(){
            $(".address-hide").hide();
            $(".address-top").css({
                "border":"solid 1px #ddd",
            });
            $(".address-top").children("span").css({
                "background-position":"-120px 0"
            });
        });
        $(".address-top").on("click",function(){
            $(".address-hide").css("display","block");
            $(".address-top").css({
                "border":"solid 1px #7B470E",
                "border-bottom":"none",
            });
            $(".address-top").children("span").css({
               "background-position":"-150px 0"
            });
        });

    })
})(jQuery);