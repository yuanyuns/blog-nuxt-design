<template>
  <div>
    <h1>关于</h1>
    <br/>
    <div style="margin: 20px">
      <div class="text-body-2">
        <h2>关于我</h2>
        <p>95后,Java程序员,现居兰州,爱好动漫,
          B站重度依赖者</p>
        <p>
          自己是一个选择困难症,经常因为技术选型等问题而把所有的东西都大概学一编
        </p>
      </div>
      <div class="text-body-2">
        <h2>关于博客</h2>
        <p>
          基于前端Vue开发,后台使用的是spring boot框架,<br><br>
          自己学习前端也不久,可能样式和性能不是特别好,还请多多包含
        </p>
        <br>
      </div>
    </div>

    <!--标签-->
    <v-chip class="ma-2" v-for="item in article.tags" :key="item">
      {{ item }}
    </v-chip>
    <hr class="design-hr"/>

    <!--评论-->
    <h2 style="margin: 20px 0">评论</h2>
    <article-comment articleId="about" father=""></article-comment>
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
import ArticleComment from "~/components/ArticleComment/index";

export default {
  name: "index",
  components: {ArticleComment},
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
  created() {
    this.getList("about")
  },
  methods: {
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
    addChildList(index) {
      this.commentIndex = index
      this.commentBoole = true
    },
    timeFromNow(time) {
      const format = "YYYY-MM-DD HH:mm:ss";
      moment.locale(['zh-cn', 'zh-tw']);
      let timeStr = moment(time).format(format);
      return moment(time).fromNow(true) + "前";
    }
  }
}
</script>
<style scoped>
p {
  font-size: 20px;
  margin: 30px;
}

.design-hr {
  border: 1px dashed #f0f0f0;
  margin: 50px 0;
}
</style>
