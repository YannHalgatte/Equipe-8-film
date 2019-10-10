class ButtonCliqueIci {
  constructor() {
    this.button_cliqueici_container = document.querySelector('.secondpage_button_cliqueici_container')
    this.button_cliqueici = document.querySelectorAll('.second_button_cliqueici_container div')
    this.button_cliqueici_width = this.button_cliqueici[0].offsetWidth
    this.button_cliqueici_height = this.button_cliqueici[0].offsetHeight
    this.button_cliqueici_space = document.createElement("div");
    this.button_cliqueici_message = document.querySelector('.secondpage_button_cliqueici_message span')
  }
  init(){
    this.button_cliqueici[0].addEventListener(
      'click',
      ()=>{
        this.button_cliqueici_message.classList.remove("displayNone")
        this.button_cliqueici_space.style.height = (this.button_cliqueici_height + 'px')
        this.button_cliqueici[1].classList.remove("displayNone")
        let button_cliqueici_child = this.button_cliqueici_container.appendChild(this.button_cliqueici_space)
        for (let i = 0; i < this.button_cliqueici.length; i++) {
          this.button_cliqueici[i].classList.add("crack")
          this.button_cliqueici[i].style.width = this.button_cliqueici_width+"px";
        }
      }
    )
  }
}
