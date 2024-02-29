<script setup lang="ts">
  import { ref } from 'vue'
  import ContentContainer from '../components/ContentContainer.vue';
  import CardsComponent from '../components/CardsComponent.vue';

  const cardItems = ref(
    [
      {
        name: 'Cloudinary',
        contents: [
          'It is pretty darn awesome.',
          'Content Delivery Network with all kinds of customisation options. I mainly use it to store and serve images so that they do not have to be stored in my repository but also leverage transformations it offers.',
          'I\'m able to load up what ever kinds and sizes of images I want and Cloudinary, on the fly while serving it, will transform all kinds of things.',
        ],
        featureList: [
          {
            heading: 'Format',
            content: 'can upload jpegs but have it serve webp or what ever nextgen format you want',
          },
          {
            heading: 'Crop',
            content: 'tell it the height/width you have available and it will crop the image you can serve it without scaling it down using CSS',
          },
          {
            heading: 'Quality',
            content: 'can upload jpegs but have it serve webp or what ever nextgen format you want',
          },
          {
            heading: 'and tons more...',
          },
        ],
      },
      {
        name: 'Contentful',
        contents: [
          'Cool place to store your content for all kinds of reasons.',
          'Has a nice GUI for creating your content models which you can set up to handle various types of content. You can create users and roles which then allow you to have your content managed outside of the repository.',
          'It can fetch and pull the content client side so it will update real time or you can hook it up to fetch the content at build time only if your content does not change that often.',
          'You can also reference other content models you create which allows you to integrate them with components on your applicaiton so you can end up composing pages right from Contentful.',
          'Also not using this here just yet, but all this content could be moved over into Contentful at some point.'
        ]
      },
      {
        name: 'Azure',
        contents: [
          'Much like AWS, an overwhelming amount of options and things to configure but it is, of course, pretty cool. It feels a little bit easier to use than AWS but maybe that is only because I already had some experience setting things up in AWS, so Azure just came a little more naturally.',
          'Using this one for the site for sure.',
        ],
        featureList: [],
      }
    ]
  );
</script>

<template>
  <main>
    <section>
      <ContentContainer>
        <h1>Welcome to taranpierce.com</h1>
        <p>Building out this website in Vue and using Azure to deploy it.</p>
        <p>Software engineer with a strong foundation in design, excellent communication skills and ability to translate business objectives into high performing solutions.</p>
        <p>Adding in some more content to have some filler sections for now while I build things out.</p>
        <h2>Online Presence</h2>
        <p>Here are some links to other places online where you can see my work or learn stuff about what I do.</p>
        <ul>
          <li>
            <h3>GitHub</h3>
            <p>Of course there has to be a link to the trusty GitHub account.</p>
            <p>
              <a href="https://github.com/taran-pierce" target="_blank">Taran's GitHub</a>
            </p>
          </li>
          <li>
            <h3>LinkedIn</h3>
            <p>FaceBook for work, how lovely.</p>
            <p>
              <a href="https://www.linkedin.com/in/taran-pierce-4b6b5721/" target="_blank">LinkedIn</a>
            </p>
          </li>
          <li>
            <h3>Caddo Lake Bayou Tours</h3>
            <p>Site that I created and manage for a guided boat tour service on Caddo Lake.</p>
            <p>
              <a href="https://www.caddolakebayoutours.com/" target="_blank">Caddo Lake Bayou Tours</a>
            </p>
          </li>
          <li>
            <h3>taranitup.com</h3>
            <p>Another random personal site where I test out different things.</p>
            <p>
              <a href="https://www.taranitup.com/" target="_blank">TaranItUp.com</a>
            </p>
          </li>
          <li>
            <h3>Photos</h3>
            <p>Project that is in the works using Astro.build so that I can use React and Vue in the same proejct. Why? Cause why not? It calls them "islands" and you can basically end up nesting other frameworks inside of your Astro components. So if you feel like certain frameworks have an edge over others for specific use cases, you can use which ever one you want at will.</p>
            <p>
              <a href="https://photos.taranpierce.com/">Photos</a>
            </p>
          </li>
        </ul>
      </ContentContainer>
    </section>
    <section>
      <ContentContainer>
        <h1>Things I like to use</h1>
        <p>Just going to list out some of the things I like to use when making sites and why.</p>
        <CardsComponent :cardItems="(cardItems as [])" />
      </ContentContainer>
    </section>
  </main>
</template>