import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelconSlide from '../components/WelconSlider'
import ProjectionPage from '../screen/ProjectionPage'

const Stack = createNativeStackNavigator()

export default function TemplateNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={WelconSlide} />
        <Stack.Screen name="Projection" component={ProjectionPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
