import { FlatList, StyleSheet, View } from 'react-native'
import CardComparison from '../components/CardComparison'
import PageTemplate from '../template/PageTemplate'
import Logo from '../../assets/icons/Logo.svg'

import Graphic from '../components/Graphic'
import { useEffect, useState } from 'react'
import { getCorrelections, getPredicted } from '../service/ApiBase'
import { useRoute } from '@react-navigation/native'

export interface PredictedData {
  observed_data: {
    x: string[]
    y: number[]
  }
  predicted_data: {
    x: string[]
    y: number[]
  }
}

export interface Correlection {
  correlated: boolean
  correlation_coeficient: number
  property:
    | 'gdp_per_year'
    | 'primary_energy_consumption_per_year'
    | 'population_per_year'
    | 'energy_per_gdp_per_year'
}

export default function ProjectionPage() {
  const [data, setData] = useState<PredictedData | undefined>(undefined)
  const [correlection, setCorrelection] = useState<Correlection[]>([])
  const router = useRoute<any>()

  useEffect(() => {
    if (router.params) {
      const country = router.params.selected as string

      getPredicted(country).then((res) => setData(res))
      getCorrelections(country).then((res) =>
        setCorrelection(
          res.filter((item: Correlection) => item.correlation_coeficient > 0.6)
        )
      )
    }
  }, [])

  function HeaderFlatList() {
    return (
      <View style={styles.headerContainer}>
        <Logo width={40} height={40} />
        {data && <Graphic data={data} />}
      </View>
    )
  }

  return (
    <PageTemplate style={styles.gradient}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={correlection}
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
    marginVertical: 40,
  },
  separator: {
    height: 32,
  },
})
