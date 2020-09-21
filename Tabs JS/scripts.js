const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const content = document.querySelectorAll('.content');

about.addEventListener('click',function(e){
    const id = e.target.dataset.id;
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        });

        content.forEach(function(contents){
            contents.classList.remove('active');
        });

        const elements = document.getElementById(id);
        elements.classList.add('active');
    }
});