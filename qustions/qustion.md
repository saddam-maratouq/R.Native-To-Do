how to add obj to initial arr of obj in react native by butoon  ? 


-- note by use flat list no need for key + schrool view ..

 --keyExtractor to force take id insted of key ..

 --renderItem  like map inside arr insted you have to ..
 
 -- numcoloum shortcut to add colmn .. 

 _________________________________________________________ 


 * TouchableOpacity is like a button but wrap text or whatever beacuse button not support use inside text view etc in R.Native .... so we  have to use  TouchableOpacity to handel that .


*  Alert method have three argument ( title , text , [ { text for close alert  }] )  

 Alert.alert( 'opps!!' , 'todos must be over three charcter',  [
            { text : 'underStood' }
        ]);


* To dismiss key bord by click anywhere   we use the following ... 

  <TouchableWithoutFeedback onPress={ () => {
      Keyboard.dismiss(); 
    }} >
  

  * to fix schrool issu on screen you have to use flex box flex: 1  =>  flex grow 


