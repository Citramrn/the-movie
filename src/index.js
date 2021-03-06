import Vue from 'vue'
import Router from 'vue-router'
const HomePage = () => import('./components/PagesHome.vue')

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/movies',
            name: 'Movies',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => { return import ('./view/Movies.vue') }
        },  
           {
            path: '/people',
            name: 'People',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => { return import ('./view/People.vue') }
        },
        {    
            path: '/movie/:id',
            name: 'Movie',
            component: () => import ('./view/Movie.vue')
        },
    ]
})