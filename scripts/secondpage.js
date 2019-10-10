class wipeAndShow {
  constructor() {
    this.wipeThis = document.querySelector('.secondpage_question')
    this.showThis = document.querySelector('.secondpage_text')
  }
  init(){
    this.wipeThis.addEventListener(
      'click',
      ()=>{
        this.wipeThis.classList.add('displayNone')
        this.showThis.classList.remove('displayNone')
      }
    )
  }
}

let MyWipeAndShow = new wipeAndShow()
MyWipeAndShow.init()
