// Lógica
// 1 - Selecionar elementos que devem ser animados
// 2 - Definir a classe que é adicionada durante a animação
// 3 - Criar função de animação
// 3.1 - Verificar a distância entre a barra de scroll e o topo do site
// 3.2 - Verificar se a distância do 3.1 + Offset é maior do que a distância entre o elemento e o Topo da Página.
// 3.3 - Se verdadeiro adicionar classe de animação, remover se for falso.
// 4 - Ativar a função de animação toda vez que o usuário utilizar o Scroll
// 5 - Otimizar ativação

const debounce = (func, wait, immediate, timeout) => 
(...args) => {
        const context = this;
        const later =  () => {
            if (!immediate) func(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(context, args);
    };


const target = document.querySelectorAll('[data-animation]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach((element) => {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
            console.log('Avelino')
        } else {
            element.classList.remove(animationClass)
        };
    });
};

animeScroll();

if (target.length) {
    window.addEventListener('scroll', debounce(() => {
        animeScroll();
    }, 200));
};


