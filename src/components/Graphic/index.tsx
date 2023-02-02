import { LineChart } from 'react-native-chart-kit'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'
import { PredictedData } from '../../screen/ProjectionPage'

interface GraphicProps {
  data: PredictedData
}

export default function Graphic({ data }: GraphicProps) {
  return (
    <View>
      <Text style={styles.subtitle}>Projeção até 2050</Text>
      <Text style={styles.title}>
        {data.predicted_data.y[data.predicted_data.y.length - 1]}
      </Text>
      <Text style={styles.complement}>De crescimento do gás carbônico</Text>
      <LineChart
        data={{
          labels: data.observed_data.x,
          datasets: [
            {
              data: data.observed_data.y,
            },
            {
              data: data.predicted_data.y,
              color: (opacity = 1) => `rgba(39, 38, 38, ${opacity})`,
            },
          ],
        }}
        width={Dimensions.get('window').width - 32} // from react-native
        height={240}
        yAxisSuffix="k"
        // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

          propsForDots: {
            r: '4',
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
