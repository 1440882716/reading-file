<template>
  <header>
    <van-config-provider :theme-vars="themeVars">
      <van-nav-bar left-arrow :title="titleTxt" @click-left="onClickLeft" />
    </van-config-provider>
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
    const themeVars = {
      navBarIconColor: "#333333",
    }
    onMounted(() => {
      data.titleTxt = route.meta.title
    })
    const onClickLeft = () => history.back()
    return {
      ...toRefs(data),
      themeVars,
      onClickLeft,
    }
  },
})
</script>
<style scoped></style>
