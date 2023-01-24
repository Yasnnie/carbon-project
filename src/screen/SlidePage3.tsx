import PageTemplate from '../template/PageTemplate'
import Logo from '../../assets/icons/Logo.svg'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../styles/colors'
import Select, { DataDropdown } from '../components/select'
import { useState } from 'react'
export default function SlidePage3() {
  const [select1, setSelect1] = useState<DataDropdown | undefined>(undefined)
  const data: DataDropdown[] = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
  ]
  return (
    <PageTemplate style={styles.gradient}>
      <Logo width={120} height={120} />
      <Text style={styles.title}>Selecione a região para a simulação:</Text>
      <Select
        label="Selecione o continente..."
        onSelect={(item) => setSelect1(item)}
        data={data}
      />
      <Select
        label="Selecione o país..."
        onSelect={(item) => setSelect1(item)}
        data={data}
        style={styles.select2}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Projetar</Text>
      </TouchableOpacity>
    </PageTemplate>
  )
}

const styles = StyleSheet.create({
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
