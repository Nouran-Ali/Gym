import React, { useState } from 'react';
import '../styles/Overview.css';
import { PlusOutlined } from '@ant-design/icons';
import LineChart from '../Components/LineChart';
import Attende from '../Components/Attende';
import { Button, Input, Modal } from 'antd';
import { Link } from 'react-router-dom';

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

    return (
        <div className='Overview'>
            <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-6'>

                <div className='col-span-2'>
                    <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-6'>
                        <Link to="/addNewUser">
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
                            <p className='mt-4 font-semibold'>16</p>
                        </div>

                        <div className='datails rounded-xl p-5 text-center'>
                            <div className='flex justify-center items-center'>
                                <span></span>
                                <p className='mr-4'>عدد المشتركين</p>
                            </div>
                            <p className='mt-4 font-semibold'>58</p>
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
                                    <label className='text-[#4E4E4E]'>رقم هاتف المشترك</label>
                                    <Input className='bg-[#F9F9F9] border border-[#E4E4E4] mt-3' />
                                </div>

                                <div className='mb-4'>
                                    <label className='text-[#4E4E4E]'>تاريخ اليوم</label>
                                    <Input className='bg-[#F9F9F9] border border-[#E4E4E4] mt-3' />
                                </div>

                                <div className='mb-4'>
                                    <label className='text-[#4E4E4E]'>ساعه الدخول</label>
                                    <Input className='bg-[#F9F9F9] border border-[#E4E4E4] mt-3' />
                                </div>

                                <div className='mt-8'>
                                    <button className='bg-[#D9ED4D] rounded-lg py-2 w-full font-semibold'>اضافه</button>
                                </div>
                            </form>
                        </Modal>

                    </div>
                    <div className='mt-5 h-lvh overflow-auto'>
                        <Attende name="هاجر علي" status="نشط" color={true} time_attend="9:30 AM" days="2" />
                        <Attende name="نوران علي" status="نشط" color={true} time_attend="9:30 AM" days="2" />
                        <Attende name="ابتهال طارق" status="غير نشط" color={false} time_attend="9:30 AM" days="2" />
                        <Attende name="مريم محمد" status="نشط" color={true} time_attend="9:30 AM" days="2" />
                        <Attende name="روفيدة علي" status="نشط" color={true} time_attend="9:30 AM" days="2" />
                        <Attende name="نوران علي" status="نشط" time_attend="9:30 AM" days="2" />
                        <Attende name="مريم محمد" status="نشط" time_attend="9:30 AM" days="2" />
                        <Attende name="مريم محمد" status="نشط" time_attend="9:30 AM" days="2" />
                        <Attende name="مريم محمد" status="نشط" time_attend="9:30 AM" days="2" />
                        <Attende name="مريم محمد" status="نشط" time_attend="9:30 AM" days="2" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Overview
