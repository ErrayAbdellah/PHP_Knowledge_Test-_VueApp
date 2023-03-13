<script >
import { ref } from 'vue'

  export default {
  props: {
    questions: {
      type: Array,
      required: true
    }
  }
}

</script>

<template>
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
  </div>
</template>

<style scoped>

</style>
