<script setup lang="ts">
 import { ref } from 'vue';

  interface Skill {
    name: string,
    level: number,
  }

  const skills = [
    {
      name: 'HTML',
      level: 100,
    },
    {
      name: 'CSS',
      level: 100,
    },
    {
      name: 'javascript',
      level: 100,
    },
    {
      name: 'React',
      level: 100,
    },
    {
      name: 'SASS/SCSS',
      level: 100,
    },
    {
      name: 'Grunt',
      level: 100,
    },
    {
      name: 'Gulp',
      level: 100,
    },
    {
      name: 'Bootstrap',
      level: 100,
    },
    {
      name: 'MUI',
      level: 100,
    },
    {
      name: 'Jest',
      level: 90,
    },
    {
      name: 'Cypress',
      level: 90,
    },
    {
      name: 'Node.js',
      level: 80,
    },
    {
      name: 'Optimizely',
      level: 100,
    },
    {
      name: 'PHP',
      level: 100,
    },
    {
      name: 'Cloudinary',
      level: 100,
    },
    {
      name: 'Contentful',
      level: 100,
    },
    {
      name: 'Bamboo',
      level: 90,
    },
    {
      name: 'JIRA',
      level: 100,
    },
    {
      name: 'JSON',
      level: 100,
    },
    {
      name: 'Azure',
      level: 40,
    },
    {
      name: 'AWS',
      level: 40,
    },
    {
      name: 'Vue',
      level: 50,
    },
    {
      name: 'Astro',
      level: 30,
    },
  ] as Array<Skill>;

  const currentWidth = ref((skill: Skill) => {
    const { level } = skill;
    return `${level}%`;
  });
</script>

<template>
  <div class="skills-wrapper">
    <ul>
      <li
        v-for="skill in skills"
        :key="skill.name"
      >
        <strong>{{ skill.name }}</strong>
        <span class="bar-wrapper">
          <span
            class="bar"
            :style="{
              'width': currentWidth(skill),
            }"
          />
        </span>
      </li>
    </ul>
  </div>
</template>

<style>
  .skills-wrapper {
    margin-top: 1rem;
    border: 1px solid var(--color-primary-dark);
    padding: 1rem;
  }

  .bar-wrapper {
    display: block;
    height: 2rem;
    border: 1px solid var(--color-primary-dark);
    overflow: hidden;

    .bar {
      display: block;
      height: 100%;
      background: var(--color-primary-dark);
      border: 1px solid var(--color-secondary);
      width: 0%;
    }
  }
</style>