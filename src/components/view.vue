<template>
  <div id="viewFile"></div>
</template>
<script>
import { defineComponent, onMounted, reactive, toRefs } from "vue"
import { InitData } from "../types/files"
export default defineComponent({
  props: ["wpsUrl", "token"],
  setup() {
    const data = reactive(new InitData())
    const router = useRouter()
    const WPS = require("./static/jwps.es6")
    onMounted(() => {
      const wps = WPS.config({
        mode: data.simpleMode ? "simple" : "normal",
        mount: document.querySelector("#app"),
        wpsUrl: wpsUrl,
      })
      wps.setToken({ token })
      let app = wps.Application
      this.console.log(JSON.stringify(app))
    })
    return {
      ...toRefs(data),
      WPS,
    }
  },
})
</script>
