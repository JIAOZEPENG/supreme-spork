<template>
  <body>
    <div id="app">
      <div id="top">
        <div id="top_img"></div>
        <div id="zi_left">用户资金变动明细</div>
        <div id="zi_right">
          <button id="zi_button">
            当前用户："DeathGhost",可用资金￥50000.00
          </button>
        </div>
      </div>
      <div id="botton">
        <table cellspacing="0px" cellpadding="0px">
          <thead>
            <tr>
              <td class="yz">变动服务项目</td>
              <td class="yz">账户变动时间</td>
              <td class="yz">可用资金账户</td>
              <td class="yz">冻结资金账户</td>
              <td class="yz">账户变动原因</td>
            </tr>
          </thead>
          <tbody>
            <tr class="y">
              <td class="yz">201504182513</td>
              <td class="img yz">2015-04-18</td>
              <td class="yz">-￥139.00</td>
              <td class="yz">-￥10.00</td>
              <td>订单付款</td>
            </tr>
            <tr :class="index % 2 == 1 ? 'one' : 'two'">
              <td class="yz">充值</td>
              <td class="img yz">2015-04-18</td>
              <td class="yz">-￥200.00</td>
              <td class="yz">-￥10.00</td>
              <td>充值</td>
            </tr>
            <tr class="y">
              <td class="yz">管理员/系统操作</td>
              <td class="img yz">2015-04-18</td>
              <td class="yz">-￥20.00</td>
              <td class="yz">-￥10.00</td>
              <td>平台入驻冻结保证金，操作员：***</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="tw">
        <div id="zuo"></div>
        <div id="you">
          <button>第一页</button>
          <button>1</button>
          <button>最后一页</button>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "AccountDetails",
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
#app {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  align-content: flex-start;
}

#top {
  width: 100%;
  height: 50px;
  border: 1px solid #e4e4e4;
}

#botton {
  display: flex;
  width: 100%;
  margin-top: 10px;
  background: #fff;
  float: left;
}

#top_img {
  background: url("../images/admin_bg.png") no-repeat -185px -40px;
  width: 23px;
  height: 23px;
  margin-top: 20px;
  margin-left: 5px;
  float: left;
}

#zi_left {
  float: left;
  font-size: 12px;
  width: 100px;
  height: 20px;
  margin-top: 28px;
  margin-left: 5px;
}

table {
  font-size: 12px;
  width: 100%;
}

td {
  border: 1px solid #dfdfdf;
  font-size: 12px;
}

tr {
  height: 38px;
}

#tw {
  float: left;
  width: 100%;
}

#zuo {
  float: left;
  margin-top: 10px;
}

#zuo button {
  background: #555555;
  color: #fff;
}

#you {
  float: right;
  margin-top: 10px;
}

#you button {
  background: #96aecd;
  color: #fff;
  border: 1px solid #96aecd;
}

img {
  width: 30px;
  height: 30px;
}

.yz {
  text-align: center;
}

.two {
  background: #f1f1f1;
  border: 1px solid #e5e5e5;
  color: #3d3d3d;
}

.one {
  background: #fff;
  border: 1px solid #e5e5e5;
  color: #3d3d3d;
}

#zi_right {
  float: right;
}

#zi_button {
  font-size: 12px;
  margin-top: 20px;
  margin-right: 5px;
  background: #96aecd;
  color: #fff;
  border: 1px solid #96aecd;
}

.img1 {
  background: url("../images/no.gif") no-repeat;
  background-position: center center;
}

.img2 {
  background: url("../images/yes.gif") no-repeat;
  background-position: center center;
}

.xiao {
  width: 12px;
  height: 12px;
}
.y {
  background: #ccc;
}
</style>