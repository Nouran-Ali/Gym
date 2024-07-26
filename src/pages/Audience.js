import React, { useEffect, useState } from 'react';
import { Select, Table, message } from 'antd';
import { Link } from 'react-router-dom';
import { PlusOutlined, SearchOutlined, EyeFilled, EditFilled, DeleteFilled } from '@ant-design/icons';
import '../styles/Audience.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAttendances, deleteAttendance } from '../store/attendanceSlice';

const Audience = () => {
    const [selectedGender, setSelectedGender] = useState('FEMALE');

    const handleChange = (value) => {
        setSelectedGender(value);
    };

    const columns = [
        {
            title: 'رقم ID',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'اسم المشترك',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'وقت الدخول',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'تاريخ الانتهاء',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'حالة المشترك',
            key: 'status',
            dataIndex: 'status',
        },
        {
            title: '',
            key: 'action',
            dataIndex: 'action',
        },
    ];

    const { attendance } = useSelector((state) => state.attendance);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAttendances());
    }, [dispatch]);

    const renderStatus = (subscriptionStatus) => {
        return subscriptionStatus === 'ACTIVE' ? (
            <span className='text-[#58D241]'>نشط</span>
        ) : (
            <span className='text-[#E47E7B]'>غير نشط</span>
        );
    };

    const handleDelete = async (id) => {
        try {
            await dispatch(deleteAttendance(id)).unwrap();
            message.success('Attendance deleted successfully');
        } catch (error) {
            message.error('Failed to delete attendance');
        }
    };

    const filteredAttendance = attendance.filter(item => item.trainee.gender === selectedGender);

    const attendanceData = filteredAttendance.map((item) => {
        const subscriptionEndDate = new Date(item.trainee.subscriptionEndDate).toLocaleDateString('en-GB', {
            timeZone: 'Africa/Cairo',
        });

        const timeOnly = new Date(item.date).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
            timeZone: 'Africa/Cairo'
        });

        return {
            key: item.id,
            id: item.trainee.parcode,
            name: item.trainee.fullName,
            time: timeOnly,
            date: subscriptionEndDate,
            status: renderStatus(item.trainee.subscriptionStatus),
            action: (
                <div className='flex items-center'>
                    <Link to={`/dashboard/members/${item.traineeId}`} className="bg-[#d9ed4d4a] text-[#D9ED4D] p-1 px-2 rounded-full ml-2"><EyeFilled /></Link>
                    <div
                        className="bg-[#e47e7b42] text-[#E47E7B] p-1 px-2 rounded-full cursor-pointer"
                        onClick={() => handleDelete(item.traineeId)}
                    >
                        <DeleteFilled />
                    </div>
                </div>
            ),
        };
    });

    return (
        <div className='Audience'>
            <div className='flex justify-between'>
                <h3 className='text-2xl'>اليوم</h3>
                <Select size="large"
                    defaultValue="انثي"
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={[
                        { value: 'FEMALE', label: 'انثي' },
                        { value: 'MALE', label: 'ذكر' },
                    ]}
                />
            </div>

            <Table
                columns={columns}
                dataSource={attendanceData}
                pagination={false}
                className='mt-6 text-center table_members'
            />

            <div>
                <h3 className='text-2xl mt-5'>أمس</h3>

                <Table
                    columns={columns}
                    dataSource={attendanceData}
                    pagination={false}
                    className='mt-6 text-center table_members'
                />
            </div>
        </div>
    );
};

export default Audience;
