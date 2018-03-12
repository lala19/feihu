

function getStyle(ele,attr){
    if(ele.currentStyle){
        return ele.currentStyle[attr];
    }
    return window.getComputedStyle(ele,null)[attr];
}



function animate(obj,json,fn){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var flag=true;
        for (var key in json) {
            //目标位置
            var target=parseInt(json[key]);
            //当前位置
            var current=parseInt(getStyle(obj,key));
            if(key=="opacity"){
                target=json[key]*100;
                //当前位置
                current=getStyle(obj,key)*100;
            }
            //步长
            var step=(target-current)/10;
            step=step>0?Math.ceil(step):Math.floor(step);
            if(key=="opacity"){
                obj.style[key]=(current+step)/100;
            }else if(key=="zIndex"){
                obj.style[key]=json[key];
            }else {
                obj.style[key]=(current+step)+"px";
            }
            if(current!=target){
                flag=false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            //执行完成
            if(typeof fn=="function"){
                fn(obj);
            }
        }
    },40)
}

function myScroll(){
    if(window.pageYOffset){
        return {
            "left":window.pageXOffset,
            "top":window.pageYOffset
        }
    }
    if(document.compatMode="CSS1compat"){
        return {
            "left":document.documentElement.scrollLeft,
            "top":document.documentElement.scrollTop
        }
    }
    return {
        "left":document.body.scrollLeft,
        "top":document.body.scrollTop
    }
}