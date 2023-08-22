import { createDrawerNavigator } from '@react-navigation/drawer'
import { StackNavigator } from './StackNavigator'
import { SettingScreen } from '../screens/Settings.screen'

const Drawer = createDrawerNavigator()

export const DrawerMenu = (): JSX.Element => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='StackNavigator' component={StackNavigator} />
      <Drawer.Screen name='SettingScreen' component={SettingScreen} />
    </Drawer.Navigator>
  )
}
