import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../components/product/ProductList.vue'
import CartList from '../components/cart/CartList.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/products',
    component: ProductList,
  },
  {
    path: '/cart',
    component: CartList,
  },
  {
    path: '/',
    redirect: '/products',
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
