import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appTheme'

interface Props extends NativeStackScreenProps<any, any> {

}

export const Page3Screen = ({ navigation }: Props): JSX.Element => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>App screen 3</Text>
      <Button
        title='Back'
        onPress={() => navigation.pop()}
      />
      <Button
        title='Ir pagina 1'
        onPress={() => navigation.popToTop()}

      />
    </View>
  )
}
