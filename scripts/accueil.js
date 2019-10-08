let bouton_cliqueici = document.querySelectorAll('.accueil_bouton_cliqueici_container div')
let bouton_cliqueici_width = bouton_cliqueici[0].offsetWidth
for (let i = 0; i < bouton_cliqueici.length; i++) {
  bouton_cliqueici[0].addEventListener(
    'click',
    function(){
      bouton_cliqueici[i].classList.add("crack")
      bouton_cliqueici[i].style.width = bouton_cliqueici_width+"px";
    }
  )
}
