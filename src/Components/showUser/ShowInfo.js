import React, { useEffect, useMemo, useState } from "react";
import ShowTitleWithData from "../shared/ShowTitleWithData";
import SubscriptionRenewal from "../SubscriptionRenewal";
import ShowFile from "../shared/ShowFile";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTrainees } from "../../store/traineeSlice";
import { calcAgeFromDate, getFormattedDate } from "../../utils/date";
import { Image } from "antd";
import { PrivateAxios } from "../../api";

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
  const { trainee } = useSelector((state) => state.trainee);
  const [imageSrc, setImageSrc] = useState(null);
  const [imageSrcBack, setImageSrcBack] = useState(null);

  useEffect(() => {
    if (trainee?.idFace) {
      // Fetch image with authorization
      PrivateAxios.get(`uploads/${trainee.idFace}`, {
        responseType: "blob", // Ensure the response is in blob format
      })
        .then((response) => {
          const url = URL.createObjectURL(response.data);
          setImageSrc(url); // Set the blob URL as the image source
        })
        .catch((error) => {
          console.error("Error fetching image:", error);
        });
    }
  }, [trainee?.idFace]);

  useEffect(() => {
    if (trainee?.idBack) {
      // Fetch image with authorization
      PrivateAxios.get(`uploads/${trainee.idBack}`, {
        responseType: "blob", // Ensure the response is in blob format
      })
        .then((response) => {
          const url = URL.createObjectURL(response.data);
          setImageSrcBack(url); // Set the blob URL as the image source
        })
        .catch((error) => {
          console.error("Error fetching image:", error);
        });
    }
  }, [trainee?.idBack]);

  if (!trainee) {
    return <p>Loading...</p>;
  }

  const personalInfo = [
    { name: "رقم ID", value: trainee.parcode },
    { name: "اسم المشترك", value: trainee.fullName },
    { name: "رقم الواتس", value: trainee.phoneNumber },
    // <<<<<<< HEAD
    //     { name: 'العمر', value: calculateAge(trainee.dob) },
    //     { name: 'النوع', value: trainee.gender == 'FEMALE' ? 'أنثي' : 'ذكر' },
    // =======
    { name: "العمر", value: calcAgeFromDate(trainee.dob) },
    { name: "النوع", value: trainee.gender === "FEMALE" ? "أنثي" : "ذكر" },
    { name: "تاريخ الميلاد", value: getFormattedDate(new Date(trainee.dob)) },
    {
      name: "وجه البطاقه",
      value: (
        <div>
          {imageSrc ? (
            <Image height={180} src={imageSrc} />
          ) : (
            <p>لا يوجد</p>
          )}
        </div>
      ),
    },
    {
      name: "ظهر البطاقه",
      value: (
        <div>
          {imageSrcBack ? (
            <Image height={180} src={imageSrcBack} />
          ) : (
            <p>لا يوجد</p>
          )}
        </div>
      ),
    },
  ];

  const subscriptionInfo = [
    {
      name: "نوع الاشتراك",
      value: trainee.subscriptionType === "NOT_PRIVATE" ? "عام" : "خاص",
    },
    {
      name: "تاريخ الاشتراك",
      value: getFormattedDate(new Date(trainee.subscriptionDate)),
    },
    { name: "اسم التدريب", value: trainee.trainingName },
    { name: "مدة الاشتراك", value: `${trainee.subscriptionMonths} شهر` },
    {
      name: "تاريخ البدء",
      value: getFormattedDate(new Date(trainee.subscriptionStartDate)),
    },
    {
      name: "تاريخ الانتهاء",
      value: getFormattedDate(new Date(trainee.subscriptionEndDate)),
      valueClass: "text-red-300",
      name2: <SubscriptionRenewal />,
    },
    {
      name: "حالة المشترك",
      value: trainee.subscriptionStatus === "ACTIVE" ? "نشط" : "غير نشط",
      valueClass:
        trainee.subscriptionStatus === "ACTIVE"
          ? "text-green-400"
          : "text-red-400",
    },
    { name: "المدفوع", value: trainee.paid },
    { name: "المتبقي", value: trainee.reminder },
    { name: "اسم العرض", value: trainee.offerName || "لا يوجد عرض" },
  ];

  const otherInfo = [
    { name: "الهدف من التدريب", value: trainee.goal },
    {
      name: "هل اجريت عمليات جراحية خلال سنة",
      value: trainee.surgeries === "false" ? "لا" : "نعم",
    },
    { name: "هل يوجد مشاكل صحية", value: trainee.medicalProblem || "لا يوجد" },
    { name: "النظام الغذائي", value: <ShowFile src={trainee.dietPlan} /> },
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
