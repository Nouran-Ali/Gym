import React from 'react'

const Measurement = ({title , desc}) => {
    return (
        <div>
            <div className="flex align-center">
                <p className={`text-[#4E4E4E] text-lg ml-3 `}>{title}</p>
            </div>
            <p className={`text-[#989898] mt-2 text-lg `}>{desc}</p>
        </div>
    )
}

export default Measurement
