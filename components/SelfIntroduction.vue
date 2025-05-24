<script setup lang="ts">
const profileBlocks = [
  {
    title: 'スキル',
    texts: ['Illustrator / Photoshop / Figma / HTML5 / SCSS / JavaScript / Nuxt.js / Vue.js'],
  },
  {
    title: 'ツール',
    texts: ['email / Slack / LINE / Notion / GitHub'],
  },
  {
    title: 'やりたいこと',
    texts: ['穂高連峰登山 / アフリカ旅 / 車中泊旅で日本をめぐる / ジープ島でダイビング'],
  },
  {
    title: '趣味',
    texts: [
      'キャンプ / 旅 / 東京食べ歩き散歩 / 登山 / Hey!Say!JUMP',
      '世界を歩いた記録をまとめています。▶︎ <a href="https://note.com/burano_nami" target="_blank" rel="noteURL" class="link">noteはこちら</a>',
    ],
  },
  {
    title: '「Burano Design」について',
    texts: [
      '「いつか個人で活動するときは、この名前でやろう！」――Webデザイナーの勉強を始めた頃から、ずっとそう決めていました。Burano Designの「ブラーノ」は、イタリアにあるブラーノ島が由来です。',
      '23歳のとき、一人旅で訪れたイタリアのブラーノ島。その色鮮やかで可愛い街並みを目にした瞬間の感動は、今でも鮮明に覚えています。実在するとは思えないほど美しい景色と、そこで暮らす人々の穏やかな日常。まるで絵本の中に迷い込んだような体験でした。「まだまだ知らない世界がこんなにあるんだ」と強く感じたあの瞬間の感動や心のときめきを、デザインの仕事でも忘れたくない。そんな思いから、この名前をブランド名に選びました。',
    ],
  },
]

</script>

<template>
  <section :class="$style.profile">
    <div :class="$style.profile_container">
      <div :class="$style.profile_block_top">
        <div :class="$style.profile_image">
          <img src="~assets/images/profile.png" alt="Yoshioka Nami">
        </div>
        <div :class="$style.profile_block_name">
          <h3 :class="$style.profile_name">Yoshioka Nami</h3>
          <p :class="$style.profile_description">
            就職を機に上京し、看護師として8年間働いてきました。「新しい仕事に挑戦したい。人生の選択肢を広げたい」という思いから、30歳を目前に小さな一歩を踏み出しました。
          </p>
        </div>
      </div>
      
      <div :class="$style.profile_block_container">
        <div
          v-for="(block, index) in profileBlocks"
          :key="index"
          :class="[$style.profile_block, index === profileBlocks.length - 1 && $style.profile_block_last]"
        >
          <h3 :class="$style.profile_block_title">{{ block.title }}</h3>
          <p
            v-for="(text, textIndex) in block.texts"
            :key="textIndex"
            :class="$style.profile_block_text"
            v-html="text"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.profile_container {
  padding-inline       : var(--sp-larger);
  padding-block        : var(--sp-larger);

  @include mediaScreen('mobile') {
    padding-inline       : var(--sp-medium);
  }
}

.profile_block_top {
  max-inline-size : var(--contents-lower-width);
  display         : flex;
  flex-direction  : row;
  gap             : var(--sp-large);
  align-items     : center;
  justify-content : center;
  margin-inline   : auto;
  margin-block-end: var(--sp-larger);

  @include mediaScreen('mobile') {
    flex-direction: column;
    gap           : var(--sp-medium);
  }
}

.profile_block_container {
  display              : grid;
  grid-template-columns: repeat(2, 1fr);
  gap                  : var(--sp-large);


  @include mediaScreen('mobile') {
    grid-template-columns: 1fr;
    /* padding-inline       : var(--sp-large); */
  }
}

.profile_block {
  display       : flex;
  flex-direction: column;
  gap           : var(--sp-small);
  
  .link {
    color          : var(--orange);
    text-decoration: underline;
  }
}

.profile_block_last {
  grid-column: 1 / -1;
}

.profile_image {
  max-inline-size: 300px;
  aspect-ratio: 1;
  background-color: #EAE3D2;
  margin-inline: auto;
  border-radius: 50%;
  overflow: hidden;
  

  > img {
    inline-size: 100%;
    object-fit: cover;
  }
}

.profile_block_title {
  inline-size: max-content;
  background : var(--orange);
  color      : var(--white);
  font-size  : 18px;
  font-style : normal;
  font-weight: 400;
  padding    : 0px var(--sp-small);
}

</style>