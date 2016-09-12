var arr = [];
//数组添加元素三种方式
arr[1] = 1;
arr[2] = 2;

arr[4] = 3;
arr[arr.length] = 'auto';
arr.push('push');
//稀疏数组的空位依旧占位置
console.log(arr.length);
for(var i in arr){
    console.log(arr[i]);
}
//delete paramas
arr.splice(1,2);
console.log(arr[0]);

console.log(arr.length);