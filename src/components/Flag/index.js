import React from 'react'
import { View } from 'react-native'

import styles from './styles'

export default props => {
  return (
    <View style={styles.container}>
      <View style={[styles.flagPole, props.bigger ? styles.flagPoleBigger : null]} />
      <View style={[styles.flag, props.bigger ? styles.flagBigger : null]} />
      <View style={[styles.baseOne, props.bigger ? styles.baseOneBigger : null]} />
      <View style={[styles.baseTwo, props.bigger ? styles.baseTwoBigger : null]} />
    </View>
  )
}
