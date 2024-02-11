<script setup lang="ts">
  import ContentContainer from '../components/ContentContainer.vue';
</script>

<template>
  <main>
    <section>
      <ContentContainer>
        <h1>About me</h1>
        <p>I earned my bachelor's in communication design from Texas State University and have been a software engineer for the past twelve years.</p>
        <p>My passion for art and design makes me an outstanding frontend engineer with my attention to detail and enjoyment for making intuitive UIs.</p>
        <p>Music is another passion of mine. I can play the guitar, piano, banjo and the drums. I also have a violin and a harmonica but I'm not sure I would say that I can "play" those as much as I just have them.</p>
      </ContentContainer>
    </section>
    <section>
      <ContentContainer>
        <h2>About the site</h2>
        <p>Probably more interesting than me would be the things about the site. What its made with and how things work.</p>
        <p>This will be updated as things are changed:</p>
        <ul>
          <li>
            <h4>
              <a href="https://vuejs.org/">Vue.js</a>
            </h4>
            <p>Using Vue to create the frontend. I generally use Next.js, so I wanted to see how making a site in Vue would be.</p>
          </li>
          <li>
            <h4>
              <a href="https://github.com/">GitHub</a>
            </h4>
            <p>Repository in GitHub of course but also using their action workflow with Azure for building and deploying.</p>
          </li>
          <li>
            <h4>
              <a href="https://azure.microsoft.com/">Azure</a>
            </h4>
            <p>Building, deploying and hosting the site on Azure. Straight forward process for setting up static web apps.</p>
            <p>I have been really impressed with using Azure so far. Seems a bit easier than using AWS and the preview environments for branches and pull requests rock!</p>
          </li>
          <li>
            <h4>
              <a href="https://vitest.dev/">Vitest</a>
            </h4>
            <p>Unit tests are created with Vitest and it seems pretty similar to Jest.</p>
          </li>
        </ul>
      </ContentContainer>
    </section>
  </main>
</template>

