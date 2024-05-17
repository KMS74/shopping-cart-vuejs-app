import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../components/product/ProductList.vue'
import CartList from '../components/cart/CartList.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/products',
    name: 'products',
    component: ProductList,
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
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
