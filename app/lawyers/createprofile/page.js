"use client"
import { useState } from "react";
import {useForm} from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import getUrl from "@/utils/getUrl";

export default function Page() {

    const curUrl = getUrl();
    const phoneRegex = new RegExp(
        /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
      );

    const Schema = z.object({
        name:z.string().min(3,{message: 'name should have atleast 3 character'}).max(50,{message: 'name should have atmost 30 character'}),
        dob:z.string().transform((str) => new Date(str)),
        degree:z.string().min(3,{message: 'degree should have atleast 3 character'}).max(50,{message: 'degree should have atmost 30 character'}),
        city:z.string().min(3,{message: 'city should have atleast 3 character'}).max(30,{message: 'city should have atmost 30 character'}),
        district:z.string().min(3,{message: 'district should have atleast 3 character'}).max(30,{message: 'district should have atmost 30 character'}),
        state:z.z.string().min(3,{message: 'state should have atleast 3 character'}).max(30,{message: 'state should have atmost 30 character'}),
        phone: z.string().regex(phoneRegex, 'Invalid Number!').min(10,{message:'number should be of 10 digits'}).max(10,{message:'number should be of 10 digits'}),   
    })

    const {handleSubmit,register,formState:{errors}} = useForm({
        resolver:zodResolver(Schema),
    });
    
    const [submited,setSubmited] = useState(false);


    const onSubmit = async (data) =>{
        const response = await fetch(`${curUrl}/api/lawyers/createprofile`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          if (response.ok) {
            setSubmited(true);
          }
        console.log(data);
    }

    return (
        <div className="p-4 lg:px-16 mt-16 overflow-y-scroll w-full">
            {!submited ? <form onSubmit={handleSubmit(onSubmit)} className={submited ? 'hidden' : 'flex flex-col gap-2 w-full max-w-xs'}>
                <h1>Create Profile</h1>
                <Input register={register} name={"name"} question={"What is your Name?"} placeholder={"fullname"} label={errors.name && errors.name.message}/>
                <Input register={register} name={"dob"}  question={"Your Date Of Birth?"} placeholder={"04-25-2003"} label={errors.dob && errors.dob.message} type={"date"}/>
                <Input register={register} name={"phone"} question={"Your Phone Number?"} placeholder={"9925665125"} label={errors.phone && errors.phone.message} type={"number"}/>
                <Input register={register} name={"degree"} question={"Your Degree?"} placeholder={"degree"} label={errors.degree && errors.degree.message}/>
                <Input register={register} name={"state"} question={"Address : State?"} placeholder={"state like Madhya Pradesh"} label={errors.state && errors.state.message}/>
                <Input register={register} name={"district"} question={"Address : District?"} placeholder={"your district"} label={errors.district && errors.district.message}/>
                <Input register={register} name={"city"} question={"Address : City?"} placeholder={"your city"} label={errors.city && errors.city.message}/>
                <button type="submit" className="btn">SUBMIT</button>
            </form> : <h1 className="indicator-item indicator-center indicator-middle badge badge-success"> ✅ Done</h1> }
        </div>
    );
}

const Input = ({question,placeholder,label,type,register,name,value,pattern}) => {
    return(
        <div className="form-control ">
                    <label className="label">
                        <span className="label-text">{question}</span>
                        <span className="label-text-alt text-red-500">{label}</span>
                    </label>
                    <input type={type||"text"}{...register(name)} placeholder={placeholder} className="input input-bordered w-full max-w-xs" />
                </div>
    )
}
