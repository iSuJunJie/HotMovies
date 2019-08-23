import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

import {px2dp,screenW,screenH} from '../utils/px2dp'

class Stars extends React.Component {

  render(){
    const {score} = this.props
    return(
      <View style={styles.container}>
          {
            this.getStarArr().map((item,index) => {
               let url = item == 'star-full.png' ? require('../assets/image/star-full.png'):
                              item == 'star-half.png' ? require('../assets/image/star-half.png') :
                                    item == 'star-empty.png' ? require('../assets/image/star-empty.png') : ''

               return (
                  <Image key={index} source={url} style={styles.star}></Image> 
                )
              }
            )
          }

          <Text style={styles.score}>{score}</Text>
      </View>
    )
  }


  getStarArr = () => {
    const {stars} = this.props //'40' '35'  '20'  '25'  '15' '10' '00' '05'
    let full,half,empty = 0    // 默认是 全星 半星 空星 个数为0

    //确定全星的个数
    full = parseInt(stars[0]) - 1
    if( full <= 0 ){
          full = 0
    }

    //确定 半星 和 空星的个数
    if(stars[1] == '0'){
       half = 0
       empty = 5-full
    }else{
      half = 1
      empty = 5 - full - half 
    }

    let starArr = []

    if(full == 0){
        if(half == 0){
          for(var i=0;i<empty;i++){
            starArr.push('star-empty.png')
          }
        }else{
          for(var i=0;i<half;i++){
            starArr.push('star-half.png')
          }
      
          for(var i=0;i<empty;i++){
            starArr.push('star-empty.png')
          }
        }
    }else{
      for(var i=0;i<full;i++){
        starArr.push('star-full.png')
      }

      if(half == 0){
        for(var i=0;i<empty;i++){
          starArr.push('star-empty.png')
        }
      }else{
        for(var i=0;i<half;i++){
          starArr.push('star-half.png')
        }
    
        for(var i=0;i<empty;i++){
          starArr.push('star-empty.png')
        }
      }
    }
    
    return starArr
  }
}

/**
 *      评分星星的规则
 * 根据 '40'   '35'  这样传过来的 字符串去进行计算出有几个全星 半星 空星
 * 
 * 全星： 4-1  3颗全星
 * 
 * 半星：如果为0  那么没有半星   空星 5-全星个数
 * 
 *      如果为5   那么有一个半星， 空星5-全星个数-半星个数
 * 
 * 
 * 最终是要得到一个数组 在这个数组里边存放对应电影评分星星的图片名称
 * 
 * ['star-full','star-full','star-full','star-empty','star-empty']
 * 
 * 然后在 JSX中，我们根据这个数组进行遍历 生成对应的ReactNode结构即可
 * 
 * 
 * 
 * 
 * 
 */

 //样式
 const styles = StyleSheet.create({
      container:{
        flexDirection:'row',
        alignItems:'center',
      },
      star:{
         width:px2dp(24),
         height:px2dp(24),
      },
      score:{
        marginLeft:px2dp(10),
        color:'#FFB712'
      }
 })


export default Stars