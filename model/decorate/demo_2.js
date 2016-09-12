//列表实现
function Sale(price){
    this.price = price || 100;
    this.decorators_list = [];
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
    this.decorators_list.push(decorator);
}
Sale.prototype.getPrice = function(){
    var price = this.price,
        i,
        max = this.decorators_list.length,
        name;
    for(i=0; i<max; i++){
        name = this.decorators_list[i];
        price = Sale.decorators[name].getPrice(price);
    }
    return this.price;
}