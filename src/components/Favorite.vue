<template lang="html">
  <div class="col-md-8 col-sm-8 col-xs-12 singer-container">
    <div class="row">
      <div class="col-md-3 col-sm-6 col-xs-6">
        <router-link :to="{name: 'joker'}" class="singer-panel">
            <div class="singer-avatar">
              <img src="./../assets/poster/joker.jpg" alt="">
            </div>
            <div class="singer-name">
              1. 薛之谦
            </div>
        </router-link>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-6">
        <router-link :to="{name: 'jay-chow'}" class="singer-panel">
            <div class="singer-avatar">
              <img src="./../assets/poster/jay.jpg" alt="">
            </div>
            <div class="singer-name">
              2. 周杰伦
            </div>
        </router-link>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-6">
        <router-link :to="{name: 'G-E-M'}" class="singer-panel">
            <div class="singer-avatar">
              <img src="./../assets/poster/gem.jpg" alt="">
            </div>
            <div class="singer-name">
              3. 邓紫棋
            </div>
        </router-link>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-6">
        <router-link :to="{name: 'Adele'}" class="singer-panel">
            <div class="singer-avatar">
              <img src="./../assets/poster/adele.jpg" alt="">
            </div>
            <div class="singer-name">
              4. Adele
            </div>
        </router-link>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-6">
        <router-link :to="{name: 'Beyond'}" class="singer-panel">
            <div class="singer-avatar">
              <img src="./../assets/poster/beyond.jpg" alt="">
            </div>
            <div class="singer-name">
              5. Beyond
            </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
  .singer-container
    padding-top: 20px
    padding-bottom: 20px
  a.singer-panel
    margin: 10px 0
    display: inline-block
  a.singer-panel , .singer-avatar
    text-decoration: none
    width: 100%
    overflow: hidden
  .singer-avatar img
    -webkit-filter: brightness(.4)
    width: 100%
    transition: all .3s linear
  .singer-avatar img:hover
   transform: scale(1.1)
   -webkit-filter: brightness(1)
  .singer-name
    margin-top: 1em
    text-align: center
</style>
