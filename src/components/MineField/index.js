import React from 'react'
import { View } from 'react-native'

import Field from '../Field'

import styles from './styles'

export default props => {
  const rows = props.board.map((row, r) => {
    const columns = row.map((field, c) => {
      return <Field
        {...field}
        key={c}
        onOpen={() => props.onOpenField(r, c)}
        onSelect={() => props.onSelectField(r, c)}
      />
    })
    return <View style={styles.rows} key={r}>{columns}</View>
  })
  return <View style={styles.container}>{rows}</View>
}
