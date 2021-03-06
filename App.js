import { StatusBar } from "expo-status-bar";
import { useState , useEffect } from "react";
import { StyleSheet,  View, FlatList , Alert , TouchableWithoutFeedback , Keyboard } from "react-native";
import Form from "./components/Form";
import Header from "./components/Header";
import ListItem from "./components/List"; 

// storge data 
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {


  const [todos, setTodos] = useState([
    { misson: " buy coffee", key: "1" },
    { misson: " create an app", key: "2" },
    { misson: " play on the switchs", key: "3" }, 
  ]); 
 

 
  
  
  // /   Delete from initial arr 
  const deleteHandler = (key) => {
    
    setTodos(( prevTodos ) => (
          prevTodos.filter ( missions =>  missions.key != key )   
    ))
  }

  // Add tasks

  const addHandler =  async (text) => { 

    if (text.length > 3 ) {
      
      setTodos ((prevMission ) => (
        [
          {  misson : text , key : Math.random() * 100 } ,
          ...prevMission
        ]
      )) 
      try {
        
        const data =  await AsyncStorage.setItem('tasks', text)
        console.log(data) 
      } 
      catch (e) {
        console.log(e)      
      }   
    } 
    else {
      Alert.alert( 'opps!!' , 'todos must be over three charcter',  [
        { text : 'underStood' }
      ]);
      
    } 

  } 



  

  return ( 
    <TouchableWithoutFeedback onPress={ () => {
      Keyboard.dismiss(); 
    }} >

   
    <View style={styles.container}>
      <Header />
      <View style={styles.contenet}> 
        <Form  addHandler={addHandler} />  
        <View style={styles.list}>
        <FlatList
      // keyExtractor={ (item) => item.key } 
        data={todos}
        renderItem={({ item }) => ( 
           
          <ListItem item={item}  deleteHandler={deleteHandler} />   
        )}
      />  
        </View>  
      </View>
    </View>
    </TouchableWithoutFeedback> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", 
  },

  contenet: {
    padding: 40,
    flex:1
  },

  list: {
    paddingTop: 20,
    flex:1,
    padding:0
    
  },


});
