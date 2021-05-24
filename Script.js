
func();

function func(){
    let coordinate;
    var btn = document.querySelector('#orderBtn');
    window.addEventListener('scroll', function(){
        console.log(coordinate);
        coordinate = this.pageYOffset;
        if(coordinate > 200){
            func2( btn);
        } 
        if (coordinate === 0){
            func3( btn);
        } 
        if(coordinate > 1300){
            func4(btn);
        }
    });
    
}


function func2(elem){
    if((elem.classList.contains('order-btn-animation-to-grow'))){
        elem.classList.remove('order-btn-animation-to-grow');
    }
    if(!elem.classList.contains('order-btn-animation-to-small')){
        elem.classList.add('order-btn-animation-to-small');
    }
}

function func3(elem){
    if(elem.classList.contains('order-btn-animation-to-small')){
        elem.classList.remove('order-btn-animation-to-small');
    }
    if(!elem.classList.contains('order-btn-animation-to-grow')){
        elem.classList.add('order-btn-animation-to-grow');
    }
}
function func4(elem){
    if(!elem.classList.contains('order-btn-animation-to-out')){
        elem.classList.add('order-btn-animation-to-out');
    }
}





