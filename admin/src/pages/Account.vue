<template>
  <body>
    <div id="box">
      <div id="box1">
        <h5><p id="zi">会员列表</p></h5>
        <img src="1.png" id="pic" />
      </div>
      <div id="box2">
        <p id="zi1">当前会员:DeathGhost</p>
        <p id="zi2">账户变动原因:</p>
        <textarea id="k"></textarea>
        <p id="zi3">可用资金账户:</p>
        <input type="" name="" id="inp" value="增加" />
        <img src="2.png" id="pic1" />
        <input type="" name="" id="inp1" value="" />
        <p id="zi4">￥0.00</p>
        <p id="zi5">冻结资金账户:</p>
        <input type="" name="" id="inp2" value="增加" />
        <img src="2.png" id="pic2" />
        <input type="" name="" id="inp3" value="" />
        <p id="zi6">￥0.00</p>
        <input type="" name="" id="inp4" value="确认" />
        <input type="" name="" id="inp5" value="重置" />
      </div>
      <div id="box3">
        <router-link to="/AccountDetails" tag="button" id="enter"
          >资金变动明细</router-link
        >
      </div>
      <div id="box4">

      </div>
    </div>
  </body>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Account",
};
</script>

<style scoped>
body {
  position: absolute;
  top: 76px;
  left: 163px;
  width: calc(100% - 179px);
  height: calc(100% - 102px);
  background: #fff;
  padding: 8px;
}
* {
  margin-top: 10px;
}
#box {
  width: 100%;
  height: 800px;
  /* background:red; */
  display: flex;
}
#box1 {
  width: 100px;
  height: 50px;
  /* background:blue; */
  display: flex;
}
#pic {
  width: 25px;
  height: 25px;
  margin-top: -8px;
  margin-left: -224px;
  display: flex;
}
#zi {
  font-size: 17px;
  margin-top: -20px;
  margin-left: 25px;
  display: flex;
  width: 200px;
  height: 250px;
}
#enter {
  width: 96px;
  height: 22px;
  background: steelblue;
  font-size: 8px;
  margin-top: 0px;
  margin-left: 576px;
}
#box2 {
  width: 500px;
  height: 450px;
  /* background:yellow; */
  margin-top: 50px;
  margin-left: 50px;
}
#zi2 {
  font-size: 15px;
  margin-top: 50px;
  margin-left: -30px;
  display: flex;
  width: 200px;
  height: 250px;
}
#zi1 {
  font-size: 15px;
}
#k {
  width: 285px;
  height: 105px;
  margin-top: -295px;
  margin-left: 66px;
  display: flex;
  /* position:absolute; */
}
#zi3 {
  font-size: 15px;
  margin-top: 15px;
  margin-left: -30px;
  display: flex;
  width: 200px;
  height: 250px;
}
#inp {
  height: 20px;
  width: 45px;
  margin-top: -251px;
  margin-left: 66px;
  display: flex;
}
#pic1 {
  width: 14px;
  height: 17px;
  margin-top: -20px;
  margin-left: 100px;
  display: flex;
}
#inp1 {
  height: 20px;
  width: 60px;
  margin-top: -21px;
  margin-left: 122px;
  display: flex;
}
#zi4 {
  font-size: 15px;
  margin-top: -23px;
  margin-left: 192px;
  display: flex;
  width: 200px;
  height: 250px;
}
#zi5 {
  font-size: 15px;
  margin-top: -220px;
  margin-left: -30px;
  display: flex;
  width: 200px;
  height: 250px;
}
#inp2 {
  height: 20px;
  width: 45px;
  margin-top: -249px;
  margin-left: 66px;
  display: flex;
}
#pic2 {
  width: 14px;
  height: 17px;
  margin-top: -21px;
  margin-left: 100px;
  display: flex;
}
#inp3 {
  height: 20px;
  width: 60px;
  margin-top: -20px;
  margin-left: 122px;
  display: flex;
}
#zi6 {
  font-size: 15px;
  margin-top: -23px;
  margin-left: 192px;
  display: flex;
  width: 200px;
  height: 250px;
}
#inp4 {
  height: 20px;
  width: 27px;
  margin-top: -224px;
  margin-left: 66px;
  display: flex;
}
#inp5 {
  height: 20px;
  width: 28px;
  margin-top: -24px;
  margin-left: 104px;
  display: flex;
}
#box4{
  width:100%;
  height:1px;
  background:gray;
  margin-top:34px;
  margin-left:-1320px;
}
</style>