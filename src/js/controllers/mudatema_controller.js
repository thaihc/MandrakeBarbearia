class ControllerTema {
  checaTema() {
    const model = new ModelTema();
    const tema = model.qualTema();
    const view = new ViewTema();
    view.trocaTema(tema);
  }
}
