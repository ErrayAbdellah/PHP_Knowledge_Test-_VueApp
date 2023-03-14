 <script >
// import { ref } from 'vue'

//   export default {
//     questions: 
//         [
//             {
//                 "question": "What is Vue JS?",
//                 "options": [
//                     "A backend framework",
//                     "A frontend framework",
//                     "A database management system",
//                     "A programming language"
//                 ],
//                 "answer": "1"
//             },
//             {
//                 "question": "What is the Vue instance?",
//                 "options": [
//                     "The entry point of a Vue app",
//                     "The main component of a Vue app",
//                     "A configuration object for a Vue app",
//                     "A JavaScript class for a Vue app"
//                 ],
//                 "answer": "0"
//             },
//             {
//                 "question": "What is a Vue component?",
//                 "options": [
//                     "A template for rendering HTML",
//                     "A JavaScript class for managing state",
//                     "A reusable piece of code for rendering HTML",
//                     "A configuration object for a Vue app"
//                 ],
//                 "answer": "2"
//             },
//             {
//                 "question": "What is a Vue directive?",
//                 "options": [
//                     "A function that manipulates the DOM",
//                     "A function that manipulates the state",
//                     "A function that handles events",
//                     "A function that renders HTML"
//                 ],
//                 "answer": "0"
//             },
//             {
//                 "question": "What is the Vue router?",
//                 "options": [
//                     "A tool for managing HTTP requests",
//                     "A tool for managing browser history",
//                     "A tool for managing database queries",
//                     "A tool for managing network requests"
//                 ],
//                 "answer": "1"
//             },
//             {
//                 "question": "What is Vuex in Vue JS?",
//                 "options": [
//                     "A state management pattern and library",
//                     "A router library",
//                     "A form validation library",
//                     "A server-side rendering library"
//                 ],
//                 "answer": "0"
//             },
//             {
//                 "question": "What is the difference between props and state in Vue JS?",
//                 "options": [
                    
//                     "Props are used for passing data between parent and child components, while state is used for managing data within a component",
//                     "Props are used for managing data within a component, while state is used for passing data between parent and child components",
//                     "Props and state are two different names for the same thing",
//                     "Props and state are both used for managing data within a component"
//                 ],
//                 "answer": "0"
//             },
//             {
//                 "question": "What is a computed property in Vue JS?",
//                 "options": [
//                     "A property that is calculated based on other properties",
//                     "A property that is set in the Vue instance",
//                     "A property that is used to define the template of a component",
//                     "A property that is used to define a method in a component"
//                 ],
//                 "answer": "0"
//             },
//             {
//                 "question": "What is the difference between v-bind and v-model in Vue JS?",
//                 "options": [
//                     "v-bind is used for one-way data binding, while v-model is used for two-way data binding",
//                     "v-bind is used for two-way data binding, while v-model is used for one-way data binding",
//                     "v-bind and v-model are two different names for the same thing",
//                     "v-bind and v-model are both used for managing data within a component"
//                 ],
//                 "answer": "0"
//             },
//             {
//                 "question": "What is a lifecycle hook in Vue JS?",
//                 "options": [
//                 "A function that is called when a component is created, updated, or destroyed",
//                 "A function that is called when an HTTP request is made",
//                 "A function that is called when a user clicks on a button",
//                 "A function that is called when a form is submitted"
//                 ],
//                 "answer": "0"
//             },
//         ],
//         // 
//   }
export default{

    computed:{
        questions(){
            return this.$store.state.questions
        }
    },
    setup(){
        return{
            // questions
            
        }
    }
}


</script> 

<template>
  <!-- <div class="container">
    <h1>Quiz Results</h1>
    <hr>
    <div v-for="(question, index) in questions" :key="index">
      <h4>{{ question.question }}</h4>
      <ul class="list-group">
        <li v-for="(answer, answerIndex) in question.answers" :key="answerIndex" class="list-group-item d-flex justify-content-between align-items-center" :class="{ 'list-group-item-success': answer.correct, 'list-group-item-danger': !answer.correct }">
          {{ answer.text }}
          <span v-if="answer.correct" class="badge bg-success rounded-pill"><i class="bi bi-check"></i></span>
          <span v-else-if="!answer.correct && answer.selected" class="badge bg-danger rounded-pill"><i class="bi bi-x"></i></span>
        </li>
      </ul>
    </div>
  </div> -->
  <div>hi</div>
  <!-- <div>{{$store.state.questions    [0].options }}</div> -->
  <div>{{questions[7].answer }}</div>

</template>

<style scoped>

</style>
