import React from 'react'

function WatchList() {
  return (
    <>

      <div className='flex justify-center flex-wrap m-4 gap-6 '>
        <div className='flex justify-center items-center bg-blue-400 rounded-xl w-[5rem] h-[2rem] text-white '>Action</div>
        <div className='flex justify-center items-center bg-gray-400/50 rounded-xl w-[5rem] h-[2rem] text-white '>Action</div>
      
      </div>
      <div className='flex justify-center my-5'>
        <input type="text"placeholder='Search the Movie' className='h-[2rem] w-[250px] bg-gray-300 p-4 rounded-xl outline-none ' />
      </div>
      <div className='overflow-hidden rounded-xl border border-gray-400 m-8'>
        <table className='w-full text-gray-600 text-center'>
            <thead className='border-b-2'>
                <tr className=''>
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Popularity</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                <tr className='border-b-2'>
                  <td className='flex items-center px-6 py-4'>
                    <img className='h-[8rem] w-[8rem]' src={`https://images-cdn.ubuy.co.in/68b1b650d9f8d3e89e042c52-star-wars-rogue-one-movie-poster.jpg`} alt="" />
                    <div className='mx-20'>The War</div>
                  </td>
                  <td>8.5</td>
                  <td>9</td>
                  <td>Action</td>
                  <td className='text-red-600 hover:scale-120 cursor-pointer'>Delete</td>
                </tr>

                
            </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList
