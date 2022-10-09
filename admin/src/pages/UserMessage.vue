<template>
  <body>
    <div id="app">
      <div id="top">
        <div id="con_top">
          <div id="con"></div>
          <div id="hy">会员留言</div>
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
                <td width="300px">会员账号</td>
                <td width="400px">留言时间</td>
                <td width="300px">处理状态</td>
                <td width="400px">留言内容</td>
                <td width="400px">管理员回复</td>
                <td width="200px">操作</td>
              </tr>
              <tr class="bb" align="middle" height="50px">
                <td>DeathGhost</td>
                <td>2022-5-20 13:14</td>
                <td>未处理</td>
                <td style="padding: 5px" class="a1" valign="top" align="left">
                  这里是留言内容
                  <img class="an" src="../images/下拉按钮.png" />
                  <img class="ann" src="../images/下拉按钮.png" />
                </td>
                <td style="padding: 5px" class="a1" valign="top" align="left">
                  这里是留言内容
                  <img class="an1" src="../images/下拉按钮.png" />
                  <img class="ann1" src="../images/下拉按钮.png" />
                </td>
                <td>
                  <router-link to="/ReplyMessage"
                    ><img
                      class="ty"
                      src="../images/icon_title.gif"
                      alt=""
                      title="回复"
                  /></router-link>
                  <img
                    class="ab ty"
                    src="../images/icon_drop.gif"
                    alt=""
                    title="删除"
                  />
                </td>
              </tr>
              <tr class="bb" align="middle" height="50px">
                <td>DeathGhost</td>
                <td>2022-5-20 13:14</td>
                <td>未处理</td>
                <td style="padding: 5px" class="a1" valign="top" align="left">
                  这里是留言内容
                  <img class="an" src="../images/下拉按钮.png" />
                  <img class="ann" src="../images/下拉按钮.png" />
                </td>
                <td style="padding: 5px" class="a1" valign="top" align="left">
                  这里是留言内容
                  <img class="an1" src="../images/下拉按钮.png" />
                  <img class="ann1" src="../images/下拉按钮.png" />
                </td>
                <td>
                  <a href="reply_message.html"
                    ><img
                      class="ty"
                      src="../images/icon_title.gif"
                      alt=""
                      title="回复"
                  /></a>
                  <img
                    class="ab ty"
                    src="../images/icon_drop.gif"
                    alt=""
                    title="删除"
                  />
                </td>
              </tr>
              <tr class="bb" align="middle" height="50px">
                <td>DeathGhost</td>
                <td>2022-5-20 13:14</td>
                <td>未处理</td>
                <td style="padding: 5px" class="a1" valign="top" align="left">
                  这里是留言内容
                  <img class="an" src="../images/下拉按钮.png" />
                  <img class="ann" src="../images/下拉按钮.png" />
                </td>
                <td style="padding: 5px" class="a1" valign="top" align="left">
                  这里是留言内容
                  <img class="an1" src="../images/下拉按钮.png" />
                  <img class="ann1" src="../images/下拉按钮.png" />
                </td>
                <td>
                  <a href="reply_message.html"
                    ><img
                      class="ty"
                      src="../images/icon_title.gif"
                      alt=""
                      title="回复"
                  /></a>

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
      <div id="jw">
        <div id="con_jw">
          <div id="zhyy">最后一页</div>
          <div id="dqy">1</div>
          <div id="dyy">第一页</div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "UserMessage",
};
</script>

<style scoped>
body {
  position: absolute;
  top: 76px;
  left: 163px;
  width: calc(100% - 163px);
  height: calc(100% - 88px);
  background: #fff;
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
  border-bottom: 1px solid #ddd;
  margin: 0px auto;
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
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* background-color: plum; */
  margin-top: 14px;
  font-size: 12px;
}

table {
  border-collapse: collapse;
}

.a1 {
  position: relative;
}

.an {
  width: 15px;
  height: 15px;
  position: absolute;
  right: 10px;
  top: 30px;
}

.ann {
  width: 15px;
  height: 15px;
  position: absolute;
  right: 10px;
  top: 5px;
  transform: rotate(180deg);
}

.an1 {
  width: 15px;
  height: 15px;
  position: absolute;
  right: 10px;
  top: 30px;
}

.ann1 {
  width: 15px;
  height: 15px;
  position: absolute;
  right: 10px;
  top: 5px;
  transform: rotate(180deg);
}
#con_jw {
  width: 99%;
  height: 30px;
}

#jw {
  width: 100%;
  font-size: 13px;
  color: #fff;
  text-align: center;
  line-height: 25px;
  margin-top: 10px;
  margin-left: -7px;
}

#dyy {
  float: right;
  width: 55px;
  height: 25px;
  background-color: #96aecd;
  margin: 3px;
}

#dqy {
  float: right;
  width: 25px;
  height: 25px;
  background-color: #96aecd;
  margin: 3px;
}

#zhyy {
  float: right;
  width: 55px;
  height: 25px;
  background-color: #96aecd;
  margin: 3px;
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
</style>