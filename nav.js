const openButton = document.querySelector('.open-modal-button')
const modal = document.querySelector('.nav-modal-container')
function setModalOpen(){
  openButton.style.display = 'none';
  modal.style.display = 'flex'
}

function setModalClose(){
  openButton.style.display = 'flex';
  modal.style.display = 'none'
}