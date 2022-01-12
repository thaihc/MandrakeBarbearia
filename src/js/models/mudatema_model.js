class ModelTema {
  qualTema() {
    const temaAtual = document.body.dataset.tema;
    const novoTema = temaAtual == 'dark' ? 'ligth' : 'dark';
    document.body.setAttribute('data-tema', novoTema);
    return novoTema;
  }
}
