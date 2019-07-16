export default {
    activated () {
        this.$emit('setHeader', {
            title: 'login'
        })
    },
    methods: {
        goUrl () {
            this.$router.push({
                path: '/'
            })
        }
    },
}
