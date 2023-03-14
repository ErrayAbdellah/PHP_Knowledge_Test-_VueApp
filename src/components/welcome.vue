<script >
import { reactive } from 'vue'
export default{
  setup(){

    const welcom = reactive({
      name:"welcom",
    }) 
    
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
					<a href="/question" class="btn but btn-lg text-light" >Get Started</a>
					<div class="mt-4 p-3 prg text-secondary">
						<p>
							A quiz Vue.js website is a web application that allows users to participate in interactive quizzes.
							Users can browse through the available quizzes, answer questions, and receive their scores upon completion.
							The website may also include additional features such as the ability to create and share quizzes, 
							track scores over time, and customize the quiz layout.
						</p>
					</div>
				</div>
				<div class="col-md-6">
					<img src="../assets/logo.jpeg" alt="Welcome Image" class="img-fluid">
				</div>
			</div>
		</div>
		
	</section>
</template>

<style scoped>
.prg{
    background-color: rgb(207, 224, 217);
	box-shadow: 3px 6px  10px rgb(192, 192, 192);
}
.but{
    background-color: rgb(30, 165, 113);
}
</style>
