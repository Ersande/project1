<template>
  <div id="app">
     <message>Hello There</message>
  </div>
</template>

<script>
import Message from './components/Message.vue';
export default {
  name: 'app',
  components : {Message},//component declaration 
  data () {
    return { 
    }
  }
}
</script>

<style>
 
</style>
