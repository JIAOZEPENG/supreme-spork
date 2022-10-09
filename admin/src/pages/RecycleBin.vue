<template>
  <body>
    <div id="app">
      <div id="top">
        <div id="top_img"></div>
        <div id="zi_left">商品回收站</div>
      </div>
      <div id="botton">
        <table cellspacing="0px" cellpadding="0px">
          <thead>
            <tr>
              <td class="yz">ID编号</td>
              <td class="yz">产品</td>
              <td class="yz">名称</td>
              <td class="yz">删除时间</td>
              <td class="yz">操作</td>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in list"
              :class="index % 2 == 1 ? 'one' : 'two'"
              :key="item.id"
            >
              <td>
                <input
                  type="checkbox"
                  :value="item.id"
                  class="radio"
                  v-model="checkList"
                />{{ index + 1 }}
              </td>
              <td class="img yz"><img src="../images/01.jpg" alt="" /></td>
              <td class="yz">苹果手机</td>
              <td class="yz">{{ item.sj }}</td>
              <td style="text-align: center">
                <span>恢复</span> <span @click="del(index)">彻底删除</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="tw">
        <div id="zuo">
          <input type="checkbox" id="chooseAll" @click="checkAll($event)" />
          <button>全选</button>
          <button>批量彻底删除</button>
          <button>批量恢复</button>
        </div>
        <div id="you">
          <button>第一页</button>
          <button>1</button>
          <button>最后一页</button>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "RecycleBin",
  data() {
    return {
      checkList: [],
      liss: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
      all_checked: false,
      list: [
        { id: 1, name: "张三", sj: "2017-04-15" },
        { id: 2, name: "张三", sj: "2017-04-16" },
        { id: 3, name: "张三", sj: "2017-04-17" },
        { id: 4, name: "张三", sj: "2017-04-18" },
      ],
    };
  },
  methods: {
    del: function (num) {
      console.log(num);
      this.list.splice(num, 1);
      if (document.querySelector("#chooseAll").checked == true) {
        this.checkList.splice(num, 1);
      }
      if (this.checkList.length == this.list.length) {
        document.querySelector("#chooseAll").checked = true;
      } else {
        document.querySelector("#chooseAll").checked = false;
      }
    },
    checkAll: function (e) {
      //获取所有的单选项
      var checkObj = document.querySelectorAll(".radio");
      //判断全选状态
      if (e.target.checked) {
        for (var i = 0; i < checkObj.length; i++) {
          if (!checkObj[i].checked) {
            this.checkList.push(checkObj[i].value);
          }
        }
      } else {
        //清空新数组
        this.checkList = [];
      }
    },
  },
  watch: {
    checkList: function () {
      if (this.checkList.length == this.list.length) {
        document.querySelector("#chooseAll").checked = true;
        if (this.checkList.length == 0) {
          document.querySelector("#chooseAll").checked = false;
        }
      } else {
        document.querySelector("#chooseAll").checked = false;
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
  width: calc(100% - 179px);
  height: calc(100% - 92px);
  background: #fff;
  padding: 8px;
}
#app {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  align-content: flex-start;
}
#top {
  display: flex;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #e4e4e4;
}
#botton {
  display: flex;
  width: 100%;
  margin-top: 10px;
  background: #fff;
  float: left;
}
#top_img {
  background: url("../images/admin_bg.png") no-repeat -2px -40px;
  width: 23px;
  height: 23px;
  margin-top: 20px;
  margin-left: 5px;
  float: left;
}
#zi_left {
  float: left;
  font-size: 12px;
  width: 60px;
  height: 20px;
  margin-top: 28px;
  margin-left: 5px;
}
table {
  font-size: 12px;
  width: 100%;
}
td {
  border: 1px solid #dfdfdf;
  font-size: 12px;
}
tr {
  height: 38px;
}
#tw {
  display: flex;
  float: left;
  width: 100%;
  justify-content: space-between;
}

#zuo {
  display: flex;
  margin-top: 10px;
  justify-content: flex-start;
  float: left;
}

#zuo button {
  background: #555555;
  color: #fff;
  margin-left: 5px;
}

#you {
  display: flex;
  margin-top: 10px;
  justify-content: flex-end;
  float: right;
}

#you button {
  background: #96aecd;
  color: #fff;
  border: 1px solid #96aecd;
  margin-left: 5px;
}
img {
  width: 30px;
  height: 30px;
}
.yz {
  text-align: center;
}
.two {
  background: #f1f1f1;
  border: 1px solid #e5e5e5;
  color: #3d3d3d;
}
.one {
  background: #fff;
  border: 1px solid #e5e5e5;
  color: #3d3d3d;
}
</style>