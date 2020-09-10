const sidebarToggle = document.querySelector('.sidebar-toggle');
const closebtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const sidebarHeader = document.querySelector('.sidebar-header');

sidebarToggle.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar');
});

sidebarHeader.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar');    
});