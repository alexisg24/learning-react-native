import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Page1Screen } from '../screens/Page1.screen'
import { Page2Screen } from '../screens/Page2.screen'
import { Page3Screen } from '../screens/Page3.screen'

export const StackNavigator = (): JSX.Element => {
  const Stack = createNativeStackNavigator()
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
      <Stack.Screen name='Page1' component={Page1Screen} options={{ title: 'Page 1' }} />
      <Stack.Screen name='Page2' component={Page2Screen} options={{ title: 'Page 2' }} />
      <Stack.Screen name='Page3' component={Page3Screen} options={{ title: 'Page 3' }} />
    </Stack.Navigator>
  )
}
