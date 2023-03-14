<script>
import { computed, ref,reactive } from 'vue' ;



export default{

  computed:{
        questions(){
            return this.$store.state.questions
        },
    },
    LengthQuestions(){
      return this.$store.state.questions.length
    },
    methods: {
      nextQuestion(event, index) {
        let target = event.currentTarget;
        const isCorrect = index == this.questions[this.count].answer;
        target.style.backgroundColor = isCorrect ? "rgb(110, 247, 124)" : "rgb(255, 109, 109)";
        isCorrect ? this.$store.commit('correct',this.count) : this.$store.commit('incorrect',this.count);
        // console.log(''+isCorrect)
        setTimeout(() => {
          this.count <= 9 ? this.count++ : window.location.href="/resulte";
          target.style.backgroundColor="rgb(141, 214, 178)";
        }, 1000);
      },

      
      // nextQustion (event,index){
          
      //     let target = event.currentTarget;
      //     console.log(this.questions[0].answer);
      //     console.log(index);
      //     if(index==this.questions[this.count].answer){
      //       target.style.backgroundColor="rgb(110, 247, 124)";
      //       this.$store.state.correct.push(this.count);
      
      //       // console.log(this.count);
      //       console.log("correct = "+this.$store.state.correct);
      //     }else{
      //       target.style.backgroundColor=" rgb(255, 109, 109)";
      //       this.$store.state.incorrect.push(this.count);
      //       // console.log(this.count);
      //       console.log("incorrect = "+this.$store.state.incorrect);
      //     }
      
      //     setTimeout(() => {
      //       this.count <= 9 ? this.count ++: window.location.href="/resulte";
      //       target.style.backgroundColor=" rgb(141, 214, 178)";
      //     }, 1000);
      // },
      increment(){
          this.count++;
          console.log(this.count)
      }
    },
    
  setup(){
    name: "question"
    const count = ref(0)
    
    
    const progress = computed(() => {
      let percentage =  Math.round((count.value / 10) * 100);
      return 'width:'+percentage+'%;'
    });
    
    return{
      count,
      progress,
      
      
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
                <div class="progress-bar progress-bar-striped bg-success" role="progressbar" :style="progress" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">Step {{ count+1 }} of 11</div>
							</div>
						</div>
            
						<!-- Question -->

              <div class="card mb-4 text-center p-1 pb-3" id="qtion">
                <div class="card-body">
                  <h5 class="card-title">Question {{ count+1 }}</h5>
                  <p class="card-text">{{ questions[count].question }}</p>
                  <div class="d-flex justify-content-center flex-wrap">
                    
                    <div class="w-75 mt-3 p-3 btn buton" @click.prevent="nextQuestion($event,index)" v-for="(option,index) in questions[count].options" :key="index">
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