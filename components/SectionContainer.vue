<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core'

const props = defineProps<{
  backgroundImage?: string
  backgroundColor?: string
  backgroundRepeat?: string
  backgroundPosition?: string
  backgroundSize?: string
}>()

const { width } = useWindowSize()

const computedBackgroundSize = computed(() => {
  if (!props.backgroundImage) return undefined

  if (width.value <= 740) {
    return '300% auto'
  }

  return props.backgroundSize || 'cover'
})
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
        backgroundSize: computedBackgroundSize
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
  flex          : 1;
  padding-inline: var(--sp-larger);

  @include mediaScreen('tablet') {
    padding-inline: var(--sp-large);
  }
}
</style>