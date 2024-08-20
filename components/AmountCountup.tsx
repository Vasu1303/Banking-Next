"use client"
import React from 'react'
import CountUp from 'react-countup'
const AmountCountup = ({amount}:{amount : number}) => {
  return (
    <div>
        <CountUp 
            duration={1}
            decimal=","
            prefix='₹'
            end = {amount}/>

    </div>
  )
}

export default AmountCountup