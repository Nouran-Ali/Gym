import React, { useEffect } from 'react'
import { Select, Table } from 'antd';
import { Link } from 'react-router-dom';
import { PlusOutlined, SearchOutlined, EyeFilled, EditFilled, DeleteFilled } from '@ant-design/icons';
import '../styles/Audience.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAttendances } from '../store/attendanceSlice';

const Audience = () => {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
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

    const data = [
        {
            key: '1',
            id: '#0011',
            name: 'هاجر علي',
            time: '9:30 AM',
            date: '08/06/2024',
            status: <span className='text-[#58D241]'>نشط</span>,
            action: (
                <div className='flex items-center'>
                    <Link to="/showUser" className="bg-[#d9ed4d4a] text-[#D9ED4D] p-1 px-2 rounded-full ml-2"><EyeFilled /></Link>
                    <div className="bg-[#58d24136] text-[#58D241] p-1 px-2 rounded-full ml-2"><EditFilled /></div>
                    <div className="bg-[#e47e7b42] text-[#E47E7B] p-1 px-2 rounded-full"><DeleteFilled /></div>
                </div>
            ),
        },
        {
            key: '2',
            id: '#0012',
            name: 'نوران علي',
            time: '9:30 AM',
            date: '08/06/2024',
            status: <span className='text-[#58D241]'>نشط</span>,
            action: (
                <div className='flex items-center'>
                    <Link to="/showUser" className="bg-[#d9ed4d4a] text-[#D9ED4D] p-1 px-2 rounded-full ml-2"><EyeFilled /></Link>
                    <div className="bg-[#58d24136] text-[#58D241] p-1 px-2 rounded-full ml-2"><EditFilled /></div>
                    <div className="bg-[#e47e7b42] text-[#E47E7B] p-1 px-2 rounded-full"><DeleteFilled /></div>
                </div>
            ),
        },
        {
            key: '3',
            id: '#0013',
            name: 'هاجر علي',
            time: '9:30 AM',
            date: '08/06/2024',
            status: <span className='text-[#58D241]'>نشط</span>,
            action: (
                <div className='flex items-center'>
                    <Link to="/showUser" className="bg-[#d9ed4d4a] text-[#D9ED4D] p-1 px-2 rounded-full ml-2"><EyeFilled /></Link>
                    <div className="bg-[#58d24136] text-[#58D241] p-1 px-2 rounded-full ml-2"><EditFilled /></div>
                    <div className="bg-[#e47e7b42] text-[#E47E7B] p-1 px-2 rounded-full"><DeleteFilled /></div>
                </div>
            ),
        },
        {
            key: '4',
            id: '#0014',
            name: 'نوران علي',
            time: '9:30 AM',
            date: '08/06/2024',
            status: <span className='text-[#E47E7B]'>غير نشط</span>,
            action: (
                <div className='flex items-center'>
                    <Link to="/showUser" className="bg-[#d9ed4d4a] text-[#D9ED4D] p-1 px-2 rounded-full ml-2"><EyeFilled /></Link>
                    <div className="bg-[#58d24136] text-[#58D241] p-1 px-2 rounded-full ml-2"><EditFilled /></div>
                    <div className="bg-[#e47e7b42] text-[#E47E7B] p-1 px-2 rounded-full"><DeleteFilled /></div>
                </div>
            ),
        },
        {
            key: '5',
            id: '#0015',
            name: 'هاجر علي',
            time: '9:30 AM',
            date: '08/06/2024',
            status: <span className='text-[#58D241]'>نشط</span>,
            action: (
                <div className='flex items-center'>
                    <Link to="/showUser" className="bg-[#d9ed4d4a] text-[#D9ED4D] p-1 px-2 rounded-full ml-2"><EyeFilled /></Link>
                    <div className="bg-[#58d24136] text-[#58D241] p-1 px-2 rounded-full ml-2"><EditFilled /></div>
                    <div className="bg-[#e47e7b42] text-[#E47E7B] p-1 px-2 rounded-full"><DeleteFilled /></div>
                </div>
            ),
        },
        {
            key: '6',
            id: '#0016',
            name: 'هاجر علي',
            time: '9:30 AM',
            date: '08/06/2024',
            status: <span className='text-[#E47E7B]'>غير نشط</span>,
            action: (
                <div className='flex items-center'>
                    <Link to="/showUser" className="bg-[#d9ed4d4a] text-[#D9ED4D] p-1 px-2 rounded-full ml-2"><EyeFilled /></Link>
                    <div className="bg-[#58d24136] text-[#58D241] p-1 px-2 rounded-full ml-2"><EditFilled /></div>
                    <div className="bg-[#e47e7b42] text-[#E47E7B] p-1 px-2 rounded-full"><DeleteFilled /></div>
                </div>
            ),
        },
        {
            key: '7',
            id: '#0016',
            name: 'هاجر علي',
            time: '9:30 AM',
            date: '08/06/2024',
            status: <span className='text-[#58D241]'>نشط</span>,
            action: (
                <div className='flex items-center'>
                    <Link to="/showUser" className="bg-[#d9ed4d4a] text-[#D9ED4D] p-1 px-2 rounded-full ml-2"><EyeFilled /></Link>
                    <div className="bg-[#58d24136] text-[#58D241] p-1 px-2 rounded-full ml-2"><EditFilled /></div>
                    <div className="bg-[#e47e7b42] text-[#E47E7B] p-1 px-2 rounded-full"><DeleteFilled /></div>
                </div>
            ),
        },
    ];

    const { attendance } = useSelector((state) => state.attendance);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAttendances());
    }, [dispatch]);


    return (
        <div className='Audience'>
            <div className='flex justify-between'>
                <h3 className='text-2xl'>اليوم</h3>
                <Select size="large"
                    defaultValue="انثي"
                    style={{
                        width: 120,
                    }}
                    onChange={handleChange}
                    options={[
                        {
                            value: 'انثي',
                            label: 'انثي',
                        },
                        {
                            value: 'ذكر',
                            label: 'ذكر',
                        },
                    ]}
                />
            </div>

            <Table
                columns={columns}
                dataSource={attendance}
                pagination={{ pageSize: 6 }}
                className='mt-6 text-center table_members'
            />

            <div>
                <h3 className='text-2xl'>أمس</h3>

                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{ pageSize: 6 }}
                    className='mt-6 text-center table_members'
                />
            </div>
        </div>
    )
}

export default Audience
