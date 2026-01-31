import React from 'react'

function Pagination({page,incrementPage,decrementPage}) {
  return (
    <div className='bg-[#c54e04] p-3 mt-8 flex justify-center'>
        <div className='px-8 text-[#e4d6c5] hover:cursor-pointer' onClick={decrementPage}><i class="fa-solid fa-arrow-left"></i></div>
        <div className='text-[#e4d6c5]'>{page}</div>
      <div className='px-8 text-[#e4d6c5] hover:cursor-pointer' onClick={incrementPage}><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination
