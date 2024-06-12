'use client'

import Image from 'next/image'
import React from 'react'
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import getUrl from "@/utils/getUrl";
import { useRouter } from "next/navigation";
import { useState } from 'react'
import { LuImagePlus } from "react-icons/lu";
import { useEffect } from 'react'

const CreateProfile = () => {

    const Schema = z.object({
        userName: z.string().min(3, { message: 'name should have atleast 3 character' }).max(50, { message: 'name should have atmost 30 character' }),
        bio: z.string().min(3, { message: 'bio should have atleast 3 character' }).max(250, { message: 'bio should have atmost 250 character' }),
    })


    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: zodResolver(Schema),
    });

    useEffect(() => {
        console.log(errors)
    }, [errors])

    const [submiting, setSubmiting] = useState(false);
    const [data, setData] = useState({});
    const router = useRouter();
    const curUrl = getUrl();
    
    useEffect(()=>{
        fetchProfile()
    },[])
    const fetchProfile = async () => {
        const response = await fetch(`${curUrl}/api/profile/create`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if(!response.ok){
            console.log("error",response.status);
        }
        const result = (await response.json()).result;
        const { userName, name, bio, profilePic } = result;
        setData({userName, name, bio, profilePic});
    }

    const onSubmit = async (data) => {

        setSubmiting(true);
        const response = await fetch(`${curUrl}/api/profile/create`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            setSubmiting(false);
            setTimeout(() => {
                router.push('/profile')
            }, 1000);
        }
        setSubmiting(false);
    }

    return (
        <div className="absolute w-full">
            <div className="flex flex-col gap-4 p-8 mx-auto max-w-xl">
                <h1>Create Profile</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 items-center w-full">
                    <div>
                        <Image src={ data?.profilePic || "/logo.png"} width={100} height={100} className='bg-gray-800 w-24 rounded-full' alt='profile picture' />
                        <div className='relative w-8 h-8 flex p-1 -mt-10 float-right bg-gray-200 rounded-full' >
                            <input type="file" className="opacity-0 absolute top-0 left-0 z-10 w-8 h-8 cursor-pointer" />
                            <LuImagePlus className='opacity-70 hover:opacity-100 absolute w-6 h-6 z-0' />
                        </div>
                    </div>
                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" value={data?.name} onChange={(e) => setData({})} {...register("name")} className="grow" placeholder="Name" />
                    </label>
                    <p className="text-red-500" >{errors?.userName?.message}</p>

                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" value={data?.userName} onChange={(e) => setData({})} {...register("userName")} className="grow" placeholder="Username" />
                    </label>
                    <p className="text-red-500" >{errors?.userName?.message}</p>

                    <textarea name="bio" value={data?.bio} onChange={(e) => setData({ ...data, bio: e.target.value })} {...register("bio")} placeholder='Tell us about yourself' className='input input-bordered h-20 pt-2 w-full' id="bio"></textarea>
                    <p className="text-red-500" >{errors?.bio?.message}</p>

                    <button type="submit" disabled={submiting} className="btn">{submiting ? "Updating..." : "Update"}</button>
                </form>
            </div>
        </div>
    )
}

export default CreateProfile