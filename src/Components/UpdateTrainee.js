import React, { useEffect, useState } from 'react';
import { Input, Radio, Select, Checkbox, Col, Row, Form, InputNumber, DatePicker, Upload, Button, } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import '../styles/AddNewUser.css';
import { SubscriptionStatus, SubscriptionStatusMap, SubscriptionType, } from '../types';
import { CreateTraineeSchema } from '../validations/traineeSchema';
import { createNewTrainee, fetchTrainees } from '../store/traineeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';

const AddNewUser = () => {
    const { control, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(CreateTraineeSchema),
    });

    const { trainees } = useSelector((state) => state.trainee);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchTrainees());
    }, [dispatch]);

    const trainee = trainees.find(p => p.id === parseInt(id));

    useEffect(() => {
        if (trainee) {
            // Set form field values
            setValue('parcode', trainee.parcode);
            setValue('fullName', trainee.fullName);
            setValue('phoneNumber', trainee.phoneNumber);
            setValue('gender', trainee.gender);
            // setValue('dob', trainee.dob);
            setValue('subscriptionType', trainee.subscriptionType);
            setValue('idFace', trainee.idFace);
            setValue('idBack', trainee.idBack);
            // Set other fields as needed...
        }
    }, [trainee, setValue]);

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        // Handle form submission logic here
    };

    if (!trainee) {
        return <div>Loading...</div>;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-lg AddNewUser">
                {/* {trainee.subscriptionType} */}

                <div className="bg-[#F9F9F9] rounded-lg py-4">
                    <h3 className="text-xl border-b border-b-[#e1e1e1] pb-3">
                        <span className="pr-8">نوع الاشتراك </span>
                    </h3>
                    <div className="pr-8 pt-4">
                        <Form.Item
                            validateStatus={errors.subscriptionType ? 'error' : ''}
                            help={errors.subscriptionType?.message}
                        >
                            <Controller
                                name="subscriptionType"
                                control={control}
                                render={({ field }) => (
                                    <Radio.Group {...field} onChange={field.onChange}>
                                        <Radio value={SubscriptionType.NOT_PRIVATE}>
                                            اشتراك عادي
                                        </Radio>
                                        <Radio value={SubscriptionType.PRIVATE}>
                                            اشتراك خاص
                                        </Radio>
                                    </Radio.Group>
                                )}
                            />
                        </Form.Item>
                    </div>
                </div>
{/* 
                <div className="bg-[#F9F9F9] rounded-lg py-4 mt-6">
                    <h3 className="text-xl border-b border-b-[#e1e1e1] pb-3">
                        <span className="pr-8">البيانات الشخصية</span>
                    </h3>
                    <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-6 px-8 pt-4">
                        <div>
                            <label className="text-[#4E4E4E]"> رقم ID</label>
                            <Form.Item validateStatus={errors.parcode ? 'error' : ''} help={errors.parcode?.message}>
                                <Controller
                                    name="parcode"
                                    control={control}
                                    render={({ field }) => <Input {...field} className="mt-2" />}
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <label className="text-[#4E4E4E]"> اسم المشترك</label>
                            <Form.Item validateStatus={errors.fullName ? 'error' : ''} help={errors.fullName?.message}>
                                <Controller
                                    name="fullName"
                                    control={control}
                                    render={({ field }) => <Input {...field} className="mt-2" />}
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <label className="text-[#4E4E4E]"> رقم الواتس</label>
                            <Form.Item validateStatus={errors.phoneNumber ? 'error' : ''} help={errors.phoneNumber?.message}>
                                <Controller
                                    name="phoneNumber"
                                    control={control}
                                    render={({ field }) => (
                                        <Input {...field} className="mt-2" suffix={<span className="text-[#D9ED4D]">20+</span>} />
                                    )}
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <label className="text-[#4E4E4E]"> النوع</label>
                            <Form.Item validateStatus={errors.gender ? 'error' : ''} help={errors.gender?.message}>
                                <Controller
                                    name="gender"
                                    control={control}
                                    render={({ field }) => (
                                        <Select {...field} className="mt-2" placeholder="اختر النوع">
                                            <Select.Option value="MALE">ذكر</Select.Option>
                                            <Select.Option value="FEMALE">انثى</Select.Option>
                                        </Select>
                                    )}
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <label className="text-[#4E4E4E]">تاريخ الميلاد</label>
                            <Form.Item validateStatus={errors.dob ? 'error' : ''} help={errors.dob?.message}>
                                <Controller
                                    name="dob"
                                    control={control}
                                    render={({ field }) => (
                                        <DatePicker {...field} className="mt-2" />
                                    )}
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <label className="text-[#4E4E4E]">وجه البطاقة</label>
                            <Form.Item validateStatus={errors.idFace ? 'error' : ''} help={errors.idFace?.message}>
                                <Controller
                                    name="idFace"
                                    control={control}
                                    render={({ field }) => (
                                        <Upload {...field} showUploadList={false} beforeUpload={() => false}>
                                            <Button icon={<UploadOutlined />} className="mt-2">
                                                تحميل
                                            </Button>
                                        </Upload>
                                    )}
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <label className="text-[#4E4E4E]">ظهر البطاقة</label>
                            <Form.Item validateStatus={errors.idBack ? 'error' : ''} help={errors.idBack?.message}>
                                <Controller
                                    name="idBack"
                                    control={control}
                                    render={({ field }) => (
                                        <Upload {...field} showUploadList={false} beforeUpload={() => false}>
                                            <Button icon={<UploadOutlined />} className="mt-2">
                                                تحميل
                                            </Button>
                                        </Upload>
                                    )}
                                />
                            </Form.Item>
                        </div>
                    </div>
                </div> */}

                {/* <div className="bg-[#F9F9F9] rounded-lg py-4 mt-6">
                    <h3 className="text-xl border-b border-b-[#e1e1e1] pb-3">
                        <span className="pr-8">بيانات الاشتراك</span>
                    </h3>
                    <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-6 px-8 pt-4">
                        <div>
                            <label className="text-[#4E4E4E]"> تاريخ الاشتراك </label>
                            <Form.Item
                                validateStatus={
                                    errors.subscriptionDate ||
                                        (inputErrors.subscriptionDate &&
                                            inputErrors.subscriptionDate.length > 0)
                                        ? 'error'
                                        : ''
                                }
                                help={
                                    // Combine errors if both exist
                                    (errors.subscriptionDate || inputErrors.subscriptionDate) && (
                                        <div>
                                            {errors.subscriptionDate?.message && (
                                                <div>{errors.subscriptionDate.message}</div>
                                            )}
                                            {inputErrors.subscriptionDate && (
                                                <div>
                                                    {inputErrors.subscriptionDate.map((error, index) => (
                                                        <div key={index}>{error}</div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )
                                }
                            >
                                <Controller
                                    name="subscriptionDate"
                                    control={control}
                                    render={({ field }) => (
                                        <DatePicker {...field} className="mt-2" />
                                    )}
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <label className="text-[#4E4E4E]"> اسم التدريب</label>
                            <Form.Item
                                validateStatus={
                                    errors.trainingName ||
                                        (inputErrors.trainingName &&
                                            inputErrors.trainingName.length > 0)
                                        ? 'error'
                                        : ''
                                }
                                help={
                                    // Combine errors if both exist
                                    (errors.trainingName || inputErrors.trainingName) && (
                                        <div>
                                            {errors.trainingName?.message && (
                                                <div>{errors.trainingName.message}</div>
                                            )}
                                            {inputErrors.trainingName && (
                                                <div>
                                                    {inputErrors.trainingName.map((error, index) => (
                                                        <div key={index}>{error}</div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )
                                }
                            >
                                <Controller
                                    name="trainingName"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            className="mt-2"
                                            onChange={field.onChange}
                                            placeholder="اختر"
                                        >
                                            <Select.Option value="تدريب 1">تدريب 1</Select.Option>
                                            <Select.Option value="تدريب 2">تدريب 2</Select.Option>
                                        </Select>
                                    )}
                                />
                            </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4">
                            <div>
                                <label className="text-[#4E4E4E]">المدفوع</label>
                                <Form.Item
                                    validateStatus={
                                        errors.paid ||
                                            (inputErrors.paid && inputErrors.paid.length > 0)
                                            ? 'error'
                                            : ''
                                    }
                                    help={
                                        // Combine errors if both exist
                                        (errors.paid || inputErrors.paid) && (
                                            <div>
                                                {errors.paid?.message && (
                                                    <div>{errors.paid.message}</div>
                                                )}
                                                {inputErrors.paid && (
                                                    <div>
                                                        {inputErrors.paid.map((error, index) => (
                                                            <div key={index}>{error}</div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    }
                                >
                                    <Controller
                                        name="paid"
                                        control={control}
                                        render={({ field }) => (
                                            <InputNumber {...field} className="mt-2" />
                                        )}
                                    />
                                </Form.Item>
                            </div>
                            <div>
                                <label className="text-[#4E4E4E]">المتبقي</label>
                                <Form.Item
                                    validateStatus={
                                        errors.reminder ||
                                            (inputErrors.reminder && inputErrors.reminder.length > 0)
                                            ? 'error'
                                            : ''
                                    }
                                    help={
                                        // Combine errors if both exist
                                        (errors.reminder || inputErrors.reminder) && (
                                            <div>
                                                {errors.reminder?.message && (
                                                    <div>{errors.reminder.message}</div>
                                                )}
                                                {inputErrors.reminder && (
                                                    <div>
                                                        {inputErrors.reminder.map((error, index) => (
                                                            <div key={index}>{error}</div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    }
                                >
                                    <Controller
                                        name="reminder"
                                        control={control}
                                        render={({ field }) => (
                                            <InputNumber {...field} className="mt-2" />
                                        )}
                                    />
                                </Form.Item>
                            </div>
                        </div>
                        <div>
                            <label className="text-[#4E4E4E]">حاله المشترك</label>
                            <Form.Item
                                validateStatus={
                                    errors.subscriptionStatus ||
                                        (inputErrors.subscriptionStatus &&
                                            inputErrors.subscriptionStatus.length > 0)
                                        ? 'error'
                                        : ''
                                }
                                help={
                                    // Combine errors if both exist
                                    (errors.subscriptionStatus ||
                                        inputErrors.subscriptionStatus) && (
                                        <div>
                                            {errors.subscriptionStatus?.message && (
                                                <div>{errors.subscriptionStatus.message}</div>
                                            )}
                                            {inputErrors.subscriptionStatus && (
                                                <div>
                                                    {inputErrors.subscriptionStatus.map(
                                                        (error, index) => (
                                                            <div key={index}>{error}</div>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )
                                }
                            >
                                <Controller
                                    name="subscriptionStatus"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            className="mt-2"
                                            onChange={field.onChange}
                                            placeholder="نشط"
                                        >
                                            <Select.Option value={SubscriptionStatus.ACTIVE}>
                                                {SubscriptionStatusMap.ACTIVE}
                                            </Select.Option>
                                            <Select.Option value={SubscriptionStatus.INACTIVE}>
                                                {SubscriptionStatusMap.INACTIVE}
                                            </Select.Option>
                                            <Select.Option value={SubscriptionStatus.PENDING}>
                                                {SubscriptionStatusMap.PENDING}
                                            </Select.Option>
                                        </Select>
                                    )}
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <label className="text-[#4E4E4E]"> مده الاشتراك</label>
                            <Form.Item
                                validateStatus={
                                    errors.subscriptionMonths ||
                                        (inputErrors.subscriptionMonths &&
                                            inputErrors.subscriptionMonths.length > 0)
                                        ? 'error'
                                        : ''
                                }
                                help={
                                    // Combine errors if both exist
                                    (errors.subscriptionMonths ||
                                        inputErrors.subscriptionMonths) && (
                                        <div>
                                            {errors.subscriptionMonths?.message && (
                                                <div>{errors.subscriptionMonths.message}</div>
                                            )}
                                            {inputErrors.subscriptionMonths && (
                                                <div>
                                                    {inputErrors.subscriptionMonths.map(
                                                        (error, index) => (
                                                            <div key={index}>{error}</div>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )
                                }
                            >
                                <Controller
                                    name="subscriptionMonths"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            className="mt-2"
                                            onChange={field.onChange}
                                            placeholder="1 شهر"
                                        >
                                            <Select.Option value={1}>1 شهر</Select.Option>
                                            <Select.Option value={2}>2 شهر</Select.Option>
                                        </Select>
                                    )}
                                />
                            </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4">
                            <div>
                                <label className="text-[#4E4E4E]">عدد الحصص / شهر</label>
                                <Form.Item
                                    validateStatus={
                                        errors.subscriptionClasses ||
                                            (inputErrors.subscriptionClasses &&
                                                inputErrors.subscriptionClasses.length > 0)
                                            ? 'error'
                                            : ''
                                    }
                                    help={
                                        // Combine errors if both exist
                                        (errors.subscriptionClasses ||
                                            inputErrors.subscriptionClasses) && (
                                            <div>
                                                {errors.subscriptionClasses?.message && (
                                                    <div>{errors.subscriptionClasses.message}</div>
                                                )}
                                                {inputErrors.subscriptionClasses && (
                                                    <div>
                                                        {inputErrors.subscriptionClasses.map(
                                                            (error, index) => (
                                                                <div key={index}>{error}</div>
                                                            )
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    }
                                >
                                    <Controller
                                        name="subscriptionClasses"
                                        control={control}
                                        render={({ field }) => (
                                            <InputNumber {...field} className="mt-2" />
                                        )}
                                    />
                                </Form.Item>
                            </div>
                            <div>
                                <label className="text-[#4E4E4E]">تاريخ البدء</label>
                                <Form.Item
                                    validateStatus={
                                        errors.subscriptionStartDate ||
                                            (inputErrors.subscriptionStartDate &&
                                                inputErrors.subscriptionStartDate.length > 0)
                                            ? 'error'
                                            : ''
                                    }
                                    help={
                                        // Combine errors if both exist
                                        (errors.subscriptionStartDate ||
                                            inputErrors.subscriptionStartDate) && (
                                            <div>
                                                {errors.subscriptionStartDate?.message && (
                                                    <div>{errors.subscriptionStartDate.message}</div>
                                                )}
                                                {inputErrors.subscriptionStartDate && (
                                                    <div>
                                                        {inputErrors.subscriptionStartDate.map(
                                                            (error, index) => (
                                                                <div key={index}>{error}</div>
                                                            )
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    }
                                >
                                    <Controller
                                        name="subscriptionStartDate"
                                        control={control}
                                        render={({ field }) => (
                                            <DatePicker {...field} className="mt-2" />
                                        )}
                                    />
                                </Form.Item>
                            </div>
                        </div>
                        <div>
                            <label className="text-[#4E4E4E]">اسم العرض</label>
                            <Form.Item>
                                <Controller
                                    name="offerName"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            className="mt-2"
                                            onChange={field.onChange}
                                            placeholder="لا يوجد عرض"
                                        >
                                            <Select.Option value="noOffer">لا يوجد عرض</Select.Option>
                                            <Select.Option value="offer1">عرض 1</Select.Option>
                                        </Select>
                                    )}
                                />
                            </Form.Item>
                        </div>
                    </div>
                </div>       */}


                {/* <div className="bg-[#F9F9F9] rounded-lg py-4 mt-6 mb-6">
                    <h3 className="text-xl border-b border-b-[#e1e1e1] pb-3">
                        <span className="pr-8">معلومات اخري</span>
                    </h3>
                    <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-6 px-8 pt-4">
                        <div>
                            <label className="text-[#4E4E4E]"> الهدف من التدريب</label>
                            <Form.Item>
                                <Controller
                                    name="goal"
                                    control={control}
                                    render={({ field }) => <Input {...field} className="mt-2" />}
                                />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="pr-8 pt-4">
                        <label className="text-[#4E4E4E] block">هل لديك مشاكل صحية؟</label>
                        <Form.Item>
                            <Controller
                                name="medicalProblem"
                                control={control}
                                render={({ field }) => (
                                    <Checkbox.Group
                                        value={selectedValues}
                                        onChange={handleCheckboxChange}
                                        style={{ width: '100%' }}
                                    >
                                        <Row>
                                            <Col span={2}>
                                                <Checkbox value="سكر">سكر</Checkbox>
                                            </Col>
                                            <Col span={2}>
                                                <Checkbox value="ضغط">ضغط</Checkbox>
                                            </Col>
                                            <Col span={2}>
                                                <Checkbox value="فيروس">فيروس</Checkbox>
                                            </Col>
                                            <Col span={3}>
                                                <Checkbox value="خشونه مفاصل">خشونه مفاصل</Checkbox>
                                            </Col>
                                        </Row>
                                    </Checkbox.Group>
                                )}
                            />
                        </Form.Item>
                    </div>
                    <div className="pr-8 pt-4">
                        <label className="text-[#4E4E4E] block">
                            هل اجريت عمليات جراحية خلال سنه؟
                        </label>
                        <Form.Item>
                            <Controller
                                name="surgeries"
                                control={control}
                                render={({ field }) => (
                                    <Radio.Group {...field} onChange={field.onChange}>
                                        <Radio value={false}>لا</Radio>
                                        <Radio value={true}>نعم</Radio>
                                    </Radio.Group>
                                )}
                            />
                        </Form.Item>
                    </div>
                </div> */}

                {/* {error && (
                    <p className="text-center text-red-500 text-sm mb-3">{error}</p>
                )}
                <button
                    type="submit"
                    className="mx-auto text-lg flex justify-center bg-[#d9ed4d] text-center rounded-lg w-1/4 py-2 mb-4"
                >
                    {loading ? 'جاري التحميل...' : 'حفظ'}
                </button> */}

                <Button type="primary" htmlType="submit">Submit</Button>
            </div>
        </form>
    );
};

export default AddNewUser;