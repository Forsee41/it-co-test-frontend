<template>
  <div class="container">
    <div class="form-group d-flex justify-content-center">
      <div class="form-row">
        <img
          v-if="renderImage"
          :src="imageLink"
          class="img-thumbnail"
          :key="imageKey"
        />
      </div>
    </div>
    <div class="form-group d-flex justify-content-center mt-4">
      <button @click="openFileBrowser">Upload Image</button>
      <input
        type="file"
        ref="fileInput"
        @change="handleFileChange"
        style="display: none"
      />
    </div>
    <div class="form-group">
      <label>Project Name</label>
      <input v-model="currentProject.name" class="form-control" />
    </div>
    <div class="form-group mt-1">
      <label>Project Description</label>
      <textarea
        v-model="currentProject.description"
        class="form-control description-input"
      ></textarea>
    </div>
    <div class="form-group mt-1">
      <label>Project Link</label>
      <textarea v-model="currentProject.link" class="form-control"></textarea>
    </div>
    <div class="form-group button-group d-flex justify-content-between">
      <button @click="$router.push('/')" class="btn btn-danger bottom-btn">
        Back to project list
      </button>
      <button @click="saveProject" class="btn btn-primary bottom-btn">
        Save
      </button>
    </div>
  </div>
</template>

<script setup>
import placeholder from '@/assets/image_placeholder.jpg'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { onMounted, computed, ref, nextTick } from 'vue'
import { pushNewProject, patchProject } from '@/store/project-service'
import { sendImage } from '@/store/image-upload'

const BASE_URL = process.env.VUE_APP_BASEURL
const fileInput = ref(null)
let tempImage = ref(null)
let renderImage = ref(true)

const openFileBrowser = () => {
  fileInput.value.click()
}
async function handleFileChange(event) {
  const file = event.target.files[0]
  const extension = file.name.split('.').pop().toLowerCase()

  if (!['jpg', 'jpeg', 'png', 'gif'].includes(extension)) {
    alert('Invalid file type')
  } else if (currentProject.value.id !== 'new') {
    await sendImage(file, currentProject.value.id)
  } else {
    tempImage = file
  }
  renderImage.value = false
  await nextTick()
  renderImage.value = true
}

const store = useStore()
const route = useRoute()
const router = useRouter()
const projectId = route.params.id

// call stack is executing before futures, so imageLink tries to access .value of
// undefined project if fetch is in progress
const currentProject = computed(() => store.getters.getProject(projectId))

const imageLink = computed(() =>
	// This doesn't work
  tempImage.value
    ? `${URL.createObjectURL(tempImage.value)}`
    : currentProject.value.image
    ? `${BASE_URL}/image/${currentProject.value.id}`
    : placeholder
)

async function saveProject() {
  if (currentProject.value.id == 'new') {
    const newProjectId = await pushNewProject(currentProject.value)
    if (!tempImage.value == null) {
      await sendImage(tempImage.value, newProjectId)
    }
    router.push('/')
  } else {
    await patchProject(currentProject.value)
    router.push('/')
  }
}

onMounted(() => {
  store.dispatch('fetchProject')
})
</script>
<style scoped>
.description-input {
  min-height: 10em;
}
.container {
  flex: 1 0 auto;
  margin-top: 3em;
}

.img-thumbnail {
  margin-right: 2em;
}
.button-group {
  margin-top: 1em;
}
.bottom-btn {
  min-width: 12em;
}
.btn {
  box-shadow: 10px 10px 20px rgb(10, 10, 10, 0.2);
}
</style>
