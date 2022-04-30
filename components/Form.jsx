import { StyleSheet, View , TextInput , Button } from 'react-native'
import React, { useState , useEffect } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';


const Form = ( { addHandler } ) => {

  const [ text , setText ] =  useState('') 


  useEffect(() => {
    getData();
  }, [])
  
   
 
    const changeHandler = (val) => {
        setText(val) 
    }
  

    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('tasks')
        if(value !== null) {
          setText(value)
          console.log(value)
        }
      } catch(error) {
        console.log(error)
      }
    }
 
  return (
    <View>
     <TextInput
     placeholder='whats your tasks today ?'
     style={styles.Input}
    onChangeText={ changeHandler }  
     /> 

        <View>  
         <Button
         title='Add Mission'
         onPress={ () => addHandler(text)} 
         color='blue'
         />

        </View>

    </View>

    
  )
}

export default Form 

const styles = StyleSheet.create({
    Input : {
        borderBottomColor: '#bbb', 
        borderBottomWidth : 1 ,
        paddingHorizontal:16,  
        fontSize: 20, 
        paddingVertical:18,
        marginBottom:16,
    }
})