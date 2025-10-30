const buttons = document.querySelectorAll('.likeBtn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        //Subre al elemento padre del boton (class="like-section")
        const likeSection = button.parentElement;
        //Dentro del likeSection busca el elemento con la clase .likes-contador y lo guarda en la variable
        const likesCounter = likeSection.querySelector('.likes-contador');


        //ParseInt lee de izquierda a derecha hasta que encuentra un caracter que no es numero
        //por lo cual es muy conveniente para este caso donde el texto es "0 Like(s)"
        let currentLikes = parseInt(likesCounter.textContent);
        currentLikes++;
        likesCounter.textContent = `${currentLikes} Like(s)`;
    });
});