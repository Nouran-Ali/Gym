import React from 'react';
import ShowTitleWithData from '../shared/ShowTitleWithData';
import { useSelector } from 'react-redux';
import { transformAttendances } from '../../utils/transformations';

const Attendance = () => {
  const { trainee } = useSelector((state) => state.trainee);
  const TransformAttendances = transformAttendances(trainee.attendances);

  return (
    <>
      <ShowTitleWithData title="تواريخ الحضور" data={TransformAttendances} />
    </>
  );
};

export default Attendance;
