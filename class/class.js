function share(name){
    this.name = name;
    this.age = 18;
}
share.prototype.getName = function(){
    console.log(this.name);
}
//创建对象
var lig = new share('lig');
lig.getName();
share.prototype.getAge = function(){
    console.log(this.age);
}
//创建对象
var bee = Object.create(lig,{});
bee.getAge();

console.log(bee.constructor.name);