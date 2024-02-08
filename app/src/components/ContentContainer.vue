<template>
  <div class="container">
    <slot />
  </div>
</template>

<style>
  .container {
    background-color: var(--color-secondary);
    padding: 2rem;
  }

  @media(min-width: 992px) {
    .container {
      margin: 0 auto;
      max-width: 960px;
    }
  }
</style>
