import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import Flag from '../Flag'

import styles from './styles'

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <TouchableOpacity
          onPress={props.onFlagPress}
          style={styles.flagButton}
        >
          <Flag bigger />
        </TouchableOpacity>
        <Text style={styles.flagsLeft}> = {props.flagsLeft}</Text>
      </View>
      <TouchableOpacity
        onPress={props.onNewGame}
        style={styles.button}
      >
        <Text style={styles.buttonLabel}>Novo Jogo</Text>
      </TouchableOpacity>
    </View>
  )
}
