<template>
  <div id="login">
    <el-form
      label-width="70px"
      class="login-container"
      ref="form"
      :model="form"
      :rules="rules"
      :inline="true"
    >
      <h3 class="login-title">系统登录</h3>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密  码" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item class="login-button">
        <el-button @click="submit" type="primary">登录</el-button>
      </el-form-item>
    </el-form>
    <el-form
      label-width="70px"
      class="login-container formTwo"
      ref="form"
      :model="form"
      :rules="rules"
      :inline="true"
    >
      <h6>用户1：admin 密码：admin<br />用户2：ZGM 密码：ZGM</h6>
    </el-form>
  </div>
</template>

<script>
import Mock from "mockjs";
import Cookie from "js-cookie";
import { getMenu } from "../api";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    //登录
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          getMenu(this.form).then(({ data }) => {
            // 判断输入用户名和密码是否正确
            if (data.code == 20000) {
              // 将token信息存入cookie用于不同页面间的通信
              Cookie.set("token", data.data.token);
              // 获取菜单的数据，存入store中
              this.$store.commit("setMenu", data.data.menu);
              this.$store.commit("addMenu", this.$router);
              // 跳转到首页
              this.$router.push("/home");
              // 登录成功提示弹窗
              this.$message({
                type: "success",
                message: "欢迎回来!",
              });
            } else {
              this.$message.error(data.data.message);
            }
          });
        } else {
          // 未登录提示弹窗
          this.$message({
            type: "error",
            message: "请登录账号!",
          });
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  width: 350px;
  border: 1px solid #eaeaea;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  box-sizing: border-box;

  .login-title {
    text-align: center;
    margin-bottom: 40px;
    color: #505458;
  }

  .el-input {
    width: 198px;
  }

  .login-button {
    display: flex;
    justify-content: center;
  }
}
.formTwo {
  margin-top: -157px;
  text-align: center;
  color: rgb(80, 84, 88);

  h6 {
    height: 52px;
    align-items: center;
  }
}
</style> 