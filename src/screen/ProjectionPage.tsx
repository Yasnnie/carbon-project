import { useEffect, useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import PageTemplate from '../template/PageTemplate'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'

import Graphic from '../components/Graphic'
import CardComparison from '../components/CardComparison'
import { colors } from '../styles/colors'
import { getCorrelections, getPredicted } from '../service/ApiBase'

import Logo from '../../assets/icons/Logo.svg'
import GoBackArrow from '../../assets/icons/GoBackArrow.svg'

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
  const navigation = useNavigation<any>()
  const country = router.params.selected as string

  useEffect(() => {
    if (router.params) {
      getPredicted(country).then((res) => setData(res))
      getCorrelections(country).then((res) =>
        setCorrelection(
          res.filter((item: Correlection) => item.correlation_coeficient > 0.6)
        )
      )
    }
  }, [])

  const handleGoBack = () => navigation.goBack()

  function HeaderFlatList() {
    return (
      <View style={styles.headerContainer}>
        <Logo width={40} height={40} />
        <Text style={styles.country}>{country}</Text>
        <TouchableOpacity style={styles.buttonGoBack} onPress={handleGoBack}>
          <GoBackArrow width={30} height={30} />
          <Text style={styles.goBackText}>Voltar</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
    paddingTop: 60,
    width: '100%',
    height: 650,
    position: 'relative',
  },
  separator: {
    height: 32,
  },
  country: {
    fontSize: 40,
    lineHeight: 48,
    color: colors.white,
    fontFamily: 'robotoBold',
    marginTop: 16,
  },

  buttonGoBack: {
    position: 'absolute',
    top: 8,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBackText: {
    color: colors.white,
    fontFamily: 'roboto',
    fontSize: 14,
    marginLeft: 4,
  },
})
