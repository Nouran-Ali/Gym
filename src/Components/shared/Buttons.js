import React from 'react'

export const GeneralBtn = ({ img, ...args }) => {
  return (
    <button {...args}>
      <img src={img} alt='button' />
    </button>
  );
}
