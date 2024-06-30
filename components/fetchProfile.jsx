"use client"
import React from 'react'
import { useOurStore } from '../store/states';
import { useEffect } from 'react';
import getUrl from '../utils/getUrl';

const FetchProfile = () => {
   
    const { setHaveProfile, setUserLikes, setUserDislikes, setUserProfile } = useOurStore((state) => state);

    const fetchProfile = async () => {
        const url = `${getUrl()}/api/profile/create`;
        const res = await fetch(url, { method: "GET", cache: "no-store" });
        const data = (await res.json()).result;
        if(!data) {
          setHaveProfile(false);
          return
        }
        setUserProfile(data);
        setUserLikes([...data.likes]);
        setUserDislikes([...data.dislikes]);
        
        setHaveProfile(true);
      };

    useEffect(() => {
        fetchProfile();
    }, []);
    return;
}

export default FetchProfile