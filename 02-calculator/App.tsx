import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { CalculatorScreen } from './src/screens'
import { styles } from './src/themes/appTheme'

export default function App (): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' backgroundColor='black' />
      <CalculatorScreen />
    </SafeAreaView>
  )
}
