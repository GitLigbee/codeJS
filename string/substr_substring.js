//php substr
function substr(str,start,length){
    return (typeof length==undefined)?str.substring(start):str.substring(start,start+length);
}

console.log(substr('ligbee',3,3));