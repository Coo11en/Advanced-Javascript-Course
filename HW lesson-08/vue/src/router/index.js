import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Catalog from '../views/Catalog.vue'
import Cart from '../views/Cart.vue'
import Product from '../views/Product.vue'
import Registration from '../views/Registration.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
