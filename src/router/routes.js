import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/home.component.vue'
import Impressum from '@/views/impressum.component.vue'
import FreeGames from '@/views/freeGames.component.vue'
import FuelCalculator from '@/views/fuelcalculator.component.vue'
import Testpage from '@/views/test.component.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: "for gamer",
        description: "Feverest is a site for gamers, with a Free Games API for Steam and Epic Games as well as calculators for Assetto Corsa Competitione and Minecraft!"
      }
    },
    {
      path: '/impressum',
      name: 'Impressum',
      component: Impressum,
      meta: {
        title: "for gamer"
      }
    },
    {
      path: '/project/free_Games',
      name: 'Free-Games',
      component: FreeGames,
      meta: {
        title: "Free Games API",
        description: "This site offers a free api for temporary free games from steam and epic games"
      }
    },
    {
      path: '/project/fuel_calculator',
      name: 'fuel_calculator',
      component: FuelCalculator,
      meta: {
        title: "ACC Fuel Calculator E-Sports",
        description: "With the “Fuel Calculator” you can calculate the perfect balenced required amount of fuel needed in the race of your Sim-Racing game: Assetto Corsa Competitzione, Project Cars, iRacing, and so on."
      }
    },
    {
      path: '/dev',
      name: 'Dev-page',
      component: Testpage
    }
];


const router = new createRouter({
  history: createWebHistory(),
  routes
});
// router.beforeEach((to, from, next) => {
//     document.title = `Feverest - ${to.meta.title || 'for gamer'}`;
//     document.getElementsByTagName('meta')["description"].content = to.meta.description || "Feverest is a site for gamers, with a Free Games API for Steam and Epic Games as well as calculators for Assetto Corsa Competitione and Minecraft!";
//     next();
// });

export default router;