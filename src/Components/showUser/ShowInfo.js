import React, { useEffect, useMemo } from 'react';
import ShowTitleWithData from '../shared/ShowTitleWithData';
import SubscriptionRenewal from '../SubscriptionRenewal';
import ShowFile from '../shared/ShowFile';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTrainees } from '../../store/traineeSlice';

const ShowInfo = () => {
  const { trainees } = useSelector((state) => state.trainee);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchTrainees());
  }, [dispatch]);

  const traine = useMemo(() => trainees.find((p) => p.id === parseInt(id)), [trainees, id]);

  if (!traine) {
    return <p>Loading...</p>;
  }

  const personalInfo = [
    { name: 'رقم ID', value: traine.id },
    { name: 'اسم المشترك', value: traine.fullName },
    { name: 'رقم الواتس', value: traine.phoneNumber },
    { name: 'العمر', value: traine.age },
    { name: 'النوع', value: traine.gender == "FEMALE" ? "أنثي" : "ذكر" },
    { name: 'تاريخ الميلاد', value: traine.dob },
  ];

  const subscriptionInfo = [
    { name: 'نوع الاشتراك', value: traine.subscriptionType == "NOT_PRIVATE" ? "عام" : "خاص" },
    { name: 'تاريخ الاشتراك', value: traine.subscriptionDate },
    { name: 'اسم التدريب', value: traine.trainingName },
    { name: 'مدة الاشتراك', value: `${traine.subscriptionMonths} شهر` },
    { name: 'تاريخ البدء', value: traine.subscriptionStartDate },
    {
      name: 'تاريخ الانتهاء',
      value: traine.subscriptionEndDate,
      valueClass: 'text-red-300',
      name2: <SubscriptionRenewal />,
    },
    { name: 'حالة المشترك', value: traine.subscriptionStatus == "ACTIVE" ? "نشط" : "غير نشط" , valueClass: 'text-green-400' },
    { name: 'المدفوع', value: traine.paid },
    { name: 'المتبقي', value: traine.reminder },
    { name: 'اسم العرض', value: traine.offerName || 'لا يوجد عرض' },
  ];

  const otherInfo = [
    { name: 'الهدف من التدريب', value: traine.goal },
    { name: 'هل اجريت عمليات جراحية خلال سنة', value: traine.surgeries == "false" ? "لا" : "نعم" },
    { name: 'هل يوجد مشاكل صحية', value: traine.healthIssues || 'لا يوجد' },
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

