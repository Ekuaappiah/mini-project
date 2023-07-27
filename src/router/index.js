import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import Proceed from '../views/Proceed.vue'
import Home from '../views/Home.vue'
import UserProfile from '../views/UserProfile.vue'
import Interest from '../views/Interest.vue'
import Emmanuella from '../views/Profiles/Emmanuella.vue'
import Princess from '../views/Profiles/Princess.vue'


const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/Proceed',
    name: 'Proceed',
    component: Proceed
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile/:id',
    name: 'Interest',
    component: Interest
  },
  {
    path: '/UserProfile',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/Emmanuella-Appiah',
    name: 'Emmanuella',
    component: Emmanuella
  },
  {
    path: '/Princess-Padmore',
    name: 'Princess',
    component: Princess
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
