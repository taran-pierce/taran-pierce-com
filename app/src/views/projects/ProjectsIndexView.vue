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
            <p>A statically generated Next.js website with content from Contentful and Cloudinary deployed utlizing Azure services for a Tour Guide on Caddo Lake in Texas. Includes a Node.js Express server for handling contact form emails deployed on Heroku.</p>
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
          </li>
          <li>
            <h2>
              <router-link
                to="/projects/taranitup-com"
              >TaranItUp.com</router-link>
            </h2>
            <p>Website that I use mainly to goof around on and try out some new things. With a name like Taran, how could you resist buying the domain <a href="https://www.taranitup.com" target="_blank">TaranItUp.com</a>?!</p>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>Cloudinary</li>
              <li>Contentful</li>
              <li>SCSS</li>
              <li>AWS Route 53</li>
              <li>AWS S3</li>
              <li>AWS CodeBuild</li>
              <li>AWS CloudFront</li>
            </ul>
          </li>
          <li>
            <router-link
              to="/projects/taranpierce-com"
            >taranpierce.com</router-link>
            <p>Oh look, you are here! My main website, recently redone in Vue instead of Next. Just a smidge about me and mainly about the work I do with references to other sites I've made or worked on.</p>
            <ul>
              <li>Vue</li>
              <li>TypeScript</li>
              <li>SCSS</li>
              <li>Cypress</li>
              <li>Vite</li>
              <li>Azure Static Web App</li>
              <li>Azure DNS Zone</li>
              <li>GitHub Actions</li>
            </ul>
          </li>
          <li>
            <router-link
              to="/projects/photos"
            >Photos</router-link>
            <p>I like photography quite a bit and I enjoy taking photos. I have moved off from my hometown and wanted a way to easily share my photos with friends and family but not have to plaster them all over social media. Plus it gives me a chance to mess with different technology while putting it together.</p>
            <ul>
              <li>Astro</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Cloudinary</li>
              <li>SCSS</li>
              <li>GitHub Actions</li>
              <li>Azure Static Web App</li>
              <li>Azure DNS Zone</li>
            </ul>
          </li>
          <li>
            <router-link
              to="/projects/lkdw"
            >LKDW</router-link>
            <p>Satire e-commerce storefront! Check it out, it ain't real.....yet. Maybe one day though! Storefront set up for practicing making the frontend and backend for a ecommerce store. In conjuction with Next.js I am also using Keystone.js with a postgres database.</p>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>SCSS</li>
              <li>TypeScript</li>
              <li>GraphQL</li>
              <li>Stripe</li>
              <li>ApolloClient</li>
              <li>Keystone.js</li>
              <li>PostgreSQL</li>
              <li>Vercel</li>
              <li>Heroku</li>
              <li>AWS S3</li>
            </ul>
          </li>
          <li>
            <h2>
              <a href="https://newfold.com/brands" target="_blank" rel="noopener">Newfold Digital</a>
            </h2>
            <p>A leading web presence presence solutions provider serving millions of small-to-medium businesses globally. While working here, I had the pleasure to get a chance to work on the following brands they owned:</p>
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
            <p>I worked on interactive marketing landing pages for all those brands, the customer facing chat applicaiton, customer facing billing system, internal billing system, SPA registration flow, HTML Emails and probably even more things I can't think of at the moment.</p>
            <p>Over time we migrated multiple appliactions and have the chance to get to work with different tech stacks. This is not an exhaustive list:</p>
            <ul>
              <li>PHP</li>
              <li>Smarty</li>
              <li>Grunt</li>
              <li>Gulp</li>
              <li>Perl</li>
              <li>Mason</li>
              <li>SCSS</li>
              <li>React</li>
              <li>Redux</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>AWS</li>
            </ul>
          </li>
        </ul>
      </ContentContainer>
    </section>
  </main>
</template>
