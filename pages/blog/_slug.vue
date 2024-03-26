<template>
    <article>
      <div class="container pt-12 pb-16 md:px-44">

        <div class="my-12 md:px-40 mx-auto">
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
    }
  }
</script>


<style>

</style>