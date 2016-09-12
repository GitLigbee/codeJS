//php array_merge
function array_merge(set,set1){
    if(set instanceof Array){
        return set.concat(set1);
    }else{
        var save= {};
        for(var i in set){
            save[i] = set[i];
        }
        for(var i in set1){
            save[i] = set1[i];
        }
        return save;
    }
}
var arr = ['lig','bee'];
var arr1 = ['author'];
console.log(array_merge(arr,arr1));

var obj = {'name':'lig'};
var obj1 = {'author':'bee'};
console.log(array_merge(obj,obj1));