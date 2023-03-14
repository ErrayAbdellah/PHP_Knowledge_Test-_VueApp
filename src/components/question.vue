<script>
import { computed, ref,reactive } from 'vue' ;



export default{

  computed:{
        questions(){
            return this.$store.state.questions
        }
    },
    methods: {
      nextQustion (event,index){
          
          let target = event.currentTarget;
          console.log(this.questions[0].answer);
          if(index===this.questions[this.count].answer){
            target.style.backgroundColor="rgb(110, 247, 124)";
            // q.correct.push(this.count);
      
            // console.log(this.count);
            // console.log("correct = "+q.correct);
          }else{
            target.style.backgroundColor=" rgb(255, 109, 109)";
            // q.incorrect.push(this.count);
            // console.log(this.count);
            // console.log("incorrect = "+q.incorrect);
          }
      
          setTimeout(() => {
            this.count <= 9 ? this.count ++: window.location.href="/resulte";
            target.style.backgroundColor=" rgb(141, 214, 178)";
          }, 1000);
          // console.log(this.count)
      },
      increment(){
          this.count++;
          console.log(this.count)
      }
    },
    
  setup(){
    name: "question"
    const count = ref(0)
    // const questions = questions();
    const q = reactive({
    correct:[],
    incorrect:[],

    })
    const progress = computed(() => {
      let percentage =  Math.round((count.value / 10) * 100);
      return 'width:'+percentage+'%;'
    });
    
    return{
      count,
      progress,
      // nextQustion,
      // increment,

      // questions,
      // questions: 
      //   [
      //       {
      //           "question": "What is Vue JS?",
      //           "options": [
      //               "A backend framework",
      //               "A frontend framework",
      //               "A database management system",
      //               "A programming language"
      //           ],
      //           "answer": "1"
      //       },
      //       {
      //           "question": "What is the Vue instance?",
      //           "options": [
      //               "The entry point of a Vue app",
      //               "The main component of a Vue app",
      //               "A configuration object for a Vue app",
      //               "A JavaScript class for a Vue app"
      //           ],
      //           "answer": "0"
      //       },
      //       {
      //           "question": "What is a Vue component?",
      //           "options": [
      //               "A template for rendering HTML",
      //               "A JavaScript class for managing state",
      //               "A reusable piece of code for rendering HTML",
      //               "A configuration object for a Vue app"
      //           ],
      //           "answer": "2"
      //       },
      //       {
      //           "question": "What is a Vue directive?",
      //           "options": [
      //               "A function that manipulates the DOM",
      //               "A function that manipulates the state",
      //               "A function that handles events",
      //               "A function that renders HTML"
      //           ],
      //           "answer": "0"
      //       },
      //       {
      //           "question": "What is the Vue router?",
      //           "options": [
      //               "A tool for managing HTTP requests",
      //               "A tool for managing browser history",
      //               "A tool for managing database queries",
      //               "A tool for managing network requests"
      //           ],
      //           "answer": "1"
      //       },
      //       {
      //           "question": "What is Vuex in Vue JS?",
      //           "options": [
      //               "A state management pattern and library",
      //               "A router library",
      //               "A form validation library",
      //               "A server-side rendering library"
      //           ],
      //           "answer": "0"
      //       },
      //       {
      //           "question": "What is the difference between props and state in Vue JS?",
      //           "options": [
                    
      //               "Props are used for passing data between parent and child components, while state is used for managing data within a component",
      //               "Props are used for managing data within a component, while state is used for passing data between parent and child components",
      //               "Props and state are two different names for the same thing",
      //               "Props and state are both used for managing data within a component"
      //           ],
      //           "answer": "0"
      //       },
      //       {
      //           "question": "What is a computed property in Vue JS?",
      //           "options": [
      //               "A property that is calculated based on other properties",
      //               "A property that is set in the Vue instance",
      //               "A property that is used to define the template of a component",
      //               "A property that is used to define a method in a component"
      //           ],
      //           "answer": "0"
      //       },
      //       {
      //           "question": "What is the difference between v-bind and v-model in Vue JS?",
      //           "options": [
      //               "v-bind is used for one-way data binding, while v-model is used for two-way data binding",
      //               "v-bind is used for two-way data binding, while v-model is used for one-way data binding",
      //               "v-bind and v-model are two different names for the same thing",
      //               "v-bind and v-model are both used for managing data within a component"
      //           ],
      //           "answer": "0"
      //       },
      //       {
      //           "question": "What is a lifecycle hook in Vue JS?",
      //           "options": [
      //           "A function that is called when a component is created, updated, or destroyed",
      //           "A function that is called when an HTTP request is made",
      //           "A function that is called when a user clicks on a button",
      //           "A function that is called when a form is submitted"
      //           ],
      //           "answer": "0"
      //       },
      //       {
      //           "question": "What is the difference between methods and computed properties in Vue JS?",
      //           "options": [
      //           "Methods are used for performing actions, while computed properties are used for calculating values",
      //           "Methods are used for calculating values, while computed properties are used for performing actions",
      //           "Methods and computed properties are two different names for the same thing",
      //           "Methods and computed properties are both used for calculating values"
      //           ],
      //           "answer": "0"
      //       },
      //       {
      //           "question": "What is the v-for directive in Vue JS?",
      //           "options": [
      //           "A directive for rendering HTML based on a list of items",
      //           "A directive for creating a loop in JavaScript",
      //           "A directive for defining a component's template",
      //           "A directive for binding data to a form input"
      //           ],
      //           "answer": "0"
      //       },
      //       {
      //           "question": "What is the v-if directive in Vue JS?",
      //           "options": [
      //               "A directive for rendering HTML conditionally",
      //               "A directive for creating a loop in JavaScript",
      //           "A directive for defining a component's template",
      //           "A directive for binding data to a form input"
      //           ],
      //           "answer": "0"
      //       },
      //       {
      //           "question": "What is the v-on directive in Vue JS?",
      //           "options": [
      //           "A directive for binding data to a form input",
      //           "A directive for creating a loop in JavaScript",
      //           "A directive for handling events",
      //           "A directive for defining a component's template"
      //           ],
      //           "answer": "2"
      //       },
      //       {
      //           "question": "What is the difference between a sync modifier and a .sync modifier in Vue JS?",
      //           "options": [
      //               "There is no difference, sync and .sync are two different names for the same thing",
      //           "A sync modifier updates the parent component's data when the child component's data changes, while a .sync modifier updates the child component's data when the parent component's data changes",
      //           "A sync modifier updates the child component's data when the parent component's data changes, while a .sync modifier updates the parent component's data when the child component's data changes",
      //           "A sync modifier and a .sync modifier are both used for updating data between parent and child components"
      //           ],
      //           "answer": "1"
      //       },
      //       {
      //           "question": "What is the difference between a mixin and an extension in Vue JS?",
      //           "options": [
      //           "A mixin is a way to reuse code across multiple components, while an extension is a way to add functionality to a component",
      //           "A mixin is a way to add functionality to a component, while an extension is a way to reuse code across multiple components",
      //           "A mixin and an extension are two different names for the same thing",
      //           "A mixin and an extension are both used for adding functionality to a component"
      //           ],
      //           "answer": "0"
      //       },
      //       {
      //           "question": "What is the difference between props and events in Vue JS?",
      //           "options": [
      //           "Props are used for passing data from a parent component to a child component, while events are used for passing data from a child component to a parent component",
      //           "Props and events are two different names for the same thing",
      //           "Props and events are both used for passing data between parent and child components",
      //           "Props are used for handling events, while events are used for passing data from a child component to a parent component"
      //           ],
      //           "answer": "0"
      //       },
      //       {
      //           "question": "What is the difference between a global component and a local component in Vue JS?",
      //           "options": [
      //           "A global component is registered globally and can be used in any component, while a local component is registered locally and can only be used in the component where it is registered",
      //           "A global component is registered locally and can only be used in the component where it is registered, while a local component is registered globally and can be used in any component",
      //           "A global component and a local component are two different names for the same thing",
      //           "A global component and a local component are both registered globally and can be used in any component"
      //           ],
      //           "answer": "0"
      //       },
      //       {
      //           "question": "What is the v-show directive in Vue JS?",
      //           "options": [
      //               "A directive for rendering HTML conditionally",
      //               "A directive for creating a loop in JavaScript",
      //               "A directive for defining a component's template",
      //               "A directive for binding data to a form input"
      //           ],
      //           "answer": "0"
      //       },
      //       {
      //           "question": "What is the Vue CLI?",
      //           "options": [
      //               "A command-line interface for building and managing Vue.js projects",
      //               "A graphical user interface for building and managing Vue.js projects",
      //               "A library for building and managing Vue.js projects",
      //               "A plugin for building and managing Vue.js projects"
      //           ],
      //           "answer": "0"
      //       },
      //       {
      //           "question": "What is Vuex in Vue JS?",
      //           "options": [
      //               "A state management pattern and library for Vue.js applications",
      //               "A library for handling HTTP requests in Vue.js applications",
      //               "A library for handling forms in Vue.js applications",
      //               "A plugin for handling events in Vue.js applications"
      //               ],
      //               "answer": "0"
      //       }
      //   ],
        // count:0,
       
    } 
  }

}



</script>

<template>
  <main>
    <section id="questions">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <!-- Stepper -->
						<div class="d-flex justify-content-center my-4">
              <div class="progress w-75">
                <div class="progress-bar progress-bar-striped bg-success" role="progressbar" :style="progress" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">Step 1 of 4</div>
							</div>
						</div>
            
						<!-- Question -->

              <div class="card mb-4 text-center p-1 pb-3" id="qtion">
                <div class="card-body">
                  <h5 class="card-title">Question {{ count+1 }}</h5>
                  <p class="card-text">{{ questions[count].question }}</p>
                  <div class="d-flex justify-content-center flex-wrap">
                    
                    <div class="w-75 mt-3 p-3 btn buton" @click.prevent="nextQustion($event,index)" v-for="(option,index) in questions[count].options" :key="index">
                      <label class="form-check-label"  for="question1-1">
                        {{ option }}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
 
</template>

<style scoped>
#qtion{
  box-shadow: 1px 2px 30px rgb(206, 206, 206);
}
.buton{
  background-color: rgb(141, 214, 178);
  
}
.buton:hover{
  
  background-color: rgb(98, 211, 155);
}
#next-button{
  background-color: aqua;
  color: rgb(255, 109, 109);
}
</style>