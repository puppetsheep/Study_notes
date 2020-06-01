<template>
  <div class="hello">
    copy
    <router-link :to="{ name: 'list', params: { userId: '111' }}">1111</router-link>

    <router-link :to="{ name: 'list', params: { userId: '222' }}">2222</router-link>

    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'HelloWorld',
    data() {
      return {
        
      }
    },
    methods: {

    }
  }
</script>
