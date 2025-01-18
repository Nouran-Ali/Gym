import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import ShowInfo from '../Components/showUser/ShowInfo';
import Measurements from '../Components/showUser/Measurements';
import Attendance from '../Components/showUser/Attendance';
import Notes from '../Components/showUser/Notes';
import { useDispatch } from 'react-redux';
import { fetchTraineeById } from '../store/traineeSlice';
import { useParams } from 'react-router-dom';
import { createAttendance } from '../store/attendanceSlice';

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'البيانات',
    children: <ShowInfo />,
  },
  {
    key: '2',
    label: 'المقاسات',
    children: <Measurements />,
  },
  {
    key: '3',
    label: 'الحضور',
    children: <Attendance />,
  },
  {
    key: '4',
    label: 'ملاحظات',
    children: <Notes />,
  },
];

const ShowUser = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchTraineeById(id));
  }, [id, dispatch]);

  const [parcode, setParcode] = useState("");

  useEffect(() => {
    const handleRFIDScan = (event) => {
      const scannedId = event.key;
      if (scannedId === "Enter") {
        // Handle the complete scan when the user presses enter
        dispatch(createAttendance(parcode));
        setParcode(""); // Reset after handling the scan
      } else {
        // Append the scanned character to the parcode as the user scans the card
        setParcode((prev) => prev + event.key);
      }
    };

    // Listen to the keydown event when the component is mounted
    window.addEventListener("keydown", handleRFIDScan);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleRFIDScan);
    };
  }, [dispatch, parcode]);

  return (
    <Tabs
      className="user-details overflow-scroll relative h-95"
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
    />
  );
};

export default ShowUser;
