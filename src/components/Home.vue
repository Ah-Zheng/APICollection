<template>
  <div class="container">
    <h1 class="text-center py-5 header-title title">共享PaPa造</h1>

    <div class="w-100 mx-auto">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/home_share.jpg" width="100%" height="480" alt />
          </div>
          <div class="carousel-item">
            <iframe
              width="100%"
              height="480"
              src="https://www.youtube.com/embed/Z-se_mPQ9FQ"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="carousel-item">
            <iframe
              width="100%"
              height="480"
              src="https://www.youtube.com/embed/mcAYnijPDqk"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </div>

    <h3 class="text-center pb-3 pt-5 title">網站內容</h3>

    <div class="row">
      <div class="col-12 col-lg-4 my-3">
        <router-link to="/youbike">
          <div class="card">
            <img class="card-img-top" src="../assets/home_youbike.png" alt />
            <div class="card-body">
              <p class="text-center h3 mb-3">YouBike站點查詢</p>
              <p class="text-center">可查詢新北市YouBike站點的即時更新資料</p>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-12 col-lg-4 my-3">
        <router-link to="/news">
          <div class="card">
            <img class="card-img-top" src="../assets/home_news.jpg" alt />
            <div class="card-body">
              <p class="text-center h3 mb-3">相關新聞</p>
              <p class="text-center">共享單車以及共享經濟相關實事新聞</p>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-12 col-lg-4 my-3">
        <router-link to="/photoshare">
          <div class="card">
            <img
              class="card-img-top"
              src="http://fakeimg.pl/640x480/282828/EAE0D0/?text=Phote Share"
              alt
            />
            <div class="card-body">
              <p class="text-center h3 mb-3">圖片分享</p>
              <p class="text-center">腳踏車相關動態圖片以及靜態圖片分享</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  min-height: 92vh;
  background-color: white;
}

.header-title {
  font-size: 3em;
}

a:hover {
  text-decoration: none;
}

.card {
  box-shadow: 3px 3px #ccc;
}

.card:hover {
  opacity: 0.7;
  box-shadow: 5px 5px gray;
}

.title {
  color: rgba(0, 0, 0, 0.6);
  text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
    0px -5px 35px rgba(255, 255, 255, 0.3);
}
</style>