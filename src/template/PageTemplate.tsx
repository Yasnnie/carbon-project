import { LinearGradient } from 'expo-linear-gradient'
import { ReactNode } from 'react'
import { Dimensions, StyleProp, StyleSheet, ViewStyle } from 'react-native'

interface PageTemplateProps {
  children: ReactNode
  style?: StyleProp<ViewStyle>
}

export default function PageTemplate({ style, children }: PageTemplateProps) {
  return (
    <LinearGradient
      colors={['#2B2B2B', '#1E1E1E']}
      style={[styles.deafult, style]}
    >
      {children}
    </LinearGradient>
  )
}

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
  deafult: {
    position: 'relative',
    flex: 1,
    width: width,
  },
})
