
const longForm = document.getElementById('essay');
const quote = document.getElementById('extract');
longForm.style.display = 'none'; 
function revealText () {
    quote.style.display ='none';
    longForm.style.display = 'block';
}
function closeText (){
    quote.style.display ='block';
    longForm.style.display = 'none';
}

quote.addEventListener('click', revealText);
longForm.addEventListener('click', closeText);

