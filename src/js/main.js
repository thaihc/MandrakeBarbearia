$('.tema').click((e) => {
  const controller = new ControllerTema();
  controller.checaTema();
});

$(document).ready((e) => {
  let contador = 0;
  $('.prev').click((e) => {
    const slides = document.querySelector('.slide').children;
    const controller = new SlideControllerPrev(slides.length, contador);
    controller.qualSlide();
    contador = controller.contador;
    console.log(controller.contador);
  });
});

$(document).ready((e) => {
  let contador = 0;
  $('.next').click((e) => {
    const slides = document.querySelector('.slide').children;
    console.log(slides);
    const controller = new SlideController(slides.length, contador);
    controller.qualSlide();
    contador = controller.contador;
    console.log(controller.contador);
  });
});

$(window).resize((e) => {
  if ($(window).innerWidth() < 770) {
    $('.btn-sandwich0').css('display', 'flex');
    $('.paginas').css('display', 'none');
  } else {
    $('.btn-sandwich0').css('display', 'none');
    $('.paginas').css('display', 'flex');
    $('.sanduiche').css('display', 'none');
  }
});

$('.btn-sandwich0').click((e) => {
  $('.sanduiche').css('display', 'flex');
  $('.btn-sandwich0').css('display', 'none');
  $('.btn-sandwich1').css('display', 'flex');
});

$('.btn-sandwich1').click((e) => {
  $('.sanduiche').css('display', 'none');
  $('.btn-sandwich0').css('display', 'flex');
  $('.btn-sandwich1').css('display', 'none');
});
