import fmtEvent from '../utils/fmtEvent';
var noop = function noop() { };
Component({
  mixins: [],
  data: {},
  props: {
    show: false,
    onTap: noop,
    fixed: true,
    className:"",
    zIndex: null,
    opacity: null,
    style:'',
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    onClick: function onClick(e) {
      var event = fmtEvent(this.props, e);
      this.props.onTap(event);
    }
  },
});
