<template>
  <div class="container">
    <h1 class="text-center my-4">新北YouBike即時查詢</h1>
    <div class="row">
      <div class="col-12 col-lg-4 mb-3">
        <div class="card">
          <div class="card-body">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">搜尋</span>
              </div>
              <input
                type="text"
                class="form-control"
                v-model="txt"
                @keydown.enter="getYouBikeData(txt)"
              />
              <div class="input-group-append">
                <button class="btn btn-primary" @click.prevent="getYouBikeData(txt)">
                  <font-awesome-icon :icon="['fas', 'search']" />
                </button>
              </div>
            </div>
            <hr />
            <div class="input-group mt-1">
              <div class="input-group-prepend">
                <span class="input-group-text">城市</span>
              </div>
              <select class="form-control" v-model="area">
                <option value>-請選擇城市-</option>
                <option v-for="(item, index) in areaData" :key="index" :value="item">{{ item }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-8">
        <YouBikeList :station-list="stationList"></YouBikeList>
      </div>
    </div>
    <a href="#" class="goTop" @click.prevent="goTop()" v-show="isShowGoTop">
      <font-awesome-icon :icon="['fas', 'angle-up']"></font-awesome-icon>
    </a>
  </div>
</template>

<script>
import $ from 'jquery';
import YouBikeList from '@/components/pages/YouBikeList';
import GoTop from '@inotom/vue-go-top';
export default {
  components: {
    YouBikeList,
    GoTop
  },
  data() {
    return {
      txt: '',
      youBikeData: [],
      area: '',
      areaData: [],
      stationList: [],
      isShowGoTop: false
    };
  },
  watch: {
    area: function (value) {
      if (value != '') {
        this.getStationList(value, 'area');
      }
    }
  },
  mounted() {
    this.getYouBikeData();
    this.initGoTop();
  },
  methods: {
    getYouBikeData(value) {
      let vm = this;
      $.ajax({
        type: "GET",
        url: "https://cors-anywhere.herokuapp.com/data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000352-001",
        dataType: "JSON",
        success: function (response) {
          vm.youBikeData = [...response.result.records];
          vm.getStationList(value, 'txt');
          vm.getAreaData();
          vm.txt = '';
        }
      });
    },
    getAreaData() {
      let vm = this;
      for (let i = 0; i < vm.youBikeData.length; i++) {
        vm.areaData[i] = vm.youBikeData[i].sarea;
      }
      vm.areaData = Array.from(new Set(vm.areaData));
    },
    getStationList(value, index) {
      let vm = this;
      if (vm.stationList != []) {
        vm.stationList != [];
      }
      vm.stationList = [];
      for (let i = 0; i < vm.youBikeData.length; i++) {
        if (vm.youBikeData[i].sna.indexOf(value) != -1 && index == 'txt') {
          vm.stationList.push(vm.youBikeData[i]);
        } else if (vm.youBikeData[i].sarea.indexOf(value) != -1 && index == 'area') {
          vm.stationList.push(vm.youBikeData[i]);
        }
      }
    },
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
  color: white;
  text-decoration: none;
  position: fixed;
  right: 50px;
  bottom: 50px;
}
.goTop:hover {
  opacity: 0.6;
}
</style>