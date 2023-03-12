<script >
import { ref } from 'vue'
export default{
  setup(){
    name: "result"
    return{
      msg:"hello"
    }
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>

</style>
