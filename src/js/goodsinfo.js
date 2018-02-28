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
        $(".img-list-con").children().on("click",function(){
            console.log(11)
            $(this).addClass("curr").siblings("li").removeClass("curr");
        })
    })
})(jQuery);