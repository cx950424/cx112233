<template>
	<div>
		<div class="qwe">
		
		</div>
		<div v-if="list" class="yi">
			<img :src="list.image" alt="" class="l">
			<div class="tou">
				<h3>{{list.titleCn}}</h3>
				<p class="bai">{{list.titleEn}}</p>
			</div>

			<p class="pang">{{list.runTime}}</p>
			<p class="pang">{{list.type[1]}}</p>
			<p class="pang">{{list.release.date}}</p>
			<div class="kan">
				<a href="#" class="hui">我想看</a>
				<a href="#" class="lv">我要评分</a>
			</div>
			<div class="piao">
				<a href="#" class="chakan">查影讯/购票</a>
			</div>
		</div>
			<p>{{list.content}}</p>
	</div>
</template>

<script>
import axios from "axios"
	export default{
		mounted(){
			console.log(this.$route.params.id);
			axios.get(`/Service/callback.mi/movie/Detail.api?movieId=${this.$route.params.id}&locationId=290&t=2018741958611507`).then(res=>{
				this.list=res.data
				console.log(res.data.style)

			})

		},
		data(){
			return{
				list:null
			}
		},

	}
</script>


<style scoped lang="scss">
	.yi{
		border-bottom: 1px solid #ccc;
	}
	.kan{
		padding-top: 10px;
	}
	.piao{
		// width: 100%;
		margin-top:20px;
		margin-bottom: 20px;
	}
	.chakan{
		text-align: center;
		margin: 0 auto;
		width: 90%;
		display: block;
		color: #fff;
		border-radius: 40em;
		background: #f60;
		height: 50px;
		line-height: 50px;
	}
	a{
		display: inline-block;
		text-decoration: none;
		text-align: center;
	}
	.hui{
		color: #777;
		width: 100px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border: 1px solid #777;
		border-radius: 40em;
	}
	.lv{
		color: #659c0d;
		width: 100px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border: 1px solid #659c0d;
		border-radius: 40em;
	}
	.qwe{
		width: 100%;
		height: 30px;
	}
	.tou{
		height: 70px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.tou h3{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;

	}
	.tou p{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.pang{
		font-weight: bold;
	}
	img{
		width:35%;
		height: 180px;
		float:left;
		padding-right: 10px;
		padding-left: 10px;
	}
</style>