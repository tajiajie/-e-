import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Found from '../components/Found.vue'
import My from '../components/My.vue'
import Login from '../components/Login.vue'
import Zuzhilife from '../shouye-view/Zuzhilife'
import study from '../shouye-view/study'
import photograph from '../shouye-view/photograph'
import system from '../shouye-view/system'
import activity from '../shouye-view/activity'
import neweye from '../shouye-view/neweye'
import interaction from '../shouye-view/interaction'
import yidiantong from '../shouye-view/yidiantong'
import id from '../shouye-view/id'
import today from '../shouye-view/today'
import changepassword from '../Mydangjian/changepassword'
import Money from '../Mydangjian/Money'
import personal from '../Mydangjian/personal'
import jifen from '../Mydangjian/jifen'
import jifenmingxi from '../Mydangjian/jifenmingxi'
import politicalstudy from '../handlife/politicalstudy'
import shenhe from '../handlife/shenhe'
import success from '../handlife/success'
import democracy from '../handlife/democracy'
import persummary from '../handlife/persummary'
import know from '../handlife/know'
import canpingdangyuan from '../handlife/canpingdangyuan'
import tijiao from '../handlife/tijiao'
import xindeshenhe from '../handlife/xindeshenhe'
import yunhudong from '../yun/yunhudong'
import yunhudong1 from '../yun/yunhudong1'
import mymap from '../handlife/mymap'
import NEW1 from '../components/NEW1'
import NEW2 from '../components/NEW2'
import NEW3 from '../components/NEW3'
import NEW4 from '../components/NEW4'
import NEW5 from '../components/NEW5'
import NEW6 from '../components/NEW6'
import NEW7 from '../components/NEW7'
import NEW8 from '../components/NEW8'
import NEW9 from '../components/NEW9'
import personal2 from '../Mydangjian/personal2'
import minzhupingyi2 from '../handlife/minzhupingyi2'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/Home'},
    {path:'/Home',name:'Home',component:Home},
    {path:'/Found',name:'Found',component:Found},
    {path:'/My',name:'My',component:My},
    {path:'/Login',component:Login},
    {path:'/Zuzhilife',component:Zuzhilife},
    {path:'/study',component:study},
    {path:'/photograph',component:photograph},
    {path:'/system',component:system},
    {path:'/activity',component:activity},
    {path:'/neweye',component:neweye},
    {path:'/interaction',component:interaction},
    {path:'/yidiantong',component:yidiantong},
    {path:'/id',component:id},
    {path:'/today',component:today},
    {path:'/changepassword',component:changepassword},
    {path:'/Money',component:Money},
    {path:'/personal',component:personal},
    {path:'/jifen',component:jifen},
    {path:'/jifenmingxi',component:jifenmingxi},
    {path:'/politicalstudy',component:politicalstudy},
    {path:'/shenhe',component:shenhe},
    {path:'/success',component:success},
    {path:'/democracy',component:democracy},
    {path:'/persummary',component:persummary},
    {path:'/know',component:know},
    {path:'/canpingdangyuan',component:canpingdangyuan},
    {path:'/tijiao',name:tijiao,component:tijiao},
    {path:'/xindeshenhe',component:xindeshenhe},
    {path:'/yunhudong',component:yunhudong},
    {path:'/yunhudong1',component:yunhudong1},
    {path:'/mymap',component:mymap},
    {path:'/NEW1',component:NEW1},
    {path:'/NEW2',component:NEW2},
    {path:'/NEW3',component:NEW3},
    {path:'/NEW4',component:NEW4},
    {path:'/NEW5',component:NEW5},
    {path:'/NEW6',component:NEW6},
    {path:'/NEW7',component:NEW7},
    {path:'/NEW8',component:NEW8},
    {path:'/NEW9',component:NEW9},
    {path:'/personal2',component:personal2},
    {path:'/minzhupingyi2',component:minzhupingyi2},
  ]
})
