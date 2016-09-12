//---- 借用和绑定
//-- 自定义方法
function bind(m,o){
    return function(){
        return m.apply(o,[].slice.call(arguments));
    }
}

var one = {
    num : "one",
    getNum:function(){
        console.log(this.num);
    }
};
var two = {
    num : 'two'
};

var con = bind(one.getNum,two);
con();

//-- Function.prototype.bind()
var b_ = one.getNum.bind(two);
b_();