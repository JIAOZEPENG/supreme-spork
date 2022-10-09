<template>
  <body>
    <!-- 广告列表 -->
    <div id="advert">
      <div id="top">
        <div class="left_box">
          <div class="left_img"></div>
          <div class="left_con">广告列表</div>
        </div>
        <router-link to="/Advertising">
          <div class="right_box">+添加广告</div></router-link
        >
      </div>
      <div id="center">
        <table class="table" border="0px" cellspacing="0px">
          <tr>
            <th class="name">广告名称</th>
            <th class="position">广告位置</th>
            <th class="type">媒介类型</th>
            <th class="operation">操作</th>
          </tr>
          <tr
            v-for="(item, index) in list"
            :class="index % 2 == 1 ? 'one' : 'two'"
            :key="item.id"
          >
            <!-- 这是子选的复选框 -->
            <td>
              <input
                type="checkbox"
                :value="item.id"
                v-model="checkList"
                class="checkItem"
              />{{ item.name }}
            </td>
            <td>{{ item.position }}</td>
            <td>{{ item.type }}</td>
            <td class="operation_img">
              <router-link to="/Advertising"
                ><img src="../images/icon_edit.gif" alt=""
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
          <!-- 这是全选和全不选的复选框 -->
          <input
            type="checkbox"
            value="全选"
            @click="checkAll($event)"
            id="checkall"
          />
          <div class="selectAll" @click="allCheck()">全选</div>
          <div class="batchDelete" @click="batchDel()">批量删除</div>
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
  name: "AdvertisingList",
  data() {
    return {
      checkList: [],
      list: [
        {
          id: 1,
          name: "五一劳动节",
          position: "首页导航下方通栏",
          type: "图片",
        },
        {
          id: 2,
          name: "六一儿童节",
          position: "首页导航下方通栏",
          type: "图片",
        },
        {
          id: 3,
          name: "三八妇女节",
          position: "首页导航下方通栏",
          type: "图片",
        },
        {
          id: 4,
          name: "正月十五元宵节",
          position: "首页导航下方通栏",
          type: "图片",
        },
        {
          id: 5,
          name: "二月十四情人节",
          position: "首页导航下方通栏",
          type: "图片",
        },
        {
          id: 6,
          name: "二月初二龙抬头",
          position: "首页导航下方通栏",
          type: "图片",
        },
        {
          id: 7,
          name: "四月一清明节",
          position: "首页导航下方通栏",
          type: "图片",
        },
        {
          id: 8,
          name: "四月四寒食节",
          position: "首页导航下方通栏",
          type: "图片",
        },
        {
          id: 9,
          name: "五月初五端午节",
          position: "首页导航下方通栏",
          type: "图片",
        },
        {
          id: 10,
          name: "八一建军节",
          position: "首页导航下方通栏",
          type: "图片",
        },
        {
          id: 11,
          name: "九九重阳节",
          position: "首页导航下方通栏",
          type: "图片",
        },
      ],
    };
  },
  watch: {
    // 事件监听 checkList 数据变化 再去 改变 dom
    checkList: function () {
      console.log("选择发生变化");
      if (this.checkList.length == this.list.length) {
        document.querySelector("#checkall").checked = true;
      } else {
        document.querySelector("#checkall").checked = false;
      }
      if (this.list.length == 0) {
        document.querySelector("#checkall").checked = false;
      }
    },
  },
  methods: {
    //点击删除,删除此条信息
    del(index, item) {
      //先删除数据中的当前这个一项
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
        document.querySelector("#checkall").checked = true;
      } else {
        document.querySelector("#checkall").checked = false;
      }
      if (this.list.length == 0) {
        document.querySelector("#checkall").checked = false;
      }
    },
    checkAll(e) {
      // 点击全选事件
      var checkObj = document.querySelectorAll(".checkItem"); // 获取所有checkbox项
      console.log(e);
      if (e.target.checked) {
        // 判定全选checkbox的勾选状态
        for (var i = 0; i < checkObj.length; i++) {
          if (!checkObj[i].checked) {
            this.checkList.push(checkObj[i].value);
          }
        }
      } else {
        // 如果是去掉全选则清空checkbox选项绑定数组
        this.checkList = [];
      }
    },
    //点击全选div
    allCheck() {
      //让全选项选中
      document.querySelector("#checkall").checked = true;
      //获取到所有单选项
      var checkObj = document.querySelectorAll(".checkItem");
      for (var i = 0; i < checkObj.length; i++) {
        if (!checkObj[i].checked) {
          this.checkList.push(checkObj[i].value);
        }
      }
    },
    //点击批量删除,删除选中的内容
    batchDel() {
      for (var i = 0; i < this.checkList.length; i++) {
        console.log(this.checkList[i]);
        //被选中的所对应的数据
        console.log(this.list[this.checkList[i] - 1]);
        //通过新数组中的id,找到对应的数据
        if (this.list.join("").indexOf(this.checkList[i]) == -1) {
          console.log(1);
        }
        // this.list.splice(this.checkList[i] - 1, 1)
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

.right_box {
  background-color: #96aecd;
  color: #fff;
  padding: 8px;
  cursor: pointer;
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

.name,
.position,
.type,
.operation {
  height: 37px;
}

.table td {
  font-size: 12px;
  padding: 5px;
  border: 1px solid #dddddd;
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
.batchDelete {
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
</style>