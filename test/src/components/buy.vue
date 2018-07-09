<template>
	<div>
		<ul class="u1">
			<li>离我最近</li>
			<li>全成</li>
			<li>影厅特效</li>
		</ul>
		<br>
		<ul class="u2">
			<li v-for="data in adress">
				<p>{{data.cinameName}}</p>
				<p>{{data.address}}</p>
				<p>{{data.minPrice}}元起</p>
			</li>
		</ul>
	</div>
  	
</template>

<script>
import {mapState} from "vuex";
export default {
 mounted(){
		if(this.adress.length==0){
			//发起请求
			this.$store.dispatch("getadress");
		}else{

		}
 },
 computed:{
 	...mapState(["adress"])
 }
}
</script>
	
<style scoped lang="scss">
	.u1{

		padding-left:25px;
		border-top:1px solid #ccc;
		border-bottom:1px solid #ccc;
		li{
			float:left;
			border-right:1px solid #ccc;
			padding-right:20px;
			padding-left:20px;
		}
	}
	.u2{
		li{
			border-bottom:1px solid #ccc;
		}
	}
</style>

