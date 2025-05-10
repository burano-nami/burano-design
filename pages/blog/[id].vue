<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const config = useRuntimeConfig()

const { data: blog } = await useAsyncData('blog', () =>
  $fetch(`https://${config.public.microcmsServiceDomain}.microcms.io/api/v1/blogs/${route.params.id}`, {
    headers: {
      'X-API-KEY': config.public.microcmsApiKey
    }
  })
)
</script>

<template>
  <SectionContainer :class="$style.article_container">
    <div 
      :class="$style.contents_container"
      v-if="blog"
    >
      <!-- <h1>{{ blog.title }}</h1> -->
      <div
        :class="$style.contents"
        v-html="blog.content"
      />
    </div>
    <p v-else>読み込み中...</p>
  </SectionContainer>
</template>

<style lang="scss" module>

.article_container {

}

.contents_container {
  border-radius: 10px;
  border: 2px solid var(--black);
  background: var(--white);
}

.contents {
  max-inline-size: var(--contents-lower-width);
  inline-size: 100%;
  margin-block: calc(var(--sp-larger) * 2);
  margin-inline: auto;
}

</style>