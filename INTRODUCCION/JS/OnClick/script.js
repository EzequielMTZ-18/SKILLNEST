let logoutButton = document.getElementById("logoutBtn");
let vr = 1;

logoutButton.addEventListener("click", function () {
    if (vr == 1) {
        logoutButton.textContent = "Cerrar Sesión"
        vr = 2;
    }
    else {
        logoutButton.textContent = "Iniciar Sesión"
        vr = 1;
    }
})

let addDefButton = document.getElementById("addBtn");

addDefButton.addEventListener("click", function () {
    //addDefButton.style.display = "none";
    addDefButton.style.visibility = "hidden"
    //addDefButton.remove();
    //todos validos
})

let likeCat = document.getElementById("likeGato");
let likeDog = document.getElementById("likePerro");
let contador1 = 22;
let contador2 = 45;

likeCat.addEventListener("click", function () {
    alert("Gato Atigrado was liked, what a cute kitty");
    contador1++;
    likeCat.textContent = contador1 + " Me gusta";
})

likeDog.addEventListener("click", function () {
    alert("Golden Retriever was liked, what a cute puppy");
    contador2++;
    likeDog.textContent = contador2 + " Me gusta"
})


