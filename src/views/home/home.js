import {
    mapState,
    mapActions,
} from 'vuex'
import viewName from '../constant'
import {Button} from 'vant'

export default {
    name: viewName.home,
    components: {
        [Button.name]:Button
    },
    computed: {
        ...mapState({
            isWeixin: ({ appInfo }) => appInfo.isWeixin,
        }),
    },
    activated () {
        this.$emit('setHeader', {
            title: 'et_wl',
        })
    },
    mounted () {
    },
    methods: {
        ...mapActions([
            'checkIsWeixin',
        ]),
    }
}
