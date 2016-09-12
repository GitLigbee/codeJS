var obj = {'name':'lig','age':18};
obj['sex']='man';
obj.phone = 123;

console.log(Object.keys(obj).length);
for(var i in obj){
    console.log(obj[i]);
}
//php unset
delete obj.phone;
console.log(Object.keys(obj).length);
