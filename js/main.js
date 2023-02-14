// import always goes at the top
import LogInPage from "./modules/LoginPage.js";
import HomePage from "./modules/HomePage.js";
import ErrorPage from "./modules/ErrorPage.js";

const {createApp} = Vue;
// import the createApp method from the Vue library

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        // name of the route/path in teh object
        // the new router will try to match theses routes
        // this is what you put in the location bar in the browser
        // when you get a match, vue will render the specified component
        // into the router-view in index.html
        { path: '/', name: 'login', component: LogInPage },
        { 
            path: '/home', //browser location looks like thos
            name: 'home', //for porgrammatic navigation
            component: HomePage //the compinent to the router
        },
        // palce a catacth all for broken routes at the very bottom of your routes stack
        // built in method path from library
        // if Vue Router cant match a give route, it'll display a generic error componnent
        { path: '/:pathMatch(.*)*', name: 'error', component: ErrorPage }
    ] // short for `routes: routes`
  })
  
  // 5. Create and mount the root instance.
  const app = Vue.createApp({
    methods: {
        tryRouterPush() {
            // programatic routing
            this.$router.push({
                // referring to the name of the route you want to use
                name: 'home'
            })
        }
    }
  })
  // Make sure to _use_ the router instance to make the
  // whole app router-aware.
  app.use(router)
  
  app.mount('#app')