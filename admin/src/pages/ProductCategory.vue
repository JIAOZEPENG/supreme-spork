<template>
  <body>
    <!-- 产品分类 -->
    <div id="advert">
      <div id="top">
        <div class="left_box">
          <div class="left_img"></div>
          <div class="left_con">产品分类</div>
        </div>
        <router-link to="/AddCategory" tag="div" class="right_box"
          >+添加新分类</router-link
        >
      </div>
      <div id="center">
        <table class="table" border="0px" cellspacing="0px">
          <tr>
            <th class="name">分类名称</th>
            <th class="quantity">产品数量</th>
            <th class="company">单位</th>
            <th class="display">是否显示</th>
            <th class="sort">排序</th>
            <th class="operation">操作</th>
          </tr>
          <tr v-for="(item, index) in list" :key="item.id">
            <!-- 这是子选的复选框 -->
            <td>
              <input
                class="radio"
                type="checkbox"
                :value="item.id"
                v-model="isAllCheck"
              />{{ item.name }}
            </td>
            <td class="quan">{{ item.quantity }}</td>
            <td class="comp">{{ item.company }}</td>
            <td :class="item.isDisplay == 'yes' ? 'yes' : 'no'"></td>
            <td>
              <div class="sort_inp">{{ index + 1 }}</div>
            </td>
            <td class="operation_img">
              <img src="../images/icon_trash.gif" alt="" />
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
            id="selectAll"
            @click="selectAll($event)"
          />
          <div class="selectAll" @click="select2">全选</div>
          <div class="batchDelete">批量删除</div>
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
  name: "ProductCategory",
  data() {
    return {
      isAllCheck: [],
      list: [
        {
          id: 1,
          name: "面包",
          quantity: "1",
          company: "个",
          isDisplay: "yes",
        },
        {
          id: 2,
          name: "饭团",
          quantity: "2",
          company: "个",
          isDisplay: "no",
        },
        {
          id: 3,
          name: "中餐",
          quantity: "1",
          company: "盘",
          isDisplay: "yes",
        },
        {
          id: 4,
          name: "三明治",
          quantity: "1",
          company: "个",
          isDisplay: "no",
        },
        {
          id: 5,
          name: "油条",
          quantity: "1",
          company: "根",
          isDisplay: "yes",
        },
        {
          id: 6,
          name: "豆浆",
          quantity: "1",
          company: "碗",
          isDisplay: "yes",
        },
      ],
    };
  },
  methods: {
    //点击删除,删除此条信息
    del(index, item) {
      this.list.splice(index, 1);
      console.log(item.id);
      for (var i = 0; i < this.isAllCheck.length; i++) {
        //判断新数组中的某一项的内容是不是==数据中的删除的这一项的id
        if (this.isAllCheck[i] == item.id) {
          this.isAllCheck.splice(i, 1);
        }
      }
      //再判断新数组长度是不是和数据长度一样,展示全选按钮状态
      if (this.isAllCheck.length == this.list.length) {
        document.querySelector("#selectAll").checked = true;
      } else {
        document.querySelector("#selectAll").checked = false;
      }
      if (this.list.length == 0) {
        document.querySelector("#selectAll").checked = false;
      }
    },
    //点击全选按钮事件
    selectAll: function (e) {
      //获取所有的单选项
      var checkObj = document.querySelectorAll(".radio");
      if (e.target.checked) {
        for (var i = 0; i < checkObj.length; i++) {
          if (!checkObj[i].checked) {
            this.isAllCheck.push(checkObj[i].value);
          }
        }
      } else {
        this.isAllCheck = [];
      }
    },
    select2: function () {
      var checkObj = document.querySelectorAll(".radio");
      for (var i = 0; i < checkObj.length; i++) {
        if (!checkObj[i].checked) {
          this.isAllCheck.push(checkObj[i].value);
        }
      }
    },
  },
  watch: {
    isAllCheck: function () {
      if (this.isAllCheck.length == this.list.length) {
        document.querySelector("#selectAll").checked = true;
      } else {
        document.querySelector("#selectAll").checked = false;
      }
      if (this.list.length == 0) {
        document.querySelector("#selectAll").checked = false;
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
.quantity,
.company,
.display,
.sort,
.operation {
  height: 37px;
}

.table td {
  font-size: 12px;
  padding: 5px;
  border: 1px solid #dddddd;
}

.operation_img {
  text-align: center;
}

.operation_img img {
  cursor: pointer;
}

.no {
  background: url(../images/no.gif) no-repeat;
  background-position: center center;
}

.yes {
  background: url(../images/yes.gif) no-repeat;
  background-position: center center;
}

.sort_inp {
  width: 54px;
  height: 20px;
  text-align: center;
  border: 1px solid #767676;
  line-height: 20px;
  margin: auto;
}

.quan,
.comp {
  text-align: center;
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