import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../themes/appTheme'
interface CalculatorButtonProps {
  text: string
  color?: string
  strech?: boolean
  action: (numberText: string) => void
}

export const CalculatorButton = ({ text = '1', color, strech = false, action }: CalculatorButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        (color !== undefined) && { backgroundColor: color },
        (!!strech) && { width: 180 }
      ]}
      onPress={() => action(text)}
    >
      <Text style={[
        styles.buttonText,
        (color === '#9B9B9B') && { color: 'black' },
        (!!strech) && { textAlign: 'left', paddingLeft: 35 }
      ]}
      >{text}
      </Text>
    </TouchableOpacity>
  )
}
