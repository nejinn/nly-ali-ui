import fmtEvent from '../utils/fmtEvent';
var noop = function noop() {};
Component({
  mixins: [],
  data: {},
  props: {
    title:'', // 单元格标题
    value: '', // 单元格值
    icon: '', // 单元格左侧 icon
    isLink:false, // 单元格点击反馈并开启右侧箭头
    arrowDirection:"right", // isLink 为 true的时候，开启的右侧箭头方向
    label:"", // 单元格描述
    center:false, // 单元格垂直居中布局
    size:'', // 单元格大小
    clickable:false, // 单元格可点击
    required:false, // 单元格必填星号
    style:'', // 单元格自定义 style
    className:"", // 单元格自定义 css
    iconClass:"", // 左侧icon 自定义css
    titleClass:"", // titile 自定义 css
    valueClass:"",
    linkClass:"",
    onTap:noop
  },
  didMount() {
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    onClick: function onClick(e){
      var event = fmtEvent(this.props, e);
      this.props.onTap(event);
    }
  },
});
