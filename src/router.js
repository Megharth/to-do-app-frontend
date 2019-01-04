import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Signup from './views/Signup'
import Dashboard from './views/Dashboard'
import Notes from './views/Notes'
import store from './store'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Signup
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: (destination, source, next) => {
        if(destination.name === "dashboard"){
          if(store.state.user.token === "")
            next(false)
          else
            next()
        }
      }
    },
    {
      path: '/notes',
      name: 'notes',
      component: Notes
    }
  ]
})
