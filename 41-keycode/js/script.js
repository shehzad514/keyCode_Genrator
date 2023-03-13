const displaykey=document.querySelector('.key h2');
const displaycode = document.querySelector('.keycode h3');
const codediv=document.querySelector('.keycode');

//whwen any key is pressed then run the function 
window.addEventListener('keydown', (e)=>
{
    displaykey.innerText= e.key;
    displaycode.innerText=e.keyCode;

    if(e.keyCode==32)
    {
        displaykey.innerText='Space'; 
    }
})
