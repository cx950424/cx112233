<template>
	<div>
		<h1>{{list.title}}</h1>
		<span>{{list.time}}</span><span>评论{{list.commentCount}}</span>
		<p>{{list.content}}</p>
		
	 </div>
</template>

<script>
import axios from "axios"
	export default{
		mounted(){
		console.log(this.$route.params.id)
			axios.get(`/Service/callback.mi/News/Detail.api?newsId=${this.$route.params.id}&t=20187519345781168`).then(res=>{
				this.list=res.data;
				console.log(res.data)
			})
		},
		data(){
			return{
				list:[]
			}
		}
	}
</script>

<style scoped lang="scss">

</style>