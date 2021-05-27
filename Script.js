/* при загрузке страницы на onScroll вешаю функцию, которая считывает координаты прокрутки страницы. Я установил 4 координаты, при прокрутке которых, срабатывают разные функции на анимации кнопки (блока) "заказать уборку".   */


window.addEventListener('scroll', animationbtns);

function animationbtns(){
    let orderBTn = document.querySelector('#orderBtn');                         
    let coordinate = window.pageYOffset;
    var footerMenu = document.querySelector('#footerMenu');
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
/* функция уменшить кнопку */
function toSmall(btn, coordinate){
    if(!btn.classList.contains('order-btn-animation-to-small' && 
    btn.classList.contains('order-btn-animation-to-grow'))){
        btn.classList.remove('order-btn-animation-to-grow');
        btn.classList.add('order-btn-animation-to-small');
    }
}
/* функция увеличить кнопку */
function toGrow(btn, coordinate){
    if(btn.classList.contains('order-btn-animation-to-small') && coordinate < 200){
        btn.classList.remove('order-btn-animation-to-small');
        btn.classList.add('order-btn-animation-to-grow');
    }
    if(btn.classList.contains('order-btn-animation-to-show')){
        btn.classList.remove('order-btn-animation-to-show');
    }
}
/*функция спрятать кнопку  */

function goBtnOut(btn, coordinate, menu, slider){
    if(!btn.classList.contains('order-btn-animation-to-out') || 
    btn.classList.contains('order-btn-animation-to-show')){
        btn.classList.remove('order-btn-animation-to-show');
        btn.classList.add('order-btn-animation-to-out');
    }
    showMenu(menu, slider);                  //вызываем функцию показа меню
}
/* функция показать снова  */
function showBtnAgain(btn, coordinate, menu, slider){
    if(btn.classList.contains('order-btn-animation-to-out')){
        btn.classList.remove('order-btn-animation-to-out');
        btn.classList.add('order-btn-animation-to-show');
    }
    hideMenu(menu, slider);         //вызываем функцию спрятать меню 
}

/* функция показа меню слева, срабатывает когда кнопка прячется */

function showMenu(menu, slider){
    if(!menu.classList.contains('footer-menu-move-right') && 
    !slider.classList.contains('footer-slider-move-right')){
        menu.classList.add('footer-menu-move-right');
        slider.classList.add('footer-slider-move-right');
    }
}
 /* функция спрятать меню, срабатывает когда кнопка снвоа появляется  */
function hideMenu(menu, slider){
    if(menu.classList.contains('footer-menu-move-right') && 
    slider.classList.contains('footer-slider-move-right')){
        menu.classList.remove('footer-menu-move-right');
        slider.classList.remove('footer-slider-move-right');
    }
}


/* скрипты для слайдера */

let footerMenu = document.querySelector('#footerMenu');
    let rooms = footerMenu.querySelectorAll('p');
    let footerSlide = document.querySelector('#footerSlide');
    let img = footerSlide.querySelector('img');
    let namesImages = ['kitchen.png', 'room.png', 'bathroom.png', 'hallway.png'];

        
function addEvents(elems){
    
    for(let i=0; i<elems.length; i++){
        elems[i].addEventListener('click', nextMessage);
    }
}
       
function nextMessage(){
    let imgId = this.dataset.id;
    for(let i=0; i<namesImages.length; i++){
        img.src = "./images/" + namesImages[imgId];
    }
}

addEvents(rooms);



