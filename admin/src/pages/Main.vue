<template>
  <!-- 起始页面 -->
  <div class="wrap start-page">
    <h1><i class="home-icon"></i>欢迎回到**站点管理中心</h1>
    <dl>
      <dt>订单统计信息</dt>
      <dd>
        <ul>
          <li>
            <span>待发货订单：</span>
            <span>539</span>
          </li>
          <li>
            <span>未确认订单：</span>
            <span>23</span>
          </li>
          <li>
            <span>已成交订单：</span>
            <span>1282</span>
          </li>
        </ul>
      </dd>
    </dl>

    <dl>
      <dt>商户统计信息</dt>
      <dd>
        <ul>
          <li>
            <span>店铺总数量：</span>
            <span>1252</span>
          </li>
          <li>
            <span>商品总数量：</span>
            <span>13252</span>
          </li>
          <li>
            <span>在线实时交易总计：</span>
            <span>1282.00元</span>
          </li>
          <li>
            <span>酒吧类店铺：</span>
            <span>128家</span>
          </li>
          <li>
            <span>家政服务类店铺：</span>
            <span>300家</span>
          </li>
          <li>
            <span>外卖类店铺：</span>
            <span>458家</span>
          </li>
        </ul>
      </dd>
    </dl>

    <dl>
      <dt>会员统计信息</dt>
      <dd>
        <ul>
          <li>
            <span>黄金会员：</span>
            <span>356</span>
          </li>
          <li>
            <span>白金会员：</span>
            <span>432</span>
          </li>
          <li>
            <span>商户会员：</span>
            <span>128</span>
          </li>
        </ul>
      </dd>
    </dl>

    <dl>
      <dt>访问统计</dt>
      <dd>
        <ul>
          <li>
            <span>今日访问：</span>
            <span>1356</span>
          </li>
          <li>
            <span>当前在线人数：</span>
            <span>98</span>
          </li>
          <li>
            <span>最新留言：</span>
            <span>1</span>
          </li>
        </ul>
      </dd>
    </dl>

    <dl>
      <dt>系统信息</dt>
      <dd>
        <ul>
          <li>
            <span>服务器操作系统：</span>
            <span>WINNT(127.0.0.1)</span>
          </li>
          <li>
            <span>WEB服务器：</span>
            <span>APACHE2.2.9</span>
          </li>
          <li>
            <span>MySQL 版本：</span>
            <span>5.5.20</span>
          </li>
          <li>
            <span>安全模式：</span>
            <span>否</span>
          </li>
          <li>
            <span>安全模式GID:：</span>
            <span>否</span>
          </li>
          <li>
            <span>时区设置：</span>
            <span>Europe/Paris</span>
          </li>
          <li>
            <span>编码：</span>
            <span>UTF-8</span>
          </li>
        </ul>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Main",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.start-page {
  overflow: hidden;
  background: #555555;
  color: #cecece;
  margin: 0;
  width: calc(100% - 180px);
  height: calc(100% - 92px);
  position: absolute;
  top: 76px;
  left: 163px;
}
* {
  font-size: 14px;
  font-family: "microsoft yahei";
}
.wrap {
  overflow: hidden;
  padding: 8px;
}
h1,
dl {
  margin: 10px 0;
}
.start-page h1 {
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px #343434 solid;
  height: 40px;
  line-height: 40px;
}
.home-icon {
  background: url(../images/admin_bg.png) -287px -44px;
  display: inline-block;
  width: 23px;
  height: 19px;
  position: relative;
  top: 3px;
  margin-right: 5px;
}
.list-style td em,
i {
  font-style: normal;
}
.start-page dt {
  height: 35px;
  line-height: 35px;
  font-size: 15px;
  border-radius: 3px 3px 0 0;
  font-weight: bold;
  background: #626262;
  border-bottom: 1px #343434 solid;
  text-indent: 1em;
}
.start-page dd {
  overflow: hidden;
  padding: 1em 0;
  color: #fff;
}
dd {
  margin: 0;
}
ul,
li {
  padding: 0;
  list-style: none;
  margin: 0;
}
.start-page dd li {
  float: left;
  width: 33.33%;
  height: 35px;
  line-height: 35px;
  font-size: 15px;
}
ul,
li {
  padding: 0;
  list-style: none;
  margin: 0;
}
</style>
