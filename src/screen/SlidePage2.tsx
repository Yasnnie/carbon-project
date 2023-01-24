import { StyleSheet, Text, ScrollView } from 'react-native'
import PageTemplate from '../template/PageTemplate'
import Logo from '../../assets/icons/Logo.svg'
import { colors } from '../styles/colors'

export default function SlidePage2() {
  return (
    <PageTemplate style={styles.gradient}>
      <Logo width={40} height={40} style={styles.logo} />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.paragraph}>
          O gás carbônico é uma substância encontrada naturalmente na atmosfera,
          nos mares, lagos e rios. Porém sua emissão de maneira excessiva
          provoca graves desequilíbrios no efeito estufa do planeta Terra, que
          vem se tornando uma grande ameaça para o planeta e seus habitantes.
        </Text>
        <Text style={styles.paragraph}>
          O gás carbônico é uma substância encontrada naturalmente na atmosfera,
          nos mares, lagos e rios. Porém sua emissão de maneira excessiva
          provoca graves desequilíbrios no efeito estufa do planeta Terra, que
          vem se tornando uma grande ameaça para o planeta e seus habitantes.
        </Text>
        <Text style={styles.paragraph}>
          O gás carbônico é uma substância encontrada naturalmente na atmosfera,
          nos mares, lagos e rios. Porém sua emissão de maneira excessiva
          provoca graves desequilíbrios no efeito estufa do planeta Terra, que
          vem se tornando uma grande ameaça para o planeta e seus habitantes.
        </Text>
        <Text style={styles.paragraph}>
          O gás carbônico é uma substância encontrada naturalmente na atmosfera,
          nos mares, lagos e rios. Porém sua emissão de maneira excessiva
          provoca graves desequilíbrios no efeito estufa do planeta Terra, que
          vem se tornando uma grande ameaça para o planeta e seus habitantes.
        </Text>
        <Text style={styles.paragraph}>
          O gás carbônico é uma substância encontrada naturalmente na atmosfera,
          nos mares, lagos e rios. Porém sua emissão de maneira excessiva
          provoca graves desequilíbrios no efeito estufa do planeta Terra, que
          vem se tornando uma grande ameaça para o planeta e seus habitantes.
        </Text>
        <Text style={styles.paragraph}>
          O gás carbônico é uma substância encontrada naturalmente na atmosfera,
          nos mares, lagos e rios. Porém sua emissão de maneira excessiva
          provoca graves desequilíbrios no efeito estufa do planeta Terra, que
          vem se tornando uma grande ameaça para o planeta e seus habitantes.
        </Text>
      </ScrollView>
    </PageTemplate>
  )
}

const styles = StyleSheet.create({
  gradient: {
    alignItems: 'center',
    paddingBottom: 64,
  },
  scrollView: {
    paddingHorizontal: 24,
    width: '100%',
  },
  logo: {
    marginTop: 40,
    marginBottom: 32,
  },
  paragraph: {
    color: colors.white,
    width: '100%',
    fontFamily: 'roboto',
    fontSize: 16,
    lineHeight: 20,
    marginTop: 16,
  },
})
