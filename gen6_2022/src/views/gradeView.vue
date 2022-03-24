<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-row>
            <v-col cols="12">
              <h1>Score</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                name="score"
                label="input score"
                id="score"
                type="number"
                v-model="score"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <!-- <v-btn color="success" @click="show = !show">Calculate Grade</v-btn> -->
            </v-col>
          </v-row>
          <v-btn color="success" @click="calGrade(score)">grade</v-btn>
          <v-row>
            <v-col cols="12">
              <!-- <h1 v-if="show">{{score}}</h1> -->
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <h1>{{grade}}</h1>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      score: '',
      show: false,
      grade: ''
    }
  },
  methods: {
    calGrade (score) {
      console.log(score)
      if (score > 100) {
        alert('Input less than 100')
      } else if (score < 0) {
        alert('Input more than 0')
      } else if (score <= 49) {
        this.grade = 'F'
      } else if (score <= 59) {
        this.grade = 'D'
      } else if (score <= 69) {
        this.grade = 'C'
      } else if (score <= 79) {
        this.grade = 'B'
      } else {
        this.grade = 'A'
      }
      return this.grade
    }
  }
}
</script>
