<template>
	<div>
		<div class="d1">
			<button @click="aa()">返回</button>
			<input type="text" placeholder="影片/影院/影人，任你搜" v-model="searchVal">
		</div>
			<ul>
				<li v-for="data,index in NewItems" :key="index" :value="data.value" @click="hand(data.id)">
					<p>{{data.t}}</p>
					<img :src="data.img" alt="">
				</li>
			</ul>
	</div>
</template>

<script>
import router from "../router";

import {mapState} from "vuex";
export default {
	data(){
		return{
			searchVal:""
		}
	},
 	mounted(){
		if(this.nowplay.length==0){
			this.$store.dispatch("getnow");
		}else{

		}
 	},
		computed:{
	...mapState(["nowplay"]),
  NewItems() {
   var _this = this;
   var NewItems = [];
   this.nowplay.map(function(item) {
    if (item.t.search(_this.searchVal) != -1) {
     NewItems.push(item);
    }
   });
   return NewItems;
	}
},
methods:{
	hand(id){
		router.push(`/detail/${id}`)
	},
	aa(){
		this.$router.go(-1)
	}
}
}
</script>
	
<style scoped lang="scss">
	.d1{
		height:53px;
		background-color:#1c2635;
	}
		input{
			height: 36px;
			border-radius:10px;
			margin:0 25%;
			margin-top:5px;
		}
ul{
	min-height:200px;
	li{
		img{
			width:130px;
		}
	}
}
</style>

