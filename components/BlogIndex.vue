<script setup lang="ts">
  const { blogs } = await useBlog()
</script>
    
<template>
  <SectionContainer>
    <ul :class="$style.blog_container">
      <li
        :class="$style.content"
        v-for="blog in blogs"
        :key="blog.id"
      >
        <NuxtLink :to="`/blog/${blog.id}`">
          <img :src="blog.eyecatch?.url" :alt="blog.title" />
          <h3 :class="$style.title">{{ blog.title }}</h3>
        </NuxtLink>
      </li>
    </ul>
  </SectionContainer>
</template>

<style lang="scss" module>

.blog_container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}

.content {
  background-color: var(--white);
  background-color: beige;
  border-radius: 6px;
  border: 2px solid var(--black, #212121);
  padding: var(--sp-medium);
  aspect-ratio: 1;
}
</style>