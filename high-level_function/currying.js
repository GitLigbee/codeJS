//test
var a = [1,2,3];
var b = [3,2,1];
var c = [1,2,3];
[].push.apply(a,b);
//合并数组
Array.prototype.push.apply(b,c);
console.log(a);
console.log(b);

//arguments.callee代表调用自身
var multi = function(n){
    if(n==1) return 1;
    return n*arguments.callee(n-1);
}
console.log(multi(3));

//函数柯里化 currying 部分求值
var currying = function(fn){
    var args = [];
    return function(){
        if(arguments.length===0){
            return fn.apply(this,args);
        }else{
            [].push.apply(args,arguments);
            return arguments.callee;
        }
    }
};
var cost = (function(){
    var money = 0;
    var temp = 0;
    return function(){
       for(var i=0; i<arguments.length;i++){
           money += arguments[i];
       }
       temp = money;
       money = 0;
       return temp; 
    }
})();

var cost = currying(cost);
cost(10);
cost(3);
console.log(cost());
cost(3)(4);
console.log(cost());