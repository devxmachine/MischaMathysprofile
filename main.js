
const longForm = document.getElementById('essay');
const quote = document.getElementById('extract');
longForm.style.display = 'none'; 
function Change() {
    quote.style.cursor = "pointer";
    quote.style.color = "#FFE2E2";
}
function revealText () {
    longForm.style.cursor = "pointer";
    quote.style.display ='none';
    longForm.style.display = 'block';
    
}
function closeText (){
    quote.style.cursor = "pointer";
    quote.style.display ='block';
    longForm.style.display = 'none';
}

quote.addEventListener('mouseover', Change);
quote.addEventListener('click', revealText);
longForm.addEventListener('click', closeText);


