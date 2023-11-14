<script setup>
  import navbar from './components/header.vue'
  import foobar from './components/footer.vue'
</script>

<template>
  <main class="d-flex flex-column" style="height: 100vh;">
    <navbar></navbar>
    <router-view class="flex-grow-1"></router-view>
    <foobar></foobar>
  </main>
</template>