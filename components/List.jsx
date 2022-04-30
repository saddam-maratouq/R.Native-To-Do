import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState,useEffect } from "react";

//icon

import { AntDesign } from "@expo/vector-icons";

import { FontAwesome5 } from "@expo/vector-icons";

//
import AsyncStorage from '@react-native-async-storage/async-storage';


const ListItem = ({ item, deleteHandler }) => {




  const [Check, setCheck] = useState(false); // for check th tasks 

  const chekedHandler = () => setCheck(true);


 
  


  return (
    <View style={styles.Container}>
    
        <View style={styles.mission}>
          <TouchableOpacity onPress={chekedHandler}>
            <FontAwesome5 name="check-circle" size={24} color="green" />
          </TouchableOpacity>  
          {
          Check ? 
         ( <Text style={[styles.textmission , { textDecorationLine : 'line-through' }]}> {item.misson} </Text> ) : 
         ( <Text style={styles.textmission}> {item.misson} </Text>  )  
         }
         <TouchableOpacity onPress={() => deleteHandler(item.key)}>
          <AntDesign name="delete" size={24} color="black" />
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // margin:2,
    padding: 1,
  },
  mission: {
    // backgroundColor: '',
    marginTop: 20,
    padding: 15,
    borderColor: "#777",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  textmission: {
    color: "#4C4C4C",
    fontSize: 22,
    marginLeft: 0,
    color: "black",
  },
});
