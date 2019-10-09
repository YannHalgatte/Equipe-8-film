class ButtonCliqueIci {
  constructor() {
    this.button_cliqueici_container = document.querySelector('.homepage_button_cliqueici_container')
    this.button_cliqueici = document.querySelectorAll('.homepage_button_cliqueici_container div')
    this.button_cliqueici_width = this.button_cliqueici[0].offsetWidth
    this.button_cliqueici_height = this.button_cliqueici[0].offsetHeight
    this.button_cliqueici_space = document.createElement("div");
    this.button_cliqueici_message = document.querySelector('.homepage_button_cliqueici_message span')
  }
  init(){
    this.button_cliqueici[0].addEventListener(
      'click',
      function(){
        MyButtonCliqueIci.button_cliqueici_message.classList.remove("displayNone")
        MyButtonCliqueIci.button_cliqueici_space.style.height = (MyButtonCliqueIci.button_cliqueici_height + 'px')
        let button_cliqueici_child = MyButtonCliqueIci.button_cliqueici_container.appendChild(MyButtonCliqueIci.button_cliqueici_space)

        for (let i = 0; i < MyButtonCliqueIci.button_cliqueici.length; i++) {
          MyButtonCliqueIci.button_cliqueici[i].classList.add("crack")
          MyButtonCliqueIci.button_cliqueici[i].style.width = MyButtonCliqueIci.button_cliqueici_width+"px";
        }
      }
    )

  }
}
let MyButtonCliqueIci = new ButtonCliqueIci()
MyButtonCliqueIci.init()







// function playPause(btn,vid){
// 	var vid = document.getElementById(vid);
// 	if(vid.paused){
// 		vid.play();
// 		btn.innerHTML = "Pause";
// 	} else {
// 		vid.pause();
// 		btn.innerHTML = "Play";
// 	}
// }
