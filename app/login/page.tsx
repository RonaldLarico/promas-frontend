"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { MdOutlineMailLock } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from 'react-hook-form';
import PasswordInputs from '@/components/utils/format/passwordHash';
type ResErrors = {
  message: string;
  errorContent: string;
};

type Auth = {
  email: string;
  password: string;
  role: boolean;
  token: string;
};

const dataForm = {
  email: '',
  password: '',
  role: true,
  token:'',
};

const { PasswordInput } = PasswordInputs;
const Login: React.FC = () => {
  const { register } = useForm();
  const [resErrors, setResErrors] = useState<ResErrors | null>(null);
  const [form, setForm] = useState<Auth>(dataForm);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  const handleFormData = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    textField: string
  ) => {
    const { value } = target;
    setForm({ ...form, [textField]: value });
  };

  const saveToken = (token: string) => {
    localStorage.setItem('token', token);
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post('https://backend.promas.edu.pe/api/v1/user/login', form);
      if (response.data.token) {
        const token = response.data.token;
        saveToken(token);
        window.location.href = 'student';
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { data } = error.response;

        if (data.error === 'invalid_password') {
          setResErrors({ message: 'Contraseña incorrecta', errorContent: data.errorContent });
        } else if (data.error === 'user_not_found') {
          setResErrors({ message: 'Email no encontrado', errorContent: data.errorContent });
        } else {
          setResErrors({ message: "email | contraseña incorrecto", errorContent: '' });
        }
      } else {
        setResErrors({ message: 'Error en el servidor', errorContent: '' });
      }
    }
  };

  useEffect(() => {
    if (resErrors?.message === "email | contraseña incorrecto") {
      setResErrors(null);
    }
  },  [form.email, form.password]);

  return (
    <section className="bg-gradient-to-r from-[#c50f9e] from-10% via-[#9D6CD2] via-30% to-[#481EDC] to-90% flex items-center justify-center">
    <div className="max-w-screen-lg bg-white/50 grid lg:grid-cols-2 items-center gap-20 p-5 lg:rounded-2xl mt-10 mb-10">
        <div className="order-2 lg:order-none">
            <Image src="/signup-background.svg" alt="" width={400} height={200}/>
            {/* <img src="/teamwork.svg" alt="" className="absolute top-36"/> */}
        </div>

        <div className="grid gap-5">
          <div className='flex justify-center lg:mr-20'>
          <Image
            src="/logo_login.png"
            alt='logo_promas'
            width={150}
            height={150}
            className=''/>
          </div>
            <form action="" className="space-y-6 text-white">
            {resErrors?.message && (
                        <span className="text-gray-100 bg-red-600/50 w-full p-2 rounded-xl font-semibold text-sm">{resErrors.message}</span>
                      )}
                <div className="relative">
                    <div className="absolute top-1 left-1 bg-[#FFFFFF40] rounded-full p-2 flex items-center justify-center text-pink-500">
                      <MdOutlineMailLock />
                    </div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-80 bg-[#FFFFFF30] py-2 px-12 rounded-full focus:bg-[#00000050] focus:outline-none focus:ring-1 focus:ring-pink-600 focus:drop-shadow-lg"
                      onChange={(event) => handleFormData(event, "email")}
                      onKeyDown={handleKeyDown}/>
                  </div>
                <div className="relative">
                    <div className="absolute top-1 left-1 bg-[#FFFFFF40] rounded-full p-2 flex items-center justify-center text-pink-500">
                      <RiLockPasswordLine />
                    </div>
                    <PasswordInput
                      name="password"
                      register={register}
                      placeholder="Password"
                      onChange={(event) => handleFormData(event, "password")}
                      onKeyDown={(event) => handleKeyDown(event)}/>
                  </div>
                <button
                  type='button'
                  value='login'
                  className="bg-gradient-to-r from-pink-400 to-pink-300 w-80 font-semibold rounded-full py-2"
                  onClick={() => onSubmit()}>
                    Iniciar sesión
                </button>
            </form>
            <div className="text-[#FFFFFFB3] border-t border-[#FFFFFF30] pt-4 space-y-4 text-sm">
                <p>Dont have an account? <a className="text-neon-blue font-semibold cursor-pointer">Sign up</a></p>
                <p>Forgot password? <a className="text-neon-blue font-semibold cursor-pointer">Reset password</a></p>
                <p>Dont have a password yet? <a className="text-neon-blue font-semibold cursor-pointer">Set password</a></p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Login