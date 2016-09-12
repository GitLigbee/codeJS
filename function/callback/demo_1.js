var app = {
//    color:'blue',
    /*paint:function(node){
        node.color = this.color;
    }*/
};
app.color = 'blue';
app.paint = function(node){
    console.log(this.color);
    node.color = this.color;
    
}

var node = {};
node.color = 'green';
app.paint(node);
console.log(node.color);


var call = {};
call.color = 'green';
var get = function(callback,call){
    callback(call);
//    callback.call(app,call);
}
get(app.paint,call);
console.log(call.color);
