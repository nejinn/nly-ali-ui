# Cell 单元格

## prop

|  prop   |  类型  |  默认值  | 描述 |
|  ----  | ----  |----  | ----  |
| title  | string |  | 单元格标题 |
| titleClass  | string |  | title 自定义 css |
| value  | string |  | 单元格值 |
| valueClass  | string |  | value 自定义 css |
| icon  | string |  | 单元格左侧 icon |
| iconClass  | string |  | 左侧icon 自定义css |
| isLink  | bool | false | 开启单元格点击效果并开启右侧箭头 |
| linkClass  | string |  | 右侧箭头自定义 css |
| arrowDirection  | string | right | isLink 为 true的时候，开启的右侧箭头方向，可选 'right', 'left', 'up', 'down' |
| label  | string |  | 单元格描述，传入 title 的时候才生效 |
| labelClass  | string |  | 描述自定义 css |
| center  | bool | false | 单元格垂直居中布局 |
| size  | string |  | 单元格大小，可选 'large' |
| center  | bool |  | 单元格垂直居中布局 |
| clickable  | bool | false | 单元格可点击 |

## method

|  methods   |  类型  |  默认值  | 描述 |
|  ----  | ----  |----  | ----  |
| onTap  | evt |  | 点击事件 |


## slot

|  name   | 描述 |
|  ----  | ----  |
| default  | 默认插槽 |
| title  | title 插槽 |
| rightIcon  | rightIcon插槽 |