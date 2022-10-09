<template>
  <body>
    <div id="box">
      <div id="box1">
        <h3>
          <p id="z">添加分类</p>
        </h3>
        <img src="../images/a1.png" id="pic" />
      </div>
      <div id="box2">
        <p class="text">分类名称:</p>
        <input type="" name="" id="inp" value="" />
        <p class="text1">上级分类:</p>
        <input type="" name="" id="inp1" value="顶级分类" />
        <img src="../images/a2.png" id="pic1" />
        <p class="text2">数量单位:</p>
        <input type="" name="" id="inp2" value="" />
        <p class="text3">排序:</p>
        <input type="" name="" id="inp3" value="" />
        <p class="text4">是否显示:</p>
        <input type="radio" name="" id="inp4" value="" />
        <p class="text5">是</p>
        <input type="radio" name="" id="inp5" value="" />
        <p class="text6">否</p>
        <p class="text7">分类页面标题:</p>
        <input type="" name="" id="inp6" value="" />
        <p class="text8">分类页面关键词:</p>
        <input type="" name="" id="inp7" value="" />
        <p class="text9">分类页面描述:</p>
        <textarea class="tet"></textarea>
        <button type="button" id="enter">保存</button>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "AddCategory",
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
#box {
  height: 500px;
  width: 500px;
  display: flex;
}

#pic {
  height: 25px;
  width: 25px;
  display: flex;
  margin-top: 5px;
  margin-left: 1px;
  position: relative;
}

#z {
  font-size: 10px;
  margin-top: 5px;
  margin-left: 31px;
  display: flex;
  position: absolute;
}

#box2 {
  height: 500px;
  width: 500px;
  display: flex;
  margin-top: 63px;
  margin-left: 107px;
}

#inp {
  height: 20px;
  width: 120px;
  margin-top: -4px;
  margin-left: 2px;
}

.text {
  font-size: 10px;
  display: flex;
  width: 60px;
  height: 50px;
}

.text1 {
  font-size: 10px;
  display: flex;
  width: 60px;
  height: 50px;
  margin-top: 55px;
  margin-left: -190px;
}

#inp1 {
  height: 20px;
  width: 80px;
  margin-top: 52px;
  margin-left: 7px;
}

#pic1 {
  width: 14px;
  height: 17px;
  margin-top: 55px;
  margin-left: -23px;
}

.text2 {
  font-size: 10px;
  display: flex;
  width: 60px;
  height: 50px;
  margin-top: 100px;
  margin-left: -141px;
}

#inp2 {
  height: 20px;
  width: 50px;
  margin-top: 97px;
  margin-left: 6px;
}

.text3 {
  font-size: 10px;
  display: flex;
  width: 60px;
  height: 50px;
  margin-top: 145px;
  margin-left: -96px;
}

#inp3 {
  height: 20px;
  width: 50px;
  margin-top: 142px;
  margin-left: -18px;
}

.text4 {
  font-size: 10px;
  display: flex;
  width: 60px;
  height: 50px;
  margin-top: 190px;
  margin-left: -120px;
}

#inp4 {
  height: 15px;
  width: 15px;
  margin-top: 191px;
  margin-left: 5px;
}

.text5 {
  font-size: 10px;
  display: flex;
  width: 60px;
  height: 50px;
  margin-top: 190px;
  margin-left: -1px;
}

#inp5 {
  height: 15px;
  width: 15px;
  margin-top: 191px;
  margin-left: -47px;
}

.text6 {
  font-size: 10px;
  display: flex;
  width: 60px;
  height: 50px;
  margin-top: 190px;
  margin-left: 0px;
}

.text7 {
  font-size: 10px;
  display: flex;
  width: 75px;
  height: 50px;
  margin-top: 235px;
  margin-left: -194px;
}

#inp6 {
  height: 20px;
  width: 215px;
  margin-top: 231px;
  margin-left: 18px;
}

.text8 {
  font-size: 10px;
  display: flex;
  width: 87px;
  height: 50px;
  margin-top: 280px;
  margin-left: -321px;
}

#inp7 {
  height: 20px;
  width: 215px;
  margin-top: 276px;
  margin-left: 15px;
}

.text9 {
  font-size: 10px;
  display: flex;
  width: 87px;
  height: 50px;
  margin-top: 370px;
  margin-left: -309px;
}

.tet {
  height: 100px;
  width: 290px;
  margin-top: 325px;
  margin-left: 63px;
  position: absolute;
}

#enter {
  height: 23px;
  width: 43px;
  margin-top: 436px;
  margin-left: 3px;
}
</style>