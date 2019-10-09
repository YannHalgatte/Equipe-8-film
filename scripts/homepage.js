class ButtonCliqueIci {
  constructor() {
    this.button_cliqueici = document.querySelectorAll('.homepage_button_cliqueici_container div')
    this.button_cliqueici_width = this.button_cliqueici[0].offsetWidth
  }
  init(){
    for (let i = 0; i < this.button_cliqueici.length; i++) {
      this.button_cliqueici[0].addEventListener(
        'click',
        function(){
          MyButtonCliqueIci.button_cliqueici[i].classList.add("crack")
          MyButtonCliqueIci.button_cliqueici[i].style.width = MyButtonCliqueIci.button_cliqueici_width+"px";
        }
      )
    }
  }
}
let MyButtonCliqueIci = new ButtonCliqueIci()
MyButtonCliqueIci.init()







function playPause(btn,vid){
	var vid = document.getElementById(vid);
	if(vid.paused){
		vid.play();
		btn.innerHTML = "Pause";
	} else {
		vid.pause();
		btn.innerHTML = "Play";
	}
}
