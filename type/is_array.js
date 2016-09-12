//php is_array
function is_array(set){
    return (set instanceof Array) || ((set!=null)&&(typeof set == 'object')) && (set.constructor.name === 'Object');
}