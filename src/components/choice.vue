<template>
	<div>
		<div class="appbar">
			<div class="left" @click="$router.go(-1)"><</div>
			<h3>选择保险公司</h3>
		</div>
		<div class="company">
		<div class="top">保险公司</div>
		<div class="com">
				<input name="radio1" type="radio" checked> <span>中国人寿保险有限公司</span> 	
				
		</div>
		<div class="import">注：后续将开放更多保险公司</div>
		</div>
		
		
	</div>
	
</template>

<script>
</script>

<style scoped>
body{font-size: 11px;background: #EFEFF4;}
.appbar{width: 100%;background: #303030;height: 45px;line-height: 45px;color: #fff;}
.appbar .left{width: 16%;text-align: center;float: left;font-size: 18px;}
.appbar h3{width: 80%;font-size: 20px;font-weight: 400;}
.top{font-size: 16px;text-indent: 20px;margin-bottom: 10px;}
.company{background: #fff;width: 100%;margin-top: 10px;padding-top: 10px;}
.company:after{content: "";display: block;clear: both;}
.com{text-indent: 30px;line-height: 40px;border-bottom: 1px #ccc solid;}
.import{text-indent: 40px;}
</style>