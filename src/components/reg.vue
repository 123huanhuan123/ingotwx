<template>
	<div>
		<div class="appbar">
			<div class="left" @click="$router.go(-1)"><</div>
			<h3>注册</h3>
		</div>
		<div class="esinfm">
		<div class="top">基本信息</div>
		
		<form>
					<div class="comname">
						<div class="label">企业名称：</div>
						<input type="text" placeholder="请输入您的企业名称">
					</div>
					<div class="name">
						<div class="label">统一社会信用代码：</div>
						<input type="text" placeholder="请输入您的社会信用代码">
					</div>
					<div class="name">
						<div class="label">企业所在地区：</div>
						<select name="">
						  <option value ="volvo">请选择</option>
						  <option value ="saab">Saab</option>
						  <option value="opel">Opel</option>
						  <option value="audi">Audi</option>
						</select>
					</div>
					<div class="name">
						<div class="label">企业详细地址：</div>
						<input type="text" placeholder="请输入您的企业详细地址">
						
					</div>
					<div class="namefy">
						<div class="label">同详细地址：</div>
						
						<input name="radio1" type="radio" checked> <span>是</span> 
						<input name="radio1" type="radio"> <span>否</span>
					</div>
					<div class="name">
						<div class="label">注册所在区：</div>
						<select name="">
						  <option value ="volvo">请选择</option>
						  <option value ="saab">Saab</option>
						  <option value="opel">Opel</option>
						  <option value="audi">Audi</option>
						</select>
					</div>
					<div class="name">
						<div class="label">企业注册地址：</div>
						<input type="text" placeholder="请输入您的企业注册地址">
					</div>
					
	</form>
	</div>
	
	
			<div class="contact">
		<div class="top">联系信息</div>
		<form>
					<div class="name">
						<div class="label">联系人：</div>
						<input type="text" placeholder="请输入您的姓名">
					</div>
					<div class="name">
						<div class="label">联系方式：</div>
						<input type="text" placeholder="请输入您的联系方式">
					</div>
					<div class="nameify">
						<div class="label">验证码：</div>
						<input type="text" placeholder="请输入验证码">
						<button>获取验证码</button>
					</div>
					<div class="name">
						<div class="label">电子邮箱：</div>
						<input type="text" placeholder="请输入您的电子邮箱">
					</div>
					<div class="name">
						<div class="label">登录密码：</div>
						<input type="text" placeholder="请输入您的登录密码">
						
					</div>
					
					<div class="name">
						<div class="label">确认密码：</div>
						<input type="text" placeholder="请再次输入您的密码">
					</div>
					
	</form>
	</div>
	<button class="button" @click="reg"> 点击注册</button>
	</div>
</template>
<script>
export default {
    data(){
    	return{
    		
    	}
    },
    methods:{
    	reg(){
    		this.$router.push("/choice")
    	}
    }
}
</script>

</script>
<style scoped>
body{font-size: 12px;background: #EFEFF4;}
.appbar{width: 100%;background: #303030;height: 45px;line-height: 45px;color: #fff;}
.appbar .left{width: 16%;text-align: center;float: left;font-size: 18px;}
.appbar h3{width: 80%;font-size: 20px;font-weight: 400;}
.esinfm{background: #fff;width: 100%;margin-top: 10px;padding-top: 10px;}
.esinfm:after{content: "";display: block;clear: both;}
.top{font-size: 16px;text-indent: 20px;margin-bottom: 10px;}
.name,.comname,.nameify{border-bottom: 1px #ccc solid;width: 95%;height: 35px;line-height: 35px; text-indent: 20px;margin-left: 10px;}
.name .label,.comname .label,.nameify .label{width: 36%;float: left;font-size: 12px;}
.name input,.comname input{border: none;width: 45%;outline: none;text-align: left;}
.name select{width: 45%;text-align: left;border-radius: 4px;height: 30px;line-height: 30px;}

.namefy{border-bottom: 1px #ccc solid;width: 95%;height: 40px;line-height: 40px; text-indent: 20px;margin-left: 10px;}
.namefy .label{width: 36%;float: left;}

.contact{background: #fff;width: 100%;margin-top: 2px;padding-top: 10px;}
.contact:after{content: "";display: block;clear: both;}

.nameify{position: relative;}
.nameify  input{width: 30%;border: none;outline: none;}
.nameify button{position: absolute;background: #4f8dff;border: none;border-radius: 5px;width: 80px;color: #fff;height: 30px;font-size: 14px;right: 7%;top:7%}
.button{width: 100%;height: 55px;background: #4f8dff;border: none;color: #fff;position: fixed;bottom: 0;font-size: 18px;}
</style>