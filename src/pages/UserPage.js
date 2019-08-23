import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native'

//引入字体图标组件
import Icon from 'react-native-vector-icons/AntDesign'
//引入尺寸适配工具类
import {px2dp} from '../utils/px2dp'

class UserPage extends React.Component {
  render(){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.item}>
                 <Text style={{fontSize:20,color:'#505050'}}>我的电影票</Text>
                 <Icon name='right' size={20} color='#ccc'></Icon>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                 <Text style={{fontSize:20,color:'#505050'}}>我的兑换券</Text>
                 <Icon name='right' size={20} color='#ccc'></Icon>
            </TouchableOpacity>


            <TouchableOpacity style={styles.item}>
                 <Text style={{fontSize:20,color:'#505050'}}>优惠券</Text>
                 <Icon name='right' size={20} color='#ccc'></Icon>
            </TouchableOpacity>


            <TouchableOpacity style={styles.item}>
                 <Text style={{fontSize:20,color:'#505050'}}>观看记录</Text>
                 <Icon name='right' size={20} color='#ccc'></Icon>
            </TouchableOpacity>


            <TouchableOpacity style={styles.item}>
                 <Text style={{fontSize:20,color:'#505050'}}>猜你喜欢</Text>
                 <Icon name='right' size={20} color='#ccc'></Icon>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                 <Text style={{fontSize:20,color:'#505050'}}>账号管理</Text>
                 <Icon name='right' size={20} color='#ccc'></Icon>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                 <Text style={{fontSize:20,color:'#505050'}}>应用推荐</Text>
                 <Icon name='right' size={20} color='#ccc'></Icon>
            </TouchableOpacity>

        </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    paddingHorizontal:px2dp(30),
    backgroundColor:'#fff'
  },
  item:{
    height:px2dp(100),
    backgroundColor:'#fff',
    borderBottomWidth:px2dp(1),
    borderBottomColor:'#eee',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  }
})

export default UserPage
