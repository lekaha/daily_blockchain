<template>
  <ul class="items-list wrapper">
    <li class="item" v-if="category !== ''" v-for="category in categories">
      <article>
        <img class="thumbnail"
            :src="category.fields.image.fields.file.url + '?fit=scale&w=350&h=196'"
            :srcset="`${category.fields.image.fields.file.url}?w=350&h=196&fit=fill 350w, 
              ${category.fields.image.fields.file.url}?w=1000&h=562&fit=fill 1000w, 
              ${category.fields.image.fields.file.url}?w=2000&h=1125&fit=fill 2000w`"
            sizes="(min-width: 1024px) 400px, 100vw"
          >
        <h4><nuxt-link :to="{ name: 'categories-category', params: { category: category.fields.name } }" class="title">{{ category.fields.name.charAt(0).toUpperCase() + category.fields.name.slice(1) }}</nuxt-link></h4>
        <p>{{ category.fields.description }}</p>
      </article>
    </li>
  </ul>
</template>
<script>
export default {
  props: ['categories']
}
</script>
<style>

  .thumbnail {
    margin-bottom: 1em;
  }

  .title {
    text-decoration: none;
    font-size: 22px;
    color: #373F49;
  }

  .tags {
    padding : 1em 0;
    margin-bottom: 2em;
  }

  .tag:link,
  .tag:visited {
    color: #A0A0A0;
    text-decoration: none;
    display: inline-block;
    padding: .33333rem .5rem;
    line-height: 1;
    border-radius: 2px;
    border: 1px solid #A0A0A0;
    margin-right: .5em;
  }

  .tag:active,
  .tag:hover,
  .tag:focus {
    color: #606060;
    border-color: #606060;
  }

</style>
