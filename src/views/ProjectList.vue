<template>
  <div class="card-group">
    <ProjectListProject
      class="project-item"
      v-for="project in projectList"
      :project="project"
      :key="project.id"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectListProject from '@/components/ProjectListProject.vue'
const project = ref({
  title: 'Title',
  description:
    'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
  link: '',
  id: 0,
})
const projectList = ref([])
for (let i = 0; i < 10; i++) {
  const projectItem = ref({ ...project.value })
  projectItem.value.id = i
  if (i === 2) {
    projectItem.value.description = 'hello'
  }
  projectList.value.push(projectItem.value)
}
</script>

<style scoped>
.card-group {
  flex-wrap: wrap;
	gap: 1em;
	justify-content: center;
	background-color: gray;
}
.card-group .project-item {
  flex-basis: calc(100% / 6);
  flex-shrink: 0;
  flex-grow: 0;
	min-width: 20em;
  box-shadow: 0px 0px 5px gray;

}
</style>
