//php is_object 
function is_object(set){
    return !(set instanceof Array) || ((set!=null)&&(typeof set == 'object')) && (set.constructor.name !== 'Object');
}