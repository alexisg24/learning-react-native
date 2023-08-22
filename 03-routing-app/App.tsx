import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { DrawerMenu } from './src/navigator/DrawerNavigator'

export default function App (): JSX.Element {
  return (
    <NavigationContainer>
      <DrawerMenu />
      <StatusBar style='auto' />
    </NavigationContainer>
  )
}
