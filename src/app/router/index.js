import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../components/product/ProductList.vue'
import ProductItem from '../components/product/ProductItem.vue'
import CartList from '../components/cart/CartList.vue'
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
