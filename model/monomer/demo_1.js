function Demo(){
    //缓存实例
    var instance;
    
    //重写构造函数
    Demo = function Demo(){
        return instance;
    }
//    重写构造函数会丢失所有在初始定义和重定义时刻之间添加到它里面的属性
    
    //保留原型属性
    Demo.prototype = this;
    console.log(this);
    //实例
    instance = new Demo();
    
    //重构函数指针
    instance.constructor = Demo;
    
    //属性方法
    instance.version = 1;
    
    return instance;
}
Demo.prototype.state = 'lived';
var demo_1 = new Demo();
var demo_2 = new Demo();
console.log(demo_1===demo_2);