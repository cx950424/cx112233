<template>
	<div class="u1">
			<router-link tag="a" to="/film">正在热映49部<b>></b></router-link>
			
	   <ul class="u2">
	   	<li v-for="data in nowplay" :key="data.id" @click="hand(data.id)">
	   		<img :src="data.img" alt="">
	   		<span>{{data.t}}</span>
	   	</li>
	   </ul>
	   <router-link tag="a" to="/film/comingsoon">即将上映72部<b>></b></router-link>
		<div class="jin">
			<h3>今日热点</h3>
			<ul>
				<li v-for="data in jinri" :key="data.id" @click="handnews(data.id)">
					<img :src="data.img" alt="">
					<h4>{{data.title}}</h4>
					<p>{{data.desc}}</p>
				</li>
			</ul>
		</div>
	 </div>
</template>

<script>
import {mapState} from "vuex";
import router from "../router";
	export default{
		methods:{
			hand(id){
				router.push(`/detail/${id}`)
			},
			handnews(id){
				router.push(`/news/${id}`)
			}
		},
		mounted(){
			if(this.nowplay.length==0){
				this.$store.dispatch("getnow");
				this.$store.dispatch("getjinri")
			}else{

			}
		},
		computed:{
			...mapState(["nowplay"]),
			...mapState(["jinri"])			
		}
	}
</script>

<style scoped lang="scss">
.u1{
	overflow:hidden;
	a{
		font-size:32px;
		text-decoration:none;
		color:black;
	}
	b{
		float:right;
		font-size:32px;
	}
}

.u2{

	height:366px;
	overflow:hidden;
	li{
		float:left;
		padding:0px 10px;
		width:19%;

	}
	img{
		width:80px;
		height:140px;
	}
	span{
		display: block;
		height: 42px;
		overflow: hidden;
		text-align:center;
		font-size:14px;
	}
}
.jin{
	padding:20px;
	overflow:hidden;
	li{
	overflow:hidden;
	padding-bottom:10px;		
	}
	img{
		width:135px;
		float:left;
	}
}
</style>