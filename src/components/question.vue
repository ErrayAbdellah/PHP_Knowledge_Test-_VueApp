<script>
import { ref } from 'vue'
export default{
  setup(){
    name: "question"
    return{
      msg:"hello"
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
                <div class="progress-bar progress-bar-striped bg-primary" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Step 1 of 4</div>
							</div>
						</div>
            
						<!-- Question -->
						<div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">Question 1</h5>
								<p class="card-text">What is the capital of France?</p>
								<div class="form-check">
                  <input class="form-check-input" type="radio" name="question1" id="question1-1" value="option1">
									<label class="form-check-label" for="question1-1">
                    Paris
									</label>
								</div>
								<div class="form-check">
                  <input class="form-check-input" type="radio" name="question1" id="question1-2" value="option2">
									<label class="form-check-label" for="question1-2">
                    Madrid
									</label>
								</div>
								<div class="form-check">
									<input class="form-check-input" type="radio" name="question1" id="question1-3" value="option3">
                  <label class="form-check-label" for="question1-3">
                    Rome
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="question1" id="question1-4" value="option4">
                  <label class="form-check-label" for="question1-4">
                    London
                  </label>
                </div>
              </div>
            </div>
            <!-- Navigation Buttons -->
            <div class="d-flex justify-content-between my-4">
              <button class="btn btn-primary" disabled>Previous</button>
              <button class="btn btn-primary" id="next-button">Next</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
 
</template>

<style scoped>

</style>