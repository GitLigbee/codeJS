//php is_float
function is_float(number){
    return (typeof number == 'number')&&(Math.floor(number)!==number);
}