<template>
  <div>
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-mine">
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
        <ul class="navbar-nav">
          <li class="nav-item mx-3" :class="{'active': link == 'home'}">
            <router-link
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              class="nav-link"
              to="/"
              @click.prevent="link = 'home'"
            >
              <font-awesome-icon :icon="['fas', 'home']" />&nbsp;首頁
            </router-link>
          </li>
          <li class="nav-item mx-3" :class="{'active': link == 'bicycle'}">
            <router-link
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              class="nav-link"
              to="/youbike"
              @click.prevent="link = 'bicycle'"
            >
              <font-awesome-icon :icon="['fas', 'bicycle']" />&nbsp;YouBike
            </router-link>
          </li>
          <li class="nav-item mx-3" :class="{'active': link == 'news'}">
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
          <li class="nav-item mx-3" :class="{'active': link == 'gif'}">
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
      link: ''
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  background-color: #e3f2fd;
  box-sizing: border-box;
}

.nav-link:hover {
  opacity: .6;
  border-bottom: 2px solid #45a6ec;
}
</style>