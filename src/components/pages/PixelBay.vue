<template>
  <div class="container">
      <input type="text" class="form-control mt-3" v-model="txt" @keydown.enter="getPicData()">
      <hr>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  data() {
    return {
        txt: '',
        lang: 'zh',
        apiKey: '13233354-417c2ee9721caa187f35891f4'
    }
  },
  methods: {
      getPicData() {
          let vm = this;
          $.ajax({
              type: "GET",
              url: `https://pixabay.com/api/?q=${vm.txt}&lang=${vm.lang}&key=${apiKey}`,
              dataType: "JSON",
              success: function (response) {
                  console.log(response);
              }
          });
      }
  }
}
</script>

<style lang="scss" scoped>
</style>

