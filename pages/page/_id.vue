<template>
  <div style="margin: 30px">
    <h1>{{article.title}}</h1>
    <h5 style="margin: 20px 0">发布创建于&nbsp;{{article.createTime}}</h5>
    <hr class="design-hr"/>
    <article-content :content="article.content"></article-content>
  </div>
</template>

<script>
  import api from '../../api'
  import ArticleContent from "~/components/ArticleContent/index";

  export default {
    name: "index",
    components: {ArticleContent},
    data: () => ({
      article: {}
    }),
    head () {
      return {
        title: this.article.title,
        meta: [
          { hid: 'description', name: 'description', content: this.article.summary }
        ]
      }
    },
    asyncData({params}) {
      let id = params.id
      return api.GET_ARTICLE_INFO({id}).then(res => {
        return {article: res.data}
      })
    },
    created() {
      this.getData(this.$route.params.id)
    },
    methods: {
      getData(id) {
        api.GET_ARTICLE_INFO({id}).then(res => {
          this.article = res.data
        })
      }
    }
  }
</script>

<style scoped>
  .design-hr {
    border:1px dashed #f0f0f0;
    margin: 20px 0;
  }
</style>
