<script setup lang="ts">
const props = withDefaults(defineProps<{
  label: string
  name: string
  type?: 'text' | 'email' | 'password'
}>(), {
  label: 'お名前',
  name: 'name',
  type: 'text',
})

</script>

<template>
  <div :class="$style.input_container">
    <label for="name">
      {{ label }}
    </label>
    <input 
      :class="$style.input"
      type="text"
    />
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.input_container {
  display: grid;
  gap    : var(--sp-small);


  label {
    display  : block;
    font-size: var(--font-size-medium);
  }

  .input {
    inline-size  : 100%;
    border-radius: 6px;
    border       : 2px solid var(--black);
    background   : var(--white);
    padding      : var(--sp-small);
  }
}
</style>