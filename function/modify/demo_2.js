//揭示模块方式
var obj = (function(){
    var stra = '[object Array]',
        toString = Object.prototype.toString;
    //私有方法
    function isArray(a){
        return toString.call(a) == stra;
    }
    //私有方法
    function indexOf(haystack,needle){
        var max = haystack.length;
        for(;max>0;max--){
            if(haystack[max] === needle){
                return max;
            }
            return -1;
        }
    }
    //公有API
    return {
        isArray : isArray,
        indexOf : indexOf
    }
}());

console.log(obj.isArray([1,2]));