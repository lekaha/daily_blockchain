<template>
  <div>
    <header class="tag-page header">
      <div class="foreground">
        <div class="page-bar wrapper">
          <a href="/" class="person-name">{{ $store.state.name }}</a>
          <Navigation></Navigation>
        </div>
        <div class="page-info wrapper">
          <h2>#{{ category }}</h2>
        </div>
      </div>
    </header>

    <section class="body-container">
      <div class="items-bar wrapper">
        <h2>All articles tagged #{{ tag }} ({{ articles.length }})</h2>
      </div>
      <ul class="items-list wrapper">
        <li class="item" v-for="article in articles">
          <article-preview :article="article"></article-preview>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import Navigation from '~/components/navigation.vue'
import ArticlePreview from '~/components/article-preview.vue'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.tags[in]': params.category,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        posts: entries.items,
        tag: params.tag
      }
    })
  },
  components: {
    ArticlePreview,
    Navigation
  }
}
</script>
