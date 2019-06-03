<template>
  <div class="container">
    coucou
  </div>
</template>

<script>

export default {
  name: 'Home-Component',
  props: {
  },
  components: {
  },
  mounted () {
  },
  data () {
    return {
      loading: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/color.scss";
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  font-size: 72px;
}
</style>
