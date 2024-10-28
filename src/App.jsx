import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Button, Stack, TextField } from '@mui/material'





function App() {

  const [principe, setPrinciplt] = useState(0)
  const [interest, setInterest] = useState(0)
  const [year, setYear] = useState(0)
  const[simpleinterest,setSimpleInterest]=useState(0)

  const [isInvalidPrinciple, setIsIvalidPrinciple] = useState(false)
  const [isInvalidInterest, setIsIvalidInterest] = useState(false)
  const [isInvalidYear, setIsIvalidYear] = useState(false)

  console.log(principe);


  const handleCalculate = (e) => {
    e.preventDefault()
    console.log('button clicked');
    if (principe && interest && year) {

      setSimpleInterest(principe*interest*year/100)
      
    }else{
      alert('please filll the field property')
    }

  }

  const validateInput = (tag) => {
    const { name, value } = tag
    console.log(name, value)
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/))

    if (!!value.match(/^[0-9]*.?[0-9]+$/)) {
      if (name == 'principe') {
        setPrinciplt(value)
        setIsIvalidPrinciple(false)
      }
      else if (name == 'interest') {
        setInterest(value)
        setIsIvalidInterest(false)
      }
      else {
        setYear(value)
        setIsIvalidYear(false)
      }
    }
    else {
      if (name == 'principe') {
        setIsIvalidPrinciple(true)
      }
      else if (name == 'interest') {
        setIsIvalidInterest(true)
      }
      else {
        setIsIvalidYear(true)
      }
    }

    console.log(tag)
  }


  const handleReset=()=>{
    setPrinciplt(0)
    setInterest(0)
    setYear(0)
    setSimpleInterest(0)
    setIsIvalidInterest(false)
    setIsIvalidPrinciple(false)
    setIsIvalidYear(false)
  }



  return (
    <>
      <div className=''>
        <div className=' box text-bg-light p-5 m-5 rounded-4'>
          <div className='mb-3 p-4'>
            <h2>Simple Interest Calculator</h2>
            <p>Calcutate Your Simple Interest Easily</p>
          </div>
          <div className='align-item-center justify-conten-center bg-warning p-5 rounded-4'>
            <h1>₹ {simpleinterest}</h1>
            <h2>Total Simple Interest</h2>
          </div>
          <div className='text-light'>
            <form>
              <TextField name='principe' value={principe || ""} onChange={(e) => validateInput(e.target)} id="outlined-basic" className='p-2 text-light w-100' label="principe amount" variant="outlined" />
              {
                isInvalidPrinciple &&
                <p className='text-danger'>Invalid principle amount</p>
              }
              <TextField name='interest' value={interest || ""} onChange={(e) => validateInput(e.target)} id="outlined-basic" className='p-2 text-light w-100' label="rate" variant="outlined" />
              {
                isInvalidInterest &&
                <p className='text-danger'>Invalid principle amount</p>
              }
              <TextField name='year' value={year || ""} onChange={(e) => validateInput(e.target)} id="outlined-basic" className='p-2 text-light w-100' label="time period" variant="outlined" />
              {
                isInvalidYear &&
                <p className='text-danger'>Invalid principle amount</p>
              }
              <Stack direction="row" spacing={2}>
                <Button type='submit' disabled={isInvalidPrinciple || isInvalidInterest || isInvalidYear} onClick={handleCalculate} className='w-100 bg-info text-dark' variant="contained">Caluculate</Button>
                <Button type='button' className='w-100' onClick={handleReset} variant="outlined">Reset</Button>
              </Stack>

            </form>


          </div>
        </div>
      </div>

    </>
  )
}

export default App
