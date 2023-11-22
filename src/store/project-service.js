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
    const response = await axios.post(`${BASE_URL}/project/`, project)
    return response.data['id']
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

export async function deleteProjects(project_ids) {
  const requests = project_ids.value.map((id) =>
    axios.delete(`${BASE_URL}/project/${id}`)
  )
  // don't care about exceptions on DELETE
  await axios.all(requests)
}
