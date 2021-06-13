Component({
  mixins: [],
  data: {
    customClass: null,
    customStyle: 1, // 1，代表初始化，3代表 leave 结束
    customShow: null,
    setTimeIds: '',
  },
  props: {
    show: false,
    name: 'fade',
    className:'',
    duration: null,
    enter: null,  // enter 初始css
    enterTo: null, // enter 结束 css
    enterActive: null, // enter 激活 css
    leave: null, // leave 初始 css
    leaveTo: null, // leave 结束 css
    leaveActive: null // leave 激活 css
  },
  didMount() {
    if (this.props.show) {
      this.setData({
        customStyle: null
      })
    }
  },
  didUpdate(preProps) {
    this.transitionEnter(preProps)
    this.transitionLeave(preProps)
  },
  didUnmount() {
  },
  methods: {
    transitionEnter(preProps) {
      if (preProps.show != this.props.show && this.props.show) {
        if (this.data.setTimeIds.length > 0) {
          const setTimeIdList = this.data.setTimeIds.split(",")
          setTimeIdList.forEach(e => {
            clearTimeout(e)
          })
        }
        this.setData({
          setTimeIds: ""
        })
        if (this.props.enter) {
          this.setData({
            customClass: this.props.enter
          })
        }
        var t = setTimeout(() => {
          const enterActive = this.props.enterActive || `nly-${this.props.name}-enter-active`
          if (this.props.duration) {
            const msDuration = this.props.duration / 1000
            this.setData({
              customStyle: `animation-duration:${msDuration}s; -webkit-animation-duration:${msDuration}s; transition-duration:${msDuration}s; -webkit-transition-duration:${msDuration}s`,
              customClass: enterActive,
            })
          } else {
            this.setData({
              customClass: enterActive,
              customStyle:null
            })
          }
        }, 30)
        this.setData({
          setTimeIds: this.data.setTimeIds + `${t},`
        })
        const setFuncTime = this.props.duration || 300
        var t1 = setTimeout(() => {
          if (this.props.enterTo) {
            this.setData({
              customClass: this.props.enterTo,
              customStyle: null
            })
          } else {
            this.setData({
              customClass: this.props.enterTo,
              customStyle: null
            })
          }
        }, setFuncTime)
        this.setData({
          setTimeIds: this.data.setTimeIds + `${t1},`
        })
      }
    },
    transitionLeave(preProps) {
      if (preProps.show != this.props.show && !this.props.show) {
        if (this.data.setTimeIds.length > 0) {
          const setTimeIdList = this.data.setTimeIds.split(",")
          setTimeIdList.forEach(e => {
            clearTimeout(e)
          })
        }
        this.setData({
          setTimeIds: ""
        })
        if (this.props.enter) {
          this.setData({
            customClass: this.props.enter
          })
        }
        var t2 = setTimeout(() => {
          const leaveActive = this.props.leaveActive || `nly-${this.props.name}-leave-active`
          if (this.props.duration) {
            const msDuration = this.props.duration / 1000
            this.setData({
              customClass: leaveActive,
              customStyle: `animation-duration:${msDuration}s; -webkit-animation-duration:${msDuration}s; transition-duration:${msDuration}s; -webkit-transition-duration:${msDuration}s`
            })
          } else {
            this.setData({
              customClass: leaveActive
            })
          }
        }, 30)
        this.setData({
          setTimeIds: this.data.setTimeIds + `${t2},`
        })
        const setFuncTime = this.props.duration || 300
        var t3 = setTimeout(() => {
          if (this.props.leaveTo) {
            this.setData({
              customClass: this.props.leaveTo,
              customStyle: 3
            })
          } else {
            this.setData({
              customClass: this.props.leaveTo,
              customStyle: 3
            })
          }
        }, setFuncTime)
        this.setData({
          setTimeIds: this.data.setTimeIds + `${t3},`
        })
      }
    }
  },
});
