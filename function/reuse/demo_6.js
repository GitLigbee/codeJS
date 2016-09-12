var inherit = (function(){
    var F = function(){};
    return function(C,P){
        F.prototype = P.prototype;
        C.prototype = new F();
        //存储超类
        C.uber = P.prototype;
        //重置构造函数指针
        C.prototype.constructor = C;
    }
})