var Demo;
(function(){
    var instance;
    Demo = function(){
        if(instance){
            return instance;
        }
        instance = this;
        
        this.version = 2;
    }
}());