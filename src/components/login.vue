<template>
	<div class="login">
		<div class="appbar">
			<div class="left" @click="$router.go(-1)"><</div>
			<h3>登录</h3>
		</div>
		<div class="logo">
			<img src="../assets/images/logo.png"/>
		</div>
		<div class="form">
			<div class="label">
				<div class="icon"><img src="../assets/images/user.png"/></div>
			<input type="text" name="" id="" placeholder="手机号/邮箱/企业名称/证件号" />
			</div>
			<div class="label1">
				<div class="icon"><img src="../assets/images/pwd.png"/></div>
			<input type="text" name="" id="" placeholder="请输入您的密码" />
			</div>
			
		</div>
		<button class="button">登录</button>
		<div class="foot">
		<div class="goreg" @click="goreg">前往注册</div>
		<div class="wpwd" @click="forgetpwd">忘记密码</div>
		</div>
	</div>
</template>

<script>
	export default {
    data(){
    	return{
    		
    	}
    },
    methods:{
    	goreg(){
    		this.$router.push("/reg")
    	},
    	forgetpwd(){
    		this.$router.push("/forgetpwd")
    	}
    }
}
</script>

<style scoped>
.login{background-image: url(../assets/images/background.png); background-size: 100% 100%;  
 width: 100%;height: 100%; position: fixed;left: 0;top: 0;z-index: -100;}

 
.appbar{width: 100%;background: #303030;height: 45px;line-height: 45px;color: #fff;}
.appbar .left{width: 16%;text-align: center;float: left;font-size: 18px;}
.appbar h3{width: 80%;font-size: 20px;font-weight: 400;}	
.logo{width: 100%;height: 300px;text-align: center;}
.logo img{width: 220px;margin-top: 120px;}
.form{width: 100%;}
.label{width: 70%;margin: 0 auto;border-bottom: 1px #ccc solid;padding-bottom: 20px;padding-left: 10px;}
.label .icon img{width: 25px;}
.label .icon{float: left;}
.label input{margin-left: 20px;border: none;outline: none;background: none;color: #fff;}
.label1{width: 70%;margin: 0 auto;border-bottom: 1px #ccc solid;padding-bottom: 20px;padding-left: 10px;margin-top: 20px;}
.label1 .icon img{width: 25px;}
.label1 .icon{float: left;}
.label1 input{margin-left: 20px;border: none;outline: none;background: none;color: #fff;}
.button{width: 70%;background: #4f8dff;line-height: 40px;border: none;border-radius: 5px;margin: 30px 15% 10px;color: #fff;}
.foot{width: 70%;margin: 0 auto;}
.foot:after{display: block;clear: both;content: "";}
.foot .goreg{color: #4f8dff;float: left;}
.foot .wpwd{color:#fff;float: right;}
  input::-webkit-input-placeholder{
            color:#fff;
        }
        input::-moz-placeholder{  
            color:#fff;
        }
        input:-moz-placeholder{    
            color:#fff;
        }
        input:-ms-input-placeholder{  
            color:#fff;
        }
</style>