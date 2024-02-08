<script lang="ts">
  export default {
    methods: {
      closeMenu() {
        this.$emit('closeMenu');
      }
    }
  }
</script>

<template>
  <h1 class="logo">
    <router-link
      to="/"
      @click="closeMenu"
    >
      Taran Pierce
    </router-link>
  </h1>
</template>

<style>
  .logo {
    line-height: 1;

    a {
      font-weight: bold;
      text-decoration: none;
      color: var(--color-white);
    }
  }
</style>