import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Dimensions
} from 'react-native'


const {width,height} = Dimensions.get('window')

class WelComePage extends React.Component {

  state={
    time:5,    //欢迎动画倒计时  默认
  }


  render(){
    const {time} = this.state
    return(
       <ImageBackground style={styles.container} source={require('../assets/image/welcome.png')}>
           <View style={styles.box}>
              <Text style={styles.time}>{time}</Text>
           </View>
       </ImageBackground>
    )
  }

  //设置定时器
  componentDidMount(){
    
    this.timerId1 = setTimeout(()=>{
      this.props.navigation.replace('Tab')
      this.timerId && clearTimeout(this.timerId)
    },6000)

    let {time} = this.state
    this.timerId2 = setInterval(()=>{
      time--
      if(time == 0){
        time = 0
      }
      this.setState({
        time
      })
    },1000)
  }

  //清除定时器
  componentWillUnmount(){
    this.timerId1 && clearTimeout(this.timerId1)
    this.timerId2 && clearTimeout(this.timerId2)
  }
}

const styles = StyleSheet.create({
  container:{
    width: width, 
    height: height
  },
  box:{
    width:30,
    height:20,
    backgroundColor:'rgba(0,122,240,0.3)',
    borderRadius:10,
    alignItems:'center',
    position:'absolute',
    right:5,
    top:5  
  },
  time:{
    color:'#fff',
    fontSize:15
  }
})

export default WelComePage
