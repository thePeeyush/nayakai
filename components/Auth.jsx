'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import SignInWithGoogle from '../server/action';
import { CiUnlock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();

    const handleGoogle = (e) => {
        e.preventDefault();
        SignInWithGoogle();
    }

    return (
        <div className="w-full max-w-md p-6 rounded-xl space-y-4">
            <div className="w-full max-w-md p-6 rounded-xl space-y-4">
                <CiUnlock className='text-7xl w-fit mx-auto' />
                <h1 className='text-3xl font-bold text-center'>Authenticate</h1>
            </div>
            <button onClick={(e) => handleGoogle(e)} className='btn w-full rounded-full'><FcGoogle className='mr-2 text-xl' />SignIn with Google</button>
            <p className='text-xs px-1 max-w-fit mx-auto -translate-y-[2px] text-gray-300'>or</p>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-full items-center mx-auto'>
                <label className="input input-bordered flex items-center gap-2 w-full  rounded-full">
                    Email
                    <input {...register('email')} type="text" className="w-full" placeholder="nayak@site.com" />
                </label>
                {errors && <p>{errors?.email}</p>}
                <button type='submit' className='btn w-full rounded-full glass'>Submit</button>
            </form>
        </div>
    )
}

export default Auth