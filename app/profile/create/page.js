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
import { useOurStore } from '../../../store/states'
import uploadMedia from '../../../utils/uploadMedia'
import Link from 'next/link'

const CreateProfile = () => {

    const Schema = z.object({
        name: z.string().min(3, { message: 'name should have atleast 3 character' }).max(50, { message: 'name should have atmost 50 character' }),
        userName: z.string().min(3, { message: 'user name should have atleast 3 character' }).max(50, { message: 'user name should have atmost 50 character' }),
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
    const [uploading, setUploading] = useState(false);
    const [profilePicture, setProfilePicture] = useState("/logo.png");
    const router = useRouter();
    const curUrl = getUrl();
    const { setHaveProfile } = useOurStore((state) => state);

    useEffect(() => {
        fetchProfile()
    }, [])

    useEffect(() => {
        if (data?.profilePic) {
            setProfilePicture(data?.profilePic);
        }
    }, [data?.profilePic]);
    const fetchProfile = async () => {
        const response = await fetch(`${curUrl}/api/profile/create`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            console.log("error", response.status);
        }
        const result = (await response.json()).result;
        const { userName, name, bio, profilePic } = result;
        setData({ userName, name, bio, profilePic });
        setHaveProfile(true);
    }

    const onSubmit = async (data) => {

        setSubmiting(true);
        const response = await fetch(`${curUrl}/api/profile/create`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: data.name,
                userName: data.userName,
                bio: data.bio,
                image: profilePicture
            }),
        });
        if (response.ok) {
            setSubmiting(false);
            router.push('/profile')
        }
        setSubmiting(false);
    }

    const uploadFile = async (e) => {
        e.preventDefault();
        setUploading(true);
        const file = e.target.files[0];
        if (file.type !== "image/jpeg" || file.type !== "image/png") {
            const result = await uploadMedia(file);
            setProfilePicture(result.url);
        }
        setUploading(false);
    }

    return (
        <div className="w-full pt-16 lg:pt-2 ">
            <div className="flex flex-col gap-4 p-8 mx-auto max-w-xl">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 items-center w-full">
                    <div>
                        <div className="avatar min-w-10 w-24 h-24">
                            <Image src={profilePicture} width={100} height={100} className='bg-gray-800 rounded-full' alt='profile picture' />
                        </div>
                        <div className='relative w-8 h-8 flex p-1 translate-y-16 -translate-x-8 float-right bg-base-200 rounded-full' >
                            {uploading ? <span className="loading loading-ring loading-md "></span> :
                                <>
                                    <input type="file" onChange={(e) => uploadFile(e)} className="opacity-0 absolute top-0 left-0 z-10 w-8 h-8 cursor-pointer" />
                                    <LuImagePlus className='opacity-70 hover:opacity-100 absolute w-6 h-6 z-0' />
                                </>
                            }

                        </div>
                    </div>
                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" value={data?.name} {...register("name", { onChange: (e) => setData({ ...data, name: e.target.value }) })} className="grow" placeholder="Name" />
                    </label>
                    <p className="text-red-500" >{errors?.name?.message}</p>

                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" value={data?.userName} {...register("userName", { onChange: (e) => setData({ ...data, userName: e.target.value }) })} className="grow" placeholder="Username" />
                    </label>
                    <p className="text-red-500" >{errors?.userName?.message}</p>

                    <textarea name="bio" value={data?.bio}  {...register("bio", { onChange: (e) => setData({ ...data, bio: e.target.value }) })} placeholder='Tell us about yourself' className='input input-bordered h-20 pt-2 w-full' id="bio"></textarea>
                    <p className="text-red-500" >{errors?.bio?.message}</p>

                    <button type="submit" disabled={submiting || uploading} className="btn w-full grow">{submiting ? "Updating..." : "Update"}</button>
                    <Link href={`${getUrl()}/lawyers/createprofile`} className='link text-xs'> Register as Lawyer</Link>

                </form>
            </div>
        </div>
    )
}

export default CreateProfile