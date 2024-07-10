import {
  createRouter,
  createWebHistory,
} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import HomeV2View from '../views/NewHomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProjectsView from '../views/projects/ProjectsIndexView.vue';
import CaddoLakeView from '../views/projects/CaddoLakeView.vue';
import TaranItUpView from '../views/projects/TaranItUpView.vue';
import TaranPierceView from '../views/projects/TaranPierceView.vue';
import PhotosViewVue from '../views/projects/PhotosView.vue';
import LKDWViewVue from '../views/projects/LKDWView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/v2',
      name: 'home v2',
      component: HomeV2View,
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
    {
      path: '/projects/photos',
      name: '/projects/photos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/projects/TaranPierceView.vue')
      component: PhotosViewVue,
    },
    {
      path: '/projects/lkdw',
      name: '/projects/lkdw',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/projects/TaranPierceView.vue')
      component: LKDWViewVue,
    },
    {
      name: 'NotFound',
      path: '/:pathMatch(.*)*',
      redirect: '/',
    }
  ]
})

export default router;
