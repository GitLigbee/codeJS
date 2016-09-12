var static = function(){
    this.public = 'public';
};
//static.name = 'static variable';
console.log(typeof static);
var instance = new static();
console.log(typeof instance);
console.log(instance.public);
console.log(instance.constructor);
console.log(instance.constructor.name);
console.log(instance.__proto__);
console.log(instance.__proto__.constructor.name);
console.log(instance.__proto__==static.prototype);