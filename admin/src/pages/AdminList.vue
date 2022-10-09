<template>
  <body>
    <div id="advert">
      <div>
        <div id="top">
          <div class="left_box">
            <div class="left_img">
              <img src="../images/user_02.png" alt="" />
            </div>
            <div class="left_con">管理员列表</div>
          </div>
          <router-link to="/RevisePassword" class="tj">+添加管理员</router-link>
        </div>
        <div id="bottom">
          <table rules="all" class="bk">
            <thead>
              <tr>
                <th>管理账号</th>
                <th>电子邮箱地址</th>
                <th>加入时间</th>
                <th>最后登录时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr class="shu">
                <td>DeathGhost 1</td>
                <td>DeathGhost@sina.cn</td>
                <td>2015-04-18 17:38</td>
                <td>2015-04-19 15:38</td>
                <td>
                  <router-link tag="button" to="/RevisePassword"
                    ><img src="../images/icon_edit.gif"
                  /></router-link>
                  <button class="btn">
                    <img src="../images/icon_drop.gif" />
                  </button>
                </td>
              </tr>
              <tr class="shu">
                <td>DeathGhost 2</td>
                <td>DeathGhost@sina.cn</td>
                <td>2015-04-18 17:38</td>
                <td>2015-04-19 15:38</td>
                <td>
                  <router-link tag="button" to="/RevisePassword"
                    ><img src="../images/icon_edit.gif"
                  /></router-link>
                  <button class="btn">
                    <img src="../images/icon_drop.gif" />
                  </button>
                </td>
              </tr>
              <tr class="shu">
                <td>DeathGhost 3</td>
                <td>DeathGhost@sina.cn</td>
                <td>2015-04-18 17:38</td>
                <td>2015-04-19 15:38</td>
                <td>
                  <router-link tag="button" to="/RevisePassword"
                    ><img src="../images/icon_edit.gif"
                  /></router-link>
                  <button class="btn">
                    <img src="../images/icon_drop.gif" />
                  </button>
                </td>
              </tr>
              <tr class="shu">
                <td>DeathGhost 4</td>
                <td>DeathGhost@sina.cn</td>
                <td>2015-04-18 17:38</td>
                <td>2015-04-19 15:38</td>
                <td>
                  <router-link tag="button" to="/RevisePassword"
                    ><img src="../images/icon_edit.gif"
                  /></router-link>
                  <button class="btn">
                    <img src="../images/icon_drop.gif" />
                  </button>
                </td>
              </tr>
              <tr class="shu">
                <td>DeathGhost 5</td>
                <td>DeathGhost@sina.cn</td>
                <td>2015-04-18 17:38</td>
                <td>2015-04-19 15:38</td>
                <td>
                  <router-link tag="button" to="/RevisePassword"
                    ><img src="../images/icon_edit.gif"
                  /></router-link>
                  <button class="btn">
                    <img src="../images/icon_drop.gif" />
                  </button>
                </td>
              </tr>
              <tr class="shu">
                <td>DeathGhost 6</td>
                <td>DeathGhost@sina.cn</td>
                <td>2015-04-18 17:38</td>
                <td>2015-04-19 15:38</td>
                <td>
                  <router-link tag="button" to="/RevisePassword"
                    ><img src="../images/icon_edit.gif"
                  /></router-link>
                  <button class="btn">
                    <img src="../images/icon_drop.gif" />
                  </button>
                </td>
              </tr>
              <tr class="shu">
                <td>DeathGhost 7</td>
                <td>DeathGhost@sina.cn</td>
                <td>2015-04-18 17:38</td>
                <td>2015-04-19 15:38</td>
                <td>
                  <router-link tag="button" to="/RevisePassword"
                    ><img src="../images/icon_edit.gif"
                  /></router-link>
                  <button class="btn">
                    <img src="../images/icon_drop.gif" />
                  </button>
                </td>
              </tr>
              <tr class="shu">
                <td>DeathGhost 8</td>
                <td>DeathGhost@sina.cn</td>
                <td>2015-04-18 17:38</td>
                <td>2015-04-19 15:38</td>
                <td>
                  <router-link tag="button" to="/RevisePassword"
                    ><img src="../images/icon_edit.gif"
                  /></router-link>
                  <button class="btn">
                    <img src="../images/icon_drop.gif" />
                  </button>
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
  name: "AdminList",
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
* {
  margin: 0;
  padding: 0;
  user-select: none;
}
#bottom table {
  width: 100%;
  text-align: center;
}
#advert {
  margin: 23px 16px 0px 16px;
}
#top {
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 1px solid #dddddd;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 800;
}
.left_box {
  height: 32px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-top: 5px;
}

.left_img {
  width: 23px;
  height: 23px;
  background-position: -4px -42px;
}

.left_con {
  margin-left: 5px;
  color: #3d3d3d;
}
.tj {
  width: 120px;
  height: 30px;
  background: rgb(147, 165, 224);
  color: rgb(255, 255, 255);
  float: right;
  margin-bottom: 5px;
  text-align: center;
  line-height: 30px;
  display: block;
  text-decoration: none;
}
.shu {
  background: rgb(240, 240, 240);
}
.bk {
  border: 1px solid #c0c0c0;
}
.tx {
  position: relative;
  top: 4px;
}
</style>