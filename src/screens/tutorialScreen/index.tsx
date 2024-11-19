import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
const SCREEN_HEIGHT=Dimensions.get('window').height;
const SCREEN_WIDTH=Dimensions.get('window').width;
const TutorialScreen = () => {
  const tutes=[
   {id:1, image:require('../../assets/images/tute1.png')},
  { id:2,  image:require('../../assets/images/tute12.png')},
   {id:3,  image:require('../../assets/images/tute2.png')},
   {id:4,  image:require('../../assets/images/tute22.png')},
   {id:5, image:require('../../assets/images/tute3.png')},
   {id:6, image:require('../../assets/images/tute32.png')},
  ]

  
  const renderItem=({items}:{items:any})=>{
    return(
      <View>
        <Image
        source={items.image}
        />
      </View>
    )
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <FlatList
      data={tutes}
      renderItem={renderItem}
      keyExtractor={items => items.id}

      />
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.signUpButtonText}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.loginButtonText}>
        Login
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default TutorialScreen

const styles = StyleSheet.create({
  loginButtonText:{
    color:"#7f3dff",
    fontSize:18,
    fontWeight:'500'
  },
  signUpButtonText:{
    color:"white",
    fontSize:18,
    fontWeight:'500'
  },
  button1:
    {backgroundColor:'#7f3dff',
      height:SCREEN_HEIGHT*0.07,
      borderRadius:20,
      width:SCREEN_WIDTH*0.9,
      alignSelf:'center',
      justifyContent:'center',
      alignItems:'center',
      margin:10,

    }
  ,
  button2:
    {backgroundColor:'#eee6ff',
      height:SCREEN_HEIGHT*0.07,
      borderRadius:20,
      width:SCREEN_WIDTH*0.9,
      alignSelf:'center',
      margin:10,
      justifyContent:'center',
      alignItems:'center'}
  ,
})