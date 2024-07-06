import React from 'react';
import { Collapse } from 'antd';
import { transformMeasurementsToCollapseItems } from '../../utils/transformations';

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
  return (
    <Collapse
      headerBg="#ffffff"
      items={items}
      defaultActiveKey={['1']}
      onChange={onChange}
    />
  );
};

export default Measurements;
