import {
    mapState,
    mapActions,
} from 'vuex'
import viewName from '../constant'
import {Button} from 'vant'
import toast from '../../components/ToastMtd'

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
        toast('et_wl')
        this.$ajax.get({
            apiName: 'home',
        })
    },
    methods: {
        ...mapActions([
            'checkIsWeixin',
        ]),
        goUrl () {
            this.$router.push({
                path: '/login'
            })
        }
    }
}
