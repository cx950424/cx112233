import Vue from 'vue'
import Router from 'vue-router'
import Film from "../components/film"
import Nowplaying from "../components/nowplaying"
import Comingsoon from "../components/comingsoon"
import Detail from "../components/detail"
import Buy from "../components/buy"
import Home from "../components/home"
import New from "../components/news"
import Serch from "../components/serch"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/film',
      component: Film,
      children:[
      	{
      		path:"nowplaying", 
      		component:Nowplaying
      	},
      	{
      		path:"comingsoon", 
      		component:Comingsoon
      	},
      	{
      		path:"/film", 
      		redirect:"/film/nowplaying"
      	},
      ]
    },{
      path: '/detail/:id',
      component: Detail
    },
      {
        path:'/buy',
        component:Buy
      },{
        path:'/home',
        component:Home
      },{
      path: '/',
      component: Home
    },{
      path: '/news/:id',
      component: New
    },,{
      path: '/serch',
      component: Serch
    },

  ]
})
