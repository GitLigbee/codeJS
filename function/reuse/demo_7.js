//----原型继承----
//-- 自定义 --
var Par = {
    name : 'Par'
}
var chi = custom_object(Par);
console.log(chi.name);

function custom_object(o){
    var F = function(){};
    F.prototype = o;
    return new F();
}

//-- Object.create(对象) --
function Parents(name){
    this.name = name || 'Par';
}

Parents.prototype.getName = function(){
    return this.name;
}

var child = Object.create(Parents.prototype,{
    age:{value:2}
});
//var child = new Parent();
console.log(typeof child.getName);
console.log(child.getName());
console.log(child.hasOwnProperty("age"));