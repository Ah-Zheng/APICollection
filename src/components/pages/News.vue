<template>
  <div class="container">
    <h1 class="text-center pt-3 mb-5 title">相關新聞</h1>
    <nav class="mt-3">
      <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
        <a
          class="nav-item nav-link active"
          id="nav-youbike-tab"
          data-toggle="tab"
          :href="`#nav-youbike`"
          role="tab"
          aria-controls="nav-youbike"
          aria-selected="true"
          @click.prevent="getNewsData('youbike'), link = 'youtube'"
        >YouBike</a>
        <a
          class="nav-item nav-link"
          id="nav-Shared-bicycle-tab"
          data-toggle="tab"
          href="#nav-Shared-bicycle"
          role="tab"
          aria-controls="nav-Shared-bicycle"
          aria-selected="false"
          @click.prevent="getNewsData(`'共享單車'`), link = 'Shared-bicycle'"
        >共享單車</a>
        <a
          class="nav-item nav-link"
          id="nav-Sharing-economy-tab"
          data-toggle="tab"
          href="#nav-Sharing-economy"
          role="tab"
          aria-controls="nav-Sharing-economy"
          aria-selected="false"
          @click.prevent="getNewsData(`共享經濟`), link = 'Sharing-economy'"
        >共享經濟</a>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        :id="`nav-${link}`"
        role="tabpanel"
        :aria-labelledby="`nav-${link}-tab`"
      >
        <div class="row mt-3">
          <div class="col-12" v-for="(item, index) in newsData" :key="index">
            <div class="card mb-2">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-lg-4">
                    <img class="img-fluid img-thumbnail" :src="item.urlToImage" alt />
                  </div>
                  <div class="col-12 col-lg-8">
                    <h4 class="h5 news-title">
                      <a :href="item.url" target="_bank">{{ item.title }}</a>
                    </h4>
                    <p>{{ item.description }}</p>
                    <span class="text-right">來源 : {{ item.source.name }}</span>
                    <br />
                    <span>作者 : {{ item.author }}</span>
                    <br />
                    <span class="text-right">發布時間 : {{ item.publishedAt }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      link: 'youbike',
      apiKey: '29bb6022c2784639a224a4b591c8643c',
      newsData: []
    }
  },
  mounted() {
    this.getNewsData('youbike');
  },
  methods: {
    getNewsData(value) {
      let vm = this;
      $.ajax({
        type: "GET",
        url: `https://newsapi.org/v2/everything?q=${value}&sortBy=parpularity&apiKey=${vm.apiKey}`,
        dataType: "JSON",
        success: function (response) {
          vm.newsData = [];
          vm.newsData = [...response.articles];
          for (let i = 0; i < vm.newsData.length; i++) {
            if (vm.newsData[i].urlToImage == null) {
              vm.newsData[i].urlToImage = 'http://fakeimg.pl/440x300/282828/EAE0D0/?text=No Picture';
            }
          }
        }
      });
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

img {
  width: 100%;
}
@media (max-width: 994px) {
  .news-title {
    margin: 10px 0;
  }
}
</style>
