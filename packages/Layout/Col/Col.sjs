export default function classnames(col, offset) {
  const prefixCls = "nly-col";
  const classes = [];

  if (col) {
    classes.push(`${prefixCls}--${col}`);
  }

  if (offset) {
    classes.push(`${prefixCls}--offset-${offset}`);
  }

  if (classes.length > 1) {
    return classes.join(" ");
  } else if (classes.length === 1) {
    return classes[0];
  } else {
    return null;
  }
}
