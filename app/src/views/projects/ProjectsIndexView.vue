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
            <h2>
              <router-link
                to="/projects/caddo-lake-bayou-tours"
              >Caddo Lake Bayou Tours</router-link>
            </h2>
            <p>A website for a tour guide on Caddo Lake. A statically generated Next.js website that is deployed through Azure.</p>
            <p>There is also an email server that I host on Heroku for the contact form on this site as well.</p>
          </li>
          <li>
            <h2>
              <router-link
                to="/projects/taranitup-com"
              >TaranItUp.com</router-link>
            </h2>
            <p>Website that I use mainly to goof around on and try out some new things. With a name like Taran, how can you resit buying the domain <a href="https://www.taranitup.com" target="_blank">TaranItUp.com</a>?!</p>
            <p>For instance, we used AWS at work but not my team directly, so I wanted to get a chance to fiddle with AWS. So as of today, the site is built through CodeBuild every time I merge a Pull Request into master. Pushes the artifact it creates to an S3 bucket, which is just exposed to the public because the site is a simple static site. I also transferred my domain so I could use Route 53 to handle all my DNS needs and set up Cloud Front for SSL and caching.</p>
          </li>
          <li>
            <router-link
              to="/projects/taranpierce-com"
            >taranpierce.com</router-link>
            <p>Oh look, you are here! My main website, recently redone in Vue instead of Next. Just a smidge about me and mainly about the work I do with references to other sites I've made or worked on.</p>
          </li>
          <li>
            <router-link
              to="/projects/photos"
            >Photos</router-link>
            <p>I like photography quite a bit and I enjoy taking photos. I have moved off from my hometown and wanted a way to easily share my photos with friends and family but not have to plaster them all over social media.</p>
            <p>Plus it gives me a chance to mess with different technology while putting it together instead of just posting them on FaceBook or something.....twitter......X...what ever on earth its called these days.</p>
          </li>
          <li>
            <router-link
              to="/projects/lkdw"
            >LKDW</router-link>
            <p>Satire e-commerce storefront! Check it out, it ain't real.....yet. Maybe one day though!</p>
            <p>Storefront set up for practicing making the frontend and backend for a ecommerce store. In conjuction with Next.js I am also using Keystone.js with a postgres database.</p>
          </li>
          <li>
            <h2>
              <a href="https://newfold.com/brands" target="_blank" rel="noopener">Newfold Digital</a>
            </h2>
            <p>Worked for many years at a company that was bought out by Newfold Digital. I originally started out working directly for HostGator, who was privately owned at the time, then Endurance International Group bought them out.</p>
            <p>While working under EIG, I had the pleasure to get a chance to work on the following brands they owned:</p>
            <ul>
              <li>HostGator</li>
              <li>Bluehost</li>
              <li>Justhost</li>
              <li>iPage</li>
              <li>Domain.com</li>
              <li>Dotster</li>
              <li>MyDomain</li>
              <li>Netfirms</li>
              <li>SiteBuilder</li>
              <li>...and other smaller brands</li>
            </ul>
            <p>I worked on interactive marketing landing pages for all those brands, the customer facing chat applicaiton, customer facing billing system, internal billing system, SPA registration flow, HTML Emails and probably even more things I can't think of at the moment. We are talking about 12 years of work at the same company, quite a few different teams and many promotions.</p>
          </li>
        </ul>
      </ContentContainer>
    </section>
  </main>
</template>
