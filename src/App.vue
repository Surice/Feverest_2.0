<script setup>
  import navbar from './components/header.vue'
  import foobar from './components/footer.vue'
</script>

<template>
  <main>
    <navbar></navbar>
    <router-view></router-view>
    <foobar></foobar>
  </main>
</template>