var obj = (function(){
    //私有
    var name = 'ligbee';
    return {
      getName:function(){
          return name;
      }  
    };
}());
console.log(obj.getName());
console.log(obj);
