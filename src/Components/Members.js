import React, { useEffect, useState } from 'react';
import { Space, Table, Tag, Select, Input, Modal } from 'antd';
import {
  PlusOutlined,
  SearchOutlined,
  EyeFilled,
  EditFilled,
  DeleteFilled,
} from '@ant-design/icons';
import '../styles/members.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTrainee, fetchTrainees } from '../store/traineeSlice';
import { SubscriptionStatusMap, SubscriptionTypeMap } from '../types';
import { createAttendance } from '../store/attendanceSlice';

const { Search } = Input;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const Members = () => {
  
  const { trainees } = useSelector((state) => state.trainee);
  const dispatch = useDispatch();
  console.log(trainees);

  const handleDelete = (id) => {
    Modal.confirm({
      title: 'هل انت متأكد من حذف هذا المشترك؟',
      onOk: () => {
        dispatch(deleteTrainee(id));
      },
    });
  };

  const columns = [
    {
      title: 'رقم ID',
      dataIndex: 'parcode',
      key: 'parcode',
    },
    {
      title: 'نوع الاشتراك',
      dataIndex: 'subscriptionType',
      key: 'subscriptionType',
      render: (item) => SubscriptionTypeMap[item],
    },
    {
      title: 'اسم المشترك',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'رقم الواتس',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'اسم التدريب',
      dataIndex: 'trainingName',
      key: 'trainingName',
    },
    {
      title: 'تاريخ الانتهاء',
      dataIndex: 'subscriptionEndDate',
      key: 'subscriptionEndDate',
      render: (date) => formatDate(date),
    },
    {
      title: 'المدفوع',
      dataIndex: 'paid',
      key: 'paid',
    },
    {
      title: 'حالة المشترك',
      key: 'subscriptionStatus',
      dataIndex: 'subscriptionStatus',
      render: (item) => (
        <span className={item === 'ACTIVE' ? 'text-[#58D241]' : item === 'INACTIVE' ? 'text-[#E47E7B]' : 'text-[#007eff]'}>
          {SubscriptionStatusMap[item]}
        </span>
      ),
    },
    {
      title: 'اجراءات',
      key: 'action',
      dataIndex: 'action',
      render: (_, item) => (
        <div className="flex items-center">
          <Link
            to={`/dashboard/members/${item.id}`}
            className="bg-[#d9ed4d4a] text-[#cee149] p-1 px-2 rounded-full ml-2"
          >
            <EyeFilled />
          </Link>
          <Link to={`/dashboard/UpdateTrainee/${item.id}`} className="bg-[#58d24136] text-[#58D241] p-1 px-2 rounded-full ml-2">
            <EditFilled />
          </Link>
        </div>
      ),
    },
  ];

  const [selectedGender, setSelectedGender] = useState('الكل');
  const [selectedStatus, setSelectedStatus] = useState('الكل');
  const [searchText, setSearchText] = useState('');

  const handleGenderChange = (value) => {
    setSelectedGender(value);
  };

  const handleStatusChange = (value) => {
    setSelectedStatus(value);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredTrainees = trainees.filter(item =>
    (selectedGender === 'الكل' || item.gender === selectedGender) &&
    (selectedStatus === 'الكل' || item.subscriptionStatus === selectedStatus) &&
    (item.fullName.includes(searchText) || item.phoneNumber.includes(searchText))
  );

  useEffect(() => {
    dispatch(fetchTrainees());
  }, [dispatch]);

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
    <>
      <div className="flex justify-between members">
        <Input
          size="large"
          placeholder="البحث عن عضو"
          prefix={<SearchOutlined />}
          allowClear
          style={{ width: 480 }}
          value={searchText}
          onChange={handleSearchChange}
        />
        <Select
          size="large"
          defaultValue="الكل"
          style={{ width: 120 }}
          onChange={handleGenderChange}
          options={[
            { value: 'الكل', label: 'الكل' },
            { value: 'FEMALE', label: 'انثي' },
            { value: 'MALE', label: 'ذكر' },
          ]}
        />
        <Select
          size="large"
          defaultValue="الكل"
          style={{ width: 120 }}
          onChange={handleStatusChange}
          options={[
            { value: 'الكل', label: 'الكل' },
            { value: 'ACTIVE', label: 'نشط' },
            { value: 'INACTIVE', label: 'غير نشط' },
            { value: 'PENDING', label: 'معلق' },
          ]}
        />
        <a href="/dashboard/addNewUser">
          <button className="bg-[#D9ED4D] rounded-lg py-2 px-10 font-semibold flex items-center fs-lg">
            <PlusOutlined className="ml-3 text-sm" /> اضافه عضو جديد
          </button>
        </a>
      </div>
      <Table
        columns={columns}
        dataSource={filteredTrainees}
        pagination={{ pageSize: 7 }}
        className="mt-6 text-center table_members"
      />
    </>
  );
};

export default Members;


