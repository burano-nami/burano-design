<script setup lang="ts">

</script>

<template>
  <div :class="$style.form_container">
    <p>
      お仕事のご依頼やご相談、ご質問など、なんでもお気軽にお問い合わせお待ちしています。以下のフォームに必要事項をご入力いただき、ご確認のうえ、送信ボタンを押してください。
    </p>
    <form action="/submit" method="POST">
      <InputBox
        label="お名前"
        name="name"
        type="text"
      />
      <InputBox
        label="フリガナ"
        name="name"
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
        />
      </div>
    </form>
    <BaseButton
      bgColor="var(--yellow)"
      title="送信"
      :class="$style.submit_button"
      type="submit"
    />
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