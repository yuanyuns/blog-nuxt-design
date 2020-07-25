<template>
  <v-app>
    <v-app-bar app>
      <design-header/>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt app  id="scrolling-techniques-2"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import DesignHeader from "~/layouts/DesignHeader/index";

  export default {
    components: {DesignHeader},
    data() {
      return {
        clientHeight: 0
      }
    },
    created() {
      this.getHeight()
    },
    methods: {
      getHeight() {
        if (process.client) {
          this.clientHeight = (window.screen.availHeight-100)/2
        }
      }
    }
  }
</script>
