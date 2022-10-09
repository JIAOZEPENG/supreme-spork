<template>
  <body>
    <div id="bj">
      <div class="a"></div>
      <p class="b">添加新会员</p>
    </div>
    <hr />
    <table border="0" width="100%" height="191px" cellspacing="0">
      <tr>
        <td class="mm">
          <span class="aa">会员昵称：</span>
        </td>
        <td><input type="text" name="" id="" value="" /></td>
      </tr>
      <tr>
        <td class="mm">
          <span class="bb">会员邮箱：</span>
        </td>
        <td><input type="text" name="" id="" value="" /></td>
      </tr>
      <tr>
        <td class="mm">
          <span class="cc">设置密码：</span>
        </td>

        <td><input type="text" name="" id="" value="" /></td>
      </tr>
      <tr>
        <td class="mm">
          <span class="dd">手机号码：</span>
        </td>
        <td><input type="text" name="" id="" value="" /></td>
      </tr>
      <tr>
        <td class="mm"></td>
        <td><button type="button">添加新用户</button></td>
      </tr>
    </table>
  </body>
</template>

<script>
export default {
  name: "AddUser",
};
</script>

<style scoped>
body {
  position: absolute;
  top: 76px;
  left: 163px;
  width: calc(100% - 179px);
  height: calc(100% - 92px);
  background: #fff;
  padding: 8px;
}
.a {
  width: 23px;
  height: 23px;
  background-image: url("../images/admin_bg.png");
  background-position: -124px -42px;
  float: left;
}
.mm {
  width: 200px;
}
tr,
td {
  border: 1px solid gray;
}
.aa {
  left: 120px;
  top: 102px;
  position: absolute;
}
.bb {
  left: 120px;
  top: 140px;
  position: absolute;
}
.cc {
  left: 120px;
  top: 178px;
  position: absolute;
}
.dd {
  left: 120px;
  top: 215px;
  position: absolute;
}
</style>