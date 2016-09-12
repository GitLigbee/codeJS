var set = function(node){
    node.name = 'set';
}

var get = function(callback,node){
    
    
    if(typeof callback === 'function'){
        callback(node);
    }
}

var node = {};
node.name = 'get';
get(set,node);
console.log(node.name);