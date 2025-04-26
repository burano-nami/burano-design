<script lang="ts" setup>
const props = defineProps<{
  backgroundImage?: string
  backgroundColor?: string
  backgroundRepeat?: string
  backgroundPosition?: string
  backgroundSize?: string
}>()

</script>

<template>
  <div 
    :class="$style.section_container"
    :style="{
  ...(backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: backgroundRepeat || 'no-repeat',
        backgroundPosition: backgroundPosition || 'center',
        backgroundSize: backgroundSize || 'cover'
      }
    : {}),
  ...(backgroundColor ? { backgroundColor } : {})
}"
  >
    <slot />
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.section_container {
  padding-inline : var(--sp-larger);

  @include mediaScreen('tablet') {
    padding-inline: var(--sp-large);
  }
}
</style>