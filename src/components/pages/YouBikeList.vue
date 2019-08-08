<template>
  <div>
    <table class="table table-hover">
      <thead class="text-center bg-light">
        <th class="text-left">站名</th>
        <th>是否營運</th>
        <th>可借車輛</th>
        <th>可還車位</th>
      </thead>
      <tbody class="text-center" v-for="(item, index) in stationList" :key="index">
        <tr>
          <td class="text-left">
            <a
              href="#"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              @click.prevent="setStationData(item)"
            >{{ item.sna }}</a>
          </td>
          <td>{{ act[item.act] }}</td>
          <td :class="{'text-danger': item.sbi <= 5}">{{ item.sbi }}</td>
          <td :class="{'text-danger': item.bemp <= 5}">{{ item.bemp }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title ml-auto" id="exampleModalCenterTitle">
              ({{ stationArea }})
              {{ stationLocation }}
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div id="map"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  props: ['stationList'],
  data() {
    return {
      stationArea: '',
      stationLocation: '',
      act: ['暫停營運', '營運中']
    }
  },
  methods: {
    setStationData(station) {
      let vm = this;
      vm.stationArea = station.sarea;
      vm.stationLocation = station.ar;
      vm.initMap(station.lat, station.lng);
    },
    initMap(myLat, myLng) {
      let vm = this;
      let uluru = { lat: parseFloat(myLat), lng: parseFloat(myLng) };
      vm.$map = new google.maps.Map(document.getElementById('map'), {
        center: uluru,
        zoom: 20
      });
      vm.$marker = new google.maps.Marker({ position: uluru, map: vm.$map });
    }
  }
}
</script>

<style lang="scss" scoped>
#map {
  height: 400px; /* The height is 400 pixels */
  width: 100%; /* The width is the width of the web page */
}

.w-30 {
  width: 30%;
}

.w-20 {
  width: 20%;
}

.css_table {
  display: table;

  .css_thead {
    display: table-header-group;
    font-weight: 600;
    border: 1px solid black;
  }

  .css_tr {
    display: table-row;
  }

  .css_tbody {
    display: table-row-group;
  }

  .css_td {
    display: table-cell;
  }
}
</style>