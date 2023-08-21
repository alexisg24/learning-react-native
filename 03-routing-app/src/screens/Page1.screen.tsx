import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appTheme'

interface Props extends NativeStackScreenProps<any, any> {

}

export const Page1Screen = ({ navigation }: Props): JSX.Element => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>App screen 1</Text>
      <Button
        title='Pag 2'
        onPress={() => navigation.navigate('Page2')}
      />
    </View>
  )
}
