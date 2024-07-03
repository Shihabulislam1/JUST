'use client';
import BookForm from '@/components/BookForm/BookForm'
import CancelRequest from '@/components/CancelRequest/CancelRequest';
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center mt-12 gap-4'>
      <BookForm/>
      <CancelRequest/>
    </div>
  )
}

export default page