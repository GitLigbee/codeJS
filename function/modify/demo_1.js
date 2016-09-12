var obj = function(){
    //私有属性
    var name = 'ligbee';
    //公有属性
    this.getName = function(){
        return name;
    }
}

//静态方法
obj.sta = function(){
    console.log('static fn');
}
obj.prototype = (function(){
    var lang = 'php';
    return {
        gerLan:function(){
            return lang;
        }
    }
}());

var demo = new obj();
console.log(obj.sta());
//console.log(demo.sta());
console.log(demo.getName());
console.log(demo.gerLan());