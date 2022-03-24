<template>
  <div>
    <h1>This is an about page {{ name }}</h1>
  </div>
</template>

<script>

import { EventBus } from '@/EventBus'

export default ({
  props: ['name'],
  mounted () {
    EventBus.$on('subdisplay', this.subdisplay)
    EventBus.$on('subdisplayparam', this.subdisplayparam)
  },
  methods: {
    subdisplay () {
      alert('From subdisplay')
    },
    subdisplayparam (item) {
      alert('From subdisplay param' + item)
    }
  }
})
</script>
