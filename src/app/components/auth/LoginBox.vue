<template>
  <div id='login' class='box has-text-centered'>
    <h2 class='title'>Fullstack Clothing</h2>
    <button :class="[{'is-loading': isLoading}, 'button is-primary']" @click='login'>Login
    </button>
  </div>

</template>


<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'LoginBox',
    computed: {
      ...mapGetters([
        'isLoading',
      ]),
    },

    methods: {
      async login() {
        console.log('handle login')
        await this.$store.dispatch('login')
        this.$router.push({ name: 'products' })
      },
    },
  }
</script>


<style scoped>
  .box {
    padding: 30px;
  }

</style>