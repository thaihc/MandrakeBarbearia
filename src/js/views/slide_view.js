class SlideView {
  mostraSlide(contador) {
    if (contador == 0) {
      $(`.foto${2}`).css('display', 'none');
      $(`.foto${contador}`).css('display', 'flex');
    } else {
      $(`.foto${contador - 1}`).css('display', 'none');
      $(`.foto${contador}`).css('display', 'flex');
    }
  }
}

class SlideViewPrev {
  mostraSlide(contador) {
    if (contador == 2) {
      $(`.foto${0}`).css('display', 'none');
      $(`.foto${contador}`).css('display', 'flex');
    } else {
      $(`.foto${contador + 1}`).css('display', 'none');
      $(`.foto${contador}`).css('display', 'flex');
    }
  }
}
