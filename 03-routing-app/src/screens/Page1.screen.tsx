import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, Text, TouchableOpacity, View } from 'react-native'
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

      <Text>Navigate with args</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity
          style={{ ...styles.bigBtn, backgroundColor: '#FF9427' }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            name: 'Pedro'
          })}
        >
          <Text style={styles.btnText}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.bigBtn, backgroundColor: '#5856D6' }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            name: 'Maria'
          })}
        >
          <Text style={styles.btnText}>Maria</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
