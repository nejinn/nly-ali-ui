const buttonClass = function buttonClass(
  type,
  size,
  plain,
  disabled,
  loading,
  square,
  round,
  className
) {
  const classes = ["nly-button"];

  if (type) {
    classes.push(`nly-button--${type}`);
  }

  if (size) {
    classes.push(`nly-button--${size}`);
  }

  if (plain) {
    classes.push("nly-button--plain");
  }

  if (disabled) {
    classes.push("nly-button--disabled");
  }

  if (loading) {
    classes.push("nly-button__loading");
  }

  if (square) {
    classes.push("nly-button--square");
  }

  if (round && !square) {
    classes.push("nly-button--round");
  }

  if (className) {
    classes.push(className);
  }
  return classes.join(" ");
};

const buttonStyle = function buttonStyle(color, plain, style) {
  const styles = [];
  if (color && !plain) {
    styles.push(`background: ${color}; color: white; border-color: ${color}`)
  }

  if (color && plain) {
    styles.push(`color: ${color}; border-color: ${color}`)
  }
  if (style) {
    styles.push(style);
  }
  return styles.join(';');
};

export default { buttonClass, buttonStyle };
