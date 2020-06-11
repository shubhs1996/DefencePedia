import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {Color} from '../constant/color'


const About = (props) => {

    const Notable = props.notable
    const id=props.id;
    
    //console.log(props)
    return <ScrollView><View style={styles.container}>
        <View style={styles.subContainer}>
         <Text style={styles.title}>{props.title}</Text>
        
        <Text style={styles.text}>{props.content}</Text>
        <Text style={styles.subTitle}>Founded On</Text>
        <Text style={styles.text}>{props.founded}</Text>
        <Text style={styles.subTitle}>Size</Text>
        <Text style={styles.text}>{props.size}</Text>
        <Text style={styles.subTitle}>{props.id.toUpperCase()} Day</Text>
        <Text style={styles.text}>{props.day}</Text>
        <Text style={styles.subTitle}>Motto</Text>
        <Text style={styles.text}>{props.motto}</Text>
        <Text style={styles.subTitle}>Current Chief</Text>
        <Text style={styles.text}>{props.COAS}</Text>
        <Text style={styles.subTitle}>Current Vice Chief</Text>
        <Text style={styles.text}>{props.VCOAS}</Text>
        <Text style={styles.subTitle}>Notable Commanders</Text>
        {Notable.map((notable, index) => {
            return <Text style={styles.text} key={index}>{notable}</Text>
        })}
        </View>
    </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
       width: '100%',
       marginTop:'5%'
        
    },
    subContainer:{
   width:'90%',
   marginHorizontal:'5%'
    },
    title: {
        fontSize: 30,
        fontFamily: 'nunito-bold',
        textAlign: 'center',
        marginVertical: '5%',
        textDecorationLine: 'underline'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    subTitle: {
        fontSize: 25,
        fontFamily: 'nunito-bold',
        textAlign: 'center',
        marginVertical: '5%',
        textShadowOffset: { width: 0, height: 1.5 },
        textShadowColor: 'black',
        textShadowRadius: 2,
        textDecorationLine: 'underline',
       

    },
    text: {
        textAlign: 'justify',
        fontSize: 22,
        marginVertical: '5%',
        fontFamily: 'nunito',
      
    }

})

export default About;