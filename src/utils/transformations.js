import dayjs from 'dayjs';
import ShowData from '../Components/shared/ShowData';

export const transformMeasurementsToCollapseItems = (measurements) => {
  const items = [];

  const dataNamesMap = {
    date: 'التاريخ',
    length: 'الطول',
    weight: 'الوزن',
    shoulder: 'الكتف',
    chest: 'الصدر',
    belowChest: 'اسفل الصدر',
    middle: 'الوسط',
    stomach: 'البطن',
    buttocks: 'الارداف',
    thigh: 'الفحذ',
    arm: 'الذراع',
  };

  measurements.map((item, index) => {
    const data = [];
    Object.keys(item).map(
      (key) =>
        key !== 'date' &&
        data.push({ name: dataNamesMap[key], value: item[key] })
    );
    // console.log('🚀 ~ measurements.map ~ data:', data);

    return items.push({
      key: index + 1,
      label: item.date,
      children: <ShowData data={data} />,
    });
  });

  return items;
};

export function transformAttendances(attendances) {
  const result = attendances.map((attendance, index) => {
    return {
      name: `اليوم ${index + 1}`,
      value: attendance.date.split('T')[0],
    };
  });

  return result;
}
