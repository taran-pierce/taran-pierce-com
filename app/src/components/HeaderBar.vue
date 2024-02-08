<script lang="ts">
  import NavigationMain from './NavigationMain.vue';
  import LogoBlock from './LogoBlock.vue';

  export default {
    data() {
      return {
        isOpen: false,
        isDesktop: () => {
          return window && window.innerWidth;
        },
      }
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      },
      closeMenu() {
        this.isOpen = false;
      },
    },
    components:  {
      NavigationMain,
      LogoBlock,
    },
  }
</script>

<template>
  <header>
    <div class="header-container">
      <div class="nav-toggle-wrapper">
        <LogoBlock @closeMenu="closeMenu" />
        <button
          type="button"
          @click="toggleMenu"
          class="menu-toggle"
        >Menu</button>
      </div>
      <!-- @blah="method" - allows you to pass events up from children -->
      <!-- like setting the menu to open/close -->
      <NavigationMain :isOpen="isOpen" @closeMenu="closeMenu" />
    </div>
  </header>
</template>

<style>
  header {
    background-color: var(--color-primary-dark);
    color: var(--color-white);
    overflow: hidden;
  }

  .nav-toggle-wrapper {
    padding: 2rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  @media(min-width: 992px) {
    header {
      display: block;

      .header-container {
        display: grid;
        grid-template-columns: 2fr 1fr;
        max-width: 960px;
        margin: 0 auto;
      }
    }

    .menu-toggle {
      display: none;
    }

    .nav-toggle-wrapper {
      display: block;
      padding-left: 0;
    }
  }
</style>
