import AsyncStorage from '@react-native-community/async-storage'


//返回promised对象
export const setData = async(key,obj) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(obj))
    } catch (e) {
      console.log(e)
    }
}

//返回含有数据的Promise对象  否则 null
export const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      // if(value !== null) {
      //   return JSON.parse(value)
      // }else{
      //   return null
      // }
      //不用自己判断 数据是否存在，只管返回就行了
      //Promise with data, if exists, null otherwise.
      return JSON.parse(value)
    } catch(e) {
      console.log(e)
    }
}


//返回promised对象
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
    
  } catch(e) {
    // remove error
  }
}