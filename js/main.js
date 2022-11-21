var bgcolor = document.querySelector('body')
var btn = document.querySelector('.nightmod')

btn.addEventListener('click', function(){
    bgcolor.classList.toggle('dark');
})