<template>
    <div class="container py-24">
        <input
            class="bg-white-50 px-4 py-2 rounded-md border-gray-200 border-2 w-full hover:border-slate-300 focus:outline-none focus:border-slate-400 text-slate-500"
            v-model="searchQuery"
            type="search"
            autocomplete="off"
            placeholder="Search articles"
        />

        <div class=" flex flex-col gap-2 md:gap-x-12 md:gap-y-10 md:flex-row flex-wrap justify-start items-center" v-if="articles">
            <div v-for="article of articles" :key="article.slug">
                <nuxt-link  :class="'one-project border-t-4 '+ article.border " :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                    <div class="project-image mx-auto">
                        <img class="w-full h-48 object-cover object-center rounded-md " :src="article.img" :alt="article.title">
                    </div>
                    <div class="project-name mt-2 text-bold">{{ article.title }}</div>
                    <div class="project-description py-2">{{ article.description }}</div>
                    <div class="flex justify-start gap-4">
                        <div v-for="(tag,index) in article.tags" :key="index" :class="'px-2 py-2 text-white rounded-md text-xs text-bold '+ tag.class " >
                            {{ tag.name }}
                        </div>
                    </div>
                    <div class="flex justify-between mt-2 italic w-full  border-t-2 border-gray-300">
                        <div class="text-gray-500 text-sm"> {{ article.read }} min read</div>
                        <div class="text-right italic text-gray-400">{{ article.updated }}</div>
                    </div>
                </nuxt-link>
            </div>
        </div>
        <div v-if="articles.length==0" class="flex flex-col text-slate-600 gap-6 justify-center items-center my-5">
          <img src="/img/not_found/emoji.png">
          <p>Not Found !!</p>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: []
    }
  },
  watch: {
      async searchQuery(searchQuery) {
        if (!searchQuery || searchQuery.length <= 0) {
          this.articles = await this.$content('articles')
          .only(['title', 'description', 'img', 'date', 'slug', 'read', 'updated', 'border', 'tags'])
          .sortBy('createdAt', 'desc')
          .fetch()
        }else {
          this.articles = await this.$content('articles')
          .without ('body')
          .limit(3)
          .search(searchQuery)
          .fetch()
        }
      }
  },
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'date', 'slug', 'read', 'updated', 'border', 'tags'])
      .sortBy('date', 'desc')
      .fetch()
      console.log(articles);
    return {
      articles
    }
  }
  }
</script>