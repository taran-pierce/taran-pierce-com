<script lang="ts">
  export default {
    props: {
      cardItem: Object,
    }
  }
</script>

<template>
  <div class="item">
    <h2>{{ cardItem?.name }}</h2>
    <p v-for="content in cardItem?.contents" :key="content">{{ content }}</p>
    <ul v-if="cardItem?.featureList">
      <li v-for="feature in cardItem.featureList" :key="feature.heading">
        <strong>{{ feature.heading }}</strong>
        <span v-if="feature.content"> - {{ feature.content }}</span>
      </li>
    </ul>
  </div>
</template>

<style>
  .item {
    border: 1px solid var(--color-primary-dark);
    padding: 1rem;
    margin-bottom: 1rem;

    h4 {
      background: var(--color-primary-dark);
      color: var(--color-white);
      padding: .5rem;
      margin-bottom: 1rem;
    }
  }

  @media(min-width: 992px) {
    .item {
      background-size: 100%;
      transition: all 2s ease-out;

      &:hover {
        transition: all 1.3s ease-out;
        background: linear-gradient(45deg,  var(--color-secondary), rgba(255,255,255,.3),  var(--color-secondary));
        box-shadow: 0 2px 6px 2px rgba(0,0,0,.5);
        background-size: 300%;
        background-position: 100%;
      }
    }
  }
</style>