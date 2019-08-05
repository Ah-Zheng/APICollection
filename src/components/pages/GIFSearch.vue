<template>
  <div class="container">
    <input type="text" class="form-control mt-3" @keydown.enter="getGif()" v-model="txt" />
    <hr />
    <div class="row">
      <div class="col-12 col-md-4" v-for="(item, index) in data" :key="index">
        <div class="card mb-4">
          <img class="card-image-top" :src="item.images.fixed_height_downsampled.url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      txt: '',
      apiKey: 'ARnU4NR4ik9RH6fn5Bo9lE92bU32rg7R',
      lang: 'zh-TW',
      data: []
    }
  },
  methods: {
    getGif() {
      let vm = this;
      $.ajax({
        type: "GET",
        url: `https://api.giphy.com/v1/gifs/search?q=${vm.txt}&limit=50&lang=${vm.lang}&api_key=${vm.apiKey}`,
        async: false,
        dataType: "JSON",
        success: function (response) {
          console.log(response);
          vm.data = [...response.data];
        }
      });
    }
  }
}
</script>