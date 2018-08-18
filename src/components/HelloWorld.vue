<!--<template>-->
  <!--<div class="hello">-->
    <!--<pre>{{content}}</pre>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
  <!--name: 'Hello',-->
  <!--data () {-->
    <!--return {-->
      <!--content: ''-->
    <!--}-->
  <!--},-->
  <!--mounted () {-->
    <!--this.axios.post('http://api.komavideo.com/news/list').then(body => {-->
      <!--this.content = body.data-->
    <!--})-->
  <!--}-->
<!--}-->
<!--</script>-->

<!--&lt;!&ndash; Add "scoped" attribute to limit CSS to this component only &ndash;&gt;-->
<!--<style scoped>-->

<!--</style>-->

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
      message: 'welcome to my vue'
    }
  }
}

</script>
<style scoped>
  h1{
    background-color: aquamarine;
  }
</style>
