import React from 'react';
import { Input } from 'antd';
import { PhoneOutlined, LockOutlined } from '@ant-design/icons';
import '../../styles/Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/authSlice';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../validations/authSchema';

const RenderImgs = () => {
  return (
    <>
      <img
        src="login/2.png"
        width={40}
        height={100}
        className="absolute -top-24 right-26"
        alt="dots"
      />
      <img
        src="login/1.png"
        width={40}
        height={100}
        className="absolute top-56 right-24"
        alt="dots"
      />
      <img
        src="login/4.png"
        width={40}
        height={100}
        className="absolute -top-16 left-24"
        alt="dots"
      />
      <img
        src="login/6.png"
        width={50}
        height={100}
        className="absolute top-72 left-56"
        alt="dots"
      />
      <img
        src="login/3.png"
        width={40}
        height={100}
        className="absolute bottom-24 -right-24"
        alt="dots"
      />
      <img
        src="login/5.png"
        width={40}
        height={100}
        className="absolute bottom-1 left-24"
        alt="dots"
      />
    </>
  );
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading, error, inputErrors } = useSelector((state) => state.auth);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data)
    dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-96 form_login">
      <h2 className="text-center text-3xl text-[#3f4346]">تسجيل دخول</h2>
      <div className="mt-8">
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <>
              <Input
                size="large"
                placeholder="رقم الهاتف"
                prefix={<PhoneOutlined className="text-[#b1b1b1] ml-3" />}
                {...field}
                className={`px-4 border-0 ${
                  errors.phoneNumber ? 'border-red-500' : ''
                }`}
              />
              {(errors.phoneNumber || inputErrors.phoneNumber) && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber?.message ||
                    (inputErrors.phoneNumber &&
                      inputErrors.phoneNumber.map((msg, index) => (
                        <p key={index}>{msg}</p>
                      )))}
                </div>
              )}
            </>
          )}
        />
      </div>
      <div className="mt-5">
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <>
              <Input.Password
                size="large"
                placeholder="كلمه المرور"
                prefix={<LockOutlined className="text-[#b1b1b1] ml-3" />}
                {...field}
                className={`px-4 border-0 ${
                  errors.password ? 'border-red-500' : ''
                }`}
              />
              {(errors.password || inputErrors.password) && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.password?.message ||
                    (inputErrors.password &&
                      inputErrors.password.map((msg, index) => (
                        <p key={index}>{msg}</p>
                      )))}
                </div>
              )}
            </>
          )}
        />
      </div>
      <button
        type="submit"
        className="flex justify-center mx-auto rounded-lg text-lg bg-[#D9ED4D] text-[#100a00] p-1 px-14 mt-8"
        disabled={loading}
      >
        {loading ? 'جاري التحميل...' : 'تسجيل'}
      </button>
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      <RenderImgs />
    </form>
  );
};

export default LoginForm;
