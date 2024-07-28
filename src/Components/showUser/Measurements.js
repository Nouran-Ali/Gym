import React, { useState } from 'react';
import { Collapse } from 'antd';
import { transformMeasurementsToCollapseItems } from '../../utils/transformations';
import { PlusOutlined } from '@ant-design/icons';
import { Input, Modal } from 'antd';
import '../../styles/Measurements.css';

const MEASUREMENTS = [
  {
    date: '13/05/2024',
    length: '160',
    weight: '55',
    shoulder: '40',
    chest: '40',
    belowChest: '55',
    middle: '40',
    stomach: '90',
    buttocks: '110',
    thigh: '60',
    arm: '50',
  },
  {
    date: '13/05/2024',
    length: '160',
    weight: '55',
    shoulder: '40',
    chest: '40',
    belowChest: '55',
    middle: '40',
    stomach: '90',
    buttocks: '110',
    thigh: '60',
    arm: '50',
  },
  {
    date: '13/05/2024',
    length: '160',
    weight: '55',
    shoulder: '40',
    chest: '40',
    belowChest: '55',
    middle: '40',
    stomach: '90',
    buttocks: '110',
    thigh: '60',
    arm: '50',
  },
];

const Measurements = () => {
  const items = transformMeasurementsToCollapseItems(MEASUREMENTS);
  console.log("🚀 ~ Measurements ~ items:", items)

  const onChange = (key) => {
    console.log(key);
  };

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
    <div className='Measurements'>
      <div className='my-2 py-3'>
        <div className='flex items-center justify-between'>
          <h3 className="text-xl font-semibold">13/05/2024</h3>
          <button className='bg-[#D9ED4D1C] rounded-lg text-[#D9ED4D] border border-[#D9ED4D] px-3 py-1 ml-3' onClick={showModal}> <PlusOutlined /> </button>

          <Modal title="اضافه مقاسات جديده" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
            <hr className="bg-black border border-[#f5f5f5] mt-3 mb-5" />
            <form className='w-full mx-auto mb-10'>
              <div className='grid grid-cols-3 max-md:grid-cols-1 gap-4'>
                <div className='mb-4'>
                  <label className='text-[#4E4E4E]'>تاريخ اخذ المقاسات</label>
                  <Input className='bg-[#F9F9F9] border border-[#E4E4E4] mt-3' />
                </div>

                <div className='mb-4'>
                  <label className='text-[#4E4E4E]'>الطول</label>
                  <Input className='bg-[#F9F9F9] border border-[#E4E4E4] mt-3' />
                </div>

                <div className='mb-4'>
                  <label className='text-[#4E4E4E]'>الوزن </label>
                  <Input className='bg-[#F9F9F9] border border-[#E4E4E4] mt-3' />
                </div>

                <div className='mb-4'>
                  <label className='text-[#4E4E4E]'>الكتف </label>
                  <Input className='bg-[#F9F9F9] border border-[#E4E4E4] mt-3' />
                </div>

                <div className='mb-4'>
                  <label className='text-[#4E4E4E]'>الصدر </label>
                  <Input className='bg-[#F9F9F9] border border-[#E4E4E4] mt-3' />
                </div>

                <div className='mb-4'>
                  <label className='text-[#4E4E4E]'>اسفل الصدر </label>
                  <Input className='bg-[#F9F9F9] border border-[#E4E4E4] mt-3' />
                </div>

                <div className='mb-4'>
                  <label className='text-[#4E4E4E]'>الوسط </label>
                  <Input className='bg-[#F9F9F9] border border-[#E4E4E4] mt-3' />
                </div>

                <div className='mb-4'>
                  <label className='text-[#4E4E4E]'>البطن </label>
                  <Input className='bg-[#F9F9F9] border border-[#E4E4E4] mt-3' />
                </div>

                <div className='mb-4'>
                  <label className='text-[#4E4E4E]'>الارداف </label>
                  <Input className='bg-[#F9F9F9] border border-[#E4E4E4] mt-3' />
                </div>

                <div className='mb-4'>
                  <label className='text-[#4E4E4E]'>الفخذ </label>
                  <Input className='bg-[#F9F9F9] border border-[#E4E4E4] mt-3' />
                </div>

                <div className='mb-4'>
                  <label className='text-[#4E4E4E]'>الذراع </label>
                  <Input className='bg-[#F9F9F9] border border-[#E4E4E4] mt-3' />
                </div>
              </div>

              <div className='mt-8 text-center'>
                <button className='bg-[#D9ED4D] rounded-lg py-2 w-1/3 font-semibold'>حفظ</button>
              </div>
            </form>
          </Modal>
        </div>

        <hr className="bg-black border border-[#f5f5f5] mt-3 mb-5" />

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
          <div>
            <div className="flex align-center">
              <p
                className={`text-[#4E4E4E] text-lg ml-3 `}
              >
                الطول
              </p>
            </div>

            <p
              className={`text-[#989898] mt-2 text-lg `}
            >
              160
            </p>
          </div>

          <div>
            <div className="flex align-center">
              <p
                className={`text-[#4E4E4E] text-lg ml-3 `}
              >
                الوزن
              </p>
            </div>

            <p
              className={`text-[#989898] mt-2 text-lg `}
            >
              160
            </p>
          </div>

          <div>
            <div className="flex align-center">
              <p
                className={`text-[#4E4E4E] text-lg ml-3 `}
              >
                الكتف
              </p>
            </div>

            <p
              className={`text-[#989898] mt-2 text-lg `}
            >
              160
            </p>
          </div>

          <div>
            <div className="flex align-center">
              <p
                className={`text-[#4E4E4E] text-lg ml-3 `}
              >
                الصدر
              </p>
            </div>

            <p
              className={`text-[#989898] mt-2 text-lg `}
            >
              160
            </p>
          </div>

          <div>
            <div className="flex align-center">
              <p
                className={`text-[#4E4E4E] text-lg ml-3 `}
              >
                اسفل الصدر
              </p>
            </div>

            <p
              className={`text-[#989898] mt-2 text-lg `}
            >
              160
            </p>
          </div>

          <div>
            <div className="flex align-center">
              <p
                className={`text-[#4E4E4E] text-lg ml-3 `}
              >
                الوسط
              </p>
            </div>

            <p
              className={`text-[#989898] mt-2 text-lg `}
            >
              160
            </p>
          </div>

          <div>
            <div className="flex align-center">
              <p
                className={`text-[#4E4E4E] text-lg ml-3 `}
              >
                البطن
              </p>
            </div>

            <p
              className={`text-[#989898] mt-2 text-lg `}
            >
              160
            </p>
          </div>

          <div>
            <div className="flex align-center">
              <p
                className={`text-[#4E4E4E] text-lg ml-3 `}
              >
                الارداف
              </p>
            </div>

            <p
              className={`text-[#989898] mt-2 text-lg `}
            >
              160
            </p>
          </div>

          <div>
            <div className="flex align-center">
              <p
                className={`text-[#4E4E4E] text-lg ml-3 `}
              >
                الفخذ
              </p>
            </div>

            <p
              className={`text-[#989898] mt-2 text-lg `}
            >
              160
            </p>
          </div>

          <div>
            <div className="flex align-center">
              <p
                className={`text-[#4E4E4E] text-lg ml-3 `}
              >
                الذراع
              </p>
            </div>

            <p
              className={`text-[#989898] mt-2 text-lg `}
            >
              160
            </p>
          </div>

        </div>
      </div>

      <Collapse
        headerBg="#ffffff"
        items={items}
        defaultActiveKey={['0']}
        onChange={onChange}
      />
    </div>

  );
};

export default Measurements;
