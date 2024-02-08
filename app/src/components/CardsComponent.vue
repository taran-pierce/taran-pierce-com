<script lang="ts">
  import CardItem from './CardItem.vue';

  interface Cards {
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
      cardItems: Array<Cards>,
    },
    components: {
      CardItem,
    }
  }
</script>

<template>
  <div class="item-list-wrapper">
    <CardItem
      v-for="cardItem in cardItems"
      :key="cardItem.name"
      :cardItem="cardItem"
    />
  </div>
</template>

<style>
  .item-list-wrapper {
    margin-top: 1rem;
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
