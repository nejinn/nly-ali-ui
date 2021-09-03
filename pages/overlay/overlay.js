Page({
  data: {
    show: false,
    show1: false,
    show2:false
  },
  onLoad() { },
  onShowOverlay() {
    this.setData({
      show: !this.data.show
    })
  },
  onShowOverlay1() {
    this.setData({
      show1: !this.data.show1
    })
  },
    onShowOverlay2() {
    this.setData({
      show2: !this.data.show2
    })
  }
});
