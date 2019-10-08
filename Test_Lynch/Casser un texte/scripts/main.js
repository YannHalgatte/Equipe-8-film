let cracked = document.querySelectorAll('.cracked span')
let red = document.querySelector('.red')
for (let i = 0; i < cracked.length; i++) {
  red.addEventListener(
    'click',
    function(){
      cracked[i].classList.add("crack")
    }
  )
}
