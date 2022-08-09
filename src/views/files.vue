<template>
  <Header></Header>
  <div class="meeting-box box-padding">
    <div class="meeting-list-nav box-padding relative">
      <span class="font18 bold500 title-color">资料列表</span>
      <img
        class="absolute"
        style="top: 0px; right: 10px"
        src="../assets/imgs/file-icon.png"
        alt=""
      />
      <div class="flex-r font16 m-t-12">
        <div
          :class="[fileType == 1 ? 'active' : 'inactive']"
          @click="changeMeeting(1)"
        >
          最近
        </div>
        <div
          :class="['m-l-20', fileType == 2 ? 'active' : 'inactive']"
          @click="changeMeeting(2)"
        >
          全部
        </div>
      </div>
    </div>
    <div class="file-list flex-r flex-b box-padding">
      <div class="flex-r file-item" v-for="item in fileList">
        <!-- <div class="flex-r file-item"> -->
        <img
          src="../assets/imgs/no-file.png"
          style="width: 94px; height: 114px"
          alt=""
        />
        <div class="file-info">
          <span class="font16 title-color"
            >《关于双流区经济开发区讨论要题》</span
          >
          <div class="font14 flex-r m-t-16 m-b-10">
            <span class="gray-title">相关会议:</span>
            <div class="meeting-title title-color">
              成都双流区第22届人大代表会议
            </div>
            <div class="tag-blue m-l-12" @click="meetingDetail">会议详情</div>
          </div>
          <div class="font14 flex-r">
            <span class="gray-title">会议时间:</span>
            <span class="title-color m-l-10"
              >2022-07-15 10:00 ~ 2022-07-15 17:00</span
            >
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>
<script>
import { defineComponent, reactive, toRefs } from "vue"
// import { Col, Row } from "vant"
import { useRouter } from "vue-router"
import { InitData } from "../types/files"
import Header from "../components/header.vue"
import Footer from "../components/footer.vue"
export default defineComponent({
  components: {
    // Col,
    // Row,
    Header,
    Footer,
  },
  setup() {
    const router = useRouter()
    const data = reactive(new InitData())
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
    const changeMeeting = (num) => {
      data.fileType = num
      // console.log(data.meetingType)
      // debugger
    }
    const meetingDetail = () => {
      router.push({
        path: "/meetingDetail",
        query: {
          // goodsId: id,
        },
      })
    }
    return {
      ...toRefs(data),
      toDetail,
      toLogin,
      changeMeeting,
      meetingDetail,
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
  height: 36px;
  text-align: center;
  line-height: 36px;
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
.file-list {
  background: #ffffff;
  flex-wrap: wrap;
  padding-top: 16px;
}
.file-item {
  width: 47%;
  margin-bottom: 16px;
  /* background-color: cadetblue; */
}
.file-info {
  /* padding: 12px 16px; */
  padding-top: 12px;
  padding-left: 16px;
}
.meeting-title {
  width: 190px;
  height: 19px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 10px;
  /* background-color: teal; */
}
</style>
