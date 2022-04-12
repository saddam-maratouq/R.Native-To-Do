import { StyleSheet, Text, View, FlatList , TouchableOpacity } from "react-native";
import React from "react"; 

//icon

import { AntDesign } from '@expo/vector-icons'; 




const ListItem = ( {item , deleteHandler  } ) => {
 

  
  return (
    <View> 
     <TouchableOpacity  onPress={ () => deleteHandler(item.key) } > 
                  <View style={styles.mission} >
                  <AntDesign name="delete" size={25} color="black" />                    
                     <Text   style={styles.textmission}> {item.misson} </Text>
                  </View>
            </TouchableOpacity> 
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  mission: {
    // backgroundColor: '#777',
    marginTop: 20,
    padding: 16,
    borderColor : '#777',
    borderWidth: 1,
    borderStyle : 'dashed', 
    borderRadius: 10 , 
    flexDirection: 'row',
    alignItems:'center'
    

  }, 

  textmission : {
    color:'#4C4C4C' ,
    fontSize: 25, 
    marginLeft: 10 ,
    color : 'black'
  }
});
