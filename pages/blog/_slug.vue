<template>
    <article>
      <div class="container pt-12 pb-16 md:px-40">

        <div class="my-12 md:px-2 lg:px-40 mx-auto">
          <nuxt-content :document="article" />
        </div>
      </div>
    </article>
</template>


<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    },
    head() {
      return {
        title: 'Blog'
      };
    }
  }
</script>


<style>

</style>