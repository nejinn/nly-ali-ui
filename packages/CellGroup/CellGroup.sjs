const groupClass = function groupClass(border, className) {
  const classes = ['nly-cell-group']
  if (border){
    classes.push('nly-hairline--top-bottom')
  }
  if (className) {
    classes.push(className)
  }
  return classes.join(" ");
};

const titleClass = function titleClass(titleClass){
  const classes = ['nly-cell-group__title']

  if (titleClass){
    classes.push(titleClass)
  }
  return classes.join(" ");
}

export default { groupClass, titleClass };
