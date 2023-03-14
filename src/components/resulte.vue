<template>
  <div>
    <h2>Results</h2>
    <p>Correct: {{ correct.length }}</p>
    <p>Incorrect: {{ incorrect.length }}</p>
    <ul>
      <li v-for="(question, index) in questions" :key="index">
        {{ question.question }} - 
        <template v-if="correct.includes(index)">
          <span style="color: green;">Correct</span>
        </template>
        <template v-else>
          <span style="color: red;">Incorrect</span>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  computed: {
    questions() {
      return this.$store.state.questions
    },
    correct() {
      return this.$store.state.correct
    },
    incorrect() {
      return this.$store.state.incorrect
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('fetchData').then(() => {
      next();
    }).catch((err) => {
      console.log(err);
      next(false);
    });
  }
}




// export default {
  
//   computed: {
//     questions() {
//       return this.$store.state.questions
//     },
//     correct() {
//       return this.$store.state.correct
//     },
//     incorrect() {
//       return this.$store.state.incorrect
//     }
//   }
// }
</script>
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 <!-- <script >

export default{

    computed:{
        questions(){
            return this.$store.state.questions
        },
    },
    setup(){
        return{
            // questions
            
        }
    }
}


</script>  -->

<!-- <template>
  <div class="container">
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
  <!-- <div>hi</div> -->
  <!-- <div>{{$store.state.questions    [0].options }}</div> -->
  <!-- <div>{{questions[7].answer }}</div>
  <div>{{$store.state.correct }}</div> 

</template>

<style scoped>

</style>-->
