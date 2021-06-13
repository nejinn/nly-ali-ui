# Buuton 按钮

![button.gif](https://upload-images.jianshu.io/upload_images/9915084-236f4fdaa92001f8.gif?imageMogr2/auto-orient/strip)

## prop

|  prop   |  类型  |  默认值  | 描述 |
|  ----  | ----  |----  | ----  |
| type  | string | default | 按钮类型，可选 default, primary, info, danger, warning |
| plain  | bool | false | 会否外边框按钮 |
| disabled  | bool | false | 是否禁用 |
| hoverClass  | string | nly-button--active | 点击时的 css 类 |
| loading  | bool | false | 是否开启加载状态 |
| loadingType  | string | circular | 加载状态类型, 开启加载状态才有效, 可选 circular, spinner |
| loadingText  | string |  | 加载文字，开启加载状态时有效 |
| square  | bool | false | 方形按钮 |
| round  | bool | false | 圆形按钮， square 为 false 情况下才生效 |
| icon  | string |  | 图标按钮 |
| size  | string | nomal | 按钮大小， 可选 mini, small, normal ,large |
| center  | bool | false | 单元格垂直居中布局 |
| size  | string |  | 单元格大小，可选 'large' |
| color  | string |  | 自定义颜色 |
| className  | string |  | 自定义 css |
| style  | string |  | 自定义 style |
| hoverStartTime  | string, number | 20 | 按住后多少时间后出现点击状态，单位毫秒 |
| hoverStartTime  | string, number | 70 | 手指松开后点击状态保留时间，单位毫秒 |


## method

|  methods   |  类型  |  默认值  | 描述 |
|  ----  | ----  |----  | ----  |
| onTap  | evt |  | 点击事件, disabled 无效 |
