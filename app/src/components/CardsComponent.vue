<script lang="ts">
  interface CardItem {
    name: string,
    contents: Array<string>,
    featureList: Array<Feature>,
  }

  interface Feature {
    heading: string,
    content: string,
  }

  export default {
    props: {
      cardItems: Array<CardItem>,
    }
  }
</script>

<template>
  <div class="item-list-wrapper">
    <div
      v-for="cardItem in cardItems"
      :key="cardItem.name"
      class="item"
    >
      <h4>{{ cardItem.name }}</h4>
      <p v-for="content in cardItem.contents" :key="content">{{ content }}</p>
      <ul v-if="cardItem.featureList">
        <li v-for="feature in cardItem.featureList" :key="feature.heading">
          <strong>{{ feature.heading }}</strong>
          <span v-if="feature.content"> - {{ feature.content }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
  .item-list-wrapper {
    margin-top: 1rem;
  }

  .item {
    border: 1px solid var(--color-primary-dark);
    padding: 1rem;
    margin-bottom: 1rem;
  }

  @media(min-width: 992px) {
    .item-list-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-top: 1rem;
    }
  }
</style>
