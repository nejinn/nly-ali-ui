Component({
  mixins: [],
  data: {
    convertContent: "",
    convertTitle: "",
  },
  props: {
    content: "",
    dot: false,
    className: "",
    style: "",
    color: "",
    max: 0,
    title: "",
  },
  didMount() {
    this.covContent();
    this.covTitle();
  },
  didUpdate() {
    this.covContent();
    this.covTitle();
  },
  didUnmount() {},
  methods: {
    covContent() {
      const convertContent = parseFloat(this.props.content);
      if (!isNaN(convertContent) && this.props.max) {
        this.setData({
          convertContent:
            parseFloat(this.props.content) > parseFloat(this.props.max)
              ? `${this.props.max}+`
              : parseFloat(this.props.content),
        });
        return;
      }

      if (!isNaN(convertContent)) {
        this.setData({
          convertContent: parseFloat(this.props.content),
        });
        return;
      }

      this.setData({
        convertContent: this.props.content,
      });
    },
    covTitle() {
      const convertTitle = parseFloat(this.props.title);
      if (!isNaN(convertTitle) && this.props.max) {
        this.setData({
          convertTitle:
            parseFloat(this.props.title) > parseFloat(this.props.max)
              ? `${this.props.max}+`
              : parseFloat(this.props.title),
        });
        return;
      }
      if (!isNaN(convertTitle)) {
        this.setData({
          convertTitle: parseFloat(this.props.title),
        });
        return;
      }
      this.setData({
        convertTitle: this.props.title,
      });
    },
  },
});
