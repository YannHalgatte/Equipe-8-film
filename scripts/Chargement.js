
let chargement_button = document.querySelector('button')
let chargement_button_alreadyClicked = 0
let chargement_button_autorizeToClick = false

const rire = new Audio ('medias/rireduja.mp3')

function clock(){
  chargement_button_autorizeToClick=true
  rire.loop = false;
        chargement_button.style.cursor = "pointer"
}
function menuder(){
    document.getElementsByClassName('divfront').classList.add('animation');
}
chargement_button.addEventListener(
  'click',
  ()=>{
    if (chargement_button_alreadyClicked==0) {
      chargement_button.style.cursor = "wait"
      chargement_button_alreadyClicked += 1
      console.log('1e click')
      rire.play();
      rire.loop = true;
      setTimeout(clock, 6500);
      menuder()

      console.log(chargement_button_autorizeToClick)
    }
    else if((chargement_button_alreadyClicked==1) && (chargement_button_autorizeToClick==true)){
      console.log('3e click')
      rire.loop = false;
      document.location.href="index.html"

    }
    else if(chargement_button_alreadyClicked==1){
      console.log('2e click')
    }
  }
)
