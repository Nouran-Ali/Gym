import React from 'react'

const Attendance = () => {

  let Attendances = [
    { day: "اليوم 1", time: "01/05/2024" },
    { day: "اليوم 2", time: "01/05/2024" },
    { day: "اليوم 3", time: "01/05/2024" },
    { day: "اليوم 4", time: "01/05/2024" },
  ];

  return (
    <div>
      <h3 className='text-xl font-semibold'>تواريخ الحضور</h3>
      <hr className='bg-black border border-[#f5f5f5] mt-3 mb-5' />

      <div className='grid grid-cols-3 max-md:grid-cols-1 gap-4'>

        {Attendances.map((Attendance) => (
          <div>
            <p className='text-[#4E4E4E] text-lg'>{Attendance.day}</p>
            <p className='text-[#989898] mt-2 text-lg'>{Attendance.time}</p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Attendance