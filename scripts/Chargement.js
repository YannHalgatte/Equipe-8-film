document.getElementsByClassName("button").onclick = function(){buttoned()};
function buttoned() {

}




const rire = new Audio ('../media/rireduja.mp3')
               document.addEventListener(
                   'click',
                   ()=>{
                       rire.play();
                       audio.loop = true;
               }
               )




let cracked = document.querySelectorAll('.cracked span')
let red = document.querySelector('.red')

for (let i = 0; i < cracked.length; i++) {
  cracked[0].addEventListener(
    'click',
    function(){
      if (destroyMode) {
        console.log('test')
        cracked[i].classList.add("crack")
        cracked[i].classList.add("absolute")
      }
    }
  )
}


let backgroundDiv = document.querySelectorAll('.background div')
let background = document.querySelector('.background')
for (let i = 0; i < backgroundDiv.length; i++) {
  background.addEventListener(
    'click',
    function(){
      backgroundDiv[i].classList.add("crack")
      setTimeout(function(){background.classList.add('displayNone')}, 750)
    }
  )
}








let destroyMode = false
let changeMode = document.querySelector('.changeMode')
changeMode.addEventListener(
  'click',
  function(){
    if (destroyMode) {
      destroyMode=false
      console.log('destroy false')
    }
    else {
      destroyMode=true
      console.log('destroy true')
    }
  }
)
