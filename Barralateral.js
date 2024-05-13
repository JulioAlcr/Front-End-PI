var menuitem = document.querySelectorAll('.item-menu')
function selectLink() {
    const menuItems = document.querySelectorAll('.item-menu');
    menuItems.forEach(item => item.classList.remove('ativo'));
    this.classList.add('ativo');
}
menuitem.forEach(item => item.addEventListener('click', selectLink));
// Adiciona evento de clique a cada item do menu lateral
const menuItems = document.querySelectorAll('.item-menu');
menuItems.forEach(item => item.addEventListener('click', selectLink));

// Função para expandir o menu lateral
const btnExpandir = document.querySelector('#btn-Exp');
const menuLateral = document.querySelector('.menu-lateral');

btnExpandir.addEventListener('click', () => {
    menuLateral.classList.toggle('expandir');
});


function setupMenu() {
    const menuitem = document.querySelectorAll('.item-menu');

    function selectLink(){
        menuitem.forEach((item)=>
            item.classList.remove('ativo')
        )
        this.classList.add('ativo')
    }

    menuitem.forEach((item)=>
        item.addEventListener('click',selectLink)
    );
}

setupMenu();