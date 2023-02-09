import PageTemplate from '../template/PageTemplate'
import Logo from '../../assets/icons/Logo.svg'
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import { colors } from '../styles/colors'
import Select from '../components/Select'
import { useEffect, useState } from 'react'
import { getAllContries } from '../service/ApiBase'
import { useNavigation } from '@react-navigation/native'

export default function SlidePage3() {
  const [selected, setSelected] = useState<string | undefined>(undefined)
  const [countries, setCountries] = useState<string[]>([])

  const navigation = useNavigation<any>()

  useEffect(() => {
    getAllContries().then((res) => setCountries(res.countries))
  }, [])

  function handleSubmit() {
    if (selected) {
      navigation.navigate('Projection', { selected })
    }
  }

  return (
    <KeyboardAvoidingView behavior="padding">
      <PageTemplate style={styles.gradient}>
        <Logo width={120} height={120} />
        <Text style={styles.title}>Selecione a região para a simulação:</Text>
        <Select
          label="Selecione o continente..."
          onSelect={(item) => setSelected(item)}
          data={countries}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.textButton}>Projetar</Text>
        </TouchableOpacity>
      </PageTemplate>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
  },
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  title: {
    maxWidth: 300,
    fontSize: 32,
    lineHeight: 40,
    color: colors.white,
    fontFamily: 'robotoBold',
    textAlign: 'center',
    marginTop: 48,
    marginBottom: 24,
  },
  button: {
    backgroundColor: colors.orange,
    width: 180,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 32,
  },
  textButton: {
    color: colors.white,
    fontFamily: 'robotoBold',
    fontSize: 20,
    lineHeight: 24,
  },
  select2: {
    marginTop: 24,
  },
})
