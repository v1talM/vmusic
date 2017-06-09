<template lang="html">
  <div class="col-md-2 col-sm-4 hidden-xs left-menu">
    <div class="list-group" id="menus">
      <router-link :to="{name: 'my-favorite'}" class="list-group-item">
        <i class="glyphicon glyphicon-heart"></i>我喜欢的
      </router-link>
      <router-link :to="{name: 'music-list'}" class="list-group-item">
        <i class="glyphicon glyphicon-music"></i>试听列表
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
}


</script>

<style lang="sass">
  .left-menu
    padding: 0
    height: 100%
    background-color: #303030
  .list-group
    padding: 30px 5px
  .left-menu .glyphicon
    margin-right: .75em
  a.list-group-item
    border: 0
    padding: 15px
  a.list-group-item:hover
    background-color: #464545
  a.list-group-item:first-child, a.list-group-item:last-child
    border-radius: 0
</style>
