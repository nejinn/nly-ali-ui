const customClass = function customClass(fixed, className) {
  const classes = ['nly-overlay']

  if (fixed) {
    classes.push('nly-overlay-fixed')
  } else {
    classes.push('nly-overlay-absolute')
  }

  if (className) {
    classes.push(className)
  }
  return classes.join(' ')
}


const customStyle = function customStyle(zIndex, opacity, style) {
  const styles = []
  if (zIndex) {
    styles.push(`z-index: ${zIndex}`)
  }
  if (opacity) {
    const customOpacity = (opacity * 0.7).toFixed(1)
    styles.push(`background-color: rgba(0, 0, 0, ${customOpacity})`)
  }

  if (style) {
    styles.push(style)
  }

  return styles.join('; ')
}



export default {
  customClass,
  customStyle
}