var obj = {
    name:'ligbee',skill:'javascript'
};
var arr = [1,2];
//obj.push(2);
arr.push(3);
console.log(arr);
console.log(arr.toString());
console.log(arr);
console.log(arr.push(4));

//Array.prototype.push.apply(obj,obj);
/*  
    Array.prototype 上的方法只能用来操作array对象。
    但用 call 和 apply 可以把任意对象当作 this 传入某个方法，
    这样一来，方法中用到this的地方就不再局限于原来规定的对象，而是加以泛化并得到更广的适用性
*/
Function.prototype.uncurrying = function(){
    var self = this; //self = Array.prototype.push
    return function(){
        var obj = Array.prototype.shift.call(arguments);
        console.log(obj);
        console.log(arguments);
        return self.apply(obj,arguments);
    };
};
console.log(obj);
var push = Array.prototype.push.uncurrying();
push(obj,2);
console.log(obj);