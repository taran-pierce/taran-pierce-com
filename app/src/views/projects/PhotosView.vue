<script setup lang="ts">
  import ContentContainer from '../../components/ContentContainer.vue';

</script>

<template>
  <main>
    <section>
      <ContentContainer>
        <h1>Photos</h1>
        <p>I don't have a crazy nice camera or anything but it is a decent one. Good enough for the kind of stuff I do any way though there are times where I wish I had a few more lenses.</p>
        <p>The site itself though is a work in progress of course as I work through redoing it in Astro. It has been quite a while since this one was updated, I believe it was in PHP before doing this latest revamp.</p>
        <p>It is built using Astro which is yet another framework but with the added benefit that you can insert other frameworks into pretty easily so you can have a combination of them.</p>
        <p>I'm not entirely sure why you would want to do such a thing but some use cases could be if you were wanting to incrementally upgrade/migrate your setup then this would allow you to do so. For instance, if you wanted to migrate from React to Vue or Angular. Though it looks pretty new for Angular, I see packages for it but it doesn't appear to be in their official documentation for it just yet.</p>
        <p>Or even if you wanted to eventually migrate to all Astro components, you would still be able to at least for as long as you needed still leverage your previous component library and pull it into your new framework and just run with it as is until you had time to rework the other components or replace them.</p>
        <p>For the time being the site has mainly simple Astro components and then a couple React components. I still need/want to add in a Vue or Svelte just to have them on there. The images are stored and served from Cloudinary and the site is deployed through Azure.</p>
        <p>
          <a href="https://photos.taranpierce.com" target="_blank">Photos</a>
        </p>
      </ContentContainer>
    </section>
  </main>
</template>
