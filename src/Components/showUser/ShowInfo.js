import React from 'react';
import ShowTitleWithData from '../shared/ShowTitleWithData';
import SubscriptionRenewal from '../SubscriptionRenewal';
import ShowFile from '../shared/ShowFile';

// dummy data
const personalInfo = [
  { name: 'رقم ID', value: '0025' },
  { name: 'اسم المشترك', value: 'هاجر علي' },
  { name: 'رقم الواتس', value: '01058944438' },
  { name: 'العمر', value: '30' },
  { name: 'النوع', value: 'انثى' },
  { name: 'تاريخ الميلاد', value: '21/3/1998' },
];

const subscriptionInfo = [
  { name: 'نوع الاشتراك', value: 'عادي' },
  { name: 'تاريخ الاشتراك', value: '08/05/2024' },
  { name: 'اسم التدريب', value: 'فيتنس' },
  { name: 'مدة الاشتراك', value: '1 شهر' },
  { name: 'تاريخ البدء', value: '08/05/2024' },
  {
    name: 'تاريخ الانتهاء',
    value: '08/06/2024',
    valueClass: 'text-red-300',
    name2: <SubscriptionRenewal />,
  },
  { name: 'حالة المشترك', value: 'نشط', valueClass: 'text-green-400' },
  { name: 'المدفوع', value: '350' },
  { name: 'المتبقي', value: '0' },
  { name: 'اسم العرض', value: 'لا يوجد عرض' },
];

const otherInfo = [
  { name: 'الهدف من التدريب', value: 'نقص الوزن' },
  { name: 'هل اجريت عمليات جراحية خلال سنة', value: 'لا' },
  { name: 'هل يوجد مشاكل صحية', value: 'لا يوجد' },
  { name: 'النظام الغذائي', value: <ShowFile src="/cv.pdf" /> },
];

const ShowInfo = () => {
  return (
    <>
      <ShowTitleWithData title="البيانات الشخصية" data={personalInfo} />
      <ShowTitleWithData title="بيانات الإشتراك" data={subscriptionInfo} />
      <ShowTitleWithData title="معلومات اخرى" data={otherInfo} />
    </>
  );
};

export default ShowInfo;
