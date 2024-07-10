<script setup lang="ts">
  import {
    RouterView,
  } from 'vue-router';
  import PageLayout from './layouts/PageLayoutV2.vue';
</script>

<template>
  <v-app>
    <v-main>
      <PageLayout>
        <router-view v-slot="{Component}">
          <transition name="slide" mode="out-in">
            <component :is="Component" :key="$route.path"></component>
          </transition>
        </router-view>
      </PageLayout>
    </v-main>
  </v-app>
</template>

<style global lang="scss">
  /* @import '../node_modules/vuetify/dist/vuetify.min.css'; */
  @import '../node_modules//vuetify/dist/vuetify-labs.css';

  /* main {
    opacity: 1;
    transition: opacity 1s;

    &.slide-enter-active,
    &.slide-leave-active {
      transition: opacity .5s, transform .5s;
    }

    &.slide-enter-from,
    &.slide-leave-to {
      opacity: 0;
      transform: translateX(-30%);
      transition: opacity .5s, transform .5s;
    }
  } */
</style>
