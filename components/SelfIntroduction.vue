<script setup lang="ts">
const profileBlocks = [
  {
    title: '自己紹介',
    texts: [
      '看護師として約8年間勤務後、Web業界へ転向しました。現在はWeb制作会社にて業務に携わりながら、フロントエンド実装を中心に経験を積んでいます。デザインカンプの再現性や保守性を意識したコーディングを重視し、実務および個人制作を通してスキル向上に取り組んでいます。',
      'また、Reactの学習やAIを活用したコーディングにも取り組み、効率的な開発手法の習得を進めています。',
    ],
  },
  {
    title: 'スキル',
    texts: ['HTML / CSS / SCSS / JavaScript / Vue3 / Nuxt3 / React / WordPress /Figma'],
  },
  {
    title: 'ツール',
    texts: ['Illustrator / Photoshop / GitHub / Slack / Notion'],
  },
  // {
  //   title: 'やりたいこと',
  //   texts: ['穂高連峰登山 / アフリカ旅 / 車中泊旅で日本をめぐる / ジープ島でダイビング'],
  // },
  // {
  //   title: '趣味',
  //   texts: [
  //     'キャンプ / 旅 / 東京食べ歩き散歩 / 登山 / Hey!Say!JUMP',
  //     '世界を歩いた記録をまとめています。▶︎ <a href="https://note.com/burano_nami" target="_blank" rel="noteURL" class="link">noteはこちら</a>',
  //   ],
  // },
  // {
  //   title: '「Burano Design」について',
  //   texts: [
  //     '「いつか個人で活動するときは、この名前でやろう！」――Webデザイナーの勉強を始めた頃から、ずっとそう決めていました。Burano Designの「ブラーノ」は、イタリアにあるブラーノ島が由来です。',
  //     '23歳のとき、一人旅で訪れたイタリアのブラーノ島。その色鮮やかで可愛い街並みを目にした瞬間の感動は、今でも鮮明に覚えています。実在するとは思えないほど美しい景色と、そこで暮らす人々の穏やかな日常。まるで絵本の中に迷い込んだような体験でした。「まだまだ知らない世界がこんなにあるんだ」と強く感じたあの瞬間の感動や心のときめきを、デザインの仕事でも忘れたくない。そんな思いから、この名前をブランド名に選びました。',
  //   ],
  // },
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
            Webデザイナー・フロントエンドエンジニア。
            Web制作会社にて、HTML / CSS / Vue（Nuxt）を用いた実装を行っています。
          </p>
        </div>
      </div>
      
      <div :class="$style.profile_block_container">
        <div
          v-for="(block, index) in profileBlocks"
          :key="index"
          :class="[$style.profile_block, index === 0 && $style.profile_block_first]"
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
  }
}

.profile_description {
  padding-block-start: var(--sp-small);
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

.profile_block_first {
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

  @include mediaScreen('mobile') {
    max-inline-size: 200px;
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