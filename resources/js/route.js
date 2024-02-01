import {createRouter,createWebHistory} from "vue-router";
import Login from './component/Page/Login.vue';
import Register from './component/Page/Registration.vue';
import Home from './component/Page/Home.vue';

const routes = [

    {
        path:'/',
        component:Login
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/home',
        component:Home
    },

]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router;
