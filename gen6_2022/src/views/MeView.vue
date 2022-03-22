<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="100"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-img
          :src="require('../assets/profile.jpg')"
          class="my-3"
          contain
          height="300"
        />
      </v-col>
      <v-col cols="4">
        <h2>Panyapat Jueaboon (All)</h2>
        <br>
        <v-icon large color="blue-grey darken-2">mdi-source-branch</v-icon> Hatyai, Songkhla Branch
        <br><br>
        <v-icon large color="blue-grey darken-2">mdi-email</v-icon> panyapat.test@gmail.com
        <br><br>
        <v-icon large color="blue-grey darken-2">mdi-cellphone</v-icon>(+66)089-5962839
        <br><br>
        <v-icon large color="blue-grey darken-2">mdi-github</v-icon> github.com/KanashiXI
      </v-col>
      <v-col cols="4">
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-card-text>
            <div class="font-weight-bold ml-8 mb-2">
              Today
            </div>

            <v-timeline
              align-top
              dense
            >
              <v-timeline-item
                v-for="message in messages"
                :key="message.time"
                :color="message.color"
                small
              >
                <div>
                  <div class="font-weight-normal">
                    <strong>{{ message.when }}</strong> <small>{{ message.year}}</small>
                  </div>
                  <div>{{ message.message }}</div>
                  <div>@ {{ message.at }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    messages: [
      {
        when: 'Now',
        year: '2022',
        message: 'Internet Thailand Public Company Limited',
        at: 'Hatyai, Songkhla',
        color: 'deep-purple lighten-1'
      },
      {
        when: 'University',
        year: '2017-2021',
        message: 'Walailak University',
        at: 'Thasala, Nakhonsritummaraj',
        color: 'green'
      },
      {
        when: 'High School',
        year: '2011-2017',
        message: 'Hatyaiwittayalai Somboonkulkanya School',
        at: 'Hatyai, Songkhla',
        color: 'green'
      }
    ]
  })
}
</script>
