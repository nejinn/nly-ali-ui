# Badge

## props

|  prop   |  类型  |  默认值  | 描述 |
|  ----  | ----  |----  | ----  |
| title  | string or number |  | 文本内容，设置 title 的时候，为单独使用模式， color, content, dot 会失效 |
| content  | string or number |  | 非独立模式的 文本内容 |
| max  | string||number |  | 设置最大值，当 title 或者 content 大于 max 的时候, 会显示 {max}+ |
| dot  | bool | false | 开启渲染成一个点模式， title 下无效 |
| className  | string |  | 自定义 css |
| style  | string |  | 自定义式样 |
| color  | string |  | 自定义颜色， title 下无效 |

## slot

|  name   | 描述 |
|  ----  | ----  |
| default  | 默认插槽 |
| title  | title 插槽 |
| content  | content 插槽 |