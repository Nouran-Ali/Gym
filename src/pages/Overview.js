import React, { useEffect, useState } from 'react';
import '../styles/Overview.css';
import { PlusOutlined } from '@ant-design/icons';
import LineChart from '../Components/LineChart';
import Attende from '../Components/Attende';
import { Button, Input, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAttendances } from '../store/attendanceSlice';
import { fetchTrainees } from '../store/traineeSlice';

const Overview = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const { attendance } = useSelector((state) => state.attendance);
    const dispatch = useDispatch();
    console.log(attendance)

    const { trainees } = useSelector((state) => state.trainee);
    useEffect(() => {
        dispatch(fetchTrainees());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchAttendances());
    }, [dispatch]);

    return (
        <div className='Overview'>
            <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-6'>

                <div className='col-span-2'>
                    <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-6'>
                        <Link to="/dashboard/addNewUser">
                            <button className='add_user rounded-xl p-5 text-center'>
                                <PlusOutlined />
                                <p className='mt-2 font-medium'>اضافه عضو جديد</p>
                            </button>
                        </Link>

                        <div className='datails rounded-xl p-5 text-center'>
                            <div className='flex justify-center items-center'>
                                <span></span>
                                <p className='mr-4'>الحضور اليوم</p>
                            </div>
                            <p className='mt-4 font-semibold'>{attendance.length}</p>
                        </div>

                        <div className='datails rounded-xl p-5 text-center'>
                            <div className='flex justify-center items-center'>
                                <span></span>
                                <p className='mr-4'>عدد المشتركين</p>
                            </div>
                            <p className='mt-4 font-semibold'>{trainees.length}</p>
                        </div>
                    </div>
                    <div className='my-5' style={{ minHeight: '70vh', width: '100%' }}>
                        <LineChart />
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <div className='bg-[#D9ED4A] p-2 rounded-full '><img src='./../../1.png' width={17} /></div>
                            <span className='font-semibold mr-2 text-lg'>الحاضريين في النادي</span>
                        </div>
                        <button className='text-[#D9ED4A] border border-[#D9ED4A] rounded-xl  p-1 px-3' onClick={showModal}>تسجيل حضور</button>

                        <Modal title="تسجيل حضور يدوي" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                            <form className='w-3/5 mx-auto mb-10'>
                                <div className='mb-4'>
                                    <label className='text-[#4E4E4E]'>ID المشترك</label>
                                    <Input className='bg-[#F9F9F9] border border-[#E4E4E4] mt-3' />
                                </div>

                                {/* <div className='mb-4'>
                                    <label className='text-[#4E4E4E]'>تاريخ اليوم</label>
                                    <Input className='bg-[#F9F9F9] border border-[#E4E4E4] mt-3' />
                                </div>

                                <div className='mb-4'>
                                    <label className='text-[#4E4E4E]'>ساعه الدخول</label>
                                    <Input className='bg-[#F9F9F9] border border-[#E4E4E4] mt-3' />
                                </div> */}

                                <div className='mt-8'>
                                    <button className='bg-[#D9ED4D] rounded-lg py-2 w-full font-semibold'>اضافه</button>
                                </div>
                            </form>
                        </Modal>

                    </div>

                    <div className='mt-5 h-lvh overflow-auto'>
                        {attendance.map((atend, index) => {
                            const subscriptionDate = new Date(atend?.trainee?.subscriptionDate);

                            const formattedTime = subscriptionDate.toLocaleString('en-US', {
                                hour: 'numeric',
                                minute: 'numeric',
                                second: 'numeric',
                                hour12: true,
                                timeZone: 'Africa/Cairo'
                            });

                            const subscriptionEndDate = new Date(atend?.trainee?.subscriptionEndDate);
                            const subscriptionStartDate = new Date(atend?.trainee?.subscriptionStartDate);
                            const days = Math.ceil((subscriptionEndDate - subscriptionStartDate) / (1000 * 60 * 60 * 24));

                            return (
                                <Attende
                                    key={index}
                                    name={atend?.trainee?.fullName}
                                    status={atend?.trainee?.subscriptionStatus ? "نشط" : "غير نشط"}
                                    color={atend?.trainee?.subscriptionStatus == "ACTIVE" ? true : false}
                                    time_attend={formattedTime}
                                    days={days}
                                />
                            );
                        })}
                    </div>



                </div>
            </div>
        </div >
    )
}

export default Overview
