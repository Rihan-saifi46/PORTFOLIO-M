import React from 'react'

const GradientBtn = ({text,link,className = ""}) => {
  return (
    <>
    <a href="" className={`btn uppercase font-heading border-2 border-transparent text-center min-w-[105px] px-6 py-1 lg:py-3 rounded-full max-sm:text-lg ${className}`}>Let's Talk</a>
    </>
  )
}

export default GradientBtn
