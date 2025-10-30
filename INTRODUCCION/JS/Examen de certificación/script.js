
//Funcion boton DONAR
let donarBtn = document.querySelector('.donate');

donarBtn.addEventListener('click', () => {
    alert('¡Gracias por tu donación! 🌳💚');
});

//Funcion de filtrado

let treeSelect = document.querySelector('.tree-select');
let filterText = document.querySelector('.filter-text');

treeSelect.addEventListener('change', () => {
    //seleccionamos el texto de la opcion seleccionada
    let selectedOption = treeSelect.options[treeSelect.selectedIndex].text;
    //cambiamos el texto del filtro
    filterText.textContent = `Mostrando: ${selectedOption}`
}
);

//Funcion de adoptar

//tomamos todos los botones de adoptar
let adoptBtns = document.querySelectorAll('.adopt-btn');

//ahora por cada boton le agregamos un eventlistener de click
adoptBtns.forEach(button => {
    button.addEventListener('click', () => {
        //cuando se le hace click se le cambia el texto y se deshabilita
        button.textContent = 'Adoptado';
        button.disabled = true;
        //tambien le cambiamos el estilo
        button.style.backgroundColor = '#247727ff';
        button.style.color = 'white';
        button.style.cursor = 'not-allowed';
    }
    );
}
);