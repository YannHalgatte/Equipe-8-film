class BoutonCliqueIci {
  constructor() {
    this.bouton_cliqueici = document.querySelectorAll('.accueil_bouton_cliqueici_container div')
    this.bouton_cliqueici_width = this.bouton_cliqueici[0].offsetWidth
  }
  init(){
    for (let i = 0; i < this.bouton_cliqueici.length; i++) {
      this.bouton_cliqueici[0].addEventListener(
        'click',
        function(){
          MonBoutonCliqueIci.bouton_cliqueici[i].classList.add("crack")
          MonBoutonCliqueIci.bouton_cliqueici[i].style.width = MonBoutonCliqueIci.bouton_cliqueici_width+"px";
        }
      )
    }
  }
}
let MonBoutonCliqueIci = new BoutonCliqueIci()
MonBoutonCliqueIci.init()
