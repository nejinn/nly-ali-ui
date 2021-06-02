Page({
  data: {
    value1:1,
    loading1:false,
    loading2:false
  },
  onLoad() {},
  ontap(){
    this.setData({
      value1: this.data.value1 + 1
    })
  },
  ontap1(){
    this.setData({
      loading1:true
    })
  },
  ontap2(){
    this.setData({
      loading2:true
    })
  }
});
