<template>
  <body>
    <div id="back_img"></div>
    <div id="big_box">
      <div class="top_div">
        <div class="img"></div>
        <p class="wenzi">编辑会员资料</p>
      </div>
      <div class="biaoge">
        <div class="left_box">
          <p class="zi">会员昵称：</p>
        </div>
        <div class="right_box">
          <input type="text" name="" id="inp" placeholder="DeathGhost" />
        </div>
        <div class="left_box name_box">
          <p class="zi">电子邮件：</p>
        </div>
        <div class="right_box name_box">
          <input
            type="text"
            name=""
            id="inp"
            placeholder="DeathGhost@sina.cn"
          />
        </div>
        <div class="left_box name_box">
          <p class="zi">手机号码：</p>
        </div>
        <div class="right_box name_box">
          <input type="text" name="" id="inp" placeholder="18309275673" />
        </div>
        <div class="left_box name_box">
          <p class="zi">可用资金：</p>
        </div>
        <div class="right_box name_box">
          <input type="text" name="" id="inp2" placeholder="5000000" />
          <span>元</span>
        </div>
        <div class="left_box name_box">
          <p class="zi">冻结资金：</p>
        </div>
        <div class="right_box name_box">
          <input type="text" name="" id="inp2" placeholder="300" />
          <span>元</span>
        </div>
        <div class="left_box name_box">
          <p class="zi">会员等级：</p>
        </div>
        <div class="right_box name_box">
          <!-- <input type="text" name="" id=""> -->
          <select name="" id="inp3">
            <option value="">请选择会员等级</option>
          </select>
        </div>
        <div class="left_box name_box">
          <p class="zi">重置密码：</p>
        </div>
        <div class="right_box name_box">
          <input type="password" name="" id="inp" value="付梦丹付梦丹" />
        </div>
        <div class="left_box name_box">
          <p class="zi">确认密码：</p>
        </div>
        <div class="right_box name_box">
          <input type="password" name="" id="inp" value="付梦丹付梦丹" />
        </div>
        <div class="left_box name_box"></div>
        <div class="right_box name_box">
          <button id="but">更新保存</button>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "EditUser",
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
  margin: 0px;
  padding: 0px;
}
#big_box {
  width: 100%;
  height: 100%;
}
.top_div {
  border-bottom: 1px solid #e3e3e3;
  margin-top: 50px;
  width: 98%;
  margin-left: 16px;
}
.img {
  width: 23px;
  height: 23px;
  background-image: url("../images/admin_bg.png");
  background-position: -152px -45px;
}
.wenzi {
  float: left;
  margin-top: -24px;
  margin-left: 28px;
  font-weight: 600;
  font-size: 15px;
}
.biaoge {
  width: 98%;
  height: 38px;
  padding-left: 18px;
  padding-top: 7px;
}
.zi {
  font-size: 14px;
  text-align: right;
  margin-top: 10px;
}
.left_box {
  width: 20%;
  height: 38px;
  border: 1px solid #e3e3e3;
  float: left;
}
.right_box {
  width: 70%;
  height: 38px;
  float: left;
  /* margin-left: 262px;
				margin-top: -40px; */
  border: 1px solid #e3e3e3;
  border-left: none;
}
.name_box {
  border-top: none;
}
#inp {
  width: 315px;
  height: 27px;
  margin-top: 4px;
  margin-left: 4px;
}
#inp2 {
  width: 88px;
  height: 27px;
  margin-top: 4px;
  margin-left: 4px;
}
#inp3 {
  width: 140px;
  height: 27px;
  margin-top: 4px;
  margin-left: 4px;
}
#but {
  width: 78px;
  height: 30px;
  padding: 5px 5px;
  margin-top: 4px;
  margin-left: 4px;
}
</style>