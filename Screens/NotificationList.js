import React from 'react'
import { View, Text,Button } from 'react-native'
import HeaderButton from '../component/HeaderButton'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'


const Notification =(props)=>{
return <View>
<Text>This is Notification Page</Text>
<Button title="go to"  onPress={()=>{props.navigation.navigate('NotificationDetail')}}/>
</View>
}


Notification.navigationOptions =(navData)=>{
 
return { headerTitle:'Notifications',
headerStyle:{
  backgroundColor:'#f4511e'
},
headerTitleStyle:{
  textAlign:'center',
  fontFamily:'nunito-bold',
  color:'white'
},
    headerLeft:()=> (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
}
}

export default Notification