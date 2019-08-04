<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-mine">
      <router-link class="navbar-brand" to="/">阿正萬事屋</router-link>
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
          <li class="nav-item active">
            <router-link class="nav-link" to="/">
              <font-awesome-icon :icon="['fas', 'home']" />首頁
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/youbike">
              <font-awesome-icon :icon="['fas', 'bicycle']" /> YouBike查詢
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/news">
              <font-awesome-icon :icon="['far', 'newspaper']" /> 新聞
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
nav {
  background-color: #e3f2fd !important;
}
</style>