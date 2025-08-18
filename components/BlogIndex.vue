<script setup lang="ts">
const props = defineProps<{
  max?: number
  rotate?: number 
}>()

const { blogs } = await useBlog()

import type { Blog } from '~/types/blog'

const visibleBlogs = computed<Blog[]>(() =>
  props.max ? blogs.value.slice(0, props.max) : blogs.value
)
</script>
    
<template>
  <ul :class="$style.blog_container">
    <li
      :class="$style.content"
      v-for="(blog, index) in visibleBlogs"
      :key="blog.id"
      :style="{
        transform: props.rotate && index === 5 ? `rotate(${props.rotate}deg)` : 'none'
      }"
    >
      <NuxtLink 
        :to="`/blog/${blog.id}`"
        :class="$style.content_link"
      >
        <img 
          :class="$style.eyecatch"
          :src="blog.eyecatch?.url" 
          :alt="blog.title"
        />
        <h3 :class="$style.title">{{ blog.title }}</h3>
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" module>

.blog_container {
  display              : grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap                  : 1.5rem;
}

.content {
  background-color: var(--white);
  /* background-color: beige; */
  border-radius   : 6px;
  border          : 2px solid var(--black);
  padding         : var(--sp-medium);
  aspect-ratio    : 1;
  overflow        : hidden;
}

.content_link {
  block-size        : 100%;
  display           : grid;
  grid-template-rows: 80% auto;
  gap               : var(--sp-small);
  transition: all .3s ease-in-out;
  transform: scale(1);

  &:hover {
    transform: scale(1.05);
  }
}


.eyecatch {
  inline-size: 100%;
  block-size : auto;
  object-fit : cover;
  display    : block;
} 
</style>