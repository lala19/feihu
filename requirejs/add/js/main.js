requirejs(["config"],function(){
    requirejs(["jquery","sale"],function($,sale){
        $(function(){
            $("button").on("click",function(){
                var num1=parseInt($(".num1").val());
                var num2=parseInt($(".num1").val());
                $(".num3").val(sale.add(num1,num2))
            })
        })
    })
});