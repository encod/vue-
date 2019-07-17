import {
    mapState,
    mapActions,
} from 'vuex'
import viewName from '../constant'
import {Button} from 'vant'
import toast from '../../components/ToastMtd'
import loading from '../../components/loading'

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
        loading.show()
        setTimeout(() => {
            loading.hide()
        }, 3000)
        // this.$ajax.get('home').then(res => {
        //     console.log(res)
        // })
        // this.es6()
    },
    methods: {
        ...mapActions([
            'checkIsWeixin',
        ]),
        async es6 () {
            const res = await this.$ajax.post('home', {region_id:4})
            console.log(res)
        },
        goUrl () {
            this.$router.push({
                path: '/login'
            })
        }
    }
}
