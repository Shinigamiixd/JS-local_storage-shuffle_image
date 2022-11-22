let buttonRodyti = document.querySelector(".rodyti")
let buttonNerodyti = document.querySelector(".nerodyti")
let buttonMaisyti = document.querySelector(".maisyti")
let foto = document.querySelector(".foto")
let img = document.querySelectorAll("img")

buttonRodyti.addEventListener("click", rodyti)
buttonNerodyti.addEventListener("click", nerodyti)
buttonMaisyti.addEventListener("click", maisyti)

function rodyti(){
    foto.style.visibility = "visible"
    buttonRodyti.style.visibility = "hidden"
    buttonNerodyti.style.visibility = "visible"
    buttonMaisyti.style.visibility = "visible"
}

function nerodyti(){
    foto.style.visibility = "hidden"
    buttonRodyti.style.visibility = "visible"
    buttonNerodyti.style.visibility = "hidden"
    buttonMaisyti.style.visibility = "hidden"
}

function maisyti(){
    for (let i = 0; i < img.length;i++){
        let img_random = Math.floor(Math.random() * img.length)
        foto.appendChild(img[img_random])
    }
}
