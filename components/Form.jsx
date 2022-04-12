import { StyleSheet, View , TextInput , Button } from 'react-native'
import React, { useState } from 'react'

const Form = ( { addHandler } ) => {

  const [ text , setText ] =  useState('') 
   
 
    const changeHandler = (val) => {
        setText(val) 
    }
  

  return (
    <View>
     <TextInput
     placeholder='to do ...'
     style={styles.Input}
    onChangeText={ changeHandler }  
     /> 

        <View>  
         <Button
         title='Add Mission'
         onPress={ () =>  addHandler(text)} 
        
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
        fontSize: 25, 
        paddingVertical:18,
        marginBottom:16,
    }
})