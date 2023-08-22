import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Page1Screen } from '../screens/Page1.screen'
import { Page2Screen } from '../screens/Page2.screen'
import { Page3Screen } from '../screens/Page3.screen'
import { PersonaScreen } from '../screens/Person.screen'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RootStackParams = {
  Page1Screen: undefined
  Page2Screen: undefined
  Page3Screen: undefined
  PersonaScreen: { id: number, name: string }
}

export const StackNavigator = (): JSX.Element => {
  const Stack = createNativeStackNavigator<RootStackParams>()
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: 'white'
        },
        headerShadowVisible: false
        // headerBackTitleVisible: false
      }}
    >
      <Stack.Screen name='Page1Screen' component={Page1Screen} options={{ title: 'Page 1' }} />
      <Stack.Screen name='Page2Screen' component={Page2Screen} options={{ title: 'Page 2' }} />
      <Stack.Screen name='Page3Screen' component={Page3Screen} options={{ title: 'Page 3' }} />
      <Stack.Screen name='PersonaScreen' component={PersonaScreen} options={{ title: 'Person' }} />
    </Stack.Navigator>
  )
}
