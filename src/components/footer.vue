<template>
  <van-tabbar
    v-model="active"
    @change="changeFun"
    route
    active-color="#D64533"
    inactive-color="#999999 "
  >
    <van-tabbar-item to="/">
      <span>会议</span>
      <template #icon="props">
        <!-- <img
          v-if="(props.active = 0)"
          src="../assets/imgs/meeting1.png"
          alt=""
        />
        <img v-else src="../assets/imgs/meeting0.png" alt="" /> -->
        <img
          :src="
            props.active
              ? 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png'
              : 'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png'
          "
        />
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/files">
      <span>文件</span>
      <template #icon="props">
        <!-- <img v-if="(props.active = 1)" src="../assets/imgs/file1.png" alt="" />
        <img v-else src="../assets/imgs/file0.png" alt="" /> -->
        <img
          :src="
            props.active
              ? 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png'
              : 'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png'
          "
        />
      </template>
    </van-tabbar-item>
  </van-tabbar>
  <!-- <router-view /> -->
</template>
<script>
import { defineComponent, reactive, toRefs, onMounted, ref } from "vue"
import { Tabbar, TabbarItem, Icon } from "vant"
import { useRoute } from "vue-router"
export default defineComponent({
  components: {
    Tabbar,
    TabbarItem,
    // Icon,
  },
  //  const props = defineProps({
  //     tabIndex
  // })
  setup() {
    const route = useRoute()

    // const icon = [
    //   {
    //     active: "https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png",
    //     inactive:
    //       "https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png",
    //   },
    //   {
    //     active: "https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png",
    //     inactive:
    //       "https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png",
    //   },
    // ]
    const icon = {
      active: "https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png",
      inactive:
        "https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png",
    }
    // const active = ref(0)
    const active = () => {
      if (route.path == "/") {
        return 0
      } else if (route.path == "/files") {
        return 1
      }
    }
    const changeFun = (item) => {
      //   console.log(item)
      //   console.log(active)
    }
    return {
      icon,
      active,
      changeFun,
    }
  },
})
</script>
<style scoped></style>
