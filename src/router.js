import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Domaines from './views/Domaines.vue'
import Evolution from './views/Evolution.vue'
import ComparaisonOffre from './views/ComparaisonOffre.vue'
import ComparaisonDemande from './views/ComparaisonDemande.vue'
import Profil from './views/Profil.vue'
// ne pas oublier les vues
Vue.use(Router)

// fonctione avec le composant vue-router voir sur internet la doc
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Domaines',
      name: 'Domaines',
     
      component: Domaines
    }
,
    {
      path: '/Evolution',
      name: 'Evolution',
     
      component: Evolution
    }
,
    {
        path: '/ComparaisonOffre',
        name: 'ComparaisonOffre',

        component: ComparaisonOffre
    }
,
    {
      path: '/ComparaisonDemande',
      name: 'ComparaisonDemande',

      component: ComparaisonDemande
    }
,
    {
      path: '/Profil',
      name: 'Profil',

      component: Profil
    }
  ]
})
