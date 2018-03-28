<template>
	<div class="forgetpwd">
		<div class="appbar">
			<div class="left" @click="$router.go(-1)"><</div>
			<h3>忘记密码</h3>
		</div>
		<div class="contact">
		
		<form>
					<div class="phone">
						<div class="label">手机号：</div>
						<input type="text" placeholder="请输入您绑定的手机号">
					</div>
					<div class="ify">
						<div class="label">验证码：</div>
						<input type="text" placeholder="请输入验证码">
						<button>获取验证码</button>
					</div>
					<div class="newpwd">
						<div class="label">新密码：</div>
						<input type="text" placeholder="请输入您的新密码">
					</div>
					
					<div class="spwde">
						<div class="label">确认密码：</div>
						<input type="text" placeholder="请再次输入您的新密码">
					</div>
					
					
	</form>
	</div>
	<button class="button">完成</button>
	</div>
</template>

<script>
</script>

<style scoped>
body{font-size: 12px;background: #EFEFF4;}
.appbar{width: 100%;background: #303030;height: 45px;line-height: 45px;color: #fff;}
.appbar .left{width: 16%;text-align: center;float: left;font-size: 18px;}
.appbar h3{width: 80%;font-size: 20px;font-weight: 400;}

.contact{background: #fff;width: 100%;margin-top: 2px;padding-top: 10px;}
.contact:after{content: "";display: block;clear: both;}
.phone,.ify,.newpwd,.spwde{border-bottom: 1px #ccc solid;width: 95%;height: 45px;line-height: 45px; text-indent: 20px;margin-left: 10px;}
.phone .label,.ify .label,.newpwd .label,.spwde .label{width: 36%;float: left;font-size: 12px;}
.phone input,.newpwd input,.spwde input{border: none;width: 55%;outline: none;text-align: left;}
.ify{position: relative;}
.ify  input{width: 30%;border: none;outline: none;}
.ify button{position: absolute;background: #4f8dff;border: none;border-radius: 5px;width: 80px;color: #fff;height: 30px;font-size: 14px;right: 7%;top:19%}
.button{position: fixed;bottom: 0;width: 100%;height: 55px;color: #fff;background: #4f8dff;border: none;font-size: 18px;}
</style>