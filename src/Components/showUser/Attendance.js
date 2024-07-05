import React from 'react'
import ShowTitleWithData from '../shared/ShowTitleWithData';

const Attendance = () => {

  let Attendances = [
    { name: "اليوم 1", value: "01/05/2024" },
    { name: "اليوم 2", value: "01/05/2024" },
    { name: "اليوم 3", value: "01/05/2024" },
    { name: "اليوم 4", value: "01/05/2024" },
  ];

  return (
    <ShowTitleWithData title="تواريخ الحضور" data={Attendances} />
  );
}

export default Attendance