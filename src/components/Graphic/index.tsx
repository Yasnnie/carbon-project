import { LineChart } from 'react-native-chart-kit'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { colors } from '../../styles/colors'
import { PredictedData } from '../../screen/ProjectionPage'

interface GraphicProps {
  data: PredictedData
}

export default function Graphic({ data }: GraphicProps) {
  return (
    <View>
      <Text style={styles.subtitle}>Projeção até 2030</Text>
      <Text style={styles.title}>
        {data.predicted_data.y[data.predicted_data.y.length - 1].toFixed(1)}{' '}
        Milhões
      </Text>
      <Text style={styles.complement}>De crescimento do gás carbônico</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ borderRadius: 8, overflow: 'hidden' }}
      >
        <View
          style={{
            width: 1200,
          }}
        >
          <LineChart
            data={{
              labels: data.predicted_data.x,
              datasets: [
                {
                  data: data.observed_data.y,
                },
                {
                  data: data.predicted_data.y,
                  color: (opacity = 1) => `rgba(86, 86, 86, ${opacity})`,
                },
              ],
            }}
            width={1200}
            height={300}
            yAxisSuffix=" M"
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 1,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              propsForDots: {
                r: '4',
              },
            }}
            style={{ borderRadius: 8, overflow: 'hidden' }}
            bezier
          />
        </View>
      </ScrollView>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 24 }}
      >
        <View style={styles.labelContent}>
          <View style={styles.label} />
          <Text style={styles.labelText}>Valores Observados</Text>
        </View>

        <View style={styles.labelContent}>
          <View
            style={[
              styles.label,
              { backgroundColor: colors.gray, marginLeft: 24 },
            ]}
          />
          <Text style={styles.labelText}>Valores Projetado</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'robotoBold',
    color: colors.white,
    fontSize: 48,
    lineHeight: 56,
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
    marginBottom: 32,
  },
  labelContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    width: 24,
    height: 5,
    backgroundColor: colors.white,
    marginRight: 8,
  },
  labelText: {
    fontSize: 14,
    lineHeight: 22,
    color: colors.white,
  },
})
