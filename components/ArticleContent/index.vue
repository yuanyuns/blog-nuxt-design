<template>
  <div>
    <div class="md markdown-body" v-html="getMd(content)" v-highlight>
    </div>
    <v-chip class="ma-2" v-for="item in tags" :key="item">
      {{item}}
    </v-chip>
    <v-divider></v-divider>
  </div>
</template>

<script>
  import markdown from 'markdown-it'
  import '../../assets/scss/github.css'

  export default {
    name: "ArticleContent",
    props: {
      content:{
        type:String
      },
      tags: {
        type: Array
      },
      id: {
        type: String
      }
    },
    methods: {
      getMd(body) {
        let md = markdown();
        // eslint-disable-next-line no-console
        return md.render(body);
      }
    }
  }
</script>

<style scoped>
</style>
