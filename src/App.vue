<template>
  <div class="main-container">
    <HeaderGlobal />
    <router-view />
    <FooterGlobal class="footer" />
  </div>
</template>

<script setup>
import HeaderGlobal from '@/components/HeaderGlobal.vue'
import FooterGlobal from '@/components/FooterGlobal.vue'
</script>
<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: gray;
}
.router-view {
  padding-bottom: 3em;
}
</style>
