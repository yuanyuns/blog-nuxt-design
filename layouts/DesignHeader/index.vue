<template>
  <div>
    <v-btn exact text x-large>
      归云的个人网站
    </v-btn>
    <v-btn exact to="/" text>
      首页
    </v-btn>
    <v-btn to="/archive" text>
      归档
    </v-btn>
    <v-btn to="/links" text>
      友链
    </v-btn>
    <v-btn to="/about" text>
      关于
    </v-btn>
  </div>
</template>

<script>
    export default {
        name: "DesignHeader"
    }
</script>

<style scoped>

</style>
