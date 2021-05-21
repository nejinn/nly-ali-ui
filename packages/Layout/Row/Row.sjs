export default function classnames(wrap, justify, align, alignContent) {
  const prefixCls = 'nly-row';
  const classes = [];

  const wrapMaps = {
    nowrap: `${prefixCls}--nowrap`,
    wrap: `${prefixCls}--wrap`,
  };

  const justifyMaps = {
    start: `${prefixCls}--justify-start`,
    end: `${prefixCls}--justify-end`,
    center: `${prefixCls}--justify-center`,
    between: `${prefixCls}--justify-space-between`,
    around: `${prefixCls}--justify-space-around`,
  };

  const alignMaps = {
    start: `${prefixCls}--align-start`,
    center: `${prefixCls}--align-center`,
    end: `${prefixCls}--align-end`,
    baseline: `${prefixCls}--align-baseline`,
    stretch: `${prefixCls}--align-stretch`,
  };

  const alignContentMaps = {
    start: `${prefixCls}---align-content-start`,
    end: `${prefixCls}--align-content-end`,
    center: `${prefixCls}--align-content-center`,
    between: `${prefixCls}--align-content-between`,
    around: `${prefixCls}--align-content-around`,
    stretch: `${prefixCls}--align-content-stretch`,
  };

  if (wrapMaps[wrap]) {
    classes.push(wrapMaps[wrap]);
  }

  if (justifyMaps[justify]) {
    classes.push(justifyMaps[justify]);
  }

  if (alignMaps[align]) {
    classes.push(alignMaps[align]);
  }

  if (alignContentMaps[alignContent]) {
    classes.push(alignContentMaps[alignContent]);
  }
  return classes.join(' ');
}
