//php count($array);

var arr = ['lig','bee'];
console.log(count(arr));

var obj = {'name':'ligbee'};
console.log(count(obj));

function count(a){
    var len = 0;
    if(a instanceof Array){
        len = a.length;
    }else{
        len = Object.keys(a).length;
    }
    return len;
}