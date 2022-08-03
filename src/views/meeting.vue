<template>
  <Header></Header>
  <div class="meeting-box box-padding">
    <!-- 进行中的会议 -->
    <div class="on-meeting padding24-l-r relative">
      <img
        class="absolute meeting-tab1"
        src="../assets/imgs/meeting02.png"
        alt=""
      />
      <div class="font14 font-fff absolute to-meeting" @click="toDetail">
        立即进入
      </div>
      <div class="meeting-info">
        <span class="font16 title-color bold600"
          >成都双流区第22届人大代表会议</span
        >
        <div class="m-t-12 font14 gray-title">
          主办单位：<span class="title-color">成都市双流区双流政府人大</span>
        </div>
        <div class="flex-r m-t-12 font14 gray-title">
          <div gray-title>
            会议时间:
            <span class="title-color">2022-07-15 10:00 ~ 2022-07-15 17:00</span>
          </div>
          <div class="m-l-120px">
            会议地点:
            <span class="title-color">成都市双流区双流政府人大会议室</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 会议列表标题 -->
    <div class="meeting-list-nav box-padding m-t-12 relative">
      <span class="font18 bold500 title-color">会议列表</span>
      <img
        class="absolute"
        style="top: 0px; right: 10px"
        src="../assets/imgs/meeting-list.png"
        alt=""
      />
      <div class="flex-r font16 m-t-12">
        <div
          :class="[meetingType == 1 ? 'active' : 'inactive']"
          @click="changeMeeting(1)"
        >
          未开始
        </div>
        <div
          :class="['m-l-20', meetingType == 2 ? 'active' : 'inactive']"
          @click="changeMeeting(2)"
        >
          已结束
        </div>
      </div>
    </div>
    <!-- 会议列表 -->
    <div class="meeting-list">
      <div v-for="item in meetingList">
        <div class="meeting-item relative">
          <div class="meeting-item-tag flex-r">
            <img
              src="../assets/imgs/start-text.png"
              style="
                vertical-align: middle;
                width: 69px;
                height: 24px;
                margin-right: 8px;
              "
              alt=""
            />
            <span
              class="font16 title-color bold600"
              style="vertical-align: middle"
              >成都双流区第22届人大代表会议</span
            >
            <div class="font12 main-red detail-box">查阅详情</div>
          </div>

          <!-- 倒计时 -->
          <div class="count-down absolute flex-r">
            <span class="font12 title-color m-r-17">距离开始时间还剩</span>
            <van-count-down :time="time" style="margin-right: 16px">
              <template #default="timeData">
                <span class="block">{{ timeData.hours }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
          </div>
          <div class="m-t-12 font14 gray-title text-left">
            主办单位：<span class="title-color">成都市双流区双流政府人大</span>
          </div>
          <div class="flex-r m-t-12 font14 gray-title">
            <div gray-title>
              会议时间:
              <span class="title-color"
                >2022-07-15 10:00 ~ 2022-07-15 17:00</span
              >
            </div>
            <div class="m-l-120px">
              会议地点:
              <span class="title-color">成都市双流区双流政府人大会议室</span>
            </div>
          </div>
        </div>
      </div>
      <img src="../assets/imgs/empty.png" style="margin-top: 74px" alt="" />
      <div style="margin-top: 64px">
        <van-divider
          :style="{
            color: '#666666',
            borderColor: '#666666',
            padding: '0 300px',
          }"
          >已经到底了，暂时没有更多内容</van-divider
        >
        <!-- <span class="font16 deep-gray">已经到底了，暂时没有更多内容</span> -->
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>
<script>
import { defineComponent, reactive, toRefs, onMounted, ref } from "vue"
import { NavBar, Icon, Tabbar, TabbarItem, CountDown } from "vant"
import { useRouter, useRoute } from "vue-router"
import Header from "../components/header.vue"
import Footer from "../components/footer.vue"
import { InitData } from "../types/meeting"
export default defineComponent({
  components: {
    NavBar,
    Header,
    Icon,
    Tabbar,
    TabbarItem,
    CountDown,
    Footer,
  },

  setup() {
    const router = useRouter()
    const route = useRoute()
    const data = reactive(new InitData())
    const active = ref(0)
    const toDetail = () => {
      router.push({
        path: "/meetingDetail",
        query: {
          // goodsId: id,
        },
      })
    }
    const toLogin = () => {
      // console.log(route.meta.title)
      // debugger
      router.push({
        path: "/login",
        query: {
          // goodsId: id,
        },
      })
    }
    const changeMeeting = (num) => {
      data.meetingType = num
      // console.log(data.meetingType)
      // debugger
    }
    onMounted(() => {
      data.titleTxt = route.meta.title
    })
    return {
      ...toRefs(data),
      active,
      toDetail,
      toLogin,
      changeMeeting,
    }
  },
})
</script>
<style scoped>
@import "../assets/css/glob.css";
.meeting-box {
  background-color: #f6f6f6;
  /* height: auto; */
  /* height: 100vh; */
  padding-top: 12px;
  margin-bottom: 50px;
}
.on-meeting {
  height: 146px;
  background-image: url(../assets/imgs/meeting01.png);
  background-size: 100% 180px;
  padding-top: 34px;
  /* padding-bottom: 20px; */
}
.meeting-tab1 {
  left: 0;
  top: 0;
}
.meeting-info {
  height: 86px;
  padding: 20px 16px;
  /* margin-top: 34px; */
  background: #ffffff;
  border-radius: 8px 8px 8px 8px;
  opacity: 0.72;
}
.to-meeting {
  width: 104px;
  height: 32px;
  background: #d64533;
  border-radius: 17px 17px 17px 17px;
  top: 50px;
  right: 40px;
  text-align: center;
  line-height: 32px;
  opacity: 1;
  z-index: 2;
}
.meeting-list-nav {
  width: 960px;
  /* height: auto; */
  height: 84px;
  background: linear-gradient(0deg, #ffffff 0%, #fdf1f0 61%, #fbe8e7 100%);
  border-radius: 8px 8px 0px 0px;
  padding-top: 16px;
}
.active {
  width: 80px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  background-image: url(../assets/imgs/nav-bgi.png);
  background-size: 80px 36px;
  color: #ffffff;
}
.inactive {
  width: 80px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  background: #ffffff;
  border-radius: 4px 4px 4px 4px;
  color: #333333;
}
.meeting-list {
  background-color: #ffffff;
  text-align: center;
}
.meeting-item {
  /* width: calc(100% - 32px); */
  padding: 20px 16px;
  border-bottom: 1px solid #f6f6f6;
  /* background-color: aquamarine; */
}
.count-down {
  width: 320px;
  height: 30px;
  line-height: 30px;
  background-image: url(../assets/imgs/time-bgi.png);
  background-size: 320px 30px;
  top: 16px;
  right: 16px;
  /* padding-right: 16px; */
  justify-content: flex-end;
}
/* 倒计时 */
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #d64533;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #d64533;
  border-radius: 3px;
  margin-top: 6px;
}
.meeting-item-tag {
  height: 28px;
  line-height: 28px;
  /* background-color: cadetblue; */
}
.detail-box {
  height: 22px;
  padding: 0px 12px;
  background: #fae8e6;
  text-align: center;
  line-height: 22px;
  border-radius: 11px 11px 11px 11px;
  margin-left: 8px;
  vertical-align: middle;
}
</style>
