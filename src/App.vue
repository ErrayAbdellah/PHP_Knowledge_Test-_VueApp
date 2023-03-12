

<template>
  <div >
    <nave/>
  </div>
  <welcome />

  <question/>
</template>

<script>
import nave from './components/nave.vue'
import welcome from './components/welcome.vue'
import info from './components/info.vue'
import stepper from './components/stepper.vue'
import question from './components/question.vue'
import resulte from './components/resulte.vue'
import footer from './components/footer.vue'
export default{
  setup(){
   return {
      
   }
  },
  components:{nave,welcome,info,stepper,question,resulte,footer}
}

</script>
<style scoped>

</style>
