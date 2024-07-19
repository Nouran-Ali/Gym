import React, { useEffect } from 'react';
import Menu from './Menu';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../store/authSlice';
// import { useState, useEffect } from 'react';
// import FlyingDots from './FlyingDots';

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //     setTimeout(() => {
  //         setLoading(false);
  //     }, 300);
  // }, []);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
  }, [dispatch, user]);

  return (
    // <>
    //     {
    //         loading ? (
    //             <>
    //                 <div class="wrapper">
    //                     <div class="circle_loading"></div>
    //                     <div class="circle_loading"></div>
    //                     <div class="circle_loading"></div>
    //                     <div class="shadows"></div>
    //                     <div class="shadows"></div>
    //                     <div class="shadows"></div>
    //                 </div>
    //             </>
    //         ) : (
    //             <>

    //             </>
    //         )
    //     }
    // </>
    <div className="px-5 py-8 max-xl:px-1">
      <div className="grid grid-cols-4 max-xl:grid-cols-1 gap-6">
        <Menu />
        <div className="col-span-3">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
