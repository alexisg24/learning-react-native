import { StatusBar } from 'expo-status-bar'
import { StackNavigator } from './src/navigator/StackNavigator'
import { NavigationContainer } from '@react-navigation/native'

export default function App (): JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigator />
      <StatusBar style='auto' />
    </NavigationContainer>
  )
}
