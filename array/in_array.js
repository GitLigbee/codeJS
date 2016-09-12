//php in_array()
function in_aray(value,set){
    if(set instanceof Array){
        for(var i in set){
            if(set[i]==value){
                return true;
            }
        }
    }else{
        for(var i in set){
           if(set[i]==value){
                return true;
            } 
        }
    }
    return false;
}

var arr = ['lig','bee'];
var obj = {'name':'lig'};
var value = 'lig';
console.log(in_aray(value,arr));
console.log(in_aray(value,obj));