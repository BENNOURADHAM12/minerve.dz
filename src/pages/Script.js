import react from 'React';

function Script(){
    const nav = document.querySelector('.nav__links');
    const burger = document.querySelector('.burger');
    const imageX = document.querySelector('.imageX');
    const imageB = document.querySelector('.imageB');
    let b = false;

    burger.addEventListener('click', () => {
        if(b== false){
            nav.style.setProperty('display', 'flex');
            imageX.style.setProperty('display', 'block');
            imageB.style.setProperty('display', 'none');
            b = true
        }else{
            nav.style.setProperty('display', 'none');
            imageB.style.setProperty('display', 'block');
            imageX.style.setProperty('display', 'none');
            b = false;
        }
     })
}

export default Script;