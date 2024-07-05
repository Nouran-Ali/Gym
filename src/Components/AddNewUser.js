import React, { useState } from 'react';
import { Input, Radio, Select } from 'antd';
import { Checkbox, Col, Row } from 'antd';
import '../styles/AddNewUser.css';

const AddNewUser = () => {

    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onChangeCheck = (checkedValues) => {
        console.log('checked = ', checkedValues);
    };

    return (
        <div className='text-lg AddNewUser'>
            <div className='bg-[#F9F9F9] rounded-lg py-4'>
                <h3 className='text-xl border-b border-b-[#e1e1e1] pb-3'><span className='pr-8'>نوع الاشتراك </span></h3>
                <div className='pr-8 pt-4'>
                    <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}>اشتراك عادي</Radio>
                        <Radio value={2}>اشتراك خاص</Radio>
                    </Radio.Group>
                </div>
            </div>

            <div className='bg-[#F9F9F9] rounded-lg py-4 mt-6'>
                <h3 className='text-xl border-b border-b-[#e1e1e1] pb-3'><span className='pr-8'>البيانات الشخصية</span></h3>
                <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-6 px-8 pt-4'>
                    <div>
                        <label className='text-[#4E4E4E]'> رقم ID</label>
                        <Input className='mt-2' />
                    </div>
                    <div>
                        <label className='text-[#4E4E4E]'> اسم المشترك</label>
                        <Input className='mt-2' />
                    </div>
                    <div>
                        <label className='text-[#4E4E4E]'> رقم الواتس</label>
                        <Input className='mt-2' suffix={<div><span className="text-[#E4E4E4]"> | </span><span className="text-[#D9ED4D]">20+</span></div>} />
                    </div>
                    <div>
                        <label className='text-[#4E4E4E]'> العمر </label>
                        <Input className='mt-2' />
                    </div>
                    <div>
                        <label className='text-[#4E4E4E]'> النوع</label>
                        <Select className='mt-2'
                            placeholder="ذكر"
                            defaultValue="ذكر"
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
                    <div>
                        <label className='text-[#4E4E4E]'> تاريخ الميلاد (اختياري)</label>
                        <Input className='mt-2' />
                    </div>
                </div>
            </div>

            <div className='bg-[#F9F9F9] rounded-lg py-4 mt-6'>
                <h3 className='text-xl border-b border-b-[#e1e1e1] pb-3'><span className='pr-8'>بيانات الاشتراك</span></h3>
                <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-6 px-8 pt-4'>
                    <div>
                        <label className='text-[#4E4E4E]'> تاريخ الاشتراك </label>
                        <Input className='mt-2' />
                    </div>
                    <div>
                        <label className='text-[#4E4E4E]'> اسم التدريب</label>
                        <Select className='mt-2'
                            placeholder="اختر"
                            defaultValue="اختر"
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
                    <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-4'>
                        <div>
                            <label className='text-[#4E4E4E]'>المدفوع</label>
                            <Input className='mt-2' />
                        </div>
                        <div>
                            <label className='text-[#4E4E4E]'>المتبقي</label>
                            <Input className='mt-2' />
                        </div>
                    </div>
                    <div>
                        <label className='text-[#4E4E4E]'>حاله المشترك</label>
                        <Select className='mt-2'
                            placeholder="نشط"
                            defaultValue="نشط"
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
                            ]}
                        />
                    </div>
                    <div>
                        <label className='text-[#4E4E4E]'> مده الاشتراك</label>
                        <Select className='mt-2'
                            placeholder="1 شهر"
                            defaultValue="1 شهر"
                            style={{
                                width: 120,
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: "1 شهر",
                                    label: "1 شهر",
                                },
                                {
                                    value: "2 شهر",
                                    label: "2 شهر",
                                },
                            ]}
                        />
                    </div>
                    <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-4'>
                        <div>
                            <label className='text-[#4E4E4E]'>تاريخ البدء</label>
                            <Input className='mt-2' />
                        </div>
                        <div>
                            <label className='text-[#4E4E4E]'>تاريخ الانتهاء</label>
                            <Input className='mt-2' />
                        </div>
                    </div>
                    <div>
                        <label className='text-[#4E4E4E]'>اسم العرض</label>
                        <Select className='mt-2'
                            placeholder="لا يوجد عرض"
                            defaultValue="لا يوجد عرض"
                            style={{
                                width: 120,
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: "لا يوجد عرض",
                                    label: "لا يوجد عرض",
                                },
                                {
                                    value: "لا يوجد عرض",
                                    label: "لا يوجد عرض",
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>

            <div className='bg-[#F9F9F9] rounded-lg py-4 mt-6 mb-6'>
                <h3 className='text-xl border-b border-b-[#e1e1e1] pb-3'><span className='pr-8'>معلومات اخري</span></h3>
                <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-6 px-8 pt-4'>
                    <div>
                        <label className='text-[#4E4E4E]'> الهدف من التدريب</label>
                        <Input className='mt-2' />
                    </div>
                </div>
                <div className='pr-8 pt-4'>
                    <label className='text-[#4E4E4E] block'>هل لديك مشاكل صحية؟</label>
                    <Checkbox.Group
                        style={{
                            width: '100%',
                        }}
                        onChange={onChangeCheck}
                    >
                        <Row>
                            <Col span={2}>
                                <Checkbox value="A">لا يوجد</Checkbox>
                            </Col>
                            <Col span={2}>
                                <Checkbox value="B">سكر</Checkbox>
                            </Col>
                            <Col span={2}>
                                <Checkbox value="C">ضغط</Checkbox>
                            </Col>
                            <Col span={2}>
                                <Checkbox value="D">فيروس</Checkbox>
                            </Col>
                            <Col span={3}>
                                <Checkbox value="E">خشونه مفاصل</Checkbox>
                            </Col>
                            <Col span={2}>
                                <Checkbox value="k">اخري</Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>

                </div>
                <div className='pr-8 pt-4'>
                    <label className='text-[#4E4E4E] block'>هل اجريت عمليات جراحية خلال سنه؟</label>
                    <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}>لا</Radio>
                        <Radio value={2}>نعم</Radio>
                    </Radio.Group>
                </div>
            </div>

        </div>
    )
}

export default AddNewUser
