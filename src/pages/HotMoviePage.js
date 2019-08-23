import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator ,//loading效果组件
  Linking       ,     //可以实现播放 MP4 mp3等 链接内容
} from 'react-native'


//引入子组件
import Item from '../components/Item'

//引入 尺寸适配工具类
import {px2dp,screenW,screenH} from '../utils/px2dp'
//引入 缓存工具类
import {setData,getData,removeData}  from '../utils/Storage'

//引入接口处理函数
import {reqMovieList} from '../api/index'

class HotMoviePage extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      hotMovies:[],  //最热电影列表数据,
      ready:false,   //状态标识 
    }
  }

  render(){
    const {hotMovies,ready} = this.state
    return(
        <View style={styles.container}>
           {/* banner */}
           <View style={styles.banner}>
              <Image source={require('../assets/image/banner.png')} style={{width:'100%',height:'100%'}}></Image>
           </View>
           
           {
             ready?(
                <FlatList
                    keyExtractor={(item, index) => item.id}   //列表中每一个item的 key值
                    columnWrapperStyle={styles.list}          //每一行的样式
                    numColumns={3}                            //每一行列的数量
                    data={hotMovies}                      //数据源
                    renderItem={({item}) => (                 //显示的结构
                      <Item 
                          img={item.images.large} 
                          title={item.title}
                          stars={item.rating.stars}
                          score={item.rating.average}
                          id={item.id}
                      
                      />
             
                    )}
                />
             ):(
              <ActivityIndicator style={styles.loading} size="large" color="#0000ff" />
             )
           }
           
           
        </View>
    )
  }


  //组件挂载完后 发送请求获取数据
  componentDidMount(){
    this.getHotMovies()
  }



  //获取最热电影列表
  getHotMovies = async () =>{
  
    const res =  await getData('hotMovies')
    if(res !== null){
      //同步状态数据
      this.setState({
        hotMovies:res,
        ready:true
      })

    }else{
      const {subjects} =  await reqMovieList()
      //同步状态数据
      this.setState({
        hotMovies:subjects,
        ready:true
      })

      //存入缓存
      setData('hotMovies',subjects)
     
    }
    

    

  }


  
  
}

const styles = StyleSheet.create({
  container:{
   flex:1,
   paddingTop:px2dp(20),
   paddingHorizontal:px2dp(30),
   backgroundColor:'#fff'
  },
  banner:{
    height:px2dp(150),
    marginBottom:px2dp(23)
  },

  loading:{
    marginTop:px2dp(500)
  }
  
})

export default HotMoviePage
