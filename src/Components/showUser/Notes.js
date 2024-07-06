import { Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'

const Notes = () => {
  return (
    <form>
      <div className='bg-[#F9F9F9] rounded-lg my-5 pb-8'>
        <h3 className='text-xl font-semibold pt-3 pr-7'>تمارين الاسبوع</h3>
        <hr className='bg-black border border-[#f5f5f5] mt-3 mb-5' />

        <div className='grid grid-cols-3 max-md:grid-cols-1 gap-4 px-7'>
          <div>
            <label className='text-[#4E4E4E]'>يوم السبت</label>
            <Input className='mt-2' />
          </div>
          <div>
            <label className='text-[#4E4E4E]'>يوم الاحد</label>
            <Input className='mt-2' />
          </div>
          <div>
            <label className='text-[#4E4E4E]'>يوم الاثنين</label>
            <Input className='mt-2' />
          </div>
          <div>
            <label className='text-[#4E4E4E]'>يوم الثلاثاء</label>
            <Input className='mt-2' />
          </div>
          <div>
            <label className='text-[#4E4E4E]'>يوم الاربعاء</label>
            <Input className='mt-2' />
          </div>
          <div>
            <label className='text-[#4E4E4E]'>يوم الخميس</label>
            <Input className='mt-2' />
          </div>
          <div>
            <label className='text-[#4E4E4E]'>يوم الجمعه</label>
            <Input className='mt-2' />
          </div>
        </div>
        <div className='px-7 mt-4'>
          <label className='text-[#4E4E4E]'>ملاحظات عامه</label>
          <TextArea rows={4} className='mt-2'/>
        </div>
      </div>
      <button className='mx-auto text-lg flex justify-center bg-[#d9ed4d] text-center rounded-lg w-1/4 py-2 mb-4'>حفظ</button>
    </form>
  )
}

export default Notes