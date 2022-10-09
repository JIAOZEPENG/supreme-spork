<template>
  <body>
    <div id="a1">
      <div class="a"></div>
      <div class="b">添加会员等级</div>
      <router-link to="/UserRank">
        <div class="hh">返回等级列表</div></router-link
      >
    </div>
    <hr />
    <div id="a2">
      <div class="c1">
        <div class="c2 c3">会员等级名称：</div>
        <div class="c2"><input type="text" /></div>
      </div>
      <div class="c1 c5">
        <div class="c2 c3">会员等级图标：</div>
        <div class="c2"><input type="file" /></div>
      </div>
      <div class="c1">
        <div class="c2 c3">会员等级折扣：</div>
        <div class="c2"><input class="c6" type="text" /></div>
      </div>
      <div class="c1">
        <div class="c2 c3 c8">会员类型组：</div>
        <div class="c2">
          <div class="divs"><input class="c9" type="checkbox" /></div>
          <div class="sp">是否为特殊会员组</div>
        </div>
      </div>
      <div class="c1">
        <div class="c2 c3"></div>
        <div class="c2"><button class="c7">确认</button></div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  naem: "AddUserRank",
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
* {
  font-size: 12px;
}
.a {
  width: 23px;
  height: 23px;
  background-image: url("../images/admin_bg.png");
  background-position: -95px -42px;
  float: left;
  margin-top: 8px;
}
.b {
  float: left;
  margin-top: 15px;
}
#a1 {
  height: 30px;
  border-top: 1px solid #ccc;
}
#a2 {
  /* border: 1px solid yellow; */
  margin-left: 180px;
}
.c2 {
  float: left;
}
.c3 {
  margin-top: 2px;
}
.c1 {
  width: 310px;
  height: 30px;
  overflow: hidden;
}
.c5 {
  width: 320px;
}
.c6 {
  width: 50px;
}
.c7 {
  margin-left: 85px;
}
.c8 {
  margin-left: 12px;
}
.divs {
  float: left;
  margin-top: 2px;
}
.sp {
  margin-top: 3px;
  width: 130px;
}
.hh {
  float: right;
  height: 20px;
  background: #96aecd;
  margin-top: 10px;
  width: 90px;
  line-height: 20px;
  text-align: center;
  margin-right: 5px;
  color: #fff;
}
</style>