var Demo = (function(){
    var index = 0,
        data = [1,2,3,4,5],
        length = data.length;
    return {
        next : function(){
            var element;
            if(!this.hasNext()){
                return null;
            }
            element = data[index];
            index++;
            return element;
        },
        hasNext : function(){
            return index < length;
        },
        reset : function(){
            index = 0;
        },
        current : function(){
            return data[index];
        }
    }
}());

while(Demo.hasNext()){
    console.log(Demo.next());
}