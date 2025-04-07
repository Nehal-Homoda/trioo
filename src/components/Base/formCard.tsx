
'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
type Props = {
    children: React.ReactNode;
};
export default function formCard({ title ,children,className}) {
    const router=useRouter()
    return (
        <div className={`rounded-lg bg-background px-5 py-3 ${className}`}>
            <Link className='text-primary font-bold' onClick={()=>router.back()} href="">
            <span className="me-2 mdi mdi-arrow-left font-bold text-primary"></span>
            Back
            </Link>
            <h1 className='text-4xl  text-primary font-bold'>{title}</h1>
            <>
            {children}
            </>
        </div>
    )
}
