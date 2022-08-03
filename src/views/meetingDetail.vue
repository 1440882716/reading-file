<template>
  <Header></Header>
  <div class="meeting-box box-padding">
    <div class="on-meeting padding24-l-r relative">
      <!-- 会议状态图标 -->
      <!-- 未开始 -->
      <!-- <img
        class="absolute meeting-tab1"
        src="../assets/imgs/meeting-tag1.png"
        alt=""
      /> -->
      <!-- 即将开始 -->
      <!-- <img
        class="absolute meeting-tab1"
        src="../assets/imgs/meeting-tag2.png"
        alt=""
      /> -->
      <!-- 进行中 -->
      <img
        class="absolute meeting-tab1"
        src="../assets/imgs/meeting02.png"
        alt=""
      />

      <!-- <div class="font14 font-fff absolute to-meeting">立即进入</div> -->
      <div class="meeting-info relative">
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
    <!-- 会议文件列表 -->
    <div class="files-content box-padding">
      <div class="file-title font18 title-color">会议文件</div>
      <div v-for="item in meetingList" @click="toFileDetail">
        <div class="file-item flex-r">
          <img src="../assets/imgs/pdf-icon.png" alt="" />
          <span class="font14 title-color"
            >关于《成都双流区第22届人大代表会议》会议通知</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from "vue"
import { useRouter } from "vue-router"
import Header from "../components/header.vue"
import { InitData } from "../types/meeting"
export default defineComponent({
  components: {
    Header,
  },
  setup() {
    const router = useRouter()
    const data = reactive(new InitData())
    const toFileDetail = () => {
      router.push({
        path: "/fileDetail",
        query: {
          // goodsId: id,
        },
      })
    }
    return {
      ...toRefs(data),
      toFileDetail,
    }
  },
})
</script>
<style scoped>
@import "../assets/css/glob.css";
.meeting-box {
  background-color: #f6f6f6;
  /* height: auto; */
  height: 100vh;
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
.files-content {
  background: #ffffff;
  border-radius: 8px;
  margin-top: 12px;
  padding-top: 20px;
  padding-bottom: 17px;
}
.file-title {
  margin-bottom: 17px;
}
.file-item {
  /* width: 100%; */
  padding: 10px 15px;
  background-color: #fbfbfe;
  margin-bottom: 12px;
  line-height: 28px;
  border-radius: 4px 4px 4px 4px;
}
.count-down {
  width: 320px;
  height: 30px;
  line-height: 30px;
  background-image: url(../assets/imgs/time-bgi.png);
  background-size: 320px 30px;
  top: 0px;
  right: 0px;
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
</style>
