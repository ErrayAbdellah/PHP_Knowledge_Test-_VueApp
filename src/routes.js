import { createWebHistory,createRouter } from "vue-router";

import welcome from './components/welcome.vue'
import info from './components/info.vue'
import stepper from './components/stepper.vue'
import question from './components/question.vue'
import resulte from './components/resulte.vue'

const routes = [
    {
        path : "/",
        name:"welcome",
        component:welcome ,
    },
    {
        path : "/info",
        name:"info",
        component:info ,
    },
    {
        path : "/stepper",
        name:"stepper",
        component:stepper ,
    },
    {
        path : "/question",
        name:"question",
        component:question ,
    },
    {
        path : "/resulte",
        name:"resulte",
        component:resulte ,
    },
];


const router =createRouter({
    history : createWebHistory(),
    routes,
});

export default router ;