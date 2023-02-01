import { FlatList, StyleSheet, View } from 'react-native'
import CardComparison from '../components/CardComparison'
import PageTemplate from '../template/PageTemplate'
import Logo from '../../assets/icons/Logo.svg'
import EnergyComparison from '../../assets/icons/EnergyComparison.svg'
import EconomyComparison from '../../assets/icons/EconomyComparison.svg'
import PopulationComparison from '../../assets/icons/PopulationComparison.svg'
import EnergyEfficiency from '../../assets/icons/EnergyEfficiency.svg'
import { Comparison } from '../interface/comparison'
import Graphic from '../components/Graphic'

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
        <Graphic />
      </View>
    )
  }

  return (
    <PageTemplate style={styles.gradient}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => CardComparison(item)}
        ListHeaderComponent={HeaderFlatList}
        contentContainerStyle={{ paddingVertical: 24 }}
      />
    </PageTemplate>
  )
}

const styles = StyleSheet.create({
  gradient: {
    paddingHorizontal: 16,
  },

  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  separator: {
    height: 32,
  },
})
