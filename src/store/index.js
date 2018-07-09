import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);//注册模块

const store = new Vuex.Store({


	state:{
		nowplay:[],
		comingsoon:[],
		swip:[],
		jinri:[],
		adress:[]
	},

	actions:{
		getnow(store){
			axios.get("/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=20187415475387159").then(res=>{
				console.log(res.data);

				store.commit("getnowMutation",res.data.ms);
			})
		},

		getcomingsoon(store){
			axios.get("/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=20187416575973781").then(res=>{
				console.log(res.data);

				store.commit("getcomingsoonMutation",res.data);
				store.commit("getswip",res.data);
			})
		},
		getjinri(store){
			axios.get("/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=20187516371614863").then(res=>{
				console.log(res.data);

				store.commit("getjinriutation",res.data);
			})

		},
		getadress(store){
			axios.get("/api/proxy/ticket/OnlineLocationCinema/OnlineCinemasByCity.api?locationId=290&_=1530844290386").then(res=>{
				console.log(res.data);

				store.commit("getadressMutation",res.data);
			})
		}
	},

	mutations:{

		getnowMutation(state,payload){
			state.nowplay = payload;
		},

		getcomingsoonMutation(state,payload){
			state.comingsoon = payload.moviecomings;
		},
		getswip(state,payload){
			state.swip = payload.attention;
		},
		getjinriutation(state,payload){
			state.jinri = payload.hotPoints;
		},
		getadressMutation(state,payload){
			state.adress = payload;
		}
	}
})
//store 一个“全局对象”

export default store;