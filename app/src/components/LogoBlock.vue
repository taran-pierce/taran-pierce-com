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
      line-height: 1.8;
      color: var(--color-white);
    }
  }

  @media(min-width: 992px) {
    .logo {
      line-height: .9;
    }
  }
</style>