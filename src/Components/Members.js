import React from 'react';
import { Space, Table, Tag, Select, Input } from 'antd';
import { PlusOutlined, SearchOutlined, EyeFilled, EditFilled, DeleteFilled } from '@ant-design/icons';
// import { isAction } from 'redux';
import '../styles/members.css';
import { Link } from 'react-router-dom';

const { Search } = Input;

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
        title: 'نوع الاشتراك',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'اسم المشترك',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'رقم الواتس',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: 'اسم الاشتراك',
        dataIndex: 'supscriptName',
        key: 'supscriptName',
    },
    {
        title: 'تاريخ الانتهاء',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'المدفوع',
        dataIndex: 'buy',
        key: 'buy',
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
        type: "عادي",
        name: 'هاجر علي',
        number: "01067799939",
        supscriptName: 'فيتنس',
        date: '08/06/2024',
        buy: '350',
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
        type: "عادي",
        name: 'نوران علي',
        number: "01045836678",
        supscriptName: 'فيتنس',
        date: '08/06/2024',
        buy: '350',
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
        type: "عادي",
        name: 'هاجر علي',
        number: "01067799939",
        supscriptName: 'فيتنس',
        date: '08/06/2024',
        buy: '350',
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
        type: "عادي",
        name: 'نوران علي',
        number: "01045836678",
        supscriptName: 'فيتنس',
        date: '08/06/2024',
        buy: '350',
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
        type: "عادي",
        name: 'هاجر علي',
        number: "01067799939",
        supscriptName: 'فيتنس',
        date: '08/06/2024',
        buy: '350',
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
        type: "عادي",
        name: 'هاجر علي',
        number: "01067799939",
        supscriptName: 'فيتنس',
        date: '08/06/2024',
        buy: '350',
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
        type: "عادي",
        name: 'هاجر علي',
        number: "01067799939",
        supscriptName: 'فيتنس',
        date: '08/06/2024',
        buy: '350',
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

const Members = () => {
    return (
        <>
            <div className='flex justify-between members'>
                <Input size="large" placeholder="البحث عن عضو" prefix={<SearchOutlined />}
                    allowClear
                    style={{
                        width: 480,
                    }} />
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

                <Select size="large"
                    defaultValue="الكل"
                    style={{
                        width: 120,
                    }}
                    onChange={handleChange}
                    options={[
                        {
                            value: 'نشط',
                            label: 'نشط',
                        },
                        {
                            value: 'غير نشط',
                            label: 'غير نشط',
                        },
                        {
                            value: 'معلق',
                            label: 'معلق',
                        },
                    ]}
                />

                <a href='/addNewUser'>
                    <button className='bg-[#D9ED4D] rounded-lg py-2 px-10 font-semibold flex items-center fs-lg'>
                        <PlusOutlined className="ml-3 text-sm" /> اضافه عضو جديد
                    </button>
                </a>
            </div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 6 }}
                className='mt-6 text-center table_members'
            />
        </>
    )
};
export default Members;