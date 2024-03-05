<script setup lang="ts">
  import HeaderBar from '../components/HeaderBar.vue';
  import FooterBar from '../components/FooterBar.vue';
</script>

<template>
  <HeaderBar />
  <slot />
  <FooterBar />
</template>
