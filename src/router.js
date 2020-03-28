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
                    component: About,
                    children: [
                        { path: '', component: AboutHome },
                        { path: 'us', name: 'aus', component: AboutUs },
                        { path: 'you', name: 'ayou', component: AboutYou },
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