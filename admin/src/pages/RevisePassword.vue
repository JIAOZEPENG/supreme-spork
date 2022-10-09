<template>
  <body>
    <div id="bj">
      <div class="a">
        <p class="b">修改密码</p>
      </div>
      <hr />
      <div>
        <span class="c">账号：</span>
        <input type="text" class="d" />
      </div>
      <div>
        <span class="e">邮箱：</span>
        <input type="text" class="f" />
      </div>
      <div>
        <span class="g">旧密码：</span>
        <input type="text" class="h" />
      </div>
      <div>
        <span class="i">新密码：</span>
        <input type="text" class="j" />
      </div>
      <div>
        <span class="k">在次确认密码：</span>
        <input type="text" class="l" />
      </div>
      <button type="button" class="m">保存</button>
    </div>
  </body>
</template>

<script>
export default {
  name: "RevisePassword",
};
</script>

<style scoped>
body {
  position: absolute;
  top: 76px;
  left: 163px;
  width: calc(100% - 163px);
  height: calc(100% - 76px);
  background: #fff;
}
.a {
  width: 23px;
  height: 23px;
  background-image: url("../images/admin_bg.png");
  background-position: -92px -44px;
}
.b {
  left: 40px;
  top: 1px;
  font-size: 12px;
  font-weight: 600;
  position: absolute;
}
.c {
  top: 113px;
  left: 212px;
  position: absolute;
}
.d {
  top: 113px;
  left: 270px;
  position: absolute;
}
.e {
  top: 150px;
  left: 212px;
  position: absolute;
}
.f {
  top: 150px;
  left: 270px;
  position: absolute;
}
.g {
  top: 187px;
  left: 196px;
  position: absolute;
}
.h {
  top: 187px;
  left: 270px;
  position: absolute;
}
.i {
  top: 223px;
  left: 196px;
  position: absolute;
}
.j {
  top: 223px;
  left: 270px;
  position: absolute;
}
.k {
  top: 260px;
  left: 148px;
  position: absolute;
}
.l {
  top: 260px;
  left: 270px;
  position: absolute;
}
.m {
  top: 290px;
  left: 270px;
  position: absolute;
}
</style>