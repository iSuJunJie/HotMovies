import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ActivityIndicator ,//loading效果组件
} from 'react-native'

//引入字体图标组件
import Icon from 'react-native-vector-icons/AntDesign'
//引入 尺寸适配工具类
import {px2dp,screenW,screenH} from '../utils/px2dp'
//引入 缓存工具类
import {setData,getData} from '../utils/Storage'

//引入子组件 
import Stars from '../components/Stars'

//引入接口处理函数
import { reqMovieDatail } from '../api/index'
class DetailPage extends React.Component {
  //也可以在这设置 导航的属性 也可以在根组件中配置路由的时候设置
  //由于 不太懂怎么通过配置 实现屏幕头部，先注释掉 然后我们自己搭界面
  static navigationOptions = {
    // headerTitle:'详情页',
    // headerStyle:{
    //   backgroundColor:'#222',
    // },
    // headerTitleStyle:{
    //   color:'#fff'
    // },
    // headerLeft:(
    //   <TouchableOpacity onPress={()=> this.goBack()}>
    //       <Icon name='arrow-left' size={20} color='#fff' style={{marginLeft:px2dp(20)}}></Icon>
    //   </TouchableOpacity>
      
    // ),
    // headerRight:(
    //   <TouchableOpacity>
    //       <Icon name='share-square-o' size={20} color='#fff' style={{marginRight:px2dp(20)}}></Icon>
    //   </TouchableOpacity>  
      
    // ),
   
  }

  state = {
    movie:{
      images:{},
      rating:{
        stars:'',
        score:0
      },
      countries:[''],
      ready:false,
    }
  }

  render(){
    const { movie ,ready} = this.state
    return(
        <View style={styles.container}>
           {/* 头部 */}
           <View style={styles.header}>
                <TouchableOpacity onPress={ () => this.props.navigation.goBack()}>
                    <Icon name='arrowleft' size={25} color='#fff'></Icon>
                </TouchableOpacity>

                <Text numberOfLines={1} ellipsizeMode={('tail')} style={styles.title}>{movie.original_title}</Text>

                <TouchableOpacity>
                    <Icon name='sharealt' size={20} color='#fff'></Icon>
                </TouchableOpacity>
           </View>

           {
             ready ? (
                        <ScrollView style={styles.content}>
                            {/* 详情 */}
                            <View style={styles.info}>
                                <TouchableOpacity style={styles.infoLeft}>
                                    <Image source={{uri:movie.images.medium}} style={{width:'100%',height:'100%'}}></Image>
                                </TouchableOpacity>

                                <View style={styles.infoRight}>
                                  
                                    <View style={styles.infoRightTop}>
                                      <Stars stars={movie.rating.stars} score={movie.rating.average} ></Stars> 
                                      <Text style={{color:'#505050',marginLeft:px2dp(20)}}>{movie.ratings_count}人评分</Text>
                                    </View>
                                    
                                    <View style={styles.infoRightCenter}>
                                        <Text style={{color:'#505050'}}>{movie.pubdate} / {movie.durations}</Text>
                                        <Text style={{color:'#505050'}}>{movie.countries[0]}</Text>
                                        <Text style={{color:'#505050'}}>{movie.tags}</Text>
                                    </View>
                                    
                                    <TouchableOpacity style={styles.buyTicket}>
                                      <Text style={{color:'#fff',fontSize:20}}>购票</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* 简介 */}
                            <View style={styles.introduction}>
                                <Text style={styles.introductionTitle}>简介：</Text>
                                <Text style={styles.introductionInfo} numberOfLines={50}>
                                    {movie.summary}
                                </Text>
                            </View>
                        
                        </ScrollView>
             ):(
              <ActivityIndicator style={styles.loading} size="large" color="#0000ff" />
             )
           }
           

           
        </View>
    )
  }
  
  componentDidMount(){
    const id = this.props.navigation.getParam('id')
    this.getMovieDetail(id)
  }


  //获取指定id电影详情信息
  getMovieDetail = async (id) => {
    const movie = await getData(id)
    if(movie !== null && movie.id == id){
        //同步数据
        this.setState({
          movie,
          ready:true
        })
    }else{
        const res = await reqMovieDatail(id)
        
        //同步数据
        this.setState({
          movie:res,
          ready:true
        })

        //设置缓存
        setData(id,res)
    }
    

  }
  
}

const styles = StyleSheet.create({
    container:{
      width:'100%',
      height:'100%',
      backgroundColor:'#fff'
    },

    header:{
        height:px2dp(104),
        backgroundColor:'#222222',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },

    content:{
       height:2000,
       paddingHorizontal:px2dp(23),
       paddingTop:px2dp(24),
    },

    title:{
      color:'#fff',
      fontSize:20,
      width:px2dp(340)
    },

    info:{
      height:px2dp(297),
      flexDirection:'row'
    },
    infoLeft:{
      height:'100%',
      flex:1,
      marginRight:px2dp(24)
    },
    infoRight:{
      height:'100%',
      flex:2,
      justifyContent:'space-between'
    },
    infoRightTop:{
      
      height:px2dp(44),
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center'
    },
    infoRightCenter:{
      height:px2dp(120),
      
    },
    buyTicket:{
      width:px2dp(351),
      height:px2dp(77),
      backgroundColor:'#1C8FD0',
      borderRadius:5,
      justifyContent:'center',
      alignItems:'center',
      marginTop:px2dp(10)
    },

    introduction:{
        marginTop:px2dp(50),
        // height:px2dp(500),
        marginBottom:50
    },
    introductionTitle:{
        height:px2dp(50),
        backgroundColor:'lime',
        fontSize:20,
        color:'#505050',
        backgroundColor:'#EBEBEB'
    },
    introductionInfo:{
      color:'#505050',
      backgroundColor:'#EBEBEB'
    },
    loading:{
      marginTop:px2dp(500)
    }
})

export default DetailPage
