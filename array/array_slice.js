//php array_slice
function array_slice(set,offset,length){
    length = length||(set.length-offset);
    return set.slice(offset,offset+length);
}

var arr = [1,2,3];
console.log(array_slice(arr,1,1));