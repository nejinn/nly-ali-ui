const transitionStyle = function transitionStyle(customStyle, style) {
  const styles = [];
  if (customStyle === 1 || customStyle === 3) {
    styles.push('display:none')
  } else if (customStyle) {
    styles.push(customStyle)
  }

  if (style) {
    styles.push(style)
  }
  return styles.join('; ');
}

const transitionClass = function transitionClass(customClass, className) {
  const classes = [];
  if (customClass) {
    classes.push(customClass)
  }
  if (className) {
    classes.push(className)
  }
  return classes.join(' ');
}

export default { transitionStyle, transitionClass }