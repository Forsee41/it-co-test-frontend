import { createStore } from 'vuex'
import { fetchProjects } from './project-service'

export default createStore({
  state: {
    projects: [],
  },
  getters: {
    getProjects(state) {
      return state.projects
    },
    getProject(state) {
      return (id) => {
        const blankProject = {
          id: 'new',
          name: '',
          image: '',
          description: '',
        }
        if (id == 'new') {
          return blankProject
        }
        return state.projects.find((item) => item.id == id)
      }
    },
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects
    },
  },
  actions: {
    async fetchProjects(ctx) {
      const projectList = await fetchProjects()
      ctx.commit('setProjects', projectList)
    },
  },
  modules: {},
})
