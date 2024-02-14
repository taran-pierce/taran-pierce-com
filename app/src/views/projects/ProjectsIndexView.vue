<script setup lang="ts">
  import ContentContainer from '../../components/ContentContainer.vue';
</script>

<template>
  <main>
    <section>
      <ContentContainer>
        <h1>Projects</h1>
        <p>Here are just a few examples of the projects I have worked on over the years. I have built personal sites just to test out different technologies, a business site for guided boat tours on Caddo Lake and over ten years worth of components and landing pages for marketing pages for a web hosting company.</p>
        <ul>
          <li>
            <router-link
              to="/projects/caddo-lake-bayou-tours"
            >Caddo Lake Bayou Tours</router-link>
          </li>
          <li>
            <router-link
              to="/projects/taranitup-com"
            >TaranItUp.com</router-link>
          </li>
          <li>
            <router-link
              to="/projects/taranpierce-com"
            >taranpierce.com</router-link>
          </li>
        </ul>
      </ContentContainer>
    </section>
  </main>
</template>
