var fn = function(param){
//    var param = JSON.stringify(Array.prototype.slice.call(arguments));
    if(!fn.cache[param]){
        var res = {};
        fn.cache[param] = res;
    }else{
        return fn.cache[param];
    }
}
fn.cache = {};