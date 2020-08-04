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
    <v-footer style="margin-top: 60px">
      <design-footer></design-footer>
    </v-footer>
  </v-app>
</template>

<script>
  import DesignHeader from "~/layouts/DesignHeader/index";
  import DesignFooter from "~/layouts/DesignFooter/index";

  export default {
    components: {DesignFooter, DesignHeader},
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
