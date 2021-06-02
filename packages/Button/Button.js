import fmtEvent from '../utils/fmtEvent';
var noop = function noop() {};
Component({
  mixins: [],
  data: {},
  props: {
    type:"default",
    plain: false,
    disabled:false,
    hoverClass :'nly-button--active',
    loading: false,
    loadingType:'circular',
    loadingText:'',
    square:false,
    round: false,
    icon:"",
    size:"normal",
    color:"",
    className:"",
    style:"",
    onTap:noop,
    hoverStartTime:20,
    hoverStayTime:70
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onClick: function onClick(e){
      if (this.props.disabled){
        return
      }
      var event = fmtEvent(this.props, e);
      this.props.onTap(event);
    }
  },
});
