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

<template>
  <nav
    :class="{ isOpen: isOpen }"
    :aria-expanded="isOpen"
    role="navigation"
    aria-label="Main Navigation"
    id="main-nav"
  >
    <ul>
      <li
        v-for="link in mainLinks"
        :key="link.name"
      >
        <router-link
          :to="link.href"
          @click="closeMenu"
        >{{ link.name }}</router-link>
      </li>
      <!-- <li>
        <router-link
          to="/about/"
          @click="closeMenu"
        >About</router-link>
      </li>
      <li>
        <router-link
          to="/projects/"
          @click="closeMenu"
        >Projects</router-link>
      </li> -->
    </ul>
  </nav>
</template>

<style>
  nav {
    visibility: hidden;
    max-height: 0;
    transition: all .4s ease-out;
    border-top: 1px solid var(--color-white);

    ul {
      list-style-type: none;
      padding-left: 0;

      li {
        padding: 0;
        text-align: center;
      }

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

    .router-link-active {
      background-color: var(--color-primary-light);
      color: var(--color-text);
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

  @media(min-width: 992px) {
    nav {
      border-top: 0;
      max-height: 1000px;
      visibility: visible;

      ul {
        display: grid;
        grid-template-columns: auto auto auto;

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