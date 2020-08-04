<template>
  <div style="margin: 30px">

    <!--标题-->
    <h1>{{article.title}}</h1>
    <h5 style="margin: 20px 0">发布创建于&nbsp;{{article.createTime}}</h5>
    <hr class="design-hr"/>

    <!--内容-->
    <article-content :content="article.content"></article-content>

    <!--标签-->
    <v-chip class="ma-2" v-for="item in article.tags" :key="item">
      {{item}}
    </v-chip>
    <hr class="design-hr" />

    <!--评论-->
    <h2 style="margin: 20px 0">评论</h2>
    <article-comment :articleId="article.id" father=""></article-comment>
    <h2 style="margin: 20px 0">评论列表</h2>
    <v-list dark>
      <template v-for="item in commentList">
        <v-list-item :key="item.title">
          <v-list-item-content>
            <v-list-item-title style="margin-bottom: -15px">
              <h3>
                <v-avatar size="35" left>
                  <v-img :src="'https://sdn.geekzu.org/avatar/'+getMD5(item.email)"></v-img>
                </v-avatar>
                &nbsp;{{ item.username }}
                &nbsp;<span style="font-size: 10px">{{timeFromNow(item.createDate)}}</span>
              </h3>
            </v-list-item-title>
            <v-list-item-subtitle style="white-space: pre-line;padding-left: 45px">
              {{ item.comment }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
import api from '~/api'
import moment from 'moment';
import ArticleContent from "~/components/ArticleContent/index";
import ArticleComment from "~/components/ArticleComment/index";

export default {
  name: "index",
  components: {ArticleComment, ArticleContent},
  data: () => ({
    article: {},
    comment: {},
    commentList: [],
    commentIndex: [],
    commentBoole: false
  }),
  head() {
    return {
      title: this.article.title,
      meta: [
        {hid: 'description', name: 'description', content: this.article.summary}
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
    this.getList(this.$route.params.id)
  },
  methods: {
    getData(id) {
      api.GET_ARTICLE_INFO({id}).then(res => {
        this.article = res.data
      })
    },
    getList(id) {
      api.SHOW_COMMENT_LIST({id}).then(res => {
        this.commentList = res.data
      })
    },
    getMD5(email) {
      if (email) {
        let md5 = require('md5');
        return md5(email)
      } else {
        return ""
      }
    },
    addChildList(index){
      this.commentIndex = index
      this.commentBoole = true
    },
    timeFromNow(time) {
      const format = "YYYY-MM-DD HH:mm:ss";
      moment.locale(['zh-cn', 'zh-tw']);
      let timeStr = moment(time).format(format);
      return moment(time).fromNow(true) +"前";
    }
  }
}
</script>

<style scoped>
.design-hr {
  border: 1px dashed #f0f0f0;
  margin: 50px 0;
}
</style>
