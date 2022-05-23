import React from 'react'
import calculatorProducts from '../data/data-calculator'

function RoofCalculator() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <div className="max-h-[600px] rounded-lg bg-[#F0F0F0]">
            <img
              className="max-h-[400px] max-w-[400px]"
              src="/calculator/1.svg"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="page-title">
            <h1>Калькулятор расчета кровли</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoofCalculator
