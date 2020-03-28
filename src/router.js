import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Products from './Products.vue';
import About from './About.vue';
import AboutHome from './AboutHome.vue';
import AboutUs from './AboutUs.vue';
import AboutYou from './AboutYou.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: App,
            children: [
                {
                    path: 'about',
                    alias: 'abt',
                    component: About,
                    children: [
                        { path: '', name: 'home', component: AboutHome },
                        { path: 'us', component: AboutUs },
                        { path: 'you', component: AboutYou },
                        {   
                            path: 'both', 
                            components: {
                                default: AboutUs,
                                another: AboutYou
                            }
                        },
                    ]
                },
                {
                    path: 'products/:id?',
                    name: 'prod',
                    component: Products
                }
            ]
        }
    ],
});