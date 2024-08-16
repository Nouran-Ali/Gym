import React, { useEffect, useState } from 'react';
import { Empty, Select, Table, message } from 'antd';
import { Link } from 'react-router-dom';
import { EyeFilled, DeleteFilled } from '@ant-design/icons';
import '../styles/Audience.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAttendances, deleteAttendance } from '../store/attendanceSlice';

const Audience = () => {
  const [selectedGender, setSelectedGender] = useState('FEMALE');
  const { attendance } = useSelector(
    (state) => state.attendance
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAttendances());
  }, [dispatch]);

  const renderStatus = (subscriptionStatus) => {
    return subscriptionStatus === 'ACTIVE' ? (
      <span className="text-[#58D241]">نشط</span>
    ) : (
      <span className="text-[#E47E7B]">غير نشط</span>
    );
  };

  const handleDelete = (id) => {
      console.log("🚀 ~ handleDelete ~ id:", id)
      dispatch(deleteAttendance(id))
    // try {
    //   message.success('Attendance deleted successfully');
    // } catch (error) {
    //   message.error('Failed to delete attendance');
    // }
  };
  const handleChange = (value) => {
    setSelectedGender(value);
  };

  const columns = [
    {
      title: 'رقم ID',
      dataIndex: 'parcode',
      key: 'parcode',
      render: (_, item) => item.trainee.parcode,
    },
    {
      title: 'اسم المشترك',
      dataIndex: 'name',
      key: 'name',
      render: (_, item) => item.trainee.fullName,
    },
    {
      title: 'وقت الدخول',
      dataIndex: 'time',
      key: 'time',
      render: (_, item) =>
        new Date(item.date).toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true,
          timeZone: 'Africa/Cairo',
        }),
    },
    {
      title: 'تاريخ الانتهاء',
      dataIndex: 'date',
      key: 'date',
      render: (_, item) =>
        new Date(item.trainee.subscriptionEndDate).toLocaleDateString('en-GB', {
          timeZone: 'Africa/Cairo',
        }),
    },
    {
      title: 'حالة المشترك',
      key: ['trainee', 'subscriptionStatus'],
      dataIndex: ['trainee', 'subscriptionStatus'],
      render: (item) => renderStatus(item),
    },
    {
      title: '',
      key: 'action',
      dataIndex: 'action',
      render: (_, item) => (
        <div className="flex items-center">
          <Link
            to={`/dashboard/members/${item.traineeId}`}
            className="bg-[#d9ed4d4a] text-[#D9ED4D] p-1 px-2 rounded-full ml-2"
          >
            <EyeFilled />
          </Link>
          <div
            className="bg-[#e47e7b42] text-[#E47E7B] p-1 px-2 rounded-full cursor-pointer"
            onClick={() => handleDelete(item.id)}
          >
            <DeleteFilled />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="Audience">
      {Object.keys(attendance).length > 0 ? (
        <>
          <div className="text-left">
            <Select
              className="text-center"
              size="large"
              defaultValue="انثي"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: 'FEMALE', label: 'انثي' },
                { value: 'MALE', label: 'ذكر' },
              ]}
            />
          </div>
          {Object.keys(attendance).map((key) => {
            return (
              <div>
                <h3 className="text-2xl mt-5">{key}</h3>

                <Table
                  columns={columns}
                  dataSource={attendance[key]}
                  pagination={false}
                  className="mt-6 text-center table_members"
                />
              </div>
            );
          })}
        </>
      ) : (
        <Empty className='mt-12' />
      )}
    </div>
  );
};

export default Audience;
