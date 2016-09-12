//共享原型模式

function inherit(C,P){
    C.prototype = P.prototype;
}
//

function Parent(name){
    this.name = name || 'Par';
}
Parent.prototype.getName = function(){
//    return this.name;
    return 'ligbee';
}
function Child(name){}
function Demo(name){}

//该模式的缺点就是继承链下方可能存在某个子对象或孙子对象修改了原型，它将会影响到所有父对象和祖先对象
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