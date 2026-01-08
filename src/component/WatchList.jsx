import React from 'react'

function WatchList() {
  return (
    <>
      <div className='flex justify-center my-5'>
        <input type="text"placeholder='Search the Movie' className='h-[2rem] w-[250px] bg-gray-300 p-4 rounded-xl outline-none ' />
      </div>
      <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Popularity</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList
