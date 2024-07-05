import React, { useState } from 'react';
import { Button, Input, Modal, Select } from 'antd';
import { GeneralBtn } from './shared/Buttons';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

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
    <>
      <Button className="subscription-renewal-btn rounded" onClick={showModal}>
        تجديد الاشتراك
      </Button>
      <Modal
        title="تجديد الاشتراك"
        wrapClassName="subscription-renewal-modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form>
          <div className="rounded-lg py-4 ">
            <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-6 px-8 pt-4">
              <div>
                <label className="text-[#4E4E4E]">تاريخ الاشتراك</label>
                <Input className="bg-[#F9F9F9] mt-2" />
              </div>
              <div>
                <label className="text-[#4E4E4E]">اسم التدريب</label>
                <Select
                  className="bg-[#F9F9F9] mt-2"
                  placeholder="اختر"
                  defaultValue="اختر"
                  style={{ width: '100%' }}
                  onChange={handleChange}
                  options={[
                    { value: 'انثي', label: 'انثي' },
                    { value: 'ذكر', label: 'ذكر' },
                  ]}
                />
              </div>
              <div className="col-span-1">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#4E4E4E]">المدفوع</label>
                    <Input className="bg-[#F9F9F9] mt-2" />
                  </div>
                  <div>
                    <label className="text-[#4E4E4E]">المتبقي</label>
                    <Input className="bg-[#F9F9F9] mt-2" />
                  </div>
                </div>
              </div>
              <div>
                <label className="text-[#4E4E4E]">حاله المشترك</label>
                <Select
                  className="bg-[#F9F9F9] mt-2"
                  placeholder="نشط"
                  defaultValue="نشط"
                  style={{ width: '100%' }}
                  onChange={handleChange}
                  options={[
                    { value: 'نشط', label: 'نشط' },
                    { value: 'غير نشط', label: 'غير نشط' },
                  ]}
                />
              </div>
              <div>
                <label className="text-[#4E4E4E]">مده الاشتراك</label>
                <Select
                  className="bg-[#F9F9F9] mt-2"
                  placeholder="1 شهر"
                  defaultValue="1 شهر"
                  style={{ width: '100%' }}
                  onChange={handleChange}
                  options={[
                    { value: '1 شهر', label: '1 شهر' },
                    { value: '2 شهر', label: '2 شهر' },
                  ]}
                />
              </div>
              <div className="col-span-1">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#4E4E4E]">تاريخ البدء</label>
                    <Input className="bg-[#F9F9F9] mt-2" />
                  </div>
                  <div>
                    <label className="text-[#4E4E4E]">تاريخ الانتهاء</label>
                    <Input className="bg-[#F9F9F9] mt-2" />
                  </div>
                </div>
              </div>
              <div>
                <label className="text-[#4E4E4E]">اسم العرض</label>
                <Select
                  className="bg-[#F9F9F9] mt-2"
                  placeholder="لا يوجد عرض"
                  defaultValue="لا يوجد عرض"
                  style={{ width: '100%' }}
                  onChange={handleChange}
                  options={[
                    { value: 'لا يوجد عرض', label: 'لا يوجد عرض' },
                    { value: 'لا يوجد عرض', label: 'لا يوجد عرض' },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="subscription-renewal-save-btn">حفظ</button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default App;
