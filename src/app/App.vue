<template>
  <div id="app">
    <div class="navigation-buttons" v-if="$route.path !== '/login' && isAuthenticated">
      <button @click="logout" class="button is-text is-pulled-left">
        Logout
      </button>
      <div class="is-pulled-right">
        <router-link :to="{name: 'products'}" class="button">
          <i class="fa fa-user-circle"></i><span>Shop</span>
        </router-link>
        <router-link :to="{name: 'cart'}" class="button is-primary">
          <i class="fa fa-shopping-cart"></i><span>{{ cartQuantity }}</span>
        </router-link>
      </div>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-6 column--align-center">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'App',
    created() {
      // get token from local storage
      const token = localStorage.getItem('token');
      if (token) {
        this.updateInitialState(token);
      }
    },
    computed: {
      ...mapGetters(['cartQuantity','token','isAuthenticated']),
    },
    methods: {
     async logout() {
       try {
          await this.$store.dispatch('logout');
          this.$router.push({name: 'login'});
        } catch (error) {
          console.log(error);
       }
      },
      updateInitialState(token) {
        this.$store.dispatch('getProductItems',token)
        this.$store.dispatch('getCartItems',token)
      }
    },
    watch: {
      token() {
        if (this.token) {
          this.updateInitialState(this.token);
        }
      }
    }
  }
</script>

<style>
  html,
  body {
    height: 100%;
    background: #f2f6fa;
  }

  #app {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .column--align-center {
    margin: 0 auto;
  }

  .navigation-buttons {
    position: absolute;
    top: 5px;
    width: 99%;
    z-index: 99;
  }

  .navigation-buttons .button {
    margin: 0 2px;
  }

  .navigation-buttons .button .fa {
    padding-right: 5px;
  }
</style>
