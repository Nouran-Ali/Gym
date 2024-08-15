import React, { useEffect } from 'react';
import ShowTitleWithData from '../shared/ShowTitleWithData';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAttendancesById } from '../../store/attendanceSlice';
import { useParams } from 'react-router-dom';

const Attendance = () => {

  let Attendances = [
    { name: "اليوم 1", value: "01/05/2024" },
    { name: "اليوم 2", value: "01/05/2024" },
    { name: "اليوم 3", value: "01/05/2024" },
    { name: "اليوم 4", value: "01/05/2024" },
  ];

  const { attendance } = useSelector((state) => state.attendance);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchAttendancesById(id));
    }
  }, [dispatch, id]);

  return (
    <>
      <ShowTitleWithData title="تواريخ الحضور" data={Attendances} />
    </>
  );
}

export default Attendance;
