# tripics

> 使用vue2.0、vuex、vue-router2.0、echarts搭建的一个数据展示平台   
> 不支持IE8及其以下版本，单页面应用      
> 

## 运行步骤

``` bash
# 安装依赖
npm install

# 在本地启动服务，并且通过localhost:8080地址进行访问
npm run dev

# 编译并压缩代码便于发布
npm run build

# 运行单元测试
npm run unit
``` 

## 在线访问


## 源码说明
```
.
|-- IM_analyze                       // 用python进行群聊数据分析的相关代码
|-- build                            // 项目构建相关代码
|-- config                           // 项目开发环境配置
|-- src                              // 源码目录                     
|   |-- components                   // vue公共组件
|   |-- store                        // vuex的状态管理
|       |-- store.js                 // 加载各种store模块
|       |-- login.js                 // 登录状态相关store
|       |-- user.js                  // 用户相关store
|   |-- App.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|-- static
|   |-- data                         // 群聊分析得到的数据用于数据可视化
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .gitignore                       // git上传需要忽略的文件格式
|-- README.md                        // 项目说明
|-- favicon.ico 
|-- index.html                       // 入口页面
|-- package.json                     // 项目配置相关信息
.
```


