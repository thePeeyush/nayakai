import React from 'react'

const SkeletonCard = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-4 items-center">
                <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
                <div className="flex flex-col gap-2 w-full">
                    <div className="skeleton h-4 w-1/2"></div>
                    <div className="skeleton h-4 w-4/5"></div>
                </div>
            </div>
            <div className="skeleton h-48 w-full"></div>
        </div>
    )
}

export default SkeletonCard