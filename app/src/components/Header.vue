<template>
  <header>
    <div class="nav-toggle-wrapper">
      <h1 class="logo">
        <router-link
          to="/"
          @click="closeMenu"
        >
          Taran Pierce
        </router-link>
      </h1>
      <button
        type="button"
        @click="toggleMenu"
        :class="{ isHidden: isDesktop() >= 992}"
      >Menu</button>
    </div>
    <nav :class="{ isOpen: isOpen }">
      <ul>
        <li>
          <router-link
            to="/"
            @click="closeMenu"
          >Home</router-link>
        </li>
        <li>
          <router-link
            to="/about/"
            @click="closeMenu"
          >About</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
  header {
    background-color: var(--color-primary-dark);
    color: var(--color-white);
    overflow: hidden;
  }

  .logo {
    line-height: 1;

    a {
      font-weight: bold;
      text-decoration: none;
      color: var(--color-white);
    }
  }

  .nav-toggle-wrapper {
    padding: 2rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  nav {
    visibility: hidden;
    max-height: 0;
    transition: all .4s ease-out;
    border-top: 1px solid var(--color-white);

    ul {
      list-style-type: none;
      padding-left: 0;

      a {
        display: block;
        color: var(--color-white);
        font-weight: bold;
        text-decoration: none;
        padding: 2rem 1.5rem;
        transition: all .6s ease-out;
        position: relative;
        left: 100vh;

        &:hover,
        &:focus {
          background-color: var(--color-primary-light);
          color: var(--color-text);
        }
      }
    }
  }

  .isOpen {
    visibility: visible;
    max-height: 1000px;
    transition: all .4s ease-out;

    a {
      transition: all .6s ease-out;
      left: 0;
    }
  }

  .isHidden {
    display: none;
  }

  @media(min-width: 992px) {
    header {
      display: grid;
      grid-template-columns: 2fr 1fr;
    }

    nav {
      border-top: 0;
      max-height: 1000px;
      visibility: visible;

      ul {
        display: grid;
        grid-template-columns: auto auto;

        a {
          line-height: 2;
          left: 0;
        }
      }
    }

    .nav-toggle-wrapper {
      display: block;
    }
  }
</style>

<script lang="ts">
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
      }
    }
  }
</script>
