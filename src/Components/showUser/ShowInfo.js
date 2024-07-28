import React, { useEffect, useMemo } from 'react';
import ShowTitleWithData from '../shared/ShowTitleWithData';
import SubscriptionRenewal from '../SubscriptionRenewal';
import ShowFile from '../shared/ShowFile';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTrainees } from '../../store/traineeSlice';
import { calcAgeFromDate, getFormattedDate } from '../../utils/date';

const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

const ShowInfo = () => {
  const { trainees } = useSelector((state) => state.trainee);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchTrainees());
  }, [dispatch]);

  const traine = useMemo(
    () => trainees.find((p) => p.id === parseInt(id)),
    [trainees, id]
  );

  if (!traine) {
    return <p>Loading...</p>;
  }

  const personalInfo = [
    { name: 'رقم ID', value: traine.id },
    { name: 'اسم المشترك', value: traine.fullName },
    { name: 'رقم الواتس', value: traine.phoneNumber },
// <<<<<<< HEAD
//     { name: 'العمر', value: calculateAge(traine.dob) },
//     { name: 'النوع', value: traine.gender == 'FEMALE' ? 'أنثي' : 'ذكر' },
// =======
    { name: 'العمر', value: calcAgeFromDate(traine.dob) },
    { name: 'النوع', value: traine.gender === 'FEMALE' ? 'أنثي' : 'ذكر' },
    { name: 'تاريخ الميلاد', value: getFormattedDate(new Date(traine.dob)) },
  ];

  const subscriptionInfo = [
    {
      name: 'نوع الاشتراك',
      value: traine.subscriptionType === 'NOT_PRIVATE' ? 'عام' : 'خاص',
    },
    {
      name: 'تاريخ الاشتراك',
      value: getFormattedDate(new Date(traine.subscriptionDate)),
    },
    { name: 'اسم التدريب', value: traine.trainingName },
    { name: 'مدة الاشتراك', value: `${traine.subscriptionMonths} شهر` },
    {
      name: 'تاريخ البدء',
      value: getFormattedDate(new Date(traine.subscriptionStartDate)),
    },
    {
      name: 'تاريخ الانتهاء',
      value: getFormattedDate(new Date(traine.subscriptionEndDate)),
      valueClass: 'text-red-300',
      name2: <SubscriptionRenewal />,
    },
    {
      name: 'حالة المشترك',
      value: traine.subscriptionStatus === 'ACTIVE' ? 'نشط' : 'غير نشط',
      valueClass:
        traine.subscriptionStatus === 'ACTIVE'
          ? 'text-green-400'
          : 'text-red-400',
    },
    { name: 'المدفوع', value: traine.paid },
    { name: 'المتبقي', value: traine.reminder },
    { name: 'اسم العرض', value: traine.offerName || 'لا يوجد عرض' },
  ];

  const otherInfo = [
    { name: 'الهدف من التدريب', value: traine.goal },
    {
      name: 'هل اجريت عمليات جراحية خلال سنة',
      value: traine.surgeries === 'false' ? 'لا' : 'نعم',
    },
    { name: 'هل يوجد مشاكل صحية', value: traine.medicalProblem || 'لا يوجد' },
    { name: 'النظام الغذائي', value: <ShowFile src={traine.dietPlan} /> },
  ];

  return (
    <>
      <ShowTitleWithData title="البيانات الشخصية" data={personalInfo} />
      <ShowTitleWithData title="بيانات الإشتراك" data={subscriptionInfo} />
      <ShowTitleWithData title="معلومات اخرى" data={otherInfo} />
    </>
  );
};

export default ShowInfo;