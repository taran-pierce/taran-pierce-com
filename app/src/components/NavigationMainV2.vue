<script lang="ts">
  // go ahead and export this in case we put these else where too 
  export const mainLinks = [
    {
      name: 'About',
      href: '/about/',
    },
    {
      name: 'Projects',
      href: '/projects/'
    }
  ];

  export default {
    data() {
      return {
        mainLinks,
      }
    },
    methods: {
      closeMenu() {
        this.$emit('closeMenu');
      }
    },
    props: {
      isOpen: Boolean,
    },
  }
</script>

<template v-slot:prepend>
  <nav>
    
  </nav>
</template>

<style>
 
</style>
