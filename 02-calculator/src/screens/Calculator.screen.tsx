import { Text, View } from 'react-native'
import { styles } from '../themes/appTheme'
import { CalculatorButton } from '../components/CalculatorButton'
import { useCalculator } from '../hooks/useCalculator'

export const CalculatorScreen = (): JSX.Element => {
  const {
    number,
    prevNumber,
    buildNumber,
    clearNumber,
    switchSymbol,
    deleteBtn,
    divideBtn,
    multiplyBtn,
    substractBtn,
    sumBtn,
    calcResult
  } = useCalculator()
  return (
    <View style={styles.calculatorContainer}>
      {
        (prevNumber !== '0') && (<Text style={[styles.result, styles.prevResult]}>{prevNumber}</Text>)
      }
      <Text
        style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {number}
      </Text>

      <View style={styles.buttonsContainer}>
        <CalculatorButton text='C' color='#9B9B9B' action={clearNumber} />
        <CalculatorButton text='+/-' color='#9B9B9B' action={switchSymbol} />
        <CalculatorButton text='del' color='#9B9B9B' action={deleteBtn} />
        <CalculatorButton text='/' color='#FF9427' action={divideBtn} />
      </View>

      <View style={styles.buttonsContainer}>
        <CalculatorButton text='7' action={buildNumber} />
        <CalculatorButton text='8' action={buildNumber} />
        <CalculatorButton text='9' action={buildNumber} />
        <CalculatorButton text='X' color='#FF9427' action={multiplyBtn} />
      </View>

      <View style={styles.buttonsContainer}>
        <CalculatorButton text='4' action={buildNumber} />
        <CalculatorButton text='5' action={buildNumber} />
        <CalculatorButton text='6' action={buildNumber} />
        <CalculatorButton text='-' color='#FF9427' action={substractBtn} />
      </View>

      <View style={styles.buttonsContainer}>
        <CalculatorButton text='1' action={buildNumber} />
        <CalculatorButton text='2' action={buildNumber} />
        <CalculatorButton text='3' action={buildNumber} />
        <CalculatorButton text='+' color='#FF9427' action={sumBtn} />
      </View>

      <View style={styles.buttonsContainer}>
        <CalculatorButton text='0' strech action={buildNumber} />
        <CalculatorButton text='.' action={buildNumber} />
        <CalculatorButton text='=' color='#FF9427' action={calcResult} />
      </View>

    </View>
  )
}
