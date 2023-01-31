import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text, View } from 'react-native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import WelconSlide from './src/components/WelconSlider'

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
        <WelconSlide />

        <StatusBar style="light" />
      </SafeAreaView>
    )
  }
}
