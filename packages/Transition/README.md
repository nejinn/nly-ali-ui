# Transition 过渡动画

![transition.gif](https://upload-images.jianshu.io/upload_images/9915084-c5436f4dd4880351.gif?imageMogr2/auto-orient/strip)

## prop 

|  prop   |  类型  |  默认值  | 描述 |
|  ----  | ----  |----  | ----  |
| className  | string |  | 自定义 css 类 |
| show  | bool | false | 显示或隐藏元素 |
| name  | string | fade | 内置动画名，可选: fade, slide-up, slide-down, slide-left, slide-right, 如果传入自定义动画6个过度 css，会覆盖 name |
| duration  | string |  | 动画持续时间，单位是毫秒 |
| enter  | string |  | 自定义进入动画初始 css 类 |
| enterTo  | string |  | 自定义进入动画结束 css 类 |
| enterActive  | string |  | 自定义进入动画激活 css 类 |
| leave  | string |  | 自定义离开动画初始 css 类 |
| leaveTo  | string |  | 自定义离开动画结束 css 类 |
| leaveActive  | string |  | 自定义离开动画激活 css 类 |

## slot

|  name   | 描述 |
|  ----  | ----  |
| default  | 默认插槽 |
