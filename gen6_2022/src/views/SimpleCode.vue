<template>
    <div>
        <br>
        <v-btn color="success" @click="show = !show">switch</v-btn>
        <br><br>
        <h1 v-if="show">{{name}}</h1>
        <ul>
            <li v-for="(item, index) in items" :key="index">
                {{ item.message }}
            </li>
        </ul>
        <br>
        <ul>
            <p v-for="(item, index) in namelist" :key="index">
                {{ index + 1 }} ชื่อ: {{ item.name }} // ที่อยู่: {{item.address}} // รายละเอียด: {{item.messagee}}
            </p>
        </ul>
        <br>
        <v-btn color="success" @click="display()">show</v-btn>
        <v-text-field
          name="valueName"
          label="Value Name"
          id="valueName"
          v-model="valueName"
        ></v-text-field>
        <h1>{{valueName}}</h1>
        <v-btn color="success" @click="display2(valueName)">show 2</v-btn>
        <ABOUT :name="name" />
        <v-btn color="success" @click="display3()">show eventBus</v-btn>
        <v-btn color="success" @click="display4(valueName)">show eventBus</v-btn>
    </div>
</template>

<script>

import ABOUT from './AboutView.vue'
import { EventBus } from '@/EventBus'

export default {
  components: {
    ABOUT
  },
  data () {
    return {
      valueName: '',
      name: 'Panyapat',
      show: false,
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      namelist: [
        { name: 'ดำ เอสโซ', address: 'พม่า', messagee: 'แมว' },
        { name: 'แดง โซล่า', address: 'ไทย', messagee: 'หมา' },
        { name: 'เขียว อีแปดห้า', address: 'จีน', messagee: 'กา' },
        { name: 'ฟ้า แบนซิน', address: 'เจแปน', messagee: 'ไก่' }
      ]
    }
  },
  methods: {
    display () {
      alert('Hello from the other side~')
    },
    display2 (item) {
      alert('Helloooo ' + item)
    },
    display3 () {
      EventBus.$emit('subdisplay')
    },
    display4 (item) {
      EventBus.$emit('subdisplayparam', item)
    }
  }
}
</script>
