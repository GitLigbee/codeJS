//继承实现
function Sale(price){
    this.price = price || 100;
}
Sale.prototype.getPrice(){
    return this.price;
}
Sale.decorators = {};

Sale.decorators.fedtax = {
    getPrice:function(){
        var price = this.uber.getPrice();
        price += price*1/20;
        return price;
    }
}

Sale.decorators.quebec = {
    getPrice:function(){
        var price = this.uber.getPrice();
        price += price*1/100;
        return price;
    }
}

Sale.decorators.money = {
    getPrice : function(){
        return "$" + this.uber.getPrice().toFixed(2);
    }
}
Sale.decorators.cdn = {
    getPrice : function(){
        return "CDN$" + this.uber.getPrice().toFixed(2);
    }
}

Sale.prototype.decorate = function(decorator){
    var F = function(){},
        overrides = this.constructor.decorators[decorator],
        i,newobj;
    F.prototype = this;
    newobj = new F();
    newobj.uber = F.prototype;
    for(i in overrides){
        if(overrides.hasOwnProperty(i)){
            newobj[i] = overrides[i];
        }
    }
    return newobj;
}