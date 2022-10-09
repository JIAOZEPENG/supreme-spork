<template>
  <body>
    <div id="advert">
      <div>
        <div id="top">
          <div class="left_box">
            <div class="left_img">
              <img src="../images/admin_bg_加号.png" alt="" />
            </div>
            <div class="left_con">订单列表</div>
          </div>
          <span class="tj">产品列表</span>
        </div>
      </div>
      <div id="bottom">
        <table rules="all" class="bk">
          <thead>
            <tr>
              <th>产品名称:</th>
              <td><input type="text" class="bk" /></td>
            </tr>
            <tr>
              <th>产品分类:</th>
              <td>
                <select class="xlk">
                  <option>面包</option>
                  <option>饮品</option>
                  <option>小吃</option>
                  <option>零食</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>市场价:</th>
              <td><input type="text" class="jg" />元</td>
            </tr>
            <tr>
              <th>会员价:</th>
              <td><input type="text" class="jg" />元</td>
            </tr>
            <tr>
              <th>库存:</th>
              <td><input type="text" class="jg" />盘</td>
            </tr>
            <tr>
              <th>产品关键词:</th>
              <td><input type="text" class="bk" /></td>
            </tr>
            <tr>
              <th>产品描述:</th>
              <td><input type="text" class="bk" /></td>
            </tr>
            <tr>
              <th>推荐至:</th>
              <td>
                <input type="checkbox" class="bk" />精品
                <input type="checkbox" class="bk" />新品
                <input type="checkbox" class="bk" />热销
              </td>
            </tr>
            <tr>
              <th>产品缩图片:</th>
              <td>
                <spanb class="jh">+ </spanb>
                <img src="" alt="" class="img" />
              </td>
            </tr>
            <tr>
              <th>产品主图:</th>
              <td>
                <div class="sc">本地上传(最多选择N张)</div>
              </td>
            </tr>
            <tr>
              <th></th>
              <td>
                <img src="" alt="" class="img" />
                <img src="" alt="" class="img" />
                <img src="" alt="" class="img" />
                <img src="" alt="" class="img" />
                <img src="" alt="" class="img" />
              </td>
            </tr>
            <tr>
              <th>产品详情:</th>
              <td>
                <textarea name="" class="xq bk" cols="30" rows="10"></textarea>
              </td>
            </tr>
            <tr>
              <th></th>
              <td>
                <div>
                  <button class="bk">发布新产品</button>
                </div>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "EditProduct",
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
  list-style: none;
}
#bottom table {
  font-size: 13px;
  color: #3b3b3b;
  width: 100%;
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
  margin-top: 5px;
  text-align: center;
  line-height: 30px;
}
.shu {
  background: rgb(240, 240, 240);
}
.bk {
  border: 1px solid #c0c0c0;
  margin: 3px;
}
.sc {
  width: 190px;
  height: 30px;
  background: rgb(119, 156, 206);
  line-height: 30px;
  color: rgb(255, 255, 255);
}
.img {
  margin: 3px;
  width: 50px;
  height: 50px;
  border: 1px solid #c0c0c0;
}
.jh {
  margin: 3px;
  width: 50px;
  height: 50px;
  font-size: 30px;
  background: rgb(119, 156, 206);
  display: inline-block;
  position: relative;
  text-align: center;
  top: -18px;
  color: rgb(255, 255, 255);
}
.xq {
  margin: 3px;
  width: 600px;
  resize: none;
}
.jg {
  margin: 3px;
  width: 50px;
}
.xlk {
  margin: 3px;
  width: 60px;
  height: 30px;
  text-align: center;
}
.bk {
  margin: 3px;
}
</style>