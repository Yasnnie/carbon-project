import { useRef } from 'react'
import { Animated, Dimensions, StyleSheet, View } from 'react-native'

import SlidePage1 from '../../screen/SlidePage1'
import SlidePage2 from '../../screen/SlidePage2'
import SlidePage3 from '../../screen/SlidePage3'
import { colors } from '../../styles/colors'
import PageTemplate from '../../template/PageTemplate'

const data = [1, 2, 3]
const width = Dimensions.get('window').width
function Indicator({ scrollx }: { scrollx: Animated.Value }) {
  return (
    <View style={styles.indicatorContainer}>
      {data.map((_, index) => {
        const inputrange: number[] = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ]
        const scale = scrollx.interpolate({
          inputRange: inputrange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        })

        const opacity = scrollx.interpolate({
          inputRange: inputrange,
          outputRange: [0.6, 1, 0.6],
          extrapolate: 'clamp',
        })

        return (
          <Animated.View
            key={index}
            style={[styles.indicator, { transform: [{ scale }], opacity }]}
          />
        )
      })}
    </View>
  )
}

export default function WelconSlide() {
  const scrollx = useRef(new Animated.Value(0)).current
  function renderItem({ item }: any) {
    if (item == 1) return <SlidePage1 />
    if (item == 2) return <SlidePage2 />
    return <SlidePage3 />
  }

  return (
    <PageTemplate style={styles.gradient}>
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => `${item}`}
        renderItem={renderItem}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollx } } }],
          { useNativeDriver: false }
        )}
        horizontal
        scrollEventThrottle={32}
        showsHorizontalScrollIndicator={false}
      />
      <Indicator scrollx={scrollx} />
    </PageTemplate>
  )
}

const styles = StyleSheet.create({
  gradient: {
    alignItems: 'center',
  },
  indicatorContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 24,
    width: 78,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: colors.orange,
  },
})
