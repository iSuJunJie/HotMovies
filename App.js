import React from 'react'
import {Text} from 'react-native'
import { createStackNavigator,createBottomTabNavigator } from 'react-navigation'
import CardStackStyleInterpolator  from 'react-navigation/src/views/StackView/StackViewStyleInterpolator'

//引入路由组件
import WelComePage from './src/pages/WelComePage'
import HotMoviePage from './src/pages/HotMoviePage'
import ComingSoonPage from './src/pages/ComingSoonPage'
import UserPage from './src/pages/UserPage'
import DetailPage from './src/pages/DetailPage'



//底部导航路由
const Tab = createBottomTabNavigator({
  HotMoviePage:{
      screen:HotMoviePage,
      navigationOptions:{
        header:null,
        tabBarLabel:'最热大片',
        
      }
  },

  ComingSoonPage:{
      screen:ComingSoonPage,
      navigationOptions:{
        header:null,
        tabBarLabel:'即将上映',
      }
  },

  UserPage:{
    screen:UserPage,
    navigationOptions:{
      header:null,
      tabBarLabel:'我的电影',
    }
  },

},{
    tabBarOptions:{
      
      activeTintColor:'#0390EB',   //选中状态下  文字和图标颜色
      inactiveTintColor:'#fff' , //不选中状态下 文字和图标颜色

      activeBackgroundColor:'#22222',//选中状态下  选项卡背景颜色
      inactiveBackgroundColor:'#222222',  //不选中状态下 选项卡背景颜色
      
      labelStyle:{
        fontSize:20,
        textAlign:'center',
        marginBottom:10
      }
    }
})


//整体界面路由
const App = createStackNavigator({
   WelComePage:{
     screen:WelComePage,
     navigationOptions:{
      gesturesEnabled:true, //可以滑动
      header:null
     }
   },
   
   Tab:{
    screen:Tab,
    navigationOptions:{
      gesturesEnabled:true, //可以滑动
      header:null
     }
   },

   DetailPage:{
    screen:DetailPage,
    navigationOptions:{
     gesturesEnabled:true, //可以滑动
     header:null
    }
   }
},{
    mode:'card',
    headerMode:'none',  //如果 为 none 那么所有页面都没有头部 为 screen那么默认都有，需要在自己页面下配置为null，实现各别有头部
    transitionConfig:() => ({
      screenInterpolator:CardStackStyleInterpolator.forHorizontal
    })
})

export default App
