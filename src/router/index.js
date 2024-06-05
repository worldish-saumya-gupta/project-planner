import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddProject from '../views/AddProject'
import EditProject from '../views/EditProject'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/add-project',
    name: 'add-project',
    component: AddProject
  },
  {
    path: '/projects/:id',
    name: 'edit-project',
    component: EditProject,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
