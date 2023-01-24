import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import SlidePage1 from './src/screen/SlidePage1'
import SlidePage2 from './src/screen/SlidePage2'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import SlidePage3 from './src/screen/SlidePage3'
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
      <SafeAreaView>
        <SlidePage3 />

        <StatusBar style="auto" />
      </SafeAreaView>
    )
  }
}
