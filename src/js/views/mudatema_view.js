class ViewTema {
  mudaTema(tema) {
    $('.tema').attr('src', `/src/img/modo-${tema}.png`);
    $('.imgLogo').attr('src', `/src/img/logo-${tema}.png`);
    $('.localizacao').attr('src', `/src/img/localizacao-${tema}.png`);
    $('.telefone').attr('src', `/src/img/icon-telefone-${tema}.png`);
    $('.whatsapp').attr('src', `/src/img/icon-wpp-${tema}.png`);
    $('.mensagem').attr('src', `/src/img/icon-mensagem-${tema}.png`);
  }
}
