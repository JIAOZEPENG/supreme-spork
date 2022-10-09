<template>
  <body>
    <div id="box">
      <div id="box1">
        <img src="../images/设置.png" class="pic" />
        <h5><span class="s1">站点设置</span></h5>
      </div>
      <div id="box2">
        <h5><span class="s2">站点名称:</span></h5>
        <input type="" id="inp" value="" />
        <br />
        <h5><span class="s3">关键词设置:</span></h5>
        <input type="" id="inp1" value="" />
        <h5><span class="s4">站点描述:</span></h5>
        <input type="" id="inp2" value="" />
        <h5><span class="s5">ICP备案号:</span></h5>
        <input type="" id="inp3" value="" />
        <h5><span class="s6">公司名称:</span></h5>
        <input type="" id="inp4" value="" />
        <h5><span class="s7">电子邮件:</span></h5>
        <input type="" id="inp5" value="" />
        <h5><span class="s8">联系电话:</span></h5>
        <input type="" id="inp6" value="" />
        <h5><span class="s9">关闭站点:</span></h5>
        <input type="radio" id="inp7" value="" name="na"/>
        <span class="nan">是</span>
        <input type="radio" id="inp8" value="" name="na"/>
        <span class="nan">否</span>
        <h5><span class="s10">关闭站点提示:</span></h5>
        <textarea id="t1">网站正在检测中...</textarea>
        <button type="button" id="b1">保存</button>
      </div>
    </div>
    <div id="box4"></div>
  </body>
</template>

<script>
export default {
  name: "BasicSettings",
};
</script>

<style scoped>
body {
  position: absolute;
  top: 76px;
  left: 163px;
  width: calc(100% - 165px);
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
  margin-top: 22px;
  margin-left: 18px;
  position: absolute;
}
.s1 {
  width: 54px;
  height: 20px;
  font-size: 10px;
  display: flex;
  margin-left: 39px;
  margin-top: 24px;
}
#box2 {
  display: flex;
  margin-top: 60px;
  margin-left: 30px;
}
.s2 {
  width: 55px;
  height: 20px;
  display: flex;
  font-size: 10px;
  margin-left: 10px;
  margin-top: 10px;
}
#inp {
  width: 292px;
  height: 20px;
  margin-left: 10px;
  margin-top: 10px;
}
#box3 {
  width: 100px;
  height: 100px;
  background-color: skyblue;
  margin-top: 83px;
  margin-left: 20px;
}
.s3 {
  width: 74px;
  height: 20px;
  display: flex;
  font-size: 10px;
  margin-top: 50px;
  margin-left: -373px;
}
#inp1 {
  width: 292px;
  height: 20px;
  margin-left: -295px;
  margin-top: 45px;
}
.s4 {
  width: 55px;
  height: 20px;
  display: flex;
  font-size: 10px;
  margin-top: 85px;
  margin-left: -362px;
}
#inp2 {
  width: 292px;
  height: 20px;
  margin-top: 80px;
  margin-left: -295px;
}
.s5 {
  width: 64px;
  height: 20px;
  display: flex;
  font-size: 10px;
  margin-top: 120px;
  margin-left: -372px;
}
#inp3 {
  width: 220px;
  height: 20px;
  margin-top: 115px;
  margin-left: -296px;
}
.s6 {
  width: 55px;
  height: 20px;
  display: flex;
  font-size: 10px;
  margin-top: 155px;
  margin-left: -291px;
}
#inp4 {
  display: flex;
  width: 292px;
  height: 20px;
  margin-top: 150px;
  margin-left: -224px;
}
.s7 {
  width: 55px;
  height: 20px;
  display: flex;
  font-size: 10px;
  margin-top: 189px;
  margin-left: -363px;
}
#inp5 {
  width: 220px;
  height: 20px;
  margin-top: 185px;
  margin-left: -295px;
}
.s8 {
  width: 55px;
  height: 20px;
  display: flex;
  font-size: 10px;
  margin-top: 222px;
  margin-left: -292px;
}
#inp6 {
  width: 220px;
  height: 20px;
  margin-top: 220px;
  margin-left: -223px;
}
.s9 {
  width: 55px;
  height: 20px;
  display: flex;
  font-size: 10px;
  margin-top: 262px;
  margin-left: -292px;
}
#inp7 {
  margin-top: 265px;
  margin-left: -226px;
}
#inp8 {
  margin-top: 265px;
  margin-left: 7px;
}
.nan {
  margin-top: 260px;
  margin-left: -2px;
  font-size: 13px;
}
.s10 {
  width: 84px;
  height: 20px;
  display: flex;
  font-size: 10px;
  margin-top: 365px;
  margin-left: -151px;
}
#t1 {
  width: 461px;
  height: 210px;
  margin-top: 290px;
  margin-left: 78px;
  position: absolute;
}

#xian {
  background-color: red;
}
#box4 {
  width: 100%;
  height: 1px;
  display: flex;
  background-color: #dddddd;
  margin-top: -550px;
  margin-left: 2px;
}
#b1 {
  width: 50px;
  height: 30px;
  margin-top: 512px;
  margin-left: -60px;
}
</style>