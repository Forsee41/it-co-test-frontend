import { createRouter, createWebHashHistory } from 'vue-router'
import ProjectEdit from '../views/ProjectEdit.vue'
import ProjectList from '../views/ProjectList.vue'

const routes = [
  {
		path: '/project/:id',
    name: 'project-edit',
    component: ProjectEdit,
  },
  {
    path: '/',
    name: 'project-list',
    component: ProjectList,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
