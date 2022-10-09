<template>
  <body>
    <div id="app">
      <div id="top">
        <div id="con_top">
          <div id="con"></div>
          <div id="hy">会员等级</div>
          <router-link to="/AddUserRank"
            ><div id="tj">+添加会员等级</div></router-link
          >
        </div>
      </div>
      <div id="bottom">
        <div id="con_bottom">
          <table border="0" cellspacing="0" cellpadding="0">
            <tbody id="dk">
              <tr
                style="background-color: #fff; font-weight: bold"
                align="middle"
                height="30px"
              >
                <td width="500px">会员类型</td>
                <td width="300px">等级图标</td>
                <td width="400px">等级名称</td>
                <td width="400px">等级折扣</td>
                <td width="150px">操作</td>
              </tr>
              <tr class="bb" align="middle" height="40px">
                <td align="left">
                  <img
                    style="padding-left: 5px; float: left"
                    src="../images/user_02.png"
                  />
                  <div
                    style="
                      float: left;
                      font-size: 12px;
                      margin-left: 5px;
                      margin-top: 2px;
                    "
                  >
                    普通用户组
                  </div>
                </td>
                <td>
                  <img
                    style="width: 25px; height: 25px"
                    src="../images/djtb.jpg"
                    alt=""
                  />
                </td>
                <td>普通会员</td>
                <td>88%</td>
                <td>
                  <img
                    class="ab ty"
                    src="../images/icon_drop.gif"
                    alt=""
                    title="删除"
                  />
                </td>
              </tr>
              <tr
                style="background-color: #fff"
                class="bb"
                align="middle"
                height="40px"
              >
                <td>
                  <img
                    style="padding-left: 5px; float: left"
                    src="../images/user_01.png"
                  />
                  <div
                    style="
                      float: left;
                      font-size: 12px;
                      margin-left: 5px;
                      margin-top: 2px;
                    "
                  >
                    特殊用户组
                  </div>
                </td>
                <td>
                  <img
                    style="width: 25px; height: 25px"
                    src="../images/djtb.jpg"
                    alt=""
                  />
                </td>
                <td>商户会员</td>
                <td>85%</td>
                <td>
                  <img
                    class="ab ty"
                    src="../images/icon_drop.gif"
                    alt=""
                    title="删除"
                  />
                </td>
              </tr>
              <tr class="bb" align="middle" height="40px">
                <td align="left">
                  <img
                    style="padding-left: 5px; float: left"
                    src="../images/user_02.png"
                  />
                  <div
                    style="
                      float: left;
                      font-size: 12px;
                      margin-left: 5px;
                      margin-top: 2px;
                    "
                  >
                    普通用户组
                  </div>
                </td>
                <td>
                  <img
                    style="width: 25px; height: 25px"
                    src="../images/djtb.jpg"
                    alt=""
                  />
                </td>
                <td>普通会员</td>
                <td>88%</td>
                <td>
                  <img
                    class="ab ty"
                    src="../images/icon_drop.gif"
                    alt=""
                    title="删除"
                  />
                </td>
              </tr>
              <tr
                style="background-color: #fff"
                class="bb"
                align="middle"
                height="40px"
              >
                <td>
                  <img
                    style="padding-left: 5px; float: left"
                    src="../images/user_01.png"
                  />
                  <div
                    style="
                      float: left;
                      font-size: 12px;
                      margin-left: 5px;
                      margin-top: 2px;
                    "
                  >
                    特殊用户组
                  </div>
                </td>
                <td>
                  <img
                    style="width: 25px; height: 25px"
                    src="../images/djtb.jpg"
                    alt=""
                  />
                </td>
                <td>商户会员</td>
                <td>85%</td>
                <td>
                  <img
                    class="ab ty"
                    src="../images/icon_drop.gif"
                    alt=""
                    title="删除"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "UserRank",
};
</script>

<style scoped>
body {
  position: absolute;
  top: 76px;
  left: 163px;
  width: calc(100% - 179px);
  height: calc(100% - 96px);
  background: #fff;
  padding: 8px;
}
* {
  margin: 0;
  padding: 0;
}

#top {
  width: 100%;
  /* background-color: red; */
}

#con_top {
  width: 97%;
  height: 50px;
  border-bottom: 1px solid #ccc;
  margin: 0 auto;
  margin-top: 12px;
  /* background: plum; */
}

#con {
  width: 30px;
  height: 50px;
  float: left;
  margin-left: -4px;
  background: url(../images/admin_bg.png) no-repeat -90px -20px;
}

#hy {
  float: left;
  margin: 24px 5px;
  font-size: 13px;
  font-weight: 550;
}

#bottom {
  width: 100%;
}

#con_bottom {
  width: 97%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  /* background-color: plum; */
  margin-top: 10px;
  font-size: 12px;
}

table {
  border-collapse: collapse;
}
tr {
  background-color: #f1f1f1;
  border: 1px solid #dddddd;
}

td {
  border: 1px solid #dddddd;
}
:hover .ty {
  cursor: pointer;
}
#tj {
  float: right;
  font-size: 12px;
  width: 90px;
  height: 22px;
  text-align: center;
  background: #96aecd;
  line-height: 22px;
  color: #fff;
  margin-top: 20px;
}
</style>