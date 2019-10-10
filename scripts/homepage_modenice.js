class BreakItem {
  constructor(container, breakthose) {
    this.break_those_container = container
    this.break_those = breakthose
    this.break_those_width = this.break_those[0].offsetWidth
    this.break_those_height = this.break_those[0].offsetHeight
    this.break_those_space = document.createElement("div");
  }
  init(){
    this.break_those[0].addEventListener(
      'click',
      ()=>{
        if (this.break_those_container=='none') {
        }
        else {
          let break_those_child = this.break_those_container.appendChild(this.break_those_space)
        }
        this.break_those_space.style.height = (this.break_those_height + 'px')

        if (this.break_those[1].classList.contains('displayNone')) {
          this.break_those[1].classList.remove("displayNone")
          MyScore.score= MyScore.score +1
          MyScore.init()
        }
        for (let i = 0; i < this.break_those.length; i++) {
          this.break_those[i].classList.add("crack")
          this.break_those[i].style.width = this.break_those_width+"px";
        }
      }
    )
  }
}
let BreakHeaderDiv01 = new BreakItem('none',document.querySelectorAll('.header_div_01_01'))
BreakHeaderDiv01.init()
let BreakHeaderDiv02 = new BreakItem('none',document.querySelectorAll('.header_div_02_01'))
BreakHeaderDiv02.init()
let BreakHomepageLogo = new BreakItem(document.querySelector('.homepage_logo_container'),document.querySelectorAll('.homepage_logo_01_01'))
BreakHomepageLogo.init()
let BreakHomepageCliqueiciMessage = new BreakItem(document.querySelector('.homepage_button_cliqueici_message_container'),document.querySelectorAll('.homepage_button_cliqueici_message'))
BreakHomepageCliqueiciMessage.init()
let BreakHomepageVideo = new BreakItem(document.querySelector('.homepage_video_trailer_container'),document.querySelectorAll('#homepage_video_trailer'))
BreakHomepageVideo.init()
let BreakHomepagePack01 = new BreakItem(document.querySelector('.homepage_img_pack01'),document.querySelectorAll('.homepage_img_pack01_01'))
BreakHomepagePack01.init()
let BreakHomepagePack02 = new BreakItem(document.querySelector('.homepage_img_pack02'),document.querySelectorAll('.homepage_img_pack02_01'))
BreakHomepagePack02.init()
let BreakHomepageButtonModenice = new BreakItem(document.querySelector('.homepage_button_modenice_container'),document.querySelectorAll('.homepage_button_modenice'))
BreakHomepageButtonModenice.init()
let BreakHomepageLogoSeeMovie = new BreakItem(document.querySelector('.homepage_logo_movie'),document.querySelectorAll('.homepage_logo_movie_01'))
BreakHomepageLogoSeeMovie.init()


class WipeItem{
  constructor(wipethis) {
    this.wipe_this = wipethis
  }
  init(){
    this.wipe_this.addEventListener(
      'click',
      ()=>{
        this.wipe_this.classList.add("displayNone")
        MyScore.score= MyScore.score +1
        MyScore.init()
      }
    )
  }
}
let HomepageRedPin = new WipeItem(document.querySelector('.homepage_img_pin img'))
HomepageRedPin.init()


class Score {
  constructor(score) {
    this.score = score
    this.scoreShow = document.querySelector('.homepage_score')
  }
  init(){
    this.scoreShow.innerHTML = this.score +'/10'
    if (this.score==10) {
      console.log('change page')
    }
  }
}
let MyScore = new Score(0)
