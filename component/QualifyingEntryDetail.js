import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { ScrollView } from 'react-native-gesture-handler'


const DirectEntryDetail = (props) => {
    const { link } = props

    const _handlePressButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync(link);
        
    };

    //console.log(props)
    return <ScrollView><View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.detail}</Text>
        <Text style={styles.subTitle}>Eligibility</Text>
        <Text style={styles.text}>Age:  {props.limit}</Text>
        <Text style={styles.text}>Educational Qualifications: {props.qualification}</Text>
        <Text style={styles.subTitle}>Frequency</Text>
        <Text style={styles.text}>{props.frequency}</Text>
        <Text style={styles.subTitle}>Process</Text>
        <Text style={styles.text}>{props.process}</Text>
        <Text style={styles.subTitle}>Mode of Exam</Text>
        <Text style={styles.text}>{props.mode}</Text>
        <Text style={styles.subTitle}>Duration of Exam</Text>
        <Text style={styles.text}>{props.duration}</Text>
        <Text style={styles.subTitle}>Language of Exam</Text>
        <Text style={styles.text}>{props.language}</Text>
        <Text style={styles.subTitle}>Syllabus</Text>
        <Text style={styles.text}>{props.syllabus}</Text>
        <Text style={styles.subTitle}>Exam Pattern</Text>
        <Text style={styles.text}>{props.pattern}</Text>
        <Text style={styles.subTitle}>Type of Commission</Text>
        <Text style={styles.text}>{props.commission}</Text>
        <Text style={styles.subTitle}>Keep visiting below  website for latest notifications.</Text>
        <TouchableOpacity onPress={_handlePressButtonAsync}>
            <Text style={styles.text}>{props.link}</Text>
        </TouchableOpacity>


    </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {

        width: '90%',
        marginHorizontal: '5%'
    },
    title: {
        fontSize: 30,
        fontFamily: 'nunito-bold',
        textAlign: 'center',
        marginVertical: '5%',
        textDecorationLine: 'underline'
    },
    subTitle: {
        fontSize: 25,
        fontFamily: 'nunito-bold',
        textAlign: 'center',
        marginVertical: '5%',
        textShadowOffset: { width: 0, height: 1.5 },
        textShadowColor: 'black',
        textShadowRadius: 2,
        textDecorationLine: 'underline'
    },
    text: {
        fontSize: 22,
        marginVertical: '5%',
        fontFamily: 'nunito',
        textAlign:'justify'

    }

})

export default DirectEntryDetail;