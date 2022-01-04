import React from 'react'
import{
Image,
View,
Text,
StyleSheet,
}from 'react-native'
import ski from '../assets/images/ski.png';
export default function CatrgoryListitem(props){
    return <View style={styles.container}>
        <Text style={styles.title}>Category ListItem</Text>
        <Image style={styles.categoryImage} source={ski}/>
    </View>
}
const styles= StyleSheet.create({
categoryImage:{
    width:64,
    height:64
},
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:16,
    borderRadius:4,
    backgroundColor:'#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,  
    elevation: 2,
    marginBottom:16,
    
  },
  categoryImage:{
      width:64,
      height:64,
  },
title:{
    textTransform:'uppercase',
    marginBottom:8,
    fontWeight:'700'
},

});