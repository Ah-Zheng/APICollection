<template>
  <div class="container">
    <h1 class="text-center pt-3 mb-5 title">圖片分享</h1>
    <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
      <li class="nav-item">
        <router-link
          class="nav-link active"
          id="gif-tab"
          data-toggle="tab"
          to="/photoshare"
          role="tab"
          aria-controls="gif"
          aria-selected="true"
        >GIF</router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          id="static-tab"
          data-toggle="tab"
          to="/photoshare/pixabay"
          role="tab"
          aria-controls="static"
          aria-selected="false"
        >Static</router-link>
      </li>
    </ul>
    <div class="tab-content mt-4" id="myTabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import GIF from '@/components/pages/GIFSearch';
import Pixabay from '@/components/pages/Pixabay';
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  color: rgba(0, 0, 0, 0.6);
  text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
    0px -5px 35px rgba(255, 255, 255, 0.3);
}

.container {
  min-height: 92vh;
  background-color: white;
}
</style>
