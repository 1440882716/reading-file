<template>
  <div style="display: flex">
    <div @click="">会议</div>
    <div @click="toDetail">文件</div>
    <div @click="toLogin">登录</div>
  </div>

  <div>导航栏</div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
// import { PdfEditor } from "../../packages/"
import { useRouter } from "vue-router"
export default defineComponent({
  components: {
    // PdfEditor,
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
