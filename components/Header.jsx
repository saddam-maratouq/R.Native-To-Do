import { View, Text , StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header} >
      <Text style={styles.title }> Todos </Text>
    </View>
  )
}


const styles = StyleSheet.create({
    header : {
        height : 80 , 
        paddingTop:40,
    },

    title : {
      textAlign : 'center',
      backgroundColor : 'blue', 
      fontSize : 30, 
      fontWeight : 'bold',
      color : '#fff' 

    },
})

export default Header ; 


