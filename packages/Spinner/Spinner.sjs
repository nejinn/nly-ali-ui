const spinnerStyle = function spinnerStyle(size, color) {
  const styles = [];
  if (size !==0 && size){
      styles.push(`width: ${size}rpx`)
      styles.push(`height: ${size}rpx`)
  }
  if (color){
      styles.push(`color: ${color}`)
  }
  return styles.join('; ');
}


const textStyle =  function textStyle(size, color, textColor) {
  const styles = [];
  if (size !==0 && size){
      styles.push(`font-size: ${size}rpx`)
  }
  if (color){
      styles.push(`color: ${color}`)
  }
  if (textColor){
    styles.push(`color: ${textColor}`)
  }
  return styles.join('; ');
}

export default {spinnerStyle, textStyle}