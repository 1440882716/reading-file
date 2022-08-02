<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { PdfEditor } from "../packages/"
export default defineComponent({
  name: "App",
  components: {
    PdfEditor,
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
}
</style>
