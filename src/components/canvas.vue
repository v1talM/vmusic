<template lang="html">
    <div class="col-md-2 hidden-sm hidden-xs" id="can">
      <div id="carousel-example-generic" class="carousel slide"  data-ride="carousel" style="height:100%">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner"  role="listbox" style="height:100%">
          <div class="item active" data-interval="5000" style="height:100%">
            <img id="logo" src="./../assets/poster/banner_1.jpg" alt="...">
          </div>
          <div class="item" data-interval="5000" style="height:100%">
            <img id="logo" src="./../assets/poster/banner_2.jpg" alt="...">
          </div>
          <div class="item" data-interval="5000" style="height:100%">
            <img id="logo" src="./../assets/poster/banner_3.jpg" alt="...">
          </div>
        </div>

      </div>
    </div>
</template>
<style lang="css">
  #can{
    height: 100%;
    padding: 0;
  }
  #logo{
    margin:0 auto;
    display: block;
    margin-top: 150px;
    filter: gray;
  }
</style>
<script>
var $ = window.$ = window.jQuery = require('jquery')
require('./../assets/js/bootstrap.js')
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      musicStore: state => state.musicStore
    })
  }
}
</script>
