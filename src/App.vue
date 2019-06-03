<template>
  <div id="app" class="base-background">
    <transition name="pagecomplete" >
      <router-view class="app-content"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {}
  },
  created () {},
  async mounted () {
  },
  watch: {
  },
  computed: {
  },
  methods: {}
}
</script>
<style lang="scss">
@import "@/styles/app.scss";
body {
  background: $background-color;
}

#app {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  .app-navbar {
    height: 64px;
  }
  .app-content {
    padding-top: 40px;
    height: calc(100vh - 64px);
    width: 100vw;
    transition: all .2s;
  }
}
.pagecomplete-active, .pagecomplete-leave-to {
  opacity: 0;
}
.pagecomplete-leave-active, .pagecomplete-leave-active { // AVANT
  opacity: 0;
}
.pagecomplete-enter-active, .pagecomplete-enter-to { // APRES
  opacity: 0;
}
.pagecomplete-move {
  &:not(.pagecomplete-active), &:not(.pagecomplete-leave-to), &:not(.pagecomplete-leave-active), &:not(.pagecomplete-enter-active), &:not(.pagecomplete-enter-to) {
    opacity: .5;
  }
}
</style>
