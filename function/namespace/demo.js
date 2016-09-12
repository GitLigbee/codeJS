var app = app || {};
app.namespace = function(obj){
    var parts = obj.split('.'),
        parent = app,
        i,len;
    if(parts[0] == 'app'){
        parts = parts.splice(1);
    }
    for(i=0,len=parts.length;i<len;i++){
        if(typeof parent[parts[i]] == 'undefined'){
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
}

var mod = app.namespace('app.module.module');
console.log(mod===app.module.module);