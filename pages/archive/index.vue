<template>
    <div>
      <h1>归档</h1>
      <div style="margin: 20px" v-for="item in list" :key="item.year">
        <h2>{{item.year}}年</h2>
        <v-list-item v-for="item2 in item.archives" :key="item2.id" :to="{path: `/page/${item2.id}`}">
          <v-list-item-content>
            <v-list-item-title>{{getDate(item2.createTime)}}&nbsp;{{item2.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </div>
</template>

<script>
  import api from "../../api"

  export default {
    name: "index",
    data: () => ({
      list: []
    }),
    created() {
      this.getList();
    },
    methods: {
      getList() {
        api.GET_ARCHIVE().then(res => {
          this.list = res.data
        });
      },
      getDate(time){
        let createDate = new Date(time +" 00:00:01");
        return this.dateFormat("mm月dd日",createDate)
      },
      dateFormat(fmt, date) {
        let ret;
        const opt = {
          "Y+": date.getFullYear().toString(),        // 年
          "m+": (date.getMonth() + 1).toString(),     // 月
          "d+": date.getDate().toString(),            // 日
          "H+": date.getHours().toString(),           // 时
          "M+": date.getMinutes().toString(),         // 分
          "S+": date.getSeconds().toString()          // 秒
          // 有其他格式化字符需求可以继续添加，必须转化成字符串
        };
        for (let k in opt) {
          ret = new RegExp("(" + k + ")").exec(fmt);
          if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
          };
        };
        return fmt;
      }
    }
  }
</script>

<style scoped>

</style>
