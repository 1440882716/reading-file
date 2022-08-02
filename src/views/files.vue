<template>
  <Header></Header>
  <div>
    <pdf-editor
      src="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
    ></pdf-editor>
  </div>
  <Footer></Footer>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { PdfEditor } from "../../packages/"
import { useRouter } from "vue-router"
import Header from "../components/header.vue"
import Footer from "../components/footer.vue"
export default defineComponent({
  components: {
    Header,
    PdfEditor,
    Footer,
  },
  setup() {
    const router = useRouter()
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
    return {
      toDetail,
      toLogin,
    }
  },
})
</script>
<style scoped></style>
