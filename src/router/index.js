import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/auth/Login.vue'
const routes = [
  {
    path: '/',
    component: () => import('@/views/layout/Layout'),
    children: [
      {
        name: 'Dashboard',
        path: '',
        component: () => import('@/views/layout/Dashboard')
      }
    ]
  },
  /* 
  * Login
  * NotFOund
  */
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      public: true,
      onlyWhenLoggedOut: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// TokenService
import { TokenService } from '@/store/storage.service'

router.beforeResolve((to, from, next) => {
  // Check if page isPublic or not
  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = !!TokenService.getToken()
  if(!loggedIn && !isPublic && to.name !== 'login') {
    return next({
          path: '/login',
        }
    )
  }
  if(loggedIn && onlyWhenLoggedOut) {
    return next('/')
  }
  next()
})

export default router
