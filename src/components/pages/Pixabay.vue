<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-4" v-for="(item, index) in data" :key="index">
        <div class="card mb-4">
          <img class="card-image-top w-100" :src="item.webformatURL  " />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  data() {
    return {
      txt: 'bicycle',
      apiKey: '4802170-48cb4cafed5c9fda21fcc3e55',
      data: []
    }
  },
  mounted() {
    this.getPicData();
  },
  methods: {
    getPicData() {
      let vm = this;
      $.ajax({
        type: "GET",
        url: `https://pixabay.com/api/?q=${vm.txt}&per_page=50&key=${vm.apiKey}`,
        dataType: "JSON",
        success: function (response) {
          console.log(response.hits);
          vm.data = [];
          for (let i=0; i<response.hits.length; i++) {
            if (response.hits[i].previewHeight <= 100) {
              vm.data.push(response.hits[i]);
            }
          }
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 92vh;
  background-color: white;
}
</style>

