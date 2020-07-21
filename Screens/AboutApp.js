import React from 'react'
import { StyleSheet, View,Text } from 'react-native'

//description of app
const AboutApp=()=>{
return <View style={styles.screen}>
       <Text style={styles.text}>
       DefencePedia is an App for Defence Aspirant.Through this app you will get to know about different armed forces like The Indian Army,The Indian Navy and The Indian Air Force.This include about the entries through which you can join each forces, their operations and rank structure.Through this you will get daily news.This includes a suggestion box so that you can suggest us what improvement we can do for you.
       </Text>

       <Text style={styles.contact}>Contact Detail</Text>
       <Text style={styles.info}>+91-9958774942</Text>
       <Text style={styles.info}>Mail us on : shsingh2096@gmail.com</Text>
</View>

}


const styles=StyleSheet.create({
screen:{width:'95%',
marginHorizontal:'2.5%',
padding:10
},
contact:{
fontSize:25,
textDecorationLine:'underline',
marginTop:30,
marginBottom:10
},
info:{
fontSize:20,
fontFamily:'nunito',
color:'gray'},
text:{
    fontSize:23,
    fontFamily:'nunito',
    color:'gray',
    textAlign:'justify'
}

})


export default AboutApp