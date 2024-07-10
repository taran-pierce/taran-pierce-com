<script lang="ts">
  import NavigationMain from './NavigationMainV2.vue';
  import LogoBlock from './LogoBlock.vue';

  export default {
    data() {
      return {
        isOpen: false,
      }
    },
    mounted() {
      window.addEventListener('resize', this.debounce(this.watchResize));
    },
    unmounted() {
      window.removeEventListener('resize', this.debounce(this.watchResize));
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      },
      closeMenu() {
        this.isOpen = false;
      },
      openMenu() {
        this.isOpen = true;
      },
      watchResize() {
        const isDesktop = this.isDesktop();

        if (isDesktop) {
          this.openMenu();
        }

        if (!isDesktop) {
          this.closeMenu();
        }
      },
      isDesktop() {
        return window && window.innerWidth >= 992;
      },
      debounce(func: any) {
        let timer: typeof func;

        return function(event: any) {
          if (timer) {
            clearTimeout(timer);
          }
          timer = setTimeout(func, 100, event);
        }
      }
    },
    components:  {
      NavigationMain,
      LogoBlock,
    },
  }
</script>

<template>
  <header>
    <v-container>
      <v-row>
        <v-col>
          <LogoBlock />
        </v-col>
        <v-col>
          <NavigationMain />
        </v-col>
      </v-row>
    </v-container>
  </header>
</template>

<style>
 
</style>
