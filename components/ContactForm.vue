<script setup lang="ts">

</script>

<template>
  <div :class="$style.form_container">
    <p>
      ご連絡は以下のフォームよりお願いいたします。
      内容を確認のうえ、順次ご返信いたします。
    </p>
    <form 
      action="https://hyperform.jp/api/8yedqTWp"
      method="POST"
    >
      <InputBox
        label="お名前"
        name="full_name"
        type="text"
      />
      <InputBox
        label="フリガナ"
        name="full_name_kana"
        type="text"
      />
      <InputBox
        label="メールアドレス"
        name="email"
        type="email"
      />
      <div :class="$style.textarea_wrap">
        <label for="message">お問い合わせ内容</label>
        <textarea
          :class="$style.textarea"
          name="message"
          required
        ></textarea>
      </div>
      <BaseButton
        bgColor="var(--yellow)"
        title="送信"
        :class="$style.submit_button"
        type="submit"
      />
    </form>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.form_container {
  max-inline-size: var(--contents-lower-width);
  inline-size    : 100%;
  margin-inline  : auto;
  padding-block  : var(--sp-larger);

  p {
    margin-block-end: var(--sp-large);
  }
}

form {
  display: grid;
  gap    : var(--sp-large);
}

.textarea_wrap {
  
  label {
    display  : block;
    font-size: var(--font-size-medium);
    margin-block-end: var(--sp-small);
  }
}

.textarea {
  inline-size   : 100%;
  border-radius : 6px;
  border        : 2px solid var(--black);
  background    : var(--white);
  padding       : var(--sp-small);
  min-block-size: 150px;
}

.submit_button {
  margin-block : var(--sp-large);
  margin-inline: auto;
}
</style>