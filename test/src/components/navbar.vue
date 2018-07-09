<template>
   <nav>
   		<ul>
	   		<router-link to="/home" tag="li" activeClass="active">首页
	   		</router-link>
	   		<router-link to="/buy" tag="li" activeClass="active">购票
	   		</router-link>
	   		<router-link to=""  tag="li" activeClass="active">
	   		商城
	   		</router-link>
	   		<router-link to=""  tag="li" activeClass="active">
	   		发现
	   		</router-link>
	   		<router-link to=""  tag="li" activeClass="iconfont icon-account"></router-link>
   		</ul>
		<form action="" method="get" accept-charset="utf-8">
			<span class="positioning">北京</span>
			<router-link tag="input" type="text" placeholder="影片/影院/影人，任你搜" to="/serch">正在热映</router-link>
		</form>
   </nav>
</template>

<script>
export default {
 
}
</script>
	
<style scoped lang="scss">
nav{
	height: 100px;
	width: 100%;
	z-index:1;
	overflow:hidden;
}
nav img{
	width: 67px;
	height: 22px;
	padding: 14px;
}
nav ul{
	flex: 1; 
	height: 50px;
	line-height: 50px;
	width: 100%;
	display: flex;
	color: #ccc;
	background-color: #000;

}
nav li{
	list-style: none;
	height: 50px;
	line-height: 50px;
	width: 20%;
	float: left;
	text-align: center;
}
li:hover{
	border-bottom: 2px solid #fff;
	height: 48px;
}
form{
	background: #ccc;
	height: 50px;
	width: 100%;
	span{
		margin-top:20px;
	}
}
input{
	height: 60%;
	border-radius: 5px;
	margin-left: 5%;

}

.positioning{
	height: 100%;
	margin-left: 2%;
}
</style>

