var obj1 = function(){
    //防止未使用 new 创建对象
    if(!(this instanceof obj1)){
        return new obj1();
//        return new arguments.callee();
    }
    this.name='ligbee'
}
obj1.prototype.blog = 'bee';

//使用return 就丢失了 prototype
var obj2 =function() {
    return{
        name:'ligbee'
    };
}
obj2.prototype.blog = 'light';

var chi1 = new obj1();
console.log(chi1.blog);
var chi2 = new obj2();
console.log(chi2.blog);
console.log(obj2.prototype);