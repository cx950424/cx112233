<template>
	<div>
		<ul>
			<router-link to="/home" tag="li">首页</router-link>
			<router-link to="/buy" tag="li">购票</router-link>
			<router-link to="" tag="li">商城</router-link>
			<router-link to="" tag="li">发现</router-link>
			<router-link to="" tag="li">我的</router-link>
		</ul>


		<div class="d2">
			<ul>
				<li><a href="">PC版</a></li>
				<li><a href="">客户端下载</a></li>
				<li><a href="">意见反馈</a></li>
				<li><a href="">帮助中心</a></li>
			</ul>
			<p>
				<span>Copyright </span>
				<span>2006-2018</span>
				<span> Mtime.com Inc. All rights reserved.</span>
			</p>
		</div>
	</div>
</template>

<script>
	export default{

	}
</script>

<style scoped lang="scss">
	ul{
		li{
			float:left;
			width:20%;
			text-align:center;
			color:#0074c5;
			padding-bottom:30px;
		}
	}
	.d2{

		ul{
			li{
				width:25%;
				background-color:#f6f6f6;
				padding-top:10px;
				a{

					border-right:1px solid #ccc;
					text-decoration:none;
					padding-right:13px;
					font-size:12px;
				}
			}
		}
		p{
			color:#cdcdcd;
			text-align:center;
			background-color:#f6f6f6;
			padding-bottom:10px;

			span{
				font-size:12px;
			}
		}
	}
</style>