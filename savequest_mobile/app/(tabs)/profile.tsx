import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const profile = () => {
  return (
    <SafeAreaView
     className="w-full h-full bg-primary"
    >
    <View>
      <Text>profile</Text>
    </View>
    </SafeAreaView>
  )
}

export default profile