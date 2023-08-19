import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black'
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end'
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right'
  },
  prevResult: {
    fontSize: 30,
    color: 'rgba(255,255,255,0.5)'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10
  },
  button: {
    height: 80,
    width: 80,
    marginHorizontal: 10,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '400'
  }
})
