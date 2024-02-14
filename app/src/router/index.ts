import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProjectsView from '../views/projects/ProjectsIndexView.vue';
import CaddoLakeView from '../views/projects/CaddoLakeView.vue';
import TaranItUpView from '../views/projects/TaranItUpView.vue';
import TaranPierceView from '../views/projects/TaranPierceView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
      component: AboutView,
    },
    {
      path: '/projects/',
      name: '/projects/',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/projects/ProjectsIndexView.vue')
      component: ProjectsView,
    },
    {
      path: '/projects/caddo-lake-bayou-tours',
      name: '/projects/caddo-lake-bayou-tours',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/projects/CaddoLakeView.vue')
      component: CaddoLakeView,
    },
    {
      path: '/projects/taranitup-com',
      name: '/projects/taranitup-com',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/projects/TaranItUpView.vue')
      component: TaranItUpView,
    },
    {
      path: '/projects/taranpierce-com',
      name: '/projects/taranpierce-com',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/projects/TaranPierceView.vue')
      component: TaranPierceView,
    },
  ]
})

export default router;
