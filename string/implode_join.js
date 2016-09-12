//php implode
function implode(set,delimiter){
    return (typeof set)==undefined?delimiter.join(''):set.join('-');
}
var arr = ['lig','bee'];
var no = [];
console.log(implode(arr,'-'));