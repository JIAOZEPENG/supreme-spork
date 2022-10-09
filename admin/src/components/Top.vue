<template>
  <div class="header">
    <div class="logo">
      <img src="../images/admin_logo.png" title="在哪儿" />
    </div>
    <div class="fr top-link">
      <a href="#" title="访问站点"
        ><i class="shopLinkIcon"></i><span>访问站点</span></a
      >
      <router-link to="/AdminList" target="mainCont" title="DeathGhost"
        ><i class="adminIcon"></i><span>管理员：DeathGhost</span></router-link
      >
      <a href="#" title="修改密码"
        ><i class="clearIcon"></i><span>清除缓存</span></a
      >
      <router-link
        to="/RevisePassword"
        href="revise_password.html"
        target="mainCont"
        title="修改密码"
        ><i class="revisepwdIcon"></i><span>修改密码</span></router-link
      >
      <a href="#" title="安全退出" style="background: rgb(60, 60, 60)"
        ><i class="quitIcon"></i><span>安全退出</span></a
      >
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Top",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background: #3d3d3d;
  color: #fff;
  height: 75px;
  border-bottom: 1px #383838 solid;
  position: relative;
  top: 0px;
}
* {
  font-size: 14px;
  font-family: "microsoft yahei";
}
.logo {
  float: left;
  margin: 0 20px;
}
.logo img {
  height: 75px;
}
img {
  border: none;
}
.top-link {
  height: 75px;
  line-height: 75px;
}
.top-link a {
  display: inline-block;
  margin: 0 0 0 8px;
  padding: 0 10px;
  color: #fff;
  cursor: pointer;
}
.top-link a .shopLinkIcon {
  background: url(../images/admin_bg.png) -5px -9px;
}
.top-link a i {
  width: 25px;
  height: 25px;
  display: inline-block;
  position: relative;
  top: 8px;
}
.top-link a span {
  text-shadow: 2px 2px 2px #333;
}
.top-link a .adminIcon {
  background: url(../images/admin_bg.png) -37px -9px;
}
.list-style td em,
i {
  font-style: normal;
}
.top-link a .clearIcon {
  background: url(../images/admin_bg.png) -70px -9px;
}
.top-link a .revisepwdIcon {
  background: url(../images/admin_bg.png) -104px -9px;
}
.top-link a .quitIcon {
  background: url(../images/admin_bg.png) -135px -6px;
}
.fr {
  float: right;
}
</style>
