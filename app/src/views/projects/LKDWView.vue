<script setup lang="ts">
  import ContentContainer from '../../components/ContentContainer.vue';

</script>

<template>
  <main>
    <section>
      <ContentContainer>
        <h1>LKDW</h1>
        <p>This is really just a site where I am goofing around and setting up an e-commerce store and living that dream of selling things online!</p>
        <p>The real goal was just to set up the whole thing from the Storefront frontend using Next.js and the backend using Keystone.js so that people can create accounts, sign in, add items to their cart, make purchases, see previous orders and admins can create new products.</p>
        <p>There is a fair bit that goes into this one because it is not a real store, so of course I wanted to pull it off as cheaply as possible while still making it available to use.</p>
        <p>Keystone is using a database created from Vercel, which is also where I deploy the frontend of the site. The frontend uses Apollo Client and GraphQL to interact with the backend which is deployed through Heroku. Going back to that cheap part.....if you visit the site and you see the loading spinner for awhile, it just means the server was asleep. Once it starts back up, the spinner will go away and then every thing is very snappy and responsive.</p>
        <p>It is also using Stripe to take payments and manage cutstomers and the images are stored on an AWS S3 bucket.</p>
        <p>
          <a href="https://lkdw.vercel.app/" target="_blank">LKDW</a>
        </p>
      </ContentContainer>
    </section>
  </main>
</template>
