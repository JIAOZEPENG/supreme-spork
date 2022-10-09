<template>
  <body>
		<div id="big_box2">
			<div class="top_div2">
				<div class="img2"></div>
				<p class="wenzi2">管理员回复</p>
			</div>
			<div class="liuyan">
				<p class="ziti">DeathGhost:</p>
				<div class="grey">
					<p class="xinxi">这里是用户留言信息哦....</p>
				</div>
				
			</div>
			<div class="guanliyuan">
				<p class="ziti2">管理员</p>
				<div class="green">
					<p class="guanli">这里是用户留言信息哦....</p>
				</div>
			</div>
			<div class="xiantiao"></div>
			<div class="bom_box">
				<textarea name="" id="wenbenyu"></textarea>
				<a href="user_message.html"><router-link tag="button" to="/UserMessage" class="huifu">回复</router-link></a>
			</div>
			
		</div>
		
	</body>
</template>

<script>
export default {
    name:"ReplyMessage"
}
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
*{
				margin: 0px;
				padding: 0px;
			}
			body{
				overflow-x: hidden;
			}
			#big_box2{
				width: 100%;
				height: 100%;
			}
			.top_div2{
				border-bottom: 1px solid #e3e3e3;
				margin-top: 50px;
				width: 98%;
				margin-left: 16px;
			}
			.img2{
				width: 23px;
				height: 23px;
				background-image: url('../images/admin_bg.png');
				background-position: -92px -44px;
				
			}
			.wenzi2{
				float: left;
				margin-top: -24px;
				margin-left: 28px;
				font-weight: 600;
				font-size: 15px;
			}
			.liuyan{
				width: 98%;
				height: 38px;
				padding-left: 18px;
				padding-top: 16px;
			}
			.ziti{
				font-size: 15px;
				font-weight: 600;
			}
			.grey{
				width: 98%;
				height: 25px;
				background-color: #f0f0f0;
				margin-top: 5px;
				border-radius: 5px;
			}
			.xinxi{
				font-size: 10px;
				padding: 4px 5px;
			}
			.guanliyuan{
				width: 98%;
				height: 38px;
				padding-left: 18px;
				padding-top: 21px;
			}
			.ziti2{
				font-size: 15px;
				font-weight: 600;
			}
			.green{
				width: 98%;
				height: 25px;
				background-color: #f0ffd1;
				margin-top: 5px;
				border-radius: 5px;
			}
			.guanli{
				font-size: 10px;
				padding: 4px 5px;
			}
			.xiantiao{
				width: 98%;
				border-bottom: 2px solid #e3e3e3;
				margin-bottom: 16px;
				margin-left: 17px;
				padding-top: 27px;
			}
			.bom_box{
				width: 500px;
				height: 38px;
				padding-left: 18px;
			}
			#wenbenyu{
				width: 530px;
				height: 210px;
				margin-bottom: 5px;
			}
			.huifu{
				width: 65px;
				height: 30px;
				padding: 5px 5px;
			}
</style>