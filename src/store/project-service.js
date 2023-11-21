import axios from 'axios'

const BASE_URL = process.env.VUE_APP_BASEURL

export async function fetchProjects() {
  try {
    const response = await axios.get(`${BASE_URL}/project/`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export async function pushNewProject(project) {
  try {
    await axios.post(`${BASE_URL}/project/`, project)
  } catch (error) {
    console.error(error)
  }
}

export async function patchProject(project) {
  try {
    const put_body = { ...project }
    delete put_body.id
    await axios.put(`${BASE_URL}/project/${project.id}`, project)
  } catch (error) {
    console.error(error)
  }
}
