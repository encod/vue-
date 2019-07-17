import Vue from 'vue'

const loadingVue = require('./loading.vue').default
const Loading = Vue.extend(loadingVue)

let loadingSingleInstance = null
const show = () => {
    if (loadingSingleInstance) {
        return
    }
    loadingSingleInstance = (new Loading({
        el: document.createElement('div'),
        mixins: [{
            destroyed () {
                loadingSingleInstance.$el.remove()
                loadingSingleInstance = null
            }
        }]
    }))

    document.body.appendChild(loadingSingleInstance.$el)
}

const hide = () => {
    if (loadingSingleInstance === null) {
        return
    }
    loadingSingleInstance.show = false
}
export default {
    show,
    hide,
}
