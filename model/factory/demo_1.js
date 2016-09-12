function Animal(){}

//定义存在的动物
Animal.Dog = function(){
    this.legsNum = 4;
}
Animal.Rabbit = function(){
    this.legsNum = 4;
}
Animal.Duck = function(){
    this.legsNum = 2;
}

//定义公有的方法
Animal.prototype.legs = function(){
    return 'i have '+this.legsNum+' legs';
}

Animal.factory = function(type){
    var ani = type,
        newnai;
    if(typeof Animal[ani] !== "function"){
        throw{
            name:"Error",
            message:ani+" doesn't exist"
        };
    }
    if(typeof Animal[ani].prototype.legs !== "function"){
        Animal[ani].prototype = new Animal();
    }
    newani = new Animal[ani]();
    return newani;
}

var rabbit = Animal.factory('Rabbit');
console.log(rabbit.legs());