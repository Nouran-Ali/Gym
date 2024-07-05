import React from 'react'

const Notes = () => {
  return (
    <div>
      <h3 className='text-xl font-semibold'>تمارين الاسبوع</h3>
      <hr className='bg-black border border-[#f5f5f5] mt-3 mb-5' />

      <form>
        <div className='grid grid-cols-3 max-md:grid-cols-1 gap-4'>

        </div>
        <button className='mx-auto text-lg flex justify-center bg-[#d9ed4d] text-center rounded-lg w-1/4 py-2 mb-4'>حفظ</button>
      </form>

    </div>
  )
}

export default Notes