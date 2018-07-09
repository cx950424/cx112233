<template>
	<div>
		<ul>
			<router-link tag="li" to="/film/nowplaying" activeClass="q">正在热映</router-link>
			<router-link tag="li" to="/film/comingsoon" activeClass="q">即将上映</router-link>
		</ul>
		<router-view></router-view>
	</div>

</template>

<script>
	export default{

	}
</script>

<style scoped lang="scss">
	ul{
		display:flex;
		// padding-left:100px;
		// padding-right:100px;
		background: #0d121a;
		li{
			list-style:none;
			flex:1;
			text-align:center;
			height:34px;
			line-height:34px;
			background:#1c2635;
			color:#999;
		}
	}
	.q{
		color:#fff;
		background:#0d121a;
	}
	.shou{
		text-decoration: none;
		text-align: center;
		line-height: 34px;
		display: inline-block;
		float: left;
		color: #fff;
		padding-left: 10px;
		// font-weight: 100;
	}


</style>