import React from "react";
import { Link } from "react-router-dom";

const Attende = ({ id, name, time_attend, days, status, color }) => {
  return (
    <>
      <Link to={`/dashboard/members/${id}`}>
        <div className="flex items-center justify-between bg-[#FBFBFB] rounded-lg p-3 shadow-md shadow-[#0000000d] mt-5">
          <div>
            <p className="font-bold">{name}</p>
            <span
              className={`font-semibold ${
                color === true ? "text-[#58D241]" : "text-[#E47E7B]"
              }`}
            >
              عضو {status}{" "}
            </span>
          </div>
          <div>
            <div className="flex items-center">
              <p className="font-medium text-[#888888] ml-2">وقت الدخول:</p>
              <p className="font-medium">{time_attend}</p>
            </div>
            <div className="flex items-center">
              <p className="font-medium text-[#888888] ml-2">
                الأيام المتبقية:
              </p>
              <p className="font-medium">{days} يوم</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Attende;
