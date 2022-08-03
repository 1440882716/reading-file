<template>
  <div class="bg-color">
    <div class="bg-left">
      <img src="../assets/imgs/login-left.png" alt="" />
    </div>
    <div class="bg-right">
      <span class="login-title font28 title-color bold500">会议阅文系统</span>
      <!-- 账号密码登录 -->
      <div class="input-box" v-if="loginType == 1">
        <!-- <input class="login-ipt" type="number" placeholder="输入手机号码" /> -->
        <n-input
          class="login-ipt"
          type="text"
          v-model:value="loginForm.phone"
          placeholder="输入手机号码"
          @keydown.enter.prevent
        />
        <n-input
          class="login-ipt m-t-30"
          type="text"
          v-model:value="loginForm.password"
          placeholder="输入登录密码"
          @keydown.enter.prevent
        />

        <div class="text-right note-color font14 m-t-10" @click="forgetPwd">
          忘记密码
        </div>
        <button class="btn-box font16 m-t-30 m-b-20" @click="login">
          登录
        </button>
        <span class="font14 gray-color" @click="loginType = 2"
          >手机验证码登录</span
        >
      </div>
      <!-- 手机验证码登录 -->
      <div class="input-box" v-if="loginType == 2">
        <n-input
          class="login-ipt"
          type="text"
          v-model:value="loginForm.phone"
          placeholder="输入手机号码"
          @keydown.enter.prevent
        />
        <div class="flex-r flex-b m-b-30">
          <n-input
            class="login-ipt-code m-t-30"
            type="text"
            v-model:value="loginForm.password"
            placeholder="输入验证码"
            @keydown.enter.prevent
          />
          <div class="get-code m-t-30">获取验证码</div>
        </div>

        <button class="btn-box font16 m-t-30 m-b-20" @click="login">
          登录
        </button>
        <span class="font14 gray-color" @click="loginType = 1"
          >账号密码登录</span
        >
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from "vue"
import { NForm, NInput } from "naive-ui"
import { InitData } from "../types/login"
import { useRouter } from "vue-router"
export default defineComponent({
  components: {
    NForm,
    NInput,
    // useMessage,
  },
  setup() {
    const router = useRouter()
    const data = reactive(new InitData())
    // const message = useMessage()
    const login = () => {
      console.log(data.loginForm)
      router.push({
        path: "/",
        query: {
          // goodsId: id,
        },
      })

      //   let phoneReg = /(^1\d{10}$)|(^[0-9]\d{7}$)/
      //   if (!phoneReg.test(data.loginForm.phone)) {
      //     // console.log("输入的格式错误，请重新输入")
      //   } else {
      //     router.push({
      //       path: "/",
      //       query: {
      //         // goodsId: id,
      //       },
      //     })
      //   }
    }
    const forgetPwd = () => {
      router.push({
        path: "/forget",
        query: {
          // goodsId: id,
        },
      })
    }
    // const changeLogin = (2) => {

    // }
    return {
      ...toRefs(data),
      //   message,
      forgetPwd,
      login,
    }
  },
})
</script>
<style scoped>
@import "../assets/css/glob.css";
.bg-color {
  width: 100%;
  height: 100%;
  display: flex;
  background: #ffffff;
}
.bg-right {
  width: calc(100% - 380px);
  margin-top: 54px;
  background-image: url(../assets/imgs/login-bg.png);
  background-size: 100% 714px;
  text-align: center;
  padding-top: 116px;
}
.login-title {
  margin: 0 auto;
}
.input-box {
  width: 398px;
  margin: 0 auto;
  margin-top: 40px;
  /* background-color: bisque; */
}
.login-ipt {
  width: 396px;
  height: 42px;
  line-height: 42px;
  background: #f7f7f7;
  border-radius: 20px 20px 20px 20px;
  text-align: left;
  border: none;
  padding-left: 10px;
}
.btn-box {
  width: 396px;
  height: 44px;
  background: #d64533;
  border-radius: 20px 20px 20px 20px;
  border: none;
  color: #ffffff;
}
.login-ipt-code {
  width: 250px;
  height: 42px;
  line-height: 42px;
  border-radius: 22px;
  border: 1px solid #f7f7f7;
  background: #f7f7f7;
  text-align: left;
  padding-left: 10px;
}
.get-code {
  width: 130px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 40px 40px 40px 40px;
  border: 1px solid #d64533;
  color: #d64533;
}
</style>
