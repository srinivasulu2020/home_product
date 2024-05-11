import { View, Text } from 'react-native'
import React from 'react'

import Login from './login'
import Colors from '@/constants/Colors'

export default function index() {
  return (
    <View>
         <Text style={{color:Colors.PRIMARY ,padding:10}}>Wellcome to new site </Text>
        <Login />
    </View>
  )
}