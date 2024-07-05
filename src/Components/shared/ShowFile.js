import React, { useState, useEffect } from 'react';
import { GeneralBtn } from './Buttons';
import { getFileNameFromSrc, getFileSizeFromSrc } from '../../utils/file';

const ShowFile = ({ src }) => {
  const iconSrc = '/pdf_logo.png';
  const fileName = 'نظام غذائي';
  const fileSize = '15/5/2024-2.9MB';

  return (
    <div className="flex items-center">
      <img
        className="file_logo"
        src={iconSrc}
        alt={getFileNameFromSrc(iconSrc)}
      />
      <div className="mx-3">
        <p>{fileName}</p>
        <p>{fileSize}</p>
      </div>
      <GeneralBtn
        className="rounded bg-lime-100 text-lime-500 p-2 mx-3"
        img="/edit.svg"
      />
      <GeneralBtn
        className="rounded bg-red-100 text-red-500 p-2"
        img="/delete.svg"
      />
    </div>
  );
};

export default ShowFile;
