import React from 'react'

const SkeletonCard = () => {
    return (
        <div className="w-full py-4 px-2">
            <div className="flex flex-col gap-4 w-full">
                <div className="flex gap-4 items-center">
                    <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
                    <div className="flex flex-col gap-2 w-full">
                        <div className="skeleton h-4 w-1/2"></div>
                        <div className="skeleton h-4 w-4/5"></div>
                    </div>
                </div>
                <div className="skeleton h-72 w-full"></div>
                <div className="flex gap-4">
                    <div className="w-full h-8 rounded-2xl skeleton"></div>
                    <div className="w-full h-8 rounded-2xl skeleton"></div>
                    <div className="w-full h-8 rounded-2xl skeleton"></div>
                    <div className="w-full h-8 rounded-2xl skeleton"></div>
                    <div className="w-full h-8 rounded-2xl skeleton"></div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonCard