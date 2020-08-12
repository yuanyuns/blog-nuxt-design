<template>
  <div>
    <br/>
    <v-footer absolute class="font-weight-medium">
      <v-col class="text-center">
        Copyright &copy; 2019-{{ new Date().getFullYear() }} 归云<br>
        <a target="_blank" href="http://www.beian.miit.gov.cn">陇ICP备20003224号</a>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
    export default {
        name: "DesignFooter"
    }
</script>

<style scoped>

</style>
