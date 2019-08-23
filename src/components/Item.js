import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import { withNavigation } from 'react-navigation'

//引入子组件
import Stars from '../components/Stars'
//引入尺寸适配工具类
import {px2dp,screenW,screenH} from '../utils/px2dp'

class Item extends React.Component {

  render(){ 
    const {img,title,stars,score,id} = this.props
    return(
      <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.push('DetailPage',{id})}>
          <Image style={styles.img} source={{uri:img}}></Image>
          <Text  style={styles.title} ellipsizeMode={('middle')} numberOfLines={1}>{title}</Text>
          <Stars stars={stars} score={score}  style={{marginBottom:px2dp(20)}}></Stars>
      </TouchableOpacity>
    )
  }
}

  

 //样式
 const styles = StyleSheet.create({
    item:{
      width:px2dp(210),
      marginRight:px2dp(30),
      alignItems:'center'
    },
    img:{
      width:px2dp(210),
      height:px2dp(305)
    },
    title:{
      marginVertical:px2dp(20)
    }
 })


export default withNavigation(Item)