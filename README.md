# et_wl

> 移动端的Vue架子

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
- 使用styl预处理
- rem 布局 因为是移动端  所以加了rem布局
- 各个浏览器兼容已做了

### 代码规范
- eslint

### 打开方式
- 架子打开的方式为loachost，这里加入了ip打开方式，因为有时候需要在微信环境看效果，需要ip生成的二维码才可以看，loachost是无效的

### UI
- 使用的是VantUI,因为是移动端的,所以也配置了vant的rem布局,使用方式为按需引入

### 图片懒加载
- 使用vue-lazyload进行图片懒加载

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
