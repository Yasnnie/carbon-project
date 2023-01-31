import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../styles/colors'

import React from 'react'
import { Comparison } from '../../interface/comparison'

function CardComparison(item: Comparison) {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>{item.image()}</View>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: { color: colors.white, fontSize: 16, lineHeight: 20, marginLeft: 16 },
  imgContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default CardComparison
