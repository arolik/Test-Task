
window.addEventListener('scroll', animationbtns);

function animationbtns(){
    let orderBTn = document.querySelector('#orderBtn');
    let coordinate = window.pageYOffset;
    let footerMenu = document.querySelector('#footerMenu');
    let footerImages = document.querySelector('#footerImages');
    console.log(coordinate);
    if(coordinate > 200 && coordinate < 1400){
        toSmall(orderBTn, coordinate);
    }
    if(coordinate < 200 ){
        toGrow(orderBTn, coordinate);
    }
    if(coordinate > 1400){
        goBtnOut(orderBTn, coordinate, footerMenu, footerImages);
    }
    if(coordinate < 700){
        showBtnAgain(orderBTn, coordinate, footerMenu, footerImages);
    }
    
}

function toSmall(btn, coordinate){
    if(!btn.classList.contains('order-btn-animation-to-small' && 
    btn.classList.contains('order-btn-animation-to-grow'))){
        btn.classList.remove('order-btn-animation-to-grow');
        btn.classList.add('order-btn-animation-to-small');
    }
}

function toGrow(btn, coordinate){
    if(btn.classList.contains('order-btn-animation-to-small') && coordinate < 200){
        btn.classList.remove('order-btn-animation-to-small');
        btn.classList.add('order-btn-animation-to-grow');
    }
    if(btn.classList.contains('order-btn-animation-to-show')){
        btn.classList.remove('order-btn-animation-to-show');
    }
}

function goBtnOut(btn, coordinate, menu, slider){
    if(!btn.classList.contains('order-btn-animation-to-out') || 
    btn.classList.contains('order-btn-animation-to-show')){
        btn.classList.remove('order-btn-animation-to-show');
        btn.classList.add('order-btn-animation-to-out');
    }
    showMenu(menu, slider);                  //вызываем функцию показа меню
}

function showBtnAgain(btn, coordinate, menu, slider){
    if(btn.classList.contains('order-btn-animation-to-out')){
        btn.classList.remove('order-btn-animation-to-out');
        btn.classList.add('order-btn-animation-to-show');
    }
    hideMenu(menu, slider);
}

/* функция показа меню слева, срабатывает когда кнопка прячется */

function showMenu(menu, slider){
    if(!menu.classList.contains('footer-menu-move-right') && 
    !slider.classList.contains('footer-slider-move-right')){
        menu.classList.add('footer-menu-move-right');
        slider.classList.add('footer-slider-move-right');
    }
}

function hideMenu(menu, slider){
    if(menu.classList.contains('footer-menu-move-right') && 
    slider.classList.contains('footer-slider-move-right')){
        menu.classList.remove('footer-menu-move-right');
        slider.classList.remove('footer-slider-move-right');
    }
}













