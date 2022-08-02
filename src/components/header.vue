<template>
  <header>
    <van-nav-bar :title="titleTxt" />
  </header>
</template>
<script>
import { defineComponent, reactive, toRefs, onMounted } from "vue"
import { NavBar } from "vant"
import { useRoute } from "vue-router"
import { InitData } from "../types/meeting"
export default defineComponent({
  components: {
    NavBar,
  },
  setup() {
    const route = useRoute()
    const data = reactive(new InitData())
    onMounted(() => {
      data.titleTxt = route.meta.title
    })
    return {
      ...toRefs(data),
    }
  },
})
</script>
<style scoped></style>
