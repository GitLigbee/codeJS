var arr = [1,2];
var obj = {name:'ligbee'};

var ts = Object.prototype.toString;

console.log(ts.call(arr));
console.log(ts.call(obj));
//Arrary的tostring() 覆盖了 Object的tostring()
console.log(arr.toString());
console.log(obj.toString());

//深层复制
function extendDeep(P,C){
    var i,
        toStr = Object.prototype.toString,
        astr = '[object Array]';
    C = C || {};
    for(i in P){
        if(P.hasOwnProperty(i)){
            if(typeof P[i] === 'object'){
                C[i] = (toStr.call(P[i])===astr)?[]:{};
                extendDeep(P[i],C[i]);
            }else{
                C[i] = P[i];
            }
        }
    }
    return C;
}

//demo
var Parent = {
    arr : [1,2],
    obj : {name:'ligbee'}
}
var Child = extendDeep(Parent);
Child.arr.push(3);
console.log(Parent.arr.toString());
console.log(Child.arr.toString());