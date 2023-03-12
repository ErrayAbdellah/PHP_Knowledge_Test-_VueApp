


<script>
import nave from './components/nave.vue'
import foter from './components/foter.vue'
export default{
  name:"app",
  components:{nave,foter}
}

</script>

<template>
  <nave/>

  <router-view></router-view>

  <foter></foter>
</template>

<style scoped>

</style>
