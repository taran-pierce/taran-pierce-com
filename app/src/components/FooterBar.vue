<script setup lang="ts">
  import { ref } from 'vue';
  import ContentContainer from './ContentContainer.vue';

  const date = new Date;

  const year = ref(date.getFullYear());
</script>

<template>
  <footer>
    <ContentContainer>
      <div class="content-wrapper">
        <div>
          Copyright © <span>{{ year }}</span>
        </div>
        <div>
          <a href="https://www.flaticon.com/free-icons/metaverse" target="_blank" title="metaverse icons">Metaverse icons created by Freepik - Flaticon</a>
        </div>
      </div>
    </ContentContainer>
  </footer>
</template>

<style>
  @media(min-width: 992px) {
    .content-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
