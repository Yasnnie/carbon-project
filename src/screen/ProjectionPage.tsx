import { FlatList, StyleSheet, View } from 'react-native'
import CardComparison from '../components/CardComparison'
import PageTemplate from '../template/PageTemplate'
import Logo from '../../assets/icons/Logo.svg'
import EnergyComparison from '../../assets/icons/EnergyComparison.svg'
import EconomyComparison from '../../assets/icons/EconomyComparison.svg'
import PopulationComparison from '../../assets/icons/PopulationComparison.svg'
import EnergyEfficiency from '../../assets/icons/EnergyEfficiency.svg'
import { Comparison } from '../interface/comparison'

const data: Comparison[] = [
  {
    image: EnergyComparison,
    text: 'O gás carbônico é uma substância encontrada naturalmente na atmosfera, nos mares, lagos e rios.',
  },
  {
    image: EconomyComparison,
    text: 'O gás carbônico é uma substância encontrada naturalmente na atmosfera, nos mares, lagos e rios.',
  },
  {
    image: PopulationComparison,
    text: 'O gás carbônico é uma substância encontrada naturalmente na atmosfera, nos mares, lagos e rios.',
  },
  {
    image: EnergyEfficiency,
    text: 'O gás carbônico é uma substância encontrada naturalmente na atmosfera, nos mares, lagos e rios.',
  },
]
export default function ProjectionPage() {
  function HeaderFlatList() {
    return (
      <View style={styles.headerContainer}>
        <Logo width={40} height={40} />
      </View>
    )
  }

  return (
    <PageTemplate style={styles.gradient}>
      <FlatList
        style={styles.flatListStyle}
        data={data}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => CardComparison(item)}
        ListHeaderComponent={HeaderFlatList}
      />
    </PageTemplate>
  )
}

const styles = StyleSheet.create({
  gradient: {
    paddingHorizontal: 24,
  },
  flatListStyle: {
    paddingVertical: 24,
    width: '100%',
  },
  headerContainer: {
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  separator: {
    height: 32,
  },
})
