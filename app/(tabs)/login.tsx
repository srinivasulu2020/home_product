//rnf
import { View, Text ,Image,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import  Colors  from '@/constants/Colors'

export default function Login() {
  return (
    <View style={{alignItems:'center'}}>
      <Image source={require('@/assets/Images/service.jpg')} 
        style={styles.loginImage}
     />
     <View style={styles.subContainer}>
        <Text style={{fontSize:27,color:Colors.WHITE,textAlign:'center'}}>
          Let's Find 
          <Text style={{fontWeight:'bold'}}>Professional Cleaning and repair
          </Text> services
        </Text>
        <Text style={{fontSize:17,color:Colors.WHITE,
          textAlign:'center',marginTop:20}}>Best App to services near you which deliver you a Professional services</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{textAlign:'center',fontSize:17,color:Colors.PRIMARY}}>Let's Get Start</Text>
        </TouchableOpacity>
     </View>

    </View>
  )
}
const styles = StyleSheet.create({
  loginImage:{
    width:230,
    height:450,
    marginTop:70,
    borderWidth:4,
    borderColor:Colors.BLACK,
    borderRadius:15

  },
  subContainer:{
    width:'100%',
    backgroundColor:Colors.PRIMARY,
    height:'70%',
    marginTop:-20,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:20
  },
  button:{
    padding:15,
    backgroundColor:Colors.WHITE,
    borderRadius:99,
    marginTop:40
  }
})
