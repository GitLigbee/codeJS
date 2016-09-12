//php is_int
function is_int(number){
    return (typeof number == 'number') && (number%1===0);
}