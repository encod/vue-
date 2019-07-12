// const view = name => (resolve) => {
//     require([`@/views/${name}/index.vue`], resolve); // eslint-disable-line
// };

const view = name => () => import(`@/views/${name}/index.vue`)

const pageNotFound = view('pageNotFound')

const home = view('home')

export default [
    {
        path: '*',
        name: 'pageNotFound',
        component: pageNotFound
    },
    {
        path: '/',
        name: 'home',
        meta: {
            keepAlive: true,
        },
        component: home
    }
]
