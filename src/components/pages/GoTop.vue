<template>
  <div>
    <a href="#" class="goTop" @click.prevent="goTop()" v-show="isShowGoTop">
      <font-awesome-icon :icon="['fas', 'angle-up']"></font-awesome-icon>
    </a>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  data() {
    return {
      isShowGoTop: false
    }
  },
  mounted() {
    this.initGoTop();
  },
  methods: {
    goTop() {
      $('html, body').animate({ scrollTop: 0 }, 900);
    },
    initGoTop() {
      let vm = this;
      $(document).bind('scroll', function () {
        if ($(document).scrollTop() > 80) {
          vm.isShowGoTop = true;
        } else {
          vm.isShowGoTop = false;
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.goTop {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  background-color: #00cc99;
  opacity: 0.3;
  color: white;
  text-decoration: none;
  position: fixed;
  right: 50px;
  bottom: 50px;
}
.goTop:hover {
  opacity: 1;
}
</style>
