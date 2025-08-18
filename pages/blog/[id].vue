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
  <FadeInContainer>
    <SectionTitle
      title="myworks"
      style="padding-inline: var(--sp-larger);"
    />
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
      <p v-if="!blog">記事が見つかりませんでした。</p>
      <NuxtLink
          to="/works"
          :class="$style.back_button"
      >
      View all Works
      </NuxtLink>
    </SectionContainer>
  </FadeInContainer>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.article_container {
  display            : flex;
  flex-direction     : column;
  align-items        : center;
  padding-inline     : var(--sp-larger);
  padding-block-start: var(--sp-larger);
  padding-block-end  : calc(var(--sp-larger) * 4);

  @include mediaScreen('mobile') {
    padding-inline: var(--sp-large);
  }
}

.contents_container {
  inline-size    : 100%;
  max-inline-size: var( --contents-max-width);
  padding        : var(--sp-large);
  border-radius: 10px;
  border: 2px solid var(--black);
  background: var(--white);
}

.back_button {
  margin-block: var(--sp-larger);
  position    : relative;

    &:hover::before {
      content                  : '';
      inline-size              : 100%;
      height                   : 1px;
      background-color         : var(--black);
      position                 : absolute;
      bottom                   : -5px;
      animation-name           : hoverAnime;
      animation-duration       : 0.2s;
      animation-timing-function: ease;
      animation-fill-mode      : forwards;
  }
}

@keyframes hoverAnime {
  0% {
    inline-size: 0;
  }
  100% {
    inline-size: 100%;
  }
}

.contents {
  max-inline-size: var(--contents-lower-width);
  inline-size: 100%;
  margin-block: calc(var(--sp-larger) * 2);
  margin-inline: auto;


  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    margin: 2rem 0 1rem;
    line-height: 1.4;
  }

  h1 { font-size: 2rem; }
  h2 { font-size: 1.6rem; }
  h3 { font-size: 1.3rem; }
  h4 { font-size: 1.1rem; }
  h5, h6 { font-size: 1rem; }

  p {
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  a {
    color: var(--primary-color);
    text-decoration: underline;
    &:hover {
      opacity: 0.8;
    }
  }

  ul, ol {
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
  }

  li {
    line-height: 1.6;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1.5rem 0;
  }

  blockquote {
    margin: 1.5rem 0;
    padding: 1rem;
    background-color: #f8f8f8;
    border-left: 4px solid #ccc;
    font-style: italic;
  }

  hr {
    margin: 2rem 0;
    border: none;
    border-top: 1px solid #ccc;
  }

  pre, code {
    font-family: monospace;
    background-color: #f0f0f0;
    padding: 0.5rem;
    border-radius: 4px;
    overflow-x: auto;
    display: block;
    margin-bottom: 1rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 0.5rem 1rem;
    text-align: left;
  }

  th {
    background-color: #f5f5f5;
  }
}
</style>