import { useRef } from 'react'
import { Animated, StyleSheet, View } from 'react-native'

import SlidePage1 from '../../screen/SlidePage1'
import PageTemplate from '../../template/PageTemplate'

const data = [1, 2, 3]

function Indicator({ scrollx }: { scrollx: Animated.Value }) {
  return (
    <View>
      {data.map((_, index) => {
        return <View key={index} />
      })}
    </View>
  )
}

export default function WelconSlide() {
  const scrollx = useRef(new Animated.Value(0)).current
  function renderItem({ item }: any) {
    return <SlidePage1 />
  }

  return (
    <PageTemplate>
      <Animated.FlatList
        data={data}
        renderItem={renderItem}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollx } } }],
          { useNativeDriver: false }
        )}
        horizontal
        scrollEventThrottle={32}
        showsHorizontalScrollIndicator={false}
      />
    </PageTemplate>
  )
}

const styles = StyleSheet.create({
  indicator: {},
})
