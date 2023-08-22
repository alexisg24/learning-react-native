import { Text, View } from 'react-native'
import { styles } from '../themes/appTheme'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect } from 'react'
import { RootStackParams } from '../navigator/StackNavigator'

// interface RouterParams {
//   id: number
//   name: string
// }

interface Props extends NativeStackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({ route, navigation }: Props): JSX.Element => {
//   const params = route.params as RouterParams
  const params = route.params

  useEffect(() => {
    navigation.setOptions({
      title: params.name
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        {
            JSON.stringify(params, null, 3)
        }
      </Text>
    </View>
  )
}
