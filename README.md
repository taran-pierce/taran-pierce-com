# taranpierce.com `1`
Personal website for Taran Pierce built in Vue.

## Instructions
- Clone the repo
- cd into `/app/`
- run `npm install`

## Deployment
Azure handles all deployments to testing and production environments. All unit tests must be passing for the build to complete.
- Pull requests pointing to master will trigger test deployments
  - Azure will comment in the PR the link to the ENV when its ready
- Merges to master will kick off the build and deploy to production

### Tech Stack
- Vue - https://vuejs.org/
- Vite - https://vitejs.dev/
- Vitest - https://vitest.dev/
- Azure - https://azure.microsoft.com/
- Cypress - https://www.cypress.io/
