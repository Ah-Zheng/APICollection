<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
    <GoTop/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import GoTop from "@/components/pages/GoTop";
export default {
  name: 'App',
  components: {
    Navbar,
    GoTop
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
