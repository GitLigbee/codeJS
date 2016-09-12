//复制属性实现继承 属于浅复制
function extend(C,P){
    var i;
    C = C || {};
    for(i in P){
        if(P.hasOwnProperty(i)){
            C[i] = P[i];
        }
    }
    return C;
}


var Parent = {name:'ligbee'};
var kid = extend(Parent);
console.log(kid.name);