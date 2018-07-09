<template>
	<div>


<mt-swipe :auto="4000">
  <mt-swipe-item v-for="data in swip" :key="data.id">
  			<div class="lun" @click="lun(data.id)">
  		      <img :src="data.image" alt="">
		      <p>{{data.title}}</p>
		      <p>{{data.wantedCount}}人想看-{{data.type}}</p>
		      <p>导演:{{data.director}}</p>
		      <p>演员:{{data.actor1}},{{data.actor2}}</p>
		      <span>预告片</span>

  			</div>

</mt-swipe-item>
</mt-swipe>

		<ul>
			<li v-for="data in comingsoon" @click="hand(data.id)">
				<b>{{data.rDay}}日</b>
				<img :src="data.image" alt="">
				<h3>{{data.title}}</h3>
				<p><i>{{data.wantedCount}}</i>人想看-{{data.type}}</p>
				<p>导演:{{data.director}}</p>
				<p><el-button type="warning" v-show="data.isTicket">超前预售</el-button>
					<el-button type="success" plain v-show="data.isVideo">预告片</el-button>
				</p>				 
			</li>
		</ul>
	</div>
</template>

<script>
import {mapState} from "vuex";
import router from "../router";
import { Swipe, SwipeItem } from 'mint-ui';
	export default{
		methods:{
			hand(id){
				router.push(`/detail/${id}`)
			},
			lun(id){
				router.push(`/detail/${id}`)
			}
		},
		mounted(){
			if(this.comingsoon.length==0){
				//发起请求
				this.$store.dispatch("getcomingsoon");
			}else{

			}
		},
		computed:{
			...mapState(["comingsoon"]),
			...mapState(["swip"]),

		},
		components:{
			"mt-swipe":Swipe,
			"mt-swipe-item":SwipeItem //注册局部组件
		},

	}
</script>

<style scoped lang="scss">

	ul{
		li{
			padding:10px;
			overflow: hidden;
			img{
				float:left;
				width:100px;
				margin-right:10px;
			}
			i{
				color:red;
				font-style:normal
			}
			b{
				float:left;
				font-weight:100
			}
		}
	}


.lun{

 img {
 width: 30%;
 float:left;
 height:166px;
 }
}
 .mint-swipe {
 height: 200px;
 }
 .desc {
 font-weight: 600;
 opacity: .9;
 padding: 5px;
 height: 20px;
 line-height: 20px;
 width: 100%;
 color: #fff;
 background-color: gray;
 position: absolute;
 bottom: 0;
 }
</style>