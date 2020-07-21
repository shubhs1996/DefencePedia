import React,{useState} from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import moment from 'moment'




const ViewFeed = (props) => {


    const [display,setDisplay]=useState('none')
    const onPressHandler=()=>{
        if(display==='none'){
          setDisplay('flex')
        }else{
          setDisplay('none')
        }
      }

    return <View style={styles.container}>
        <Image source={{ uri: props.link }} style={styles.image} />
        <TouchableOpacity onPress={onPressHandler}>
        <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
       {display==='none'?<Text>Click on title to read more</Text>:<View style={{ display:display }}>
        <Text style={styles.content}>{props.content}</Text>
        

        </View>}
        <Text style={styles.time}>{moment(props.createdAt).fromNow()}</Text>
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '95%',
        marginVertical: 20,
        marginHorizontal:'2.5%'
       
    },
    image: {
        width: '100%',
        height: 200
    },

    title: {
        fontSize: 25,
        

    },
    content: {
        fontSize: 20,
        fontFamily: 'nunito',
        color:'gray',
        textAlign:'justify'
    },
    time: {
        textAlign: 'justify',
        fontSize: 15,
        fontFamily: 'nunito-bold',
        color: 'gray',
        marginTop:5
    }




})


export default ViewFeed