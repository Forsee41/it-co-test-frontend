<template>
  <div class="modal" tabindex="-1" role="dialog" id="delete-confirmation">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Delete confirmation</h5>
        </div>
        <div class="modal-body">
          You sure you want to delete selected projects?
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Back
          </button>
          <button
            @click="commitDeletion"
            type="button"
            class="btn btn-danger"
            data-bs-dismiss="modal"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { deleteProjects } from '@/store/project-service'

const store = useStore()
const forDeletion = computed(() => store.getters.getForDeletion)
async function commitDeletion() {
  await deleteProjects(forDeletion)
  store.commit('clearRemoved')
  store.dispatch('fetchProjects')
}
</script>

<style scoped></style>
