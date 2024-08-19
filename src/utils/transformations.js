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
  // Sort attendances by date
  const sortedAttendances = attendances.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  // Create formatted attendances
  return sortedAttendances.map((attendance, index) => {
    // Convert ISO date to "MM/DD/YYYY" format
    const formattedDate = dayjs(attendance.date).format('MM/DD/YYYY');

    // Create the name as "اليوم X"
    const name = `اليوم ${index + 1}`;

    return { name, value: formattedDate };
  });
}