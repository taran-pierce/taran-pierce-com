<script setup lang="ts">
  import ContentContainer from '../../components/ContentContainer.vue';

</script>

<template>
  <main>
    <section>
      <ContentContainer>
        <h1>Caddo Lake Bayou Tours</h1>
        <p>This website is running the latest version of Next.js 14 with React 18. Utlizing scss with css modules for the styling to keep all the styles easily scoped and the files easier to read through.</p>
        <p>There is some TypeScript throughout but not everything is typed out. The site also uses Cloudinary to store, serve, and transform all images that it uses. Some of his clients are photographers and will give him photos to use on his website. Cloudinary makes it convenient to upload images and have it resize them to a smaller file size, change their dimensions, and even their format.</p>
        <p>Content for their site is stored on Contentful so that copy updates can be managed separately from the code.</p>
        <p>Azure is powering the hosting, dns, and the email for the site.</p>
        <p>You can go checkout their site if you would like, it is actively in use: <a href="https://www.caddolakebayoutours.com" target="_blank">Caddo Lake Bayou Tours</a>.</p>
        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>SCSS</li>
          <li>Jest</li>
          <li>React Testing Library</li>
          <li>Cloudinary</li>
          <li>Contentful</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Azure Static Web App</li>
          <li>Azure Communication Service</li>
          <li>Azure DNS Zone</li>
          <li>Heroku</li>
          <li>GitHub Actions</li>
        </ul>
      </ContentContainer>
    </section>
  </main>
</template>
