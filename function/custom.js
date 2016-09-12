var update = function(){
    console.log('old');
    update = function(){
        console.log('new');
    };
};
update();
update();
update();