<template>
  <div v-if="!loading" class="container">
    <homeComponent />
  </div>
</template>

<script>
import homeComponent from '@/components/home'

export default {
  name: 'Home-view',
  props: {
  },
  components: {
    homeComponent
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
}
</style>
