//php array_map

function array_map(set,func){
    if(set instanceof Array){
        var save = [];
        for(var i in set){
            save[i] = func(set[i]);
            console.log(save[i]);
        }
    }else{
        var save = {};
        for(var i in set){
            save[i] = func(set[i]);
        }
    }
    return save;
}

function add(val){
    console.log(val);
    return ++val;
}

var arr = [1,2,3];
console.log(array_map(arr,add));