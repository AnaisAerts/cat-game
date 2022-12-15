/**
 * Appel
 */
const cat = document.getElementById("cat")
const plant = document.getElementById("plant")
const ground1 = document.querySelector(".ground1")
const ground2 = document.querySelector(".ground2")
const time = document.getElementById("time")
const buttonR = document.getElementById("buttonR")
const buttonD = document.getElementById("buttonD")
const start = document.getElementById("start")

/**
 * Start
 */
cat.style.backgroundImage = "url('images/debout.png')"
plant.style.animationPlayState = 'paused'
ground1.style.animationPlayState = 'paused'
ground2.style.animationPlayState = 'paused'

buttonD.onclick = function(){
    cat.style.backgroundImage = "url('images/marche.png')"
    plant.style.animationPlayState = 'running'
    ground1.style.animationPlayState = 'running'
    ground2.style.animationPlayState = 'running'

    buttonD.style.display = 'none'
}


/**
 * Fonction JUMP
 */
function jump() {
    if (cat.classList != "jump") {
        cat.classList.add("jump")

        setTimeout(function () {
            cat.classList.remove("jump")
        }, 300);
    }
}

/**
 * Touche faisant le JUMP
 */
var count = 0
document.addEventListener("keydown", function (event) {
    jump()
    
    count++
    time.innerHTML = count
})

/**
 * Si CAT est vivant
 */
let IsAlive = setInterval(function () {
    // Current position(y) de CAT
    let catTop = parseInt(window.getComputedStyle(cat).getPropertyValue("top"))

    // Current position(x) de PLANT
    let plantLeft = parseInt(
        window.getComputedStyle(plant).getPropertyValue("left")
    )

    // Button caché
    buttonR.style.display = 'none'

    // Détection de la COLLISION
    if (plantLeft < 55 && plantLeft > 0 && catTop >= 228) {
        // Collision
        plant.style.animationPlayState = 'paused'

        // Changement de chat
        cat.style.backgroundImage = "url('images/assis.png')"

        // Arret du GROUND
        ground1.style.animationPlayState = 'paused'
        ground2.style.animationPlayState = 'paused'

        // BUTTON affiché
        buttonR.style.display = 'block'

        // Score
        if(count == 0){
            start.innerHTML = "Your score is " + count + " jump. Seriously ?"
        } else if(count <= 10) {
            start.innerHTML = "Your score is " + count + " jumps. You can do better !"
        } else if(count <= 50) {
            start.innerHTML = "Your score is " + count + " jumps. I know you can do more."
        } else {
            start.innerHTML = "Your score is " + count + " jumps. Congratulations !"
        }
    }
}, 10)

/**
 * Relancer
 */
buttonR.onclick = function() {
    location.reload();
}

/**
 * PARALLAX
 */
var scene = document.getElementById('scene');
var parallax = new Parallax(scene, {
    scalarX: 10,
    scalarY: 5,
});