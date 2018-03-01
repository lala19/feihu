(function($){
    $(function(){
        $(".cart-like-item").on("mouseenter",function(){
            $(this).addClass("cart-like-select").siblings("li").removeClass("cart-like-select");
        })
        $(".cart-like-item").on("mouseleave",function(){
            $(this).removeClass("cart-like-select");
        })
        $("#close-pop").on("click",function(){
            $(".cart-title-pop").hide();
        })

        //全选反选
        $(".allselect").on("click",function(){
            var item=$(".itemselect");
           for(var i=0; i<item.length; i++){
               $(item[i]).attr("checked",$(this).prop("checked"))
           }
        });
        $(".itemselect").on("click",function(){
            var count=$(".itemselect:checked").length;//选中的个数
            var num=$(".itemselect:checkbox").length;//个数
            $(".allselect").prop("checked",num==count);
        });

        //计算总价
        var p_tbody=$(".tbody").children("tr");
        var price_res=0;
        for(var i=0; i<p_tbody.length; i++){
            price_res+=parseFloat($(p_tbody[i]).children(".col_total").children("span").children("em").html());
        }
        $(".count-res").children("span").children("em").html(price_res);

        //商品数量加减
        $(".jia").on("click",function(){
            var num=parseInt($(this).siblings("input").val());
            if(num<99){
                $(this).siblings("input").val(num+1);
                changenum($(this));
            }

        });
        $(".jian").on("click",function(){
            var num=parseInt($(this).siblings("input").val());
            if(num>=2){
                $(this).siblings("input").val(num-1);
                changenum($(this));
            }

        });
        $(".cart-empty").hide();
        //删除一件购物车商品
        $(".tr-delete").on("click",function(){
            $(this).parent("td").parent("tr").remove();
            if($(".tbody").children().length==0){
                $(".mycart-go").hide();
                $(".count").hide();
                $(".cart-table").hide();
                $(".cart-empty").show();
            }
        });
        //清空购物车
        $(".clearcart").on("click",function(){
            $(".mycart-go").hide();
            $(".count").hide();
            $(".cart-table").hide();
            $(".cart-empty").show();
        });
        //改变商品数量
        function changenum(obj){
            var num=parseFloat($(obj).siblings("input").val());
            var price=parseFloat($(obj).parent("div").parent().siblings(".col_price").children("span").children("em").html());
            $(obj).parent("div").parent().siblings(".col_total").children("span").children("em").html(num*price);
            var tbody=$(".tbody").children("tr");
            var res=0;
            for(var i=0; i<tbody.length; i++){
                res+=parseFloat($(tbody[i]).children(".col_total").children("span").children("em").html());
            }
            $(".count-res").children("span").children("em").html(res);
        }
    })
})(jQuery);