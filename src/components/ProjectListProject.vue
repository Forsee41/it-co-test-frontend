<template>
  <div class="card h-20" style="width: 18rem">
    <img :src="computedImgLink" class="card-img-top" alt= />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ computedDescription }}</p>

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

const props = defineProps({
  imgLink: String,
  title: String,
  description: String,
})
const computedImgLink = computed(() => {
  return props.imgLink ? props.imgLink : placeholder
})
const computedDescription = computed(() => {
  return props.description.length < 127
    ? props.description
    : props.description.slice(0, 127) + '...'
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
}
.btn-edit {
	margin-right: 10px;
}
.card-body {
	background-color: rgb(230, 230, 230);
}
.form-check-input {
	box-shadow: 0px 0px 5px gray;
	background-color: white;
}
</style>
