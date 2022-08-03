<template>
  <div class="bg-img">
    <div class="font28 title-color bold500">密码找回</div>
    <div class="input-box">
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
    <button class="btn-box font16 m-t-30 m-b-20" @click="login">下一步</button>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from "vue"
import { InitData } from "../types/login"
export default defineComponent({
  setup() {
    const data = reactive(new InitData())
    return {
      ...toRefs(data),
    }
  },
})
</script>
<style scoped>
@import "../assets/css/glob.css";
.bg-img {
  width: 100%;
  height: 730px;
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
  margin-top: 40px;
  margin-bottom: 34px;
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
</style>
