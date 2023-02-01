import { LineChart } from 'react-native-chart-kit'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'

export default function Graphic() {
  return (
    <View>
      <Text style={styles.subtitle}>Projeção até Março de 2050</Text>
      <Text style={styles.title}>5.987,37</Text>
      <Text style={styles.complement}>De crescimento do gás carbônico</Text>
      <LineChart
        data={{
          labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 32} // from react-native
        height={240}
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 8,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'robotoBold',
    color: colors.white,
    fontSize: 56,
    lineHeight: 64,
    marginTop: 4,
  },
  subtitle: {
    fontSize: 20,
    lineHeight: 24,
    color: colors.darkGray,
    fontFamily: 'robotoBold',
    marginTop: 40,
  },
  complement: {
    marginTop: 4,
    fontSize: 14,
    fontFamily: 'roboto',
    lineHeight: 18,
    color: colors.white,
  },
})
