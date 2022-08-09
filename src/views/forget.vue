<template>
  <div class="bg-img">
    <div
      class="font28 title-color bold500"
      v-show="findStep == 1 || findStep == 2"
    >
      密码找回
    </div>
    <div class="input-box" v-show="findStep == 1">
      <input
        class="login-ipt"
        type="text"
        v-model="codeLogin.phone"
        placeholder="输入手机号码"
        @keydown.enter.prevent
      />
      <div class="flex-r flex-b m-b-30 code-box">
        <input
          class="login-ipt-code m-t-30"
          type="text"
          placeholder="输入验证码"
        />
        <div class="get-code m-t-30">获取验证码</div>
      </div>
    </div>
    <button
      class="btn-box font16 m-t-30 m-b-20"
      v-show="findStep == 1"
      @click="findStep = 2"
    >
      下一步
    </button>
    <!-- 第二步 -->
    <div class="input-box flex-c" v-show="findStep == 2">
      <input
        class="login-ipt"
        type="password"
        v-model="codeLogin.phone"
        placeholder="新的密码"
        @keydown.enter.prevent
      />
      <input
        class="login-ipt m-t-28"
        type="password"
        v-model="codeLogin.phone"
        placeholder="确认密码"
        @keydown.enter.prevent
      />
    </div>
    <button
      class="btn-box font16 m-t-30 m-b-20"
      v-show="findStep == 2"
      @click="findStep = 3"
    >
      更改密码
    </button>
    <!-- 修改成功 -->
    <div class="flex-c success-box" v-show="findStep == 3">
      <img class="success-icon" src="../assets/imgs/success.png" alt="" />
      <div class="font20 title-color success-text">修改密码成功！</div>
      <button
        class="btn-box font16 m-t-30 m-b-20"
        v-show="findStep == 3"
        @click="toLogin"
      >
        立即登录
      </button>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs, getCurrentInstance } from "vue"
import { InitData } from "../types/login"
import { useRouter } from "vue-router"
import { Toast } from "vant"
export default defineComponent({
  components: {
    Toast,
  },
  setup() {
    const data = reactive(new InitData())
    const router = useRouter()
    const toLogin = () => {
      debugger
      Toast("提示内容")
      //   router.push({
      //     path: "/login",
      //     query: {
      //       // goodsId: id,
      //     },
      //   })
    }
    return {
      ...toRefs(data),
      toLogin,
    }
  },
})
</script>
<style scoped>
@import "../assets/css/glob.css";
.bg-img {
  width: 100%;
  height: 568px;
  background-color: #ffffff;
  margin-top: 38px;
  background-image: url(../assets/imgs/find-pwd.png);
  text-align: center;
  padding-top: 163px;
}
.input-box {
  width: 398px;
  height: 118px;
  margin: 0 auto;
  margin-top: 64px;
  margin-bottom: 54px;
  /* background-color: bisque; */
}
.login-ipt {
  width: 384px;
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
  margin: 0 auto;
}
.login-ipt-code {
  width: 254px;
  height: 40px;
  line-height: 40px;
  border-radius: 22px;
  border: 1px solid #f7f7f7;
  background: #f7f7f7;
  text-align: left;
  padding-left: 10px;
}
.get-code {
  width: 118px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 40px 40px 40px 40px;
  border: 1px solid #d64533;
  color: #d64533;
}
.code-box {
  width: 398px;
  /* background-color: teal; */
}
.success-box {
  /* background-color: teal; */
  padding-top: 43px;
  text-align: center;
}
.success-icon {
  width: 110px;
  height: 110px;
  margin: 0 auto;
  margin-bottom: 23px;
}
.success-text {
  text-align: center;
  margin-bottom: 73px;
}
</style>
