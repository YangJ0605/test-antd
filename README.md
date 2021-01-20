## 介绍

### 这是一个以React + typescript 搭建的基础模板，可以开箱即用。

#### 1. 使用craco来重写webpack配置，而不用yarn eject 来暴露配置
+ 详情请见根目录下的craco.config.js
+ 默认加了生成代码分析报告，详情请见`webpack-bundle-analyzer`这个插件
+ 默认开启了gzip打包压缩，详情请见`compression-webpack-plugin`这个插件
+ 默认加了别名: `@ => src`
+ [更多有关craco的配置](https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#api)
    

#### 2. 内置antd
+ 默认配置了按需加载，你可以直接`import {Button, Col, Row} from 'antd' `这样使用。
+ 可以更改antd的主题颜色，配置信息在craco.config.js中
+ 对于antd 的图标引入，不建议像官方文档上那样引用，它不是按需加载
    ```
    import { HomeOutlined} from '@ant-design/icons'; 
    以上这种方式引入会导致打包依赖变大
    建议使用如下方式
    在一个文件下，按需引入需要使用的antd图标，然后导出
    export {default as CarOutlined} from '@ant-design/icons/CarOutlined'
    ```
#### 3. 路由配置
+ 默认使用`react-router-config` 这个插件来配置路由，src目录下有一个index文件，里面默认导出一个routes的数组
+ [更多详情请见](https://www.npmjs.com/package/react-router-config)


#### 文档目录结构
- assets 文件夹放置一些资源，例如全局的css和img图片等。
- components 放置通用的全局公共组件
    - 每个文件夹对应一个组件，每个文件夹下建议使用`index.tsx 和 style.tsx`命名,这样命名的好处就是，你可以在其他地方只需要引入到文件夹名字就行，因为会默认引入index文件，例如:`import 组件名 from '@/components/组件的文件夹名字'`
- hooks 放置自定义的hooks
- pages 放置每个路由组件
    - 跟上面的对应components规则类似，一个路由对应一个文件夹
- service 放置axios来管理请求
    - 该目录下有一个基础版本的axios拦截配置，可以根据自己的使用情况来修改
    - 建议这样使用，每个page有自己对应的模块，比如pageA对应service目录下的一个pageA模块，pageA默认引入之前写好的request这个模块
- utils 放置一些通用方法工具

