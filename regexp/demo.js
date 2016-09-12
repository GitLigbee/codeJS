var str = '007ligbee';
//字面量 推荐
var reg = /\d+/;
var res = str.replace(reg,"i am ");
console.log(res);

//构造函数
var re = new RegExp("\\d+","g");
var res_new = str.replace(re,"name : ");
console.log(res_new);