//沙箱模式相当于给其它调用的实例添加想要的功能模块
sandBox.modules = {};

sandBox.modules.dom = function(box){
    box.getElement = function(){
        console.log('dom.box.getElement');
    };
    box.getStyle = function(){};
    box.foo = function(){};
}
sandBox.modules.event = function(box){
    box.attachEvent = function(){};
    box.dettachEvent = function(){};
}
sandBox.modules.ajax = function(box){
    box.makeRequest = function(){};
    box.getRequest = function(){};
}

function sandBox(){
    //将参数转换为数组
    var args = Array.prototype.slice.call(arguments),
        callback = args.pop(),
        //将所需 功能模块名称 加入
        modules = (args[0] && typeof args[0]==='string')?args:args[0],
        i,
        len;
    
    if(!this instanceof sandBox){
        return new sandBox(modules,callback);
    }
    
    this.name = 'ligbee';
    
    //将所有 功能模块名称 添加到modules中
    if(!modules || modules==='*'){
        modules = [];
        for(i in sandBox.modules){
            if(sandBox.modules.hasOwnProperty(i)){
                modules.push(i);
            }
        }
    }
    
    //将所需的模块功能添加到this中
    for(i=0, len=modules.length;i<len;i++){
        sandBox.modules[modules[i]](this);
    }
    //回到调用的函数
    callback(this);
}

sandBox.prototype = {
    name : 'application',
    version : '1.0',
    getName : function(){
        return this.name;
    }
};

//调用沙箱
sandBox('dom','event',function(box){
   box.getElement();
});
sandBox(['dom','event'],function(box){
   box.getElement();
});