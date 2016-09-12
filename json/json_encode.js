//php json_encode
//to json
function json_encode(set){
    return JSON.stringify(set);
}
var obj = {'name':'ligbee'};
console.log(json_decode(obj)+'-'+typeof(json_encode(obj)));