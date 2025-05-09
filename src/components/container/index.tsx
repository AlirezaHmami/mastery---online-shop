import React from 'react'

export function Container({children}:{children:React.ReactNode}) {
  return (
    <div className='mx-auto container'>{children}</div>
  )
}
