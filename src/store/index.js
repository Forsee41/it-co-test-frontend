import { createStore } from 'vuex'
import { fetchProjects } from './project-service'

export default createStore({
  state: {
    projects: [],
    forDeletion: [],
  },
  getters: {
    getProjects(state) {
      return state.projects
    },
    getForDeletion(state) {
      return state.forDeletion
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
    toggleRemoved(state, id) {
      const index = state.forDeletion.indexOf(id)
      if (index === -1) {
        state.forDeletion.push(id)
      } else {
        state.forDeletion.splice(index, 1)
      }
    },
    clearRemoved(state) {
      state.forDeletion = []
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
