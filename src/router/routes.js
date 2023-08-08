import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/home.component.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: "for gamer",
        description: "Feverest is a site for gamers, with a Free Games API for Steam and Epic Games as well as calculators for Assetto Corsa Competitione and Minecraft!"
      }
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