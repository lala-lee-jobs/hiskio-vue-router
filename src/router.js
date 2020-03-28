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
                    alias: 'abt', // 可使用 ／#/abt => /#/about
                    component: About,
                    children: [
                        { path: '', name: 'home', component: AboutHome },
                        { path: 'us', component: AboutUs },
                        { path: 'you', component: AboutYou },
                        {   
                            path: 'both',
                            // alias: '2', // 可使用 /#/about/2 => /#/about/both
                            // alias: '/2', // 可使用 /#/2 => /#/about/both
                            alias: ['/2', '2', '3'], // 可設定多個別名，最後都等同於 /#/about/both
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
                    component: Products,
                    props: (route) => {
                        console.log('route', route);
                        return { id: route.params.id };
                    }
                }
            ]
        }
    ],
});