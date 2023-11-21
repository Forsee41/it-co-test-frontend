<template>
  <div class="container">
    <div class="form-group d-flex justify-content-center">
      <div class="form-row">
        <img :src="imageLink" class="img-thumbnail" />
      </div>
    </div>
    <div class="form-group d-flex justify-content-center mt-4">
      <button @click="changeImage" class="btn btn-primary change-img-btn">
        Change Image
      </button>
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
import { onMounted, computed } from 'vue'
import { pushNewProject, patchProject } from '@/store/project-service'

const store = useStore()
const route = useRoute()
const router = useRouter()
const projectId = route.params.id

// call stack is executing before futures, so imageLink tries to access .value of
// undefined project if fetch is in progress
const currentProject = computed(() => store.getters.getProject(projectId))

const imageLink = computed(() =>
  currentProject.value.image ? currentProject.value.image : placeholder
)

async function saveProject() {
  if (currentProject.value.id == 'new') {
    await pushNewProject(currentProject.value)
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
