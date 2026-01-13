import React from 'react'

function Pagination({page,incrementPage,decrementPage}) {
  return (
    <div className='bg-gray-400 p-3 mt-8 flex justify-center'>
        <div className='px-8' onClick={decrementPage}><i class="fa-solid fa-arrow-left"></i></div>
        <div>{page}</div>
      <div className='px-8' onClick={incrementPage}><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination
