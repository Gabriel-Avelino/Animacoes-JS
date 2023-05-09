const titulo = document.querySelector('h1.title');


function typeWriter(e){
    const arrayText = e.innerHTML.split('');
    e.innerHTML = '';
    arrayText.forEach((letter, i) => {
        setTimeout(() => e.innerHTML += letter, 75*i)
    });
}

typeWriter(titulo)