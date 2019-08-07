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
                @keydown.enter="getYouBikeData(txt, 'text')"
              />
              <div class="input-group-append">
                <button class="btn btn-primary" @click.prevent="getYouBikeData(txt, 'text')">
                  <font-awesome-icon :icon="['fas', 'search']" />
                </button>
              </div>
            </div>
            <hr />
            <div class="input-group mt-1">
              <div class="input-group-prepend">
                <span class="input-group-text">城市</span>
              </div>
              <select class="form-control" id="areaOp" v-model="area">
                <option value>-請選擇城市-</option>
                <option v-for="(item, index) in areaData" :key="index" :value="item">{{ item }}</option>
              </select>
            </div>
            <button class="btn btn-info w-100 mt-3" @click.prevent="setNewestDate()">
              <font-awesome-icon :icon="['fas', 'sync']" />&nbsp;刷新畫面
            </button>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-8">
        <YouBikeList :station-list="stationList"></YouBikeList>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import YouBikeList from '@/components/pages/YouBikeList';
export default {
  components: {
    YouBikeList
  },
  data() {
    return {
      txt: '',
      youBikeData: [],
      area: '',
      areaData: [],
      stationList: [],
      keyWord: '',
      dataIndex: ''
    };
  },
  watch: {
    area: function (value) {
      if (value != '') {
        this.dataIndex = 'area';
        this.keyWord = value;
        this.getStationList(value, this.dataIndex);
      }
    }
  },
  mounted() {
    this.getYouBikeData();
    $('#areaOp').prop('disabled', true);
    setTimeout(function () {
      $('#areaOp').prop('disabled', false);
    }, 3000);
  },
  methods: {
    getYouBikeData(value, index) {
      let vm = this;
      vm.dataIndex = index;
      vm.keyWord = value;
      $.ajax({
        type: "GET",
        url: "https://cors-anywhere.herokuapp.com/data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000352-001",
        dataType: "JSON",
        success: function (response) {
          vm.youBikeData = [...response.result.records];
          vm.getStationList(value, vm.dataIndex);
          if (vm.areaData == '') {
            vm.getAreaData();
          }
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
        vm.stationList = [];
      }
      for (let i = 0; i < vm.youBikeData.length; i++) {
        if (vm.youBikeData[i].sna.indexOf(value) != -1 && index == 'text') {
          vm.stationList.push(vm.youBikeData[i]);
        } else if (vm.youBikeData[i].sarea.indexOf(value) != -1 && index == 'area') {
          vm.stationList.push(vm.youBikeData[i]);
        }
      }
    },
    setNewestDate() {
      let vm = this;
      $.ajax({
        type: "GET",
        url: "https://cors-anywhere.herokuapp.com/data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000352-001",
        dataType: "JSON",
        success: function (response) {
          vm.youBikeData = [];
          vm.youBikeData = [...response.result.records];
          vm.getStationList(vm.keyWord, vm.dataIndex);
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
</style>