
const descriptServic = document.querySelectorAll('.specialization__description');
const descriptBtn = document.getElementById('service-btn');


window.addEventListener('load', function(){

//отменяем анимацию сделаную на CSS3
  for(let i = 0; i < descriptServic.length; i++) {
    descriptServic[i].style.animation = 'none';
  }

  descriptBtn.style.animation = 'none';
  descriptBtn.style.opacity = '0';


//создаем анимацию при помощи Greensock
  TweenLite.from(descriptServic, 1, {y: -250, delay: .3, opacity: 0, ease: Back.easeOut});
  TweenLite.fromTo(descriptBtn, 1, {y: -20, opacity: 0, delay: 1.3, ease: Power3.easeIn}, {y: 0, opacity: 1, delay: 1.3, ease: Power4.easeOut});

});
