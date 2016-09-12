//php array_values //将关联数组转换为索引数组
function array_values(set){
    var save = [];
    for(var i in set){
        save.push(set[i]);
    }
    return save;
}
var obj = {'name':'ligbee'};
console.log(array_values(obj));