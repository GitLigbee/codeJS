var app = {};
app.color = 'blue';
app.paint = function(node){
    console.log(this.color);
    node.color = this.color;   
}

var get = function(callback,callback_obj){
    
    var node = {};
    node.color = 'green';
    
    if(typeof callback === 'string'){
        callback = callback_obj[callback];
    }
    if(typeof callback === 'function'){
        callback.call(callback_obj,node);
    }
    console.log(node.color);
}
get('paint',app);
