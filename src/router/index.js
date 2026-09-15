import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MaxiYatzy from '../views/MaxiYatzy.vue'
import StandardYatzy from '../views/StandardYatzy.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/maxi-yatzy',
      name: 'maxi-yatzy',
      component: MaxiYatzy,
    },
    {
      path: '/standard-yatzy',
      name: 'standard-yatzy',
      component: StandardYatzy,
    },
  ],
})

export default router
