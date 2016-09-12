var data = {
    first_name : "",
    last_name : "bee",
    age : "",
    username : "ligbee"
};


var validator = {
    //所有可用验证
    types : {},
    //验证会话中的错误消息
    messages : [],
    //当前验证配置
    config : {},
    validate : function(data){
        var i,msg,type,checker,result_ok;
        //清空消息
        this.messages = [];
        for(i in data){
            if(data.hasOwnProperty(i)){
                type = this.config[i];
                checker = this.types[type];

                if(!type){
                    continue;
                }
                if(!checker){
                    throw {
                        name : "ValidationError",
                        message : "No handler to validate type "+type
                    }
                }
                result_ok = checker.validate(data[i]);
                console.log(result_ok);
                if(!result_ok){
                    msg = "Invalid value for *" + i + "*," + checker.instructions;
                    this.messages.push(msg);
                }
            }
        }
        return this.hasErrors();
    },
    hasErrors : function(){
        return this.messages.length !== 0;
    }
}
validator.config = {
    first_name : "isNonEmpty",
    age : "isNumber",
    username : "isAlphaNum"
};

validator.types.isNonEmpty = {
    validate : function(value){
        return value !== "";
    },
    instructions : "the value cant not be empty"
};

validator.types.isNumber = {
    validate : function(value){
        return !isNaN(value);
    },
    instructions : "the value can only be a valid number"
};

validator.types.isAlphaNum = {
    validate : function(value){
        return !/[^a-z0-9]/i.test(value);
    },
    instructions : "the value can only contain characters and number"
};

validator.validate(data);
if(validator.hasErrors){
    console.log(validator.messages.join("\n"));
}
