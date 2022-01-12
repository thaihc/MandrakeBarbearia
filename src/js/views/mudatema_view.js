class ViewTema {
  mudaTema(tema) {
    $('.tema').attr('src', `/MandrakeBarbearia/src/img/modo-${tema}.png`);
    $('.imgLogo').attr('src', `/MandrakeBarbearia/src/img/logo-${tema}.png`);
    $('.localizacao').attr(
      'src',
      `/MandrakeBarbearia/src/img/localizacao-${tema}.png`
    );
    $('.telefone').attr(
      'src',
      `/MandrakeBarbearia/src/img/icon-telefone-${tema}.png`
    );
    $('.whatsapp').attr(
      'src',
      `/MandrakeBarbearia/src/img/icon-wpp-${tema}.png`
    );
    $('.mensagem').attr(
      'src',
      `/MandrakeBarbearia/src/img/icon-mensagem-${tema}.png`
    );
  }
}
