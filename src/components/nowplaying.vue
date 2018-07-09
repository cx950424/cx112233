<template>
	<div>

		<ul>
			<li v-for="data in nowplay" @click="hand(data.id)">
				<img :src="data.img" alt="">
				<h3>{{data.t}}</h3>
				<p>{{data.commonSpecial}}</p>
				<p>{{data.NearestCinemaCount}}家影院上映{{data.NearestShowtimeCount}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
import router from "../router";
import {mapState} from "vuex";
	export default{
		methods:{
			hand(id){
				router.push(`/detail/${id}`)
			}
			
		},
		mounted(){
			if(this.nowplay.length==0){
				//发起请求
				this.$store.dispatch("getnow");
			}else{

			}
		},
		computed:{
			...mapState(["nowplay"])
		}
	}
</script>

<style scoped lang="scss">
	.s{
		background:#f6f6f6;
		padding:.8em 1.5em .75em;
		border-bottom:1px solid #d8d8d8;
	}
	ul{
		li{
			padding:10px;
			overflow: hidden;
			img{
				float:left;
				width:100px;
			}
		}
	}
</style>