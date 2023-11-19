<template>
  <div class="card h-20" style="width: 18rem">
    <img :src="computedImgLink" class="card-img-top" alt= />
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text h-auto">{{ computedDescription }}</p>
    </div>
    <div class="card-footer">
      <div class="project-interactions">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Delete
          </label>
        </div>
        <a class="btn btn-primary btn-edit">Edit</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import placeholder from '@/assets/image_placeholder.jpg'

const props = defineProps(['project'])
const computedImgLink = computed(() => {
  return props.project.imgLink ? props.project.imgLink : placeholder
})
const computedDescription = computed(() => {
  return props.project.description.length < 127
    ? props.project.description
    : props.project.description.slice(0, 127) + '...'
})
</script>

<style scoped>
.project-interactions {
  display: flex;
  justify-content: space-between;
}
.form-check {
  margin-top: 5px;
  margin-left: 5px;
  align-items: flex-end;
}
.btn-edit {
  margin-right: 10px;
}
.card-footer,
.card-body {
  background-color: rgb(230, 230, 230);
}
.card-title {
  font-weight: bold;
}
.form-check-input {
  box-shadow: 0px 0px 5px gray;
  background-color: white;
}
</style>
