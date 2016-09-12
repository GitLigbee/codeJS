//php aray_key_exists

function array_key_exists(key,set){
    if(set instanceof Array){
        return (key<set.length)&&((typeof set[key]!='undefined'));
    }
    return set.hasOwnProperty(key);
}

var arr = ['lig','bee'];
var obj = {'name':'lig'};
var value = 'lig';
console.log(array_key_exists(1,arr));
console.log(array_key_exists(value,obj));