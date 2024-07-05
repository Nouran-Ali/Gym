import React from 'react';

const ShowTitleWithData = ({ title, data }) => {
  return (
    <div className='my-2 py-3'>
      <h3 className="text-xl font-semibold">{title}</h3>
      <hr className="bg-black border border-[#f5f5f5] mt-3 mb-5" />

      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
        {data.map((item) => (
          <div key={item.name}>
            <div className="flex align-center">
              <p
                className={`text-[#4E4E4E] text-lg ml-3 ${
                  item.nameClass && item.nameClass
                }`}
              >
                {item.name}
              </p>
              {item?.name2 && item.name2}
            </div>

            <p
              className={`text-[#989898] mt-2 text-lg ${
                item.valueClass && item.valueClass
              }`}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowTitleWithData;
