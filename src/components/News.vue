<template>
  <div class="container">
    <h1>{{message}}</h1>
  </div>
</template>

<script>
export default {
  name: 'helloWorld',
  data () {
    return {
      message: 'welcome to my news'
    }
  }
}

</script>
<style scoped>
h1{
  background-color: aquamarine;
}
</style>
