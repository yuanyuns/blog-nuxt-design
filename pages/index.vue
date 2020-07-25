<template>
  <div>
    <v-row>
      <v-col :cols='getCol(index)' v-for="(item,index) in list" :key="item.id">
        <v-card  dark v-ripple exact :to="{path: `/page/${item.id}`}">
          <v-img
            :src="'https://guiyunweb.blog.obs.cn-east-3.myhuaweicloud.com/'+item.thumbnail+'?x-image-process=style/style-e5fb'"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="350px">
            <v-card-title>{{item.title}}</v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import api from "../api"

  export default {
    data: () => ({
      list: [],
      total: 0
    }),
    asyncData({params}) {
      return api.GET_ARTICLE_LIST().then(res => {
        return {
          list: res.data.content,
          total: res.data.totalElements
        };
      })
    },
    created() {
      this.getList();
    },
    methods: {
      getList() {
        api.GET_ARTICLE_LIST().then(res => {
          this.list = res.data.content
          this.total = res.data.totalElements
        })
      },
      getCol(index) {
        if (index === 0) {
          return 12;
        } else if (index  <=2) {
          return 6;
        } else {
          return 4;
        }
      }
    }
  }
</script>
