<script lang="ts">
  export default {
    props: {
      cardItem: Object,
    }
  }
</script>

<template>
  <div class="item">
    <h4>{{ cardItem?.name }}</h4>
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
  }
</style>