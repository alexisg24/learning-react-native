import { useState, useRef } from 'react'
interface UseCalculator {
  number: string
  prevNumber: string
  buildNumber: (numberText: string) => void
  clearNumber: () => void
  switchSymbol: () => void
  deleteBtn: () => void
  divideBtn: () => void
  multiplyBtn: () => void
  substractBtn: () => void
  sumBtn: () => void
  calcResult: () => void
}
enum Operators {
  sum,
  substract,
  multiply,
  divide,
}
export const useCalculator = (): UseCalculator => {
  const initialState = '0'
  const [number, setNumber] = useState(initialState)
  const [prevNumber, setPrevNumber] = useState('0')
  const selectedOperator = useRef<Operators>()

  const clearNumber = (): void => {
    setNumber(initialState)
    setPrevNumber(initialState)
    selectedOperator.current = undefined
  }

  const buildNumber = (numberText: string): void => {
    if (number.includes('.') && numberText === '.') return
    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberText === '.') {
        setNumber(prevNumber => prevNumber + numberText)
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(prevNumber => prevNumber + numberText)
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText)
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number)
      } else {
        setNumber(prevNumber => prevNumber + numberText)
      }
    } else {
      setNumber(prevNumber => prevNumber + numberText)
    }
  }

  const switchSymbol = (): void => {
    if (number.includes('-')) {
      setNumber(prevValue => prevValue.replace('-', ''))
    } else {
      setNumber(prevValue => `-${prevValue}`)
    }
  }

  const deleteBtn = (): void => {
    let negative = ''
    let tempNumber = number
    if (number.includes('-')) {
      negative = '-'
      tempNumber = tempNumber.slice(1)
    }
    if (tempNumber.length > 1) {
      setNumber(`${negative}${tempNumber.slice(0, -1)}`)
    } else {
      setNumber(initialState)
    }
  }

  const changePrevNumber = (): void => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1))
    } else {
      setPrevNumber(number)
    }
    setNumber(initialState)
  }

  const divideBtn = (): void => {
    changePrevNumber()
    selectedOperator.current = Operators.divide
  }

  const multiplyBtn = (): void => {
    changePrevNumber()
    selectedOperator.current = Operators.multiply
  }

  const substractBtn = (): void => {
    changePrevNumber()
    selectedOperator.current = Operators.substract
  }

  const sumBtn = (): void => {
    changePrevNumber()
    selectedOperator.current = Operators.sum
  }

  const calcResult = (): void => {
    const num1 = Number(number)
    const num2 = Number(prevNumber)
    switch (selectedOperator.current) {
      case Operators.sum:
        setNumber(`${num2 + num1}`)
        setPrevNumber(initialState)
        break
      case Operators.substract:
        setNumber(`${num2 - num1}`)
        setPrevNumber(initialState)
        break
      case Operators.divide:
        setNumber(`${(num2 / num1)}`)
        setPrevNumber(initialState)
        break
      case Operators.multiply:
        setNumber(`${num2 * num1}`)
        setPrevNumber(initialState)
        break
      default:
        setNumber(number)
        break
    }
    selectedOperator.current = undefined
  }

  return {
    number,
    prevNumber,
    clearNumber,
    buildNumber,
    switchSymbol,
    deleteBtn,
    divideBtn,
    multiplyBtn,
    substractBtn,
    sumBtn,
    calcResult
  }
}
