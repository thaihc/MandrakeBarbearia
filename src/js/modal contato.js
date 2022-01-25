function startModal(modalId) {
  const modal = document.getElementById(modalId);
  console.log(modal);
  if (modal) {
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
      if (
        e.target.id == modalId ||
        e.target.className == 'fechar' ||
        e.target.className == 'botao'
      ) {
        modal.classList.remove('mostrar');
      }
    });
  }
}

const mensagem = document.getElementById('iconFooter3');
mensagem.addEventListener('click', () => startModal('modalContato'));

const mensagem1 = document.querySelector('.mensagem');
mensagem1.addEventListener('click', () => startModal('modalContato'));
