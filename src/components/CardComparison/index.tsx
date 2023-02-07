import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../styles/colors'
import EnergyComparison from '../../../assets/icons/EnergyComparison.svg'
import EconomyComparison from '../../../assets/icons/EconomyComparison.svg'
import PopulationComparison from '../../../assets/icons/PopulationComparison.svg'
import EnergyEfficiency from '../../../assets/icons/EnergyEfficiency.svg'
import React from 'react'
import { Correlection } from '../../screen/ProjectionPage'

const comparasion = {
  gdp_per_year: {
    image: EnergyComparison,
    text: 'O gás carbônico é uma substância encontrada naturalmente na atmosfera, nos mares, lagos e rios.',
  },
  primary_energy_consumption_per_year: {
    image: EconomyComparison,
    text: 'O gás carbônico é uma substância encontrada naturalmente na atmosfera, nos mares, lagos e rios.',
  },
  population_per_year: {
    image: PopulationComparison,
    text: 'O gás carbônico é uma substância encontrada naturalmente na atmosfera, nos mares, lagos e rios.',
  },
  energy_per_gdp_per_year: {
    image: EnergyEfficiency,
    text: 'O gás carbônico é uma substância encontrada naturalmente na atmosfera, nos mares, lagos e rios.',
  },
}

function CardComparison(item: Correlection) {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        {comparasion[item.property].image({ width: 40, height: 40 })}
      </View>
      <Text style={styles.text}>{comparasion[item.property].text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 8,
  },
  text: { color: colors.white, fontSize: 16, lineHeight: 20, marginLeft: 16 },
  imgContainer: {
    width: 50,
    height: 50,
  },
})

export default CardComparison
