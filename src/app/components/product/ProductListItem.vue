<template>
  <div>
    <h2 class='has-text-weight-bold'>
      <router-link :to="{name:'product',params: {id:productItem.id}}">
        {{ productItem.title }}
      </router-link>

      <span
        class='tag is-primary is-pulled-right has-text-white'
        @click='addCartItem(productItem)'
      >
        Add to Cart
      </span>
    </h2>
    <p>{{ productItem.description }}</p>
    <span class='has-text-primary has-text-weight-bold'>
      <i class='fa fa-usd'></i> {{ productItem.price }}
    </span>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'ProductListItem',
    props: ['productItem'],
    methods: {
      ...mapActions(['addCartItem']),
    },
  }
</script>

<style scoped>
  .tag {
    cursor: pointer;
  }
  h2 a {
    color: #363636;
    text-decoration: none;
  }
</style>
