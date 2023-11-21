import { createStore } from 'vuex'

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
    fetchProjects(ctx) {
      const project = {
        title: 'Title',
        description:
          'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
        link: '',
        id: 0,
      }
      const projectList = []
      for (let i = 0; i < 3; i++) {
        const projectItem = { ...project }
        projectItem.id = i
        if (i === 2) {
          projectItem.description = 'hello'
        }
        projectList.push(projectItem)
      }
      ctx.commit('setProjects', projectList)
    },
  },
  modules: {},
})
