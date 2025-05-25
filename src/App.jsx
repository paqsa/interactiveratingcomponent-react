import './App.css'
import Rate from "./components/rate/rate"
import { useState } from 'react'
import Result from './components/result/result'

function App() {
  const [submit, setSubmit] = useState()
  const [rate, setRate] = useState()
  return (
    <>
      {submit ? (
        <Result rate={rate}></Result>
        ) : (
        <Rate 
        setSubmit={setSubmit} 
        rate={rate} 
        setRate={setRate}></Rate>
        )}
    </>
  )
}

export default App
