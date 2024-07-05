import React from 'react'
import { Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../styles/Login.css';

const Login = () => {
    return (
        <div className='mx-auto'>
            <div className='grid grid-cols-2 max-md:grid-cols-1 gap-3'>

                <div dir='rtl' className='flex justify-center mt-44 relative'>
                    <form className='w-96 form_login'>
                        <h2 className='text-center text-3xl text-[#3f4346]'>تسجيل دخول</h2>
                        <Input size="large" placeholder="اسم المستخدم" prefix={<UserOutlined className='text-[#b1b1b1] ml-3' />} className='mt-8 px-4 border-0 ' />
                        <Input.Password size="large" placeholder="كلمه المرور" prefix={<LockOutlined className='text-[#b1b1b1] ml-3' />} className='mt-5 px-4 border-0 ' />
                        <button className='flex justify-center mx-auto rounded-lg text-lg bg-[#D9ED4D] text-[#100a00] p-1 px-14 mt-8'>تسجيل</button>
                        <img src="login/2.png" width={40} height={100} className='absolute -top-24 right-26' alt="dots" />
                        <img src="login/1.png" width={40} height={100} className='absolute top-56 right-24' alt="dots" />
                        <img src="login/4.png" width={40} height={100} className='absolute -top-16 left-24' alt="dots" />
                        <img src="login/6.png" width={50} height={100} className='absolute top-72 left-56' alt="dots" />
                        <img src="login/3.png" width={40} height={100} className='absolute bottom-24 -right-24' alt="dots" />
                        <img src="login/5.png" width={40} height={100} className='absolute bottom-1 left-24' alt="dots" />
                    </form>
                </div>
                <div className='p-5 pr-0 relative'>
                    <img src="login/left_section2.png" className='login_image rounded-3xl' alt="login image" />
                    <img src="login/White Logo.png" width={400} height={320} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' alt="login image" />
                    <img src="login/dots.png" width={120} height={100} className='absolute bottom-14 -right-16' alt="dots" />
                </div>
            </div>
        </div>
    )
}

export default Login
