//php rand

function rand(min,max){
    return min+Math.floor(Math.random()*(max-min+1));
}

console.log(rand(1,10));