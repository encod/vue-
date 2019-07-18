# et_wl

> 移动端的Vue架子
>
## tip
- node>= 6.0.0
- npm>= 3.0.0
- vue-cli版本 v2.9.6
- webpack版本 v3.6.0
- axios版本 v0.19.0，其他版本可能会有一些小问题
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

### 样式
- 使用styl预处理,简洁明了，代码少
- 因为是移动端，所以rem布局,使用的是px2rem-loader
- 各个浏览器兼容已做了，使用的是autoprefixer，环境的版本兼容在package.json里面的browserslist字段设置

### 代码规范
- eslint

### 打开方式
- 架子打开的方式为loachost，这里加入了ip打开方式，因为有时候需要在微信环境看效果，需要ip生成的二维码才可以看，loachost是无效的

### UI
- 使用的是VantUI,因为是移动端的,所以也配置了vant的rem布局
- 使用方式为按需引入
```
// 引入一个button按钮组件

import {Button} from 'vant'

components: {
    [Button.name]:Button
},
```
### 图片懒加载
- 使用vue-lazyload进行图片懒加载
- 使用方式
```
// 未使用懒加载

<img src="图片路径">
<img :src="图片路径">



// 使用懒加载

<img v-lazy="路径">
```

### 请求
- 二次封装了axias
- 运行环境为基本的内、公、灰、正4个环境
- 第一个参数为apiName  第二个参数是传给后端的参数
- get请求
```
// 不传参的
this.$ajax.get('home').then(res => {
    console.log(res)
})
// 传参的
this.$ajax.get('home',{id:8, type:'h5'}).then(res => {
    console.log(res)
})
```
- post请求
```
// 不传参的
this.$ajax.post('home').then(res => {
    console.log(res)
})
// 传参的
this.$ajax.post('home',{id:8, type:'h5'}).then(res => {
    console.log(res)
})
```
### 数据状态管理
- vuex使用了 mapState获取数据 mapActions获取方法
```
// 调用方法，每个页面的函数方法名称最好是不一样的

methods: {
    ...mapActions([
        'checkIsWeixin',
    ]),
}
使用： this.checkIsWeixin(),this.checkIsWeixin({})
tip：参数为一个对象


// 调用state的数据

computed: {
    ...mapState({
        isWeixin: ({ appInfo }) => appInfo.isWeixin,
    }),
},
使用：isWeixin类似于data里面的数据，使用方式和data里面的参数一样，this.isWeixin
tip: isWeixin为属性名称,可以随意定义,appInfo为store文件夹里面的文件夹名称
```
