<template>
  <body>
    <div id="advert">
      <div id="top">
        <div class="left_box">
          <div class="left_img"></div>
          <div class="left_con">订单编号：2015041803225</div>
        </div>
      </div>

      <div class="ddxq">订单详情</div>
      <div class="lxr">
        <ul>
          <li>
            收件人姓名:
            <span class="nr">张三</span>
          </li>
          <li>
            联系地址:
            <span class="nr">陕西省西安市未央区220号</span>
          </li>
          <li>
            下单时间:
            <span class="nr">2015-04-18 13:25</span>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            联系电话:
            <span class="nr">15822518194</span>
          </li>
          <li>
            付款状态:
            <span class="nr">未付款 </span>
          </li>
          <li>
            付款时间:
            <span class="nr">2015-04-18 13:45</span>
          </li>
        </ul>
      </div>
      <div class="a"></div>
      <div class="b">
        订单留言:<span class="nr"
          >...这里是用户留言信息，务必**请到***谢谢~</span
        >
      </div>
      <div class="a"></div>
      <div id="bottom">
        <table rules="all" class="bk">
          <thead>
            <tr>
              <th>缩略图</th>
              <th>产品</th>
              <th>单价</th>
              <th>数量</th>
              <th>小计</th>
            </tr>
          </thead>
          <tbody class="shu">
            <tr class="bk">
              <td><img src="../images/01.jpg" class="img" alt="" /></td>
              <td>这里是产品名称</td>
              <td>￥ 0.00</td>
              <td>1</td>
              <td>￥ 0.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="a"></div>
      <div class="glycz">
        <span> 管理员操作: </span>
        <textarea name="" id="cz" cols="30" rows="10"></textarea>
      </div>
      <div class="a"></div>
      <div class="c">
        <ul>
          <li>打印订单</li>
          <li>配送</li>
          <li>发送</li>
          <li>取消订单</li>
        </ul>
      </div>
      <div class="a"></div>
    </div>
  </body>
</template>

<script>
export default {
  name: "OrderDetail",
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
  user-select: none;
  list-style: none;
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
}

.left_img {
  width: 23px;
  height: 23px;
  background: url(../images/admin_bg.png) no-repeat center;
  background-position: -4px -42px;
}

.left_con {
  margin-left: 5px;
  color: #3d3d3d;
}
.ddxq {
  width: 100%;
  height: 50px;
  background: #c0c0c0;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
}
.nr {
  color: #666565;
  font-size: 13px;
}
.lxr {
  float: left;
  width: 50%;
}
.a {
  width: 100%;
  height: 10px;
  background: #c0c0c0;
}
.b {
  width: 100%;
  height: 50px;
  line-height: 50px;
}
#bottom table {
  width: 100%;
  border: 1px solid #c0c0c0;
}
.img {
  width: 30px;
  height: 30px;
  border: 1px solid #c0c0c0;
}
.glycz {
  width: 100%;
  height: 70px;
  text-align: center;
}
#cz {
  width: 1200px;
  height: 40px;
  position: relative;
  line-height: 40px;
  font-size: 20px;
  top: 15px;
  resize: none;
}
.c {
  width: 100%;
  height: 50px;
}
.c li {
  width: 100px;
  height: 30px;
  background: rgb(75, 74, 74);
  color: aliceblue;
  margin: 3px;
  text-align: center;
  line-height: 30px;
  float: left;
}
.tx {
  position: relative;
  top: 4px;
}
</style>