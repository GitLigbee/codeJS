//代理构造函数模式 -- 临时构造函数
function inherit(C,P){
    //缺点是每次构造继承时候都创建临时构造函数
    //可以使用即时函数并且在闭包中存储代理函数
    var F = function(){};
    F.prototype = P.prototype;
    C.prototype = new F();
    //存储超类
    C.uber = P.prototype;
    //重置构造函数指针
    C.prototype.constructor = C;
}

function Parent(name){
    this.name = name || 'Par';
}
Parent.prototype.getName = function(){
//    return this.name;
    return 'ligbee';
}
function Child(name){}
function Demo(name){}

//解决了继承链下方子对象对原型的修改
inherit(Child,Parent);
inherit(Demo,Parent);

var kid = new Child('kid');
console.log(kid.name);
console.log(kid.getName());
kid.__proto__.getName = function(){
    return 'abc';
};
console.log(kid.getName());

var demo = new Demo('demo');
console.log(demo.getName());