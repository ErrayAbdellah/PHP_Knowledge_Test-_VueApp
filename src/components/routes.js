import { createWebHistory,createRouter } from "vue-router";

import nave from './components/nave.vue'
import welcome from './components/welcome.vue'
import info from './components/info.vue'
import stepper from './components/stepper.vue'
import question from './components/question.vue'
import resulte from './components/resulte.vue'
import footer from './components/footer.vue'

const route = [
    {
        path : "/",
        name:"welcome",
        component:welcome ,
    },
    {
        path : "/nave",
        name:"nave",
        component:nave ,
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
    {
        path : "/footer",
        name:"footer",
        component:footer ,
    },
    {
        path:"/:catchAll(.*)",
        component:NotFound,
    }
]