let bouton_cliqueici = document.querySelectorAll('.accueil_bouton_cliqueici_container div')

for (let i = 0; i < bouton_cliqueici.length; i++) {
  bouton_cliqueici[0].addEventListener(
    'click',
    function(){
      bouton_cliqueici[i].classList.add("crack")
    }
  )
}
