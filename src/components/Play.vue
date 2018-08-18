<template>
  <div>
    <h1>球员页面</h1>
    <p>{{  detail }}</p>
  </div>
</template>

<script>
export default {
  name: 'Play',
  data () {
    return {
      detail: {}
    }
  },
  mounted () {
    this.detail = this.getPlayer(this.$route.params.uid)
  },
  beforeRouteUpdate (to, from, next) {
    this.detail = this.getPlayer(to.params.uid)
    next()
  },
  methods: {
    getPlayer (uid) {
      switch (uid) {
        case '1':
          return { uid: 1, name: '乔晶晶', point: 26 }
        case '2' :
          return { uid: 1, name: '乔娇', point: 26 }
        default:
          return {uid: -1}
      }
    }
  }
}
</script>
