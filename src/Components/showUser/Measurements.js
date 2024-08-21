import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Collapse, Empty } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Input, Modal } from "antd";
import "../../styles/Measurements.css";
import { useDispatch, useSelector } from "react-redux";
import { createinbodies, fetchInbodies } from "../../store/inbodySlice";
import { getFormattedDate } from "../../utils/date";
import Measurement from "./Measurement";

const Measurements = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMeasurement, setNewMeasurement] = useState({
    date: "",
    length: "",
    weight: "",
    shoulder: "",
    chest: "",
    belowChest: "",
    middle: "",
    stomach: "",
    buttocks: "",
    thigh: "",
    arm: "",
  });

  const { inbodies } = useSelector((state) => state.inbodies);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInbodies());
  }, [dispatch]);

  const inbody = useMemo(
    () => inbodies.find((p) => p.traineeId === parseInt(id)),
    [inbodies, id]
  );

  const traineeMeasurements = useMemo(() => {
    if (!inbody) return [];
    return inbodies.filter(
      (measurement) => measurement.traineeId === inbody.traineeId
    );
  }, [inbodies, inbody]);

  const sortedMeasurements = useMemo(() => {
    return traineeMeasurements.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }, [traineeMeasurements]);

  const latestMeasurement = sortedMeasurements[0];

  const onChange = (key) => {
    console.log(key);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMeasurement({ ...newMeasurement, [name]: value });
  };

  const handleSave = () => {
    dispatch(createinbodies({ ...newMeasurement, traineeId: parseInt(id) }))
      .then(() => {
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error("Failed to create measurement:", error);
      });
  };

  return (
    <div className="Measurements">
      <div className="my-2 py-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {latestMeasurement
              ? getFormattedDate(new Date(latestMeasurement.date))
              : "No measurements available"}
          </h3>
          <button
            className="bg-[#D9ED4D1C] rounded-lg text-[#D9ED4D] border border-[#D9ED4D] px-3 py-1 ml-3"
            onClick={showModal}
          >
            <PlusOutlined />
          </button>

          <Modal
            title="اضافه مقاسات جديده"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <hr className="bg-black border border-[#f5f5f5] mt-3 mb-5" />
            <form className="w-full mx-auto mb-10">
              <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
                <div className="mb-4">
                  <label className="text-[#4E4E4E]">تاريخ اخذ المقاسات</label>
                  <Input
                    name="date"
                    value={newMeasurement.date}
                    onChange={handleInputChange}
                    className="bg-[#F9F9F9] border border-[#E4E4E4] mt-3"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-[#4E4E4E]">الطول</label>
                  <Input
                    name="length"
                    value={newMeasurement.length}
                    onChange={handleInputChange}
                    className="bg-[#F9F9F9] border border-[#E4E4E4] mt-3"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-[#4E4E4E]">الوزن</label>
                  <Input
                    name="weight"
                    value={newMeasurement.weight}
                    onChange={handleInputChange}
                    className="bg-[#F9F9F9] border border-[#E4E4E4] mt-3"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-[#4E4E4E]">الكتف</label>
                  <Input
                    name="shoulder"
                    value={newMeasurement.shoulder}
                    onChange={handleInputChange}
                    className="bg-[#F9F9F9] border border-[#E4E4E4] mt-3"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-[#4E4E4E]">الصدر</label>
                  <Input
                    name="chest"
                    value={newMeasurement.chest}
                    onChange={handleInputChange}
                    className="bg-[#F9F9F9] border border-[#E4E4E4] mt-3"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-[#4E4E4E]">اسفل الصدر</label>
                  <Input
                    name="belowChest"
                    value={newMeasurement.belowChest}
                    onChange={handleInputChange}
                    className="bg-[#F9F9F9] border border-[#E4E4E4] mt-3"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-[#4E4E4E]">الوسط</label>
                  <Input
                    name="middle"
                    value={newMeasurement.middle}
                    onChange={handleInputChange}
                    className="bg-[#F9F9F9] border border-[#E4E4E4] mt-3"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-[#4E4E4E]">البطن</label>
                  <Input
                    name="stomach"
                    value={newMeasurement.stomach}
                    onChange={handleInputChange}
                    className="bg-[#F9F9F9] border border-[#E4E4E4] mt-3"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-[#4E4E4E]">الارداف</label>
                  <Input
                    name="buttocks"
                    value={newMeasurement.buttocks}
                    onChange={handleInputChange}
                    className="bg-[#F9F9F9] border border-[#E4E4E4] mt-3"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-[#4E4E4E]">الفخذ</label>
                  <Input
                    name="thigh"
                    value={newMeasurement.thigh}
                    onChange={handleInputChange}
                    className="bg-[#F9F9F9] border border-[#E4E4E4] mt-3"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-[#4E4E4E]">الذراع</label>
                  <Input
                    name="arm"
                    value={newMeasurement.arm}
                    onChange={handleInputChange}
                    className="bg-[#F9F9F9] border border-[#E4E4E4] mt-3"
                  />
                </div>

                <div className="mb-4">
                  <label className="text-[#4E4E4E]">BMI</label>
                  <Input
                    type="number"
                    name="BMI"
                    value={newMeasurement.BMI}
                    onChange={handleInputChange}
                    className="bg-[#F9F9F9] border border-[#E4E4E4] mt-3"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-[#4E4E4E]">Belly Fat</label>
                  <Input
                    type="number"
                    name="bellyFat"
                    value={newMeasurement.bellyFat}
                    onChange={handleInputChange}
                    className="bg-[#F9F9F9] border border-[#E4E4E4] mt-3"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-[#4E4E4E]">Bone Density</label>
                  <Input
                    type="number"
                    name="boneDensity"
                    value={newMeasurement.boneDensity}
                    onChange={handleInputChange}
                    className="bg-[#F9F9F9] border border-[#E4E4E4] mt-3"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-[#4E4E4E]">Calories Required</label>
                  <Input
                    type="number"
                    name="caloriesRequired"
                    value={newMeasurement.caloriesRequired}
                    onChange={handleInputChange}
                    className="bg-[#F9F9F9] border border-[#E4E4E4] mt-3"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-[#4E4E4E]">Daily Water Need</label>
                  <Input
                    type="number"
                    name="dailyWaterNeed"
                    value={newMeasurement.dailyWaterNeed}
                    onChange={handleInputChange}
                    className="bg-[#F9F9F9] border border-[#E4E4E4] mt-3"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-[#4E4E4E]">Fat Mass</label>
                  <Input
                    type="number"
                    name="fatMass"
                    value={newMeasurement.fatMass}
                    onChange={handleInputChange}
                    className="bg-[#F9F9F9] border border-[#E4E4E4] mt-3"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-[#4E4E4E]">Muscle Weight</label>
                  <Input
                    type="number"
                    name="muscleWeight"
                    value={newMeasurement.muscleWeight}
                    onChange={handleInputChange}
                    className="bg-[#F9F9F9] border border-[#E4E4E4] mt-3"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-[#4E4E4E]">Current Situation</label>
                  <Input
                    type="text"
                    name="currentSituation"
                    value={newMeasurement.currentSituation}
                    onChange={handleInputChange}
                    className="bg-[#F9F9F9] border border-[#E4E4E4] mt-3"
                  />
                </div>
              </div>
              <div className="mt-8 text-center">
                <button
                  type="button"
                  className="bg-[#D9ED4D] rounded-lg py-2 w-1/3 font-semibold"
                  onClick={handleSave}
                >
                  حفظ
                </button>
              </div>
            </form>
          </Modal>
        </div>

        <hr className="bg-black border border-[#f5f5f5] mt-3 mb-5" />

        {latestMeasurement ? (
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
            <Measurement title="الطول" desc={latestMeasurement.length} />
            <Measurement title="الوزن" desc={latestMeasurement.weight} />
            <Measurement title="الكتف" desc={latestMeasurement.shoulder} />
            <Measurement title="الصدر" desc={latestMeasurement.chest} />
            <Measurement
              title="اسفل الصدر"
              desc={latestMeasurement.belowChest}
            />
            <Measurement title="الوسط" desc={latestMeasurement.middle} />
            <Measurement title="البطن" desc={latestMeasurement.stomach} />
            <Measurement title="الارداف" desc={latestMeasurement.buttocks} />
            <Measurement title="الفخذ" desc={latestMeasurement.thigh} />
            <Measurement title="الذراع" desc={latestMeasurement.arm} />
          </div>
        ) : (
          <div className="mt-44">
            <Empty />
          </div>
        )}

        {sortedMeasurements.length > 1 && (
          <Collapse defaultActiveKey={["0"]} onChange={onChange}>
            {sortedMeasurements.slice(1).map((measurement, index) => (
              <Collapse.Panel
                header={getFormattedDate(new Date(measurement.date))}
                key={index + 1}
              >
                <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
                  <Measurement title="الطول" desc={measurement.length} />
                  <Measurement title="الوزن" desc={measurement.weight} />
                  <Measurement title="الكتف" desc={measurement.shoulder} />
                  <Measurement title="الصدر" desc={measurement.chest} />
                  <Measurement
                    title="اسفل الصدر"
                    desc={measurement.belowChest}
                  />
                  <Measurement title="الوسط" desc={measurement.middle} />
                  <Measurement title="البطن" desc={measurement.stomach} />
                  <Measurement title="الارداف" desc={measurement.buttocks} />
                  <Measurement title="الفخذ" desc={measurement.thigh} />
                  <Measurement title="الذراع" desc={measurement.arm} />
                </div>
              </Collapse.Panel>
            ))}
          </Collapse>
        )}
      </div>
    </div>
  );
};

export default Measurements;
