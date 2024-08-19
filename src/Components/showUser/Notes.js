import TextArea from 'antd/es/input/TextArea';
import React, { useEffect, useState } from 'react';
import {
  Input,
  Radio,
  Select,
  Checkbox,
  Col,
  Row,
  Form,
  InputNumber,
  DatePicker,
  Upload,
  Button,
} from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import '../../styles/AddNewUser.css';
import {
  UpdateTraineeNotesSchema,
  UpdateTraineeSchema,
} from '../../validations/traineeSchema';
import { updateTrainee, fetchTrainees, updateTraineeNotes } from '../../store/traineeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';

const Notes = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UpdateTraineeNotesSchema),
  });

  const { trainee } = useSelector((state) => state.trainee);
  const { error, inputErrors, loading } = useSelector((state) => state.trainee);

  useEffect(() => {
    if (trainee) {
      setValue('saturdayNote', trainee.saturdayNote);
      setValue('sundayNote', trainee.sundayNote);
      setValue('mondayNote', trainee.mondayNote);
      setValue('tuesdayNote', trainee.tuesdayNote);
      setValue('wednesdayNote', trainee.wednesdayNote);
      setValue('thursdayNote', trainee.thursdayNote);
      setValue('fridayNote', trainee.fridayNote);
      setValue('generalNote', trainee.generalNote);
    }
  }, [trainee, setValue]);

  const onSubmit = (data) => {
    console.log('🚀 ~ onSubmit ~ data:', data);
    dispatch(updateTraineeNotes({ id: trainee.id, data }));
  };

  if (!trainee) {
    return <div>Loading...</div>;
  }

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <div className="bg-[#F9F9F9] rounded-lg my-5 pb-8">
        <h3 className="text-xl font-semibold pt-3 pr-7">تمارين الاسبوع</h3>
        <hr className="bg-black border border-[#f5f5f5] mt-3 mb-5" />

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 px-7">
          <div>
            <label className="text-[#4E4E4E]">يوم السبت</label>
            <Form.Item
              validateStatus={errors.saturdayNote ? 'error' : ''}
              help={errors.saturdayNote?.message}
            >
              <Controller
                name="saturdayNote"
                control={control}
                render={({ field }) => <Input {...field} className="mt-2" />}
              />
            </Form.Item>
          </div>
          <div>
            <label className="text-[#4E4E4E]">يوم الاحد</label>
            <Form.Item
              validateStatus={errors.sundayNote ? 'error' : ''}
              help={errors.sundayNote?.message}
            >
              <Controller
                name="sundayNote"
                control={control}
                render={({ field }) => <Input {...field} className="mt-2" />}
              />
            </Form.Item>
          </div>
          <div>
            <label className="text-[#4E4E4E]">يوم الاثنين</label>
            <Form.Item
              validateStatus={errors.mondayNote ? 'error' : ''}
              help={errors.mondayNote?.message}
            >
              <Controller
                name="mondayNote"
                control={control}
                render={({ field }) => <Input {...field} className="mt-2" />}
              />
            </Form.Item>
          </div>
          <div>
            <label className="text-[#4E4E4E]">يوم الثلاثاء</label>
            <Form.Item
              validateStatus={errors.tuesdayNote ? 'error' : ''}
              help={errors.tuesdayNote?.message}
            >
              <Controller
                name="tuesdayNote"
                control={control}
                render={({ field }) => <Input {...field} className="mt-2" />}
              />
            </Form.Item>
          </div>
          <div>
            <label className="text-[#4E4E4E]">يوم الاربعاء</label>
            <Form.Item
              validateStatus={errors.wednesdayNote ? 'error' : ''}
              help={errors.wednesdayNote?.message}
            >
              <Controller
                name="wednesdayNote"
                control={control}
                render={({ field }) => <Input {...field} className="mt-2" />}
              />
            </Form.Item>
          </div>
          <div>
            <label className="text-[#4E4E4E]">يوم الخميس</label>
            <Form.Item
              validateStatus={errors.thursdayNote ? 'error' : ''}
              help={errors.thursdayNote?.message}
            >
              <Controller
                name="thursdayNote"
                control={control}
                render={({ field }) => <Input {...field} className="mt-2" />}
              />
            </Form.Item>
          </div>
          <div>
            <label className="text-[#4E4E4E]">يوم الجمعه</label>
            <Form.Item
              validateStatus={errors.fridayNote ? 'error' : ''}
              help={errors.fridayNote?.message}
            >
              <Controller
                name="fridayNote"
                control={control}
                render={({ field }) => <Input {...field} className="mt-2" />}
              />
            </Form.Item>
          </div>
        </div>
        <div className="px-7 mt-4">
          <label className="text-[#4E4E4E]">ملاحظات عامه</label>
          <Form.Item
            validateStatus={errors.generalNote ? 'error' : ''}
            help={errors.generalNote?.message}
          >
            <Controller
              name="generalNote"
              control={control}
              render={({ field }) => (
                <TextArea rows={4} className="mt-2" {...field} />
              )}
            />
          </Form.Item>
        </div>
      </div>
      {/* <button className='mx-auto text-lg flex justify-center bg-[#d9ed4d] text-center rounded-lg w-1/4 py-2 mb-4'>حفظ</button> */}
      <Button
        type="primary"
        htmlType="submit"
        loading={loading}
        className="mx-auto text-lg flex justify-center bg-[#d9ed4d] text-center rounded-lg w-1/4 py-2 mb-4"
      >
        حفظ
      </Button>
      {error && <div>{error}</div>}
    </Form>
  );
};

export default Notes;
