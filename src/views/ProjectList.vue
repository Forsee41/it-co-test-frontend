<template>
  <div class="project-list">
    <div class="project-list-buttons">
      <button
        class="btn btn-primary btn-lg"
        @click="$router.push('project/new')"
      >
        Add project
      </button>
      <button class="btn btn-danger btn-lg">Delete selected</button>
    </div>
    <div class="card-group">
      <ProjectListProject
        class="project-item"
        v-for="project in getProjects"
        :project="project"
        :key="project.id"
      />
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import ProjectListProject from '@/components/ProjectListProject.vue'

const store = useStore()

const getProjects = computed(() => store.getters.getProjects)
onMounted(() => {
  store.dispatch('fetchProjects')
})
</script>

<style scoped>
.card-group {
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
}
.card-group .project-item {
  flex-basis: calc(100% / 6);
  flex-shrink: 0;
  flex-grow: 0;
  min-width: 20em;
  box-shadow: 0px 0px 5px gray;
}
.project-list-buttons {
  padding-top: 5em;
  padding-bottom: 3em;
  display: flex;
  justify-content: space-around;
}
.btn-lg {
  box-shadow: 2px 2px 10px rgb(10, 10, 10, 0.5);
  width: 20em;
}
.project-list {
  background-color: gray;
  flex: 1 0 auto;
}
</style>
