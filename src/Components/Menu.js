import React from 'react';
import {
  AppstoreFilled,
  UsergroupAddOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { logout } from '../store/authSlice';
import { useDispatch } from 'react-redux';

const Menu = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-[#343434] text-[#A8A8A8]  mb-7 text-lg p-7 rounded-xl  animation_right">
        <img
          src="../login/White Logo.png"
          width={250}
          height={120}
          className="mx-auto mb-5"
          alt="login"
        />
        <NavLink
          end
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? 'text-white p-3 rounded-lg flex items-center'
              : 'p-3 rounded-lg flex items-center'
          }
        >
          <AppstoreFilled />
          <p className="mr-3">نظرة عامه</p>
        </NavLink>

        <NavLink
          end
          to="/dashboard/members"
          className={({ isActive }) =>
            isActive
              ? 'text-white p-3 rounded-lg flex items-center mt-3'
              : 'p-3 rounded-lg flex items-center mt-3'
          }
        >
          <UsergroupAddOutlined />
          <p className="mr-3">الأعضاء المشتركون</p>
        </NavLink>

        <NavLink
          end
          to="/dashboard/audience"
          className={({ isActive }) =>
            isActive
              ? 'text-white p-3 rounded-lg flex items-center mt-3'
              : 'p-3 rounded-lg flex items-center mt-3'
          }
        >
          <UserOutlined />
          <p className="mr-3">الحضور</p>
        </NavLink>

        <button
          onClick={() => dispatch(logout())}
          className="flex p-3 rounded-lg flex items-center mt-3"
        >
          <LogoutOutlined />
          <p className="mr-3">تسجيل الخروج</p>
        </button>
      </div>
    </>
  );
};

export default Menu;
