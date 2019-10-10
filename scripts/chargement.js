let chargement_button = document.querySelector('button')
let chargement_button_alreadyClicked = 0
let chargement_button_autorizeToClick = false
let chargement_start = document.querySelector('.chargement_start')
let animation = document.querySelector('.divfront')

const rire = new Audio ('medias/rireduja.mp3')

function clock(){
  chargement_button_autorizeToClick=true
        chargement_button.style.cursor = "pointer"
}

function rireFunction(){
  rire.play()
}

function fade_out(){
  chargement_start.style.display = "none"
      animation.classList.add('animation')
}

function redirection(){
  document.location.href="accueil.html"
}
chargement_button.addEventListener(
  'click',
  function(){
    if (chargement_button_alreadyClicked==0) {
      chargement_button.style.cursor = "wait"
      chargement_button_alreadyClicked += 1
      setTimeout(fade_out, 1000);
      setTimeout(rireFunction, 4500);
      setTimeout(clock, 6500);
      setTimeout(redirection, 8500);
      chargement_start.classList.add('fade-out')
      console.log(chargement_button_autorizeToClick)
    }
  }
)
