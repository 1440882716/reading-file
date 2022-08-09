<template>
  <Header></Header>
  <div>
    <!-- <pdf-editor
      src="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
    ></pdf-editor> -->
  </div>
  <!-- <Footer></Footer> -->
</template>
<script>
import { defineComponent, onMounted, reactive, toRefs } from "vue"
import { InitData } from "../types/files"
import { PdfEditor } from "../../packages/"
import { useRouter } from "vue-router"
import Header from "../components/header.vue"
export default defineComponent({
  components: {
    Header,
    PdfEditor,
  },
  setup() {
    const data = reactive(new InitData())
    const router = useRouter()
    const WPS = require("./static/jwps.es6")
    const toDetail = () => {
      router.push({
        path: "/files",
        query: {
          // goodsId: id,
        },
      })
    }
    const toLogin = () => {
      router.push({
        path: "/login",
        query: {
          // goodsId: id,
        },
      })
    }
    onMounted(() => {
      const wps = WPS.config({
        mode: data.simpleMode ? "simple" : "normal",
        mount: document.querySelector("#app"),
        wpsUrl: url,
      })
      wps.setToken({ token })
      let app = wps.Application
      this.console.log(JSON.stringify(app))
    })
    return {
      ...toRefs(data),
      WPS,
      toDetail,
      toLogin,
    }
  },
})
</script>
<style scoped></style>
