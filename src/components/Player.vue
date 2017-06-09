<template lang="html">
  <audio :src="musicStore.musicSrc" id="myPlayer"></audio>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      musicStore: state => state.musicStore
    })
  }
}
</script>

<style lang="css">
</style>
