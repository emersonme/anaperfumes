import React from 'react'
import {View, ActivityIndicator, StyleSheet} from 'react-native'
import colors from '../style/colors'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.white} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Loading
