import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import SlidePage1 from './src/screen/SlidePage1'
import SlidePage2 from './src/screen/SlidePage2'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
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
        <SlidePage2 />

        <StatusBar style="auto" />
      </SafeAreaView>
    )
  }
}
