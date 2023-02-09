import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text, View } from 'react-native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import TemplateNavigation from './src/router/TemplateNavigation'

export default function App() {
  const [fontsLoaded] = useFonts({
    roboto: Roboto_400Regular,
    robotoBold: Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Yasmin</Text>
      </View>
    )
  } else {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#1E1E1E' }}>
        <TemplateNavigation />

        <StatusBar style="light" />
      </SafeAreaView>
    )
  }
}
