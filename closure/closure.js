var f = {};
for(var i=0;i<5;i++){

   f[i] = function(i){
       return function(){
           var j = i;
           return j;
       }
   }(i);
}
console.log(f[2]());