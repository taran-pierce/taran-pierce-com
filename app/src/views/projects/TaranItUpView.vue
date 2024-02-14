<script setup lang="ts">
  import ContentContainer from '../../components/ContentContainer.vue';

</script>

<template>
  <main>
    <section>
      <ContentContainer>
        <h1>TaranItUp.com</h1>
        <p>Set up with Next.js 10 and React 17, this site is also using cloudinary and contentful but is just a playground for me to mess around with things.</p>
        <p>The main reason I put this site together at the time was because of AWS. I wanted to be able to explore some of their services in a simple low risk area thats not hooked up to so much live production services for anyone.</p>
        <p>Route 53 their dns web service, S3 for storage as this is a static web app and CodeBuild to build and deploy the project.</p>
        <p>Site is still live the dns and deployment have recently been moved to Azure instead of AWS.</p>
        <p>
          <a href="https://www.taranitup.com" target="_blank">taranitup.com</a>
        </p>
      </ContentContainer>
    </section>
  </main>
</template>