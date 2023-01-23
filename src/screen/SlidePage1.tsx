import { Text, StyleSheet } from 'react-native'
import { colors } from '../styles/colors'
import Logo from '../../assets/icons/Logo.svg'
import PageTemplate from '../template/PageTemplate'

export default function SlidePage1() {
  return (
    <PageTemplate style={styles.gradient}>
      <Logo width={120} height={100} />
      <Text style={[styles.whiteText, styles.title]}>
        Seja bem-vindo ao <Text style={styles.orangeText}>Carbon</Text>Project
      </Text>
      <Text style={[styles.whiteText, styles.subtitle]}>
        Um projeto que visa combater a emissão excessiva de dióxido de carbono
      </Text>
      <Text style={[styles.whiteText, styles.createdBy]}>
        created by: Gentil Alysson and Yasmin Carvalho
      </Text>
    </PageTemplate>
  )
}

const styles = StyleSheet.create({
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  whiteText: {
    color: colors.white,
    textAlign: 'center',
  },
  orangeText: {
    color: colors.orange,
  },
  title: {
    fontSize: 40,
    lineHeight: 48,
    maxWidth: 366,
    marginTop: 40,
    fontFamily: 'robotoBold',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 20,
    marginTop: 16,
    fontFamily: 'roboto',
  },
  createdBy: {
    fontSize: 12,
    lineHeight: 14,
    position: 'absolute',
    bottom: 64,
    fontFamily: 'roboto',
  },
})
