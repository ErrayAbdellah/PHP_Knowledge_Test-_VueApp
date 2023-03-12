<script >
import { reactive } from 'vue'
export default{
  setup(){

    const welcom = reactive({
      name:"welcom",
	  startQuestion:function(){
		
	  }
    }) 
    // const name = "welcome"
    return{
      welcom,
    }
  }
}
</script>

<template>	
  <section id="welcome">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<h1>Welcome to the Quiz!</h1>
					<p>Answer the following questions to test your knowledge.</p>
					<a href="#" class="btn btn-primary btn-lg" @click="startQuestion">Get Started</a>
				</div>
				<div class="col-md-6">
					<img src="https://via.placeholder.com/400x400" alt="Welcome Image" class="img-fluid">
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>

</style>
