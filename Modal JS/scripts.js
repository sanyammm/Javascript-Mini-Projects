const btn = document.querySelector('.btn');
const closebtn = document.querySelector('.close-btn');
const modaloverlay = document.querySelector('.modal-overlay')

btn.addEventListener('click', function(){
    modaloverlay.classList.toggle('open-modal')                                            
});

closebtn.addEventListener('click', function(){
    modaloverlay.classList.toggle('open-modal')                                            
});