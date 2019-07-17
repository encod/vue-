// 默认背景图片懒加载
import Lazyload from 'vue-lazyload'
import defaultImg from '../../assets/images/common/cat.jpg'

export default (Vue) => {
    Vue.use(Lazyload, {
        preLoad: 1.3,
        attempt: 1,
        error: defaultImg,
        loading: defaultImg,
    })
}
