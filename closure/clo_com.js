function clo(){
    var i = 0;
    function ini_clo(){
        return i++;
    }
    return ini_clo;
}

var ini = clo();

console.log(ini());
console.log(ini());
console.log(ini());