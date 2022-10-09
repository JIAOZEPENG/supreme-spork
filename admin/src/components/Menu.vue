<template>
  <div class="menu-list">
    <router-link
      to="/Main"
      class="block menu-list-title center"
      style="border: none; margin-bottom: 8px; color: #fff; display: block"
      >起始页
    </router-link>
    <ul>
      <li class="menu-list-title" @click="Ddgl = !Ddgl">
        <span>订单管理</span>
        <i>◢</i>
      </li>
      <transition name="fade" :appear="true">
        <li v-show="Ddgl">
          <ul class="menu-children">
            <li>
              <router-link active-class="JIAO" to="/OrderList"
                >订单列表</router-link
              >
            </li>
          </ul>
        </li>
      </transition>
      <li class="menu-list-title" @click="Spgl = !Spgl">
        <span>商品管理</span>
        <i>◢</i>
      </li>
      <transition name="fade" :appear="true">
        <li v-show="Spgl">
          <ul class="menu-children">
            <li>
              <router-link
                active-class="JIAO"
                to="/ProductList"
                title="商品列表"
                target="mainCont"
                >商品列表</router-link
              >
            </li>
            <li>
              <router-link
                active-class="JIAO"
                to="/ProductCategory"
                title="商品分类"
                target="mainCont"
                >商品分类</router-link
              >
            </li>
            <li>
              <router-link
                active-class="JIAO"
                to="/RecycleBin"
                title="商品分类"
                target="mainCont"
                >商品回收站</router-link
              >
            </li>
          </ul>
        </li>
      </transition>

      <li class="menu-list-title" @click="Hygl = !Hygl">
        <span>会员管理</span>
        <i>◢</i>
      </li>
      <transition name="fade" :appear="true">
        <li v-show="Hygl">
          <ul class="menu-children">
            <li>
              <router-link
                active-class="JIAO"
                to="UserList"
                title="会员列表"
                target="mainCont"
                >会员列表</router-link
              >
            </li>
            <li>
              <router-link
                active-class="JIAO"
                to="/AddUser"
                title="添加会员"
                target="mainCont"
                >添加会员</router-link
              >
            </li>
            <li>
              <router-link
                active-class="JIAO"
                to="/UserRank"
                title="会员等级"
                target="mainCont"
                >会员等级</router-link
              >
            </li>
            <li>
              <router-link
                active-class="JIAO"
                to="/UserMessage"
                title="会员留言"
                target="mainCont"
                >会员留言</router-link
              >
            </li>
          </ul>
        </li>
      </transition>

      <li class="menu-list-title" @click="Xtsz = !Xtsz">
        <span>系统设置</span>
        <i>◢</i>
      </li>
      <transition name="fade" :appear="true">
        <li v-show="Xtsz">
          <ul class="menu-children">
            <li>
              <router-link
                active-class="JIAO"
                to="/BasicSettings"
                title="站点基本设置"
                target="mainCont"
                >站点基本设置</router-link
              >
            </li>
            <li>
              <router-link
                active-class="JIAO"
                to="/AdminList"
                title="站点基本设置"
                target="mainCont"
                >站点管理员</router-link
              >
            </li>
          </ul>
        </li>
      </transition>

      <li class="menu-list-title" @click="Gggl = !Gggl">
        <span>广告管理</span>
        <i>◢</i>
      </li>
      <transition name="fade" :appear="true">
        <li v-show="Gggl">
          <ul class="menu-children">
            <li>
              <router-link
                active-class="JIAO"
                to="/AdvertisingList"
                href="advertising_list.html"
                title="站点基本设置"
                target="mainCont"
              >
                广告列表
              </router-link>
            </li>
          </ul>
        </li>
      </transition>
    </ul>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Menu",
  data() {
    return {
      Ddgl:true,
      Spgl:true,
      Hygl:true,
      Xtsz:true,
      Gggl:true,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-size: 14px;
  font-family: "microsoft yahei";
}

a {
  color: #3d3d3d;
  text-decoration: none;
}
a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
}
.menu-list-title i {
  float: right;
  position: relative;
  right: 5px;
  top: 4px;
  color: #666666;
}
ul,
li {
  padding: 0;
  list-style: none;
  margin: 0;
}
.menu-list {
  color: #cecece;
  width: 163px;
  background: #313131;
  height: 100%;
  position: relative;
  top: 0px;
}
div {
  display: block;
}
.menu-list-title {
  font-size: 14px;
  font-weight: bold;
  height: 45px;
  line-height: 45px;
  padding-left: 5px;
  background: #555555;
  border-bottom: 1px #666666 solid;
  cursor: pointer;
}
.menu-children li {
  height: 45px;
  line-height: 45px;
  overflow: hidden;
  border-bottom: 1px #494948 dotted;
  padding-left: 2em;
}
.menu-children li a {
  color: #fff;
  display: block;
}
.JIAO {
  background: rgb(243, 88, 68);
  width: 152px;
  position: relative;
  left: -28px;
  padding-left: 26px;
}
</style>
