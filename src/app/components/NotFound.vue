<template>
  <div class="has-text-centered">
    <h1 class="title">Sorry. Page Not Found :(</h1>
    <button>
      <router-link to='/' >Go Home</router-link>
    </button>
  </div>
</template>
<script>
  export default {
    name: 'NotFound',
  }
</script>
<style scoped>


button {
  padding: 10px 20px;
  background-color: #363636;
  border-radius: 5px;
  cursor: pointer;
}
button a {
  color: white;
  text-decoration: none;
}
</style>
