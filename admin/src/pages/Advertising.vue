<template>
  <body>
    <div id="box">
      <div id="box1">
        <img src="../images/设置.png" class="pic" />
        <h5><span class="s1">广告位</span></h5>
      </div>
      <div id="box2">
        <h5><span class="s2">广告投放位置:</span></h5>
        <input type="" name="" id="inp" value="首页导航下方通栏" />
        <img src="../images/箭头%20下.png" id="pic" />
        <h5><span class="s3">媒介类型:</span></h5>
        <input type="" name="" id="inp1" value="图片" />
        <img src="../images/箭头%20下.png" id="pic1" />
        <h5><span class="s4">上传图片:</span></h5>
        <input type="file" name="" id="inp2" value="" />
        <h5><span class="s5">输入广告代码:</span></h5>
        <textarea id="t1"></textarea>
        <router-link tag="button" to="/AdvertisingList" type="button" id="b1"
          >保存</router-link
        >
      </div>
      <div id="box3"></div>
    </div>
  </body>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Advertising",
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
#box {
  display: flex;
}
#box1 {
  width: 100px;
  height: 100px;
}
.pic {
  width: 17px;
  height: 17pz;
  margin-top: 21px;
  margin-left: 19px;
  position: absolute;
}
.s1 {
  width: 54px;
  height: 20px;
  font-size: 10px;
  display: flex;
  margin-left: 42px;
  margin-top: 21px;
}
#box2 {
  display: flex;
  margin-top: 64px;
  margin-left: 30px;
}
#box3 {
  width: 100%;
  height: 1px;
  background-color: #dddddd;
  margin-top: 52px;
  margin-left: -250px;
}
.s2 {
  width: 84px;
  height: 20px;
  display: flex;
  font-size: 10px;
}
#inp {
  width: 122px;
  height: 20px;
  margin-top: -2px;
  margin-left: 5px;
  font-size: 10px;
}
#pic {
  width: 12px;
  height: 12px;
  margin-top: 4px;
  margin-left: -14px;
}
.s3 {
  width: 84px;
  height: 20px;
  display: flex;
  font-size: 10px;
  margin-left: -189px;
  margin-top: 35px;
}
#inp1 {
  width: 45px;
  height: 20px;
  margin-left: -125px;
  margin-top: 32px;
  font-size: 10px;
}
#pic1 {
  width: 12px;
  height: 12px;
  margin-top: 40px;
  margin-left: -14px;
}
.s4 {
  width: 84px;
  height: 20px;
  display: flex;
  font-size: 10px;
  margin-left: -111px;
  margin-top: 70px;
}
#inp2 {
  margin-top: 67px;
  margin-left: -47px;
}
.s5 {
  width: 84px;
  height: 20px;
  display: flex;
  font-size: 10px;
  margin-top: 190px;
  margin-left: -343px;
}
#t1 {
  width: 461px;
  height: 210px;
  margin-top: 102px;
  margin-left: 87px;
  position: absolute;
}
#b1 {
  width: 50px;
  height: 30px;
  margin-top: 325px;
  margin-left: -254px;
}
</style>