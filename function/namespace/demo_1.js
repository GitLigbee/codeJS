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

app.namespace('app.utilities.Array');
app.utilities.Array = (function(){
    var con;
    con = function(obj){
        this.elements = this.toArray(obj);
    };
    con.prototype = {
        constructor : app.utilities.Array,
        version : "2.0",
        toArray : function(obj){
            for(var i=0,a=[],len=obj.length;i<len;i++){
                a[i] = obj[i];
            }
            return a;
        }
    }
    return con;
}());

var arr = new app.utilities.Array(obj);