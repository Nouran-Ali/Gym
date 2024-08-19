import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import ShowInfo from '../Components/showUser/ShowInfo';
import Measurements from '../Components/showUser/Measurements';
import Attendance from '../Components/showUser/Attendance';
import Notes from '../Components/showUser/Notes';
import { useDispatch } from 'react-redux';
import { fetchTraineeById } from '../store/traineeSlice';
import { useParams } from 'react-router-dom';

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
