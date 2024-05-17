import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../components/product/ProductList.vue'
import ProductItem from '../components/product/ProductItem.vue'
import CartList from '../components/cart/CartList.vue'
import LoginBox from '../components/auth/LoginBox.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/products',
    name: 'products',
    component: ProductList,
  },
  {
    path: '/products/:id', // Add a dynamic segment to the path
    name: 'product',
    component: ProductItem,
    props: true, // Pass route params as props to the component
    beforeEnter: (to, from, next) => {
      const id = Number(to.params.id);
      // Redirect to not-found page if id is not in the list
      if (![1,2,3,4].includes(id)) next({ name: 'not-found' })
      else next()
    }

  },
  {
    path: '/cart',
    name: 'cart',
    component: CartList,
  },
  {
    path: '/',
    redirect: '/products',
  },
  {
    path: '/login',
    name: 'login',
    component: LoginBox,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('token')
      // Redirect to home page if authenticated
      if (isAuthenticated) next({ name: 'products' })
      else next()
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token')
  // Redirect to login page if not authenticated and trying to access a restricted page
  if (to.name !== 'login' && !isAuthenticated) next({ name: 'login' })
  else next()

})
export default router
