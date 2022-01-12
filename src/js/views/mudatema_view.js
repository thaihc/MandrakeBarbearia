class ViewTema {
  mudaTema() {
    $('.tema').attr('src', `../../img/modo-${tema}.png`);
    $('.imgLogo').attr('src', `../../img/modo-${tema}.png`);
    $('.localizacao').attr('src', `../../img/localizacao-${tema}.png`);
  }
}
