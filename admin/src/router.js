import Vue from 'vue'
import Router from 'vue-router'
import Container from './view/Main'
import CateList from './view/CateList.vue'
import CreateCate from './view/CreateCate.vue'

Vue.use(Router)
export default new Router({
    routes:[
        {
            path: '/',
            component: Container,
            children: [
                {
                    path: '/categories/create',
                    component: CreateCate
                },
                {
                    path: '/categories/list',
                    component: CateList
                }
            ]
        }
    ]
})