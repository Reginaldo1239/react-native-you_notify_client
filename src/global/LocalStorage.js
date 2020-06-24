import AsyncStorage from '@react-native-community/async-storage';

 export const  setItem=async (key,value)=>{
    try {
        await AsyncStorage.setItem(key, value)
      } catch(e) {
        console.log(e)
      }
      console.log('Done.')
}
export const  getItem = async (key)=>{
    try {
        return await AsyncStorage.getItem(key)
      } catch(e) {
        // read error
        console.log(e)
      }
    
      console.log('Done.')
    
}

export const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
    console.log(e) 
  }

  console.log('Done.')
}
