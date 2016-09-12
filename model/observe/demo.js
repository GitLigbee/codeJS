//订阅|发布模式
var publisher = {
    subscribers : {
        any : []
    },
    subscribe : function(fn,type){
        type = type || 'any';
        if(typeof this.subscribers[type] === "undefined"){
            this.subscribers[type] = [];
        }
        this.subscribers[type].push(fn);
    },
    unsubscribe : function(fn,type){
        this.visitSubscribers("unsubscribe",fn,type);
    },
    publish : function(publication,type){
        this.visitSubscribers('publish',publication,type);
    },
    visitSubscribers : function(action,arg,type){
        var pubtype = type || 'any',subscribers = this.subscribers[pubtype],i,m,max=subscribers.length;
        for(i = 0; i<max; i++){
            if(action === 'publish'){
                subscribers[i](arg);
            }else{
                if(subscribers[i] === arg){
                    subscribers.splice(i,1);
                }
            }
        }
    }
};

function makePublisher(o){
    var i;
    for(i in publisher){
        if(publisher.hasOwnProperty(i) && typeof publisher[i] == "function"){
            o[i] = publisher[i];
        }
    }
    o.subscribers = {any:[]};
}

var paper = {
    daily : function(){
        this.publish("news today");
    },
    monthly : function(){
        this.publish("interesting monthly","monthly");
    }
};

makePublisher(paper);

var bee = {
    drinkCoffee : function(paper){
        console.log('Just read '+paper);
    },
    sunday : function(paper){
        console.log('about to fall asleep reading this '+paper);
    }
}

paper.subscribe(bee.drinkCoffee);
paper.subscribe(bee.sunday,'monthly');

paper.daily();