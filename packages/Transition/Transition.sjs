const transitionStyle = function transitionStyle(customStyle) {
  const styles = [];
  if (customStyle === 1 || customStyle===3) {
    styles.push('display:none')
  } else if (customStyle) {
    styles.push(customStyle)
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