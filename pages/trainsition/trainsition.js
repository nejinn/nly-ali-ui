Page({
  data: {
    showFade: false,
    showSlideup:false,
    showSlideDown: false,
    showSlideLeft:false,
    showSlideRight:false,
    showOverlay:false,
    showCustom:false
  },
  onLoad() { },
  onShowFade(){
    this.setData({
      showFade: !this.data.showFade
    })
  },
  onShowSlideup(){
     this.setData({
      showSlideup: !this.data.showSlideup
    })   
  },
  onShowSlideDown(){
    this.setData({
      showSlideDown: !this.data.showSlideDown
    })
  },
  onShowSlideLeft(){
    this.setData({
      showSlideLeft: !this.data.showSlideLeft
    })
  },
  onShowSlideRight(){
    this.setData({
      showSlideRight: !this.data.showSlideRight
    })
  },
  onShowOverlay(){
    this.setData({
      showOverlay: !this.data.showOverlay
    })
  },
  onShowCustom(){
    this.setData({
      showCustom: !this.data.showCustom
    })
  }
});
