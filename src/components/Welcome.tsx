import { MonitorSmartphone } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

function Welcome() {
  return (
    <div className='flex flex-col items-center justify-center mt-6'>
      <span>Welcome to</span>
      <div className='flex items-center gap-3'>
        <MonitorSmartphone />
        <h1 className='text-2xl font-bold to-gray-800'>Digital shop</h1>
      </div>
      <Button asChild className='mt-6'>
        <Link href='/products' children='Go to products'/>
      </Button>
    </div>
  )
}

export default Welcome