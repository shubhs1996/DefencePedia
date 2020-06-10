import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image, ImageBackground } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


const RankStructure = (props) => {

    return <ScrollView><View style={styles.container}>
    <Text style={styles.title}>Officer Ranks</Text>
            <View style={styles.rankContainer}>
              
                {props.availableData1.map((data, index) => {
                    return <View key={index}>
                        {index != 0 ? <MaterialIcons name="arrow-upward" size={24} color="black" style={styles.icon} /> : <Text></Text>}
                        <Text style={styles.rank}>{data}</Text>
                    </View>
                })}
            </View>
            <Text style={styles.title}>Non-Officer Ranks</Text>
            <View style={styles.rankContainer}>
            
            {props.availableData2.map((data, index) => {
                return <View key={index}>
                    {index != 0 ? <MaterialIcons name="arrow-upward" size={24} color="black" style={styles.icon} /> : <Text></Text>}
                    <Text style={styles.rank}>{data}</Text>
                </View>
            })}
            </View>
            <Text style={styles.title}>INSIGNIA OF {props.id.toUpperCase()}</Text>
            <ScrollView horizontal={true}>

                {props.id === 'army' && <Image style={styles.image} source={require('../assets/images/armyRank.jpg')} />}
                {props.id === 'airforce' && <Image style={styles.image} source={require('../assets/images/airforceRank.png')} />}
                {props.id === 'navy' && <Image style={styles.image} source={require('../assets/images/navyRank.png')} />}

            </ScrollView>
            </View>
      
        </ScrollView>
   

}


const styles = StyleSheet.create({
    container: {
        width: '95%',
        marginHorizontal: '2.5%'
    },
    rankContainer:{
        flex:1,
        width: '100%',
        borderWidth: 0.001,
        borderRadius:20,
        backfaceVisibility:'visible',
        marginVertical:'5%',
        padding:10,
        shadowRadius:10,
        shadowOpacity:0.6,
        shadowOffset:{width:0,height:2},
        shadowColor:'black',
        elevation:3,
    },
    title: {
        textAlign: 'center',
        fontFamily: 'nunito-bold',
        fontSize: 25,
        marginVertical: '5%',
        textDecorationLine: 'underline',
       // color:'white'
    },
    rank: {
        textAlign: 'center',
        fontFamily: 'nunito',
        fontSize: 23,
        //color:'white'
    },
    icon: {
        textAlign: 'center'
    },
    

})

export default RankStructure