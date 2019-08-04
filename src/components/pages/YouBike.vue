<template>
  <div class="container">
    <h1 class="text-center">新北YouBike即時查詢</h1>
    <div class="input-group mt-3">
      <div class="input-group-prepend">
        <span class="input-group-text">搜尋</span>
      </div>
      <input type="text" class="form-control" />
      <div class="input-group-append">
        <button class="btn btn-primary">
          <font-awesome-icon :icon="['fas', 'search']" />
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="input-group mt-3">
          <div class="input-group-prepend">
            <span class="input-group-text">城市</span>
          </div>
          <select class="form-control" v-model="area">
            <option value>-請選擇城市-</option>
            <option v-for="(item, index) in areaData" :key="index" :value="item">{{ item }}</option>
          </select>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="input-group mt-3">
          <div class="input-group-prepend">
            <span class="input-group-text">站點</span>
          </div>
          <select class="form-control" v-model="station">
            <option value>-請選擇站點-</option>
            <option v-for="(item, index) in stationData" :key="index" :value="item">{{ item.sna }}</option>
          </select>
        </div>
      </div>
    </div>
    <a class="btn btn-info w-100 my-2" @click="getYouBikeData()" v-show="station != ''">
      <font-awesome-icon :icon="['fas', 'sync-alt']" /> 重新整理
    </a>
    <div class="row no-gutters" v-show="station != ''">
      <div class="col-12 col-md-6">
        <div class="card">
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item d-flex justify-content-between"
            >站名 : {{ station.sna }} ( {{ station.snaen }} )</li>
            <li class="list-group-item">站點代號 : {{ station.sno }}</li>
            <li class="list-group-item">是否營運 : {{ act[station.act] }}</li>
            <li class="list-group-item">城市 : {{ station.sarea }} ( {{ station.sareaen }} )</li>
            <li class="list-group-item">地址 : {{ station.ar }}</li>
            <li class="list-group-item">Address : {{ station.aren }}</li>
            <li class="list-group-item">可借車數 : {{ station.sbi }}</li>
            <li class="list-group-item">可還車空位數 : {{ station.bemp }}</li>
            <li class="list-group-item">總車位數 : {{ station.tot }}</li>
            <li class="list-group-item">更新時間 : {{ Date(station.mday) }}</li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div id="map" class="h-400"></div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  data() {
    return {
      myLat: 0,
      myLng: 0,
      youBikeData: [],
      area: '',
      areaData: [],
      station: '',
      stationData: [],
      act: ['停止營運', '營運中']
    };
  },
  watch: {
    area: function (value) {
      if (value != '') {
        this.getStationData(value);
      } else {
        this.stationData = [];
        this.getStationData();
      }
    },
    station: function (value) {
      if (value != '') {
        this.getData();
      }
    }
  },
  mounted() {
    this.getYouBikeData();
    this.getAreaData();
    this.initMap();
  },
  methods: {
    getYouBikeData() {
      let vm = this;
      $.ajax({
        type: "GET",
        url: "https://cors-anywhere.herokuapp.com/data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000352-001",
        async: false,
        dataType: "JSON",
        success: function (response) {
          vm.youBikeData = [...response.result.records];
          if (vm.station) {
            for (let i = 0; i < vm.youBikeData.length; i++) {
              if (vm.youBikeData[i].sna == vm.station.sna) {
                vm.station = vm.youBikeData[i];
              }
            }
          }
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
    getStationData(value) {
      let vm = this;
      vm.stationData = [];
      for (let i = 0; i < vm.youBikeData.length; i++) {
        if (vm.youBikeData[i].sarea == value) {
          vm.stationData.push(vm.youBikeData[i]);
        }
      }
    },
    getData() {
      let vm = this;
      vm.myLat = parseFloat(vm.station.lat);
      vm.myLng = parseFloat(vm.station.lng);
      vm.initMap();
    },
    initMap() {
      let vm = this;
      let uluru = { lat: vm.myLat, lng: vm.myLng };
      vm.$map = new google.maps.Map(document.getElementById('map'), {
        center: uluru,
        zoom: 18
      });
      vm.$marker = new google.maps.Marker({ position: uluru, map: vm.$map });
    }
  }
}
</script>

<style>
#map {
  margin: 0 auto;
  background: gray;
}
.h-400 {
  height: 490px;
}
.list-group li:nth-child(odd) {
  background-color: #ddffff;
}
.list-group li:nth-child(even) {
  background-color: #ffddff;
}
</style>