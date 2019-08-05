<template>
  <div class="container">
    <input type="text" class="form-control mt-3" v-model="txt" @keydown.enter="getNewsData()" />
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  data() {
    return {
      txt: '',
      apiKey: '29bb6022c2784639a224a4b591c8643c'
    }
  },
  mounted() {
    //   this.getNewsData();
  },
  methods: {
    getNewsData() {
      let vm = this;
      $.ajax({
        type: "GET",
        url: `https://newsapi.org/v2/everything?domains=ltn.com.tw&q=${vm.txt}&sortBy=popular&apiKey=${vm.apiKey}`,
        dataType: "JSON",
        success: function (response) {
          console.log(response);
        }
      });
    }
  }
}
</script>