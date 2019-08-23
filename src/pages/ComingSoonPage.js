import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'

//引入本地存储工具类
import {setData,getData} from '../utils/Storage'

class ComingSoonPage extends React.Component {
  render(){
    return(
        <View style={styles.container}>
           <Text>
              暂无更多数据
           </Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default ComingSoonPage
