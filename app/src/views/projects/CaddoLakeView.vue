<script setup lang="ts">
  import ContentContainer from '../../components/ContentContainer.vue';

</script>

<template>
  <main>
    <section>
      <ContentContainer>
        <h1>Caddo Lake Bayou Tours</h1>
        <p>This website is running the latest version of Next.js 14 with React 18. Utlizing scss with css modules for the styling to keep all the styles easily scoped and the files easier to read through.</p>
        <p>There is some typescript throughout but not everything is typed out. The site also uses Cloudinary to store, serve and transform all images that it uses. Some of his clients are photographers and will give him photos to use on his website. Cloudinary makes it convientent to upload images and have it resize them to a smaller file size, change their dimensions and even their format.</p>
        <p>Content for their site is stored on Contentful so that copy updates can be managed separately from the code.</p>
        <p>You can go checkout their site if you would like, it is actively in use: <a href="https://www.caddolakebayoutours.com" target="_blank">Caddo Lake Bayou Tours</a>.</p>
      </ContentContainer>
    </section>
  </main>
</template>