/* eslint-disable vue/require-v-for-key */
<template>
  <body style="overflow-x: hidden">
    <!-- 订单列表 -->
    <div id="advert">
      <div id="top">
        <div class="left_box">
          <div class="left_img"></div>
          <div class="left_con">订单列表</div>
        </div>
      </div>
      <div id="search">
        <img src="../images/icon_search.gif" alt="" />
        <input
          class="sear_inp"
          type="text"
          placeholder="输入订单编号或收件人姓名"
          v-model.lazy="gjz"
        />
        <select class="sear_sel">
          <option value="">未付款</option>
          <option value="">付款</option>
        </select>
        <input type="button" value="查询" class="sear_btn" />
      </div>
      <div id="center">
        <table class="table" border="0px" cellspacing="0px">
          <tr>
            <th class="number">订单编号</th>
            <th class="time">下单时间</th>
            <th class="addressee">收件人</th>
            <th class="price">订单金额</th>
            <th class="state">订单状态</th>
            <th class="operation">操作</th>
          </tr>
          <tr
            v-for="(item, index) in search(gjz)"
            :class="index % 2 == 1 ? 'one' : 'two'"
            :key="item.id"
          >
            <!-- 这是子选的复选框 -->
            <td>
              <input
                type="checkbox"
                :value="item.id"
                class="radio"
                v-model="checkList"
              />{{ item.number }}
            </td>
            <td>{{ item.time }}</td>
            <td>
              <div>{{ item.addressee }}{{ item.phone }}</div>
              <div>{{ item.address }}</div>
            </td>
            <td>{{ item.price }}</td>
            <td>{{ item.state }}</td>
            <td class="operation_img">
              <router-link to="/OrderDetail">
                <img src="../images/icon_view.gif" alt=""
              /></router-link>
              <img
                @click="del(index, item)"
                src="../images/icon_drop.gif"
                alt=""
              />
            </td>
          </tr>
        </table>
      </div>
      <div id="bottom">
        <div class="lf">
          <!-- 这是全选和全部选的复选框 -->
          <input type="checkbox" id="checkAll" @click="choose($event)" />
          <div class="selectAll" @click="chooseAll">全选</div>
          <div class="print">打印订单</div>
          <div class="distribution">配货</div>
          <div class="delete">删除订单</div>
        </div>
        <div class="rg">
          <div class="first">第一页</div>
          <div class="num">1</div>
          <div class="last">最后一页</div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Mainccopy",
  data() {
    return {
      gjz: "",
      checkList: [],
      list: [
        {
          id: 1,
          number: "202005101918",
          time: new Date().toLocaleString(),
          addressee: "张三",
          phone: "[17835201234]",
          address: "陕西省西安市未央区255号",
          price: "￥668.00",
          state: "未付款",
        },
        {
          id: 2,
          number: "202005101919",
          time: new Date().toLocaleString(),
          addressee: "李四",
          phone: "[12345678910]",
          address: "陕西省西安市未央区255号",
          price: "￥5328.00",
          state: "付款",
        },
        {
          id: 3,
          number: "202005101920",
          time: new Date().toLocaleString(),
          addressee: "王五",
          phone: "[13593118888]",
          address: "陕西省西安市未央区255号",
          price: "￥1314.00",
          state: "未付款",
        },
        {
          id: 4,
          number: "202005101921",
          time: new Date().toLocaleString(),
          addressee: "赵六",
          phone: "[13994555555]",
          address: "陕西省西安市未央区255号",
          price: "￥6666.00",
          state: "付款",
        },
        {
          id: 5,
          number: "202005101922",
          time: new Date().toLocaleString(),
          addressee: "白七",
          phone: "[17633443414]",
          address: "陕西省西安市未央区255号",
          price: "￥88888.00",
          state: "付款",
        },
      ],
    };
  },
  methods: {
    //点击删除,删除此条信息
    del(index, item) {
      this.list.splice(index, 1);
      console.log(item.id);
      for (var i = 0; i < this.checkList.length; i++) {
        //判断新数组中的某一项的内容是不是==数据中的删除的这一项的id
        if (this.checkList[i] == item.id) {
          this.checkList.splice(i, 1);
        }
      }
      //再判断新数组长度是不是和数据长度一样,展示全选按钮状态
      if (this.checkList.length == this.list.length) {
        document.querySelector("#checkAll").checked = true;
      } else {
        document.querySelector("#checkAll").checked = false;
      }
      if (this.list.length == 0) {
        document.querySelector("#checkAll").checked = false;
      }
    },
    search(gjz) {
      //创建新数组
      var listArr = [];
      for (var i = 0; i < this.list.length; i++) {
        //判断订单编号或者判断姓名
        if (this.list[i].number.indexOf(gjz) !== -1) {
          listArr.push(this.list[i]);
        } else if (this.list[i].addressee.indexOf(gjz) !== -1) {
          listArr.push(this.list[i]);
        }
      }
      //返回新数组去循环
      return listArr;
    },
    //点击全选按钮
    choose: function (e) {
      //获取所有的单选项
      var checkObj = document.querySelectorAll(".radio");
      if (e.target.checked) {
        for (var i = 0; i < checkObj.length; i++) {
          if (!checkObj[i].checked) {
            this.checkList.push(checkObj[i].value);
          }
        }
      } else {
        this.checkList = [];
      }
    },
    chooseAll: function () {
      var checkObj = document.querySelectorAll(".radio");
      for (var i = 0; i < checkObj.length; i++) {
        if (!checkObj[i].checked) {
          this.checkList.push(checkObj[i].value);
        }
      }
    },
  },
  watch: {
    checkList: function () {
      if (this.checkList.length == this.list.length) {
        document.querySelector("#checkAll").checked = true;
      } else {
        document.querySelector("#checkAll").checked = false;
      }
      if (this.list.length == 0) {
        document.querySelector("#checkAll").checked = false;
      }
    },
  },
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

input,
select {
  outline: none;
}

img {
  vertical-align: bottom;
}

a {
  text-decoration: none;
  color: #000;
}

.clearfix:after {
  display: block;
  content: "";
  clear: both;
}

.clearfix {
  zoom: 1;
}

/* 取消插值闪动 */
[v-cloak] {
  display: none;
}

#advert {
  margin: 23px 16px 0px 16px;
}

/* 导航栏 */
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

/* 中间表格 */
#center {
  display: flex;
  margin-bottom: 14px;
}

.table {
  width: 100%;
}

.table tr {
  width: 100%;
  border: 1px solid #dddddd;
}

.table th {
  font-size: 12px;
  border: 1px solid #dddddd;
}

.number,
.time,
.addressee,
.price,
.state,
.operation {
  height: 37px;
}

.table td {
  height: 38px;
  font-size: 12px;
  padding: 5px;
  border: 1px solid #dddddd;
  flex-wrap: wrap;
}

.one {
  background: #f1f1f1;
}

.two {
  background: #fff;
}

.operation_img {
  text-align: center;
}

.operation_img img {
  cursor: pointer;
}

/* 尾部 */
#bottom {
  display: flex;
  font-size: 12px;
  justify-content: space-between;
}

.lf {
  display: flex;
  align-items: center;
}

.selectAll,
.print,
.distribution,
.delete {
  background: #555555;
  color: #fff;
  margin-left: 4px;
  padding: 10px 16px;
  cursor: pointer;
}

.rg {
  display: flex;
}

.first,
.num,
.last {
  margin-left: 4px;
  padding: 10px 11px;
  background: #96aecd;
  cursor: pointer;
}

/* 搜索 */
#search {
  width: 100%;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}

#search img {
  width: 26px;
  height: 22px;
}

.sear_inp {
  width: 312px;
  height: 24px;
  margin-left: 4px;
}

.sear_sel {
  width: 72px;
  height: 28px;
  margin-left: 4px;
}

.sear_btn {
  width: 56px;
  height: 28px;
  margin-left: 4px;
}
</style>
