import { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appTheme'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

interface Props extends NativeStackScreenProps<any, any> {

}
export const Page2Screen = ({ navigation }: Props): JSX.Element => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Hello World',
      headerBackTitle: 'Back'
    })
  }, [])
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>App screen 2</Text>
      <Button
        title='Ir pagina 3'
        onPress={() => navigation.navigate('Page3')}
      />
    </View>
  )
}
