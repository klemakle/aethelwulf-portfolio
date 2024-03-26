<template>
    <article>
      <div class="container pt-24 pb-16">

        <div class="my-12 md:px-10 mx-auto md:mx-20">
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