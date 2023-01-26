const botaoTrailer = document.querySelector('.botao-trailer');
const video = document.getElementById('video');
const modal = document.querySelector('.modal');
const botaoFecharModal = document.querySelector('.fechar-modal');
const linkDoVideo = video.src;

botaoTrailer.addEventListener('click', () => {
    modal.classList.toggle('aberto');
    video.setAttribute('src', linkDoVideo)
});

botaoFecharModal.addEventListener('click', () => {
    modal.classList.toggle('aberto');
    video.setAttribute('src', '')
});