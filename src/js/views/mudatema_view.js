class ViewTema {
  mudaTema(tema) {
    $('.tema').attr('src', `/src/img/modo-${tema}.png`);
    $('.imgLogo').attr('src', `/src/img/logo-${tema}.png`);
    $('.localizacao').attr('src', `/src/img/localizacao-${tema}.png`);
    $('.telefone').attr('src', `/src/img/icon-telefone-${tema}.png`);
    $('.whatsapp').attr('src', `/src/img/icon-wpp-${tema}.png`);
    $('.mensagem').attr('src', `/src/img/icon-mensagem-${tema}.png`);
    $('.btn-sandwich0').attr('src', `/src/img/menu-${tema}.png`);
    $('.btn-sandwich1').attr('src', `/src/img/menu-${tema}.png`);
    $('#iconFooter1').attr('src', `/src/img/icons/telefone-${tema}.png`);
    $('#iconFooter2').attr('src', `/src/img/icons/wpp-${tema}.png`);
    $('#iconFooter3').attr('src', `/src/img/icons/email-${tema}.png`);
    $('.who').attr('src', `/src/img/who-${tema}.png`);
    $('.cardImg1').attr('src', `/src/img/s1-${tema}.png`);
    $('.cardImg2').attr('src', `/src/img/s2-${tema}.png`);
    $('.cardImg3').attr('src', `/src/img/s3-${tema}.png`);
    $('.cardImg4').attr('src', `/src/img/s4-${tema}.png`);
    $('.cardImg5').attr('src', `/src/img/s5-${tema}.png`);
    $('.cardImg6').attr('src', `/src/img/s6-${tema}.png`);
    $('.cardImg7').attr('src', `/src/img/p1-${tema}.png`);
    $('.cardImg8').attr('src', `/src/img/p2-${tema}.png`);
    $('.cardImg9').attr('src', `/src/img/p3-${tema}.png`);
    $('.cardImg10').attr('src', `/src/img/t1-${tema}.png`);
    $('.cardImg11').attr('src', `/src/img/t2-${tema}.png`);
    $('.cardImg12').attr('src', `/src/img/t3-${tema}.png`);
  }
}
