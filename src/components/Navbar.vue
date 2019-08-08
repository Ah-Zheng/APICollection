<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">共享PaPa造</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mx-3" :class="{'active': this.$route.path == '/'}">
            <router-link
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              class="nav-link"
              to="/"
              @click.prevent="link = 'bicycle'"
            >
              <font-awesome-icon :icon="['fas', 'bicycle']" />&nbsp;YouBike
            </router-link>
          </li>
          <li class="nav-item mx-3" :class="{'active': this.$route.path == '/news'}">
            <router-link
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              class="nav-link"
              to="/news"
              @click.prevent="link = 'news'"
            >
              <font-awesome-icon :icon="['far', 'newspaper']" />&nbsp;新聞
            </router-link>
          </li>
          <li
            class="nav-item mx-3"
            :class="{'active': this.$route.path == '/photoshare' || this.$route.path == '/photoshare/pixabay'}"
          >
            <router-link
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              class="nav-link"
              to="/photoshare"
              @click.prevent="link = 'photoshare'"
            >
              <font-awesome-icon :icon="['fas', 'images']" />&nbsp;圖片分享
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  background-color: #e3f2fd;
}
</style>