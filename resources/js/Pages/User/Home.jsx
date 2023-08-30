import Header from '@/Components/User/Header'
import Section1 from '@/Components/User/Home/Section1'
import Section2 from '@/Components/User/Home/Section2'
import Navbar from '@/Components/User/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Home() {
    return (
        <>
            <Head title='Tentang E-DPO' />
            <Header />
            <Navbar active={'home'} />
            <div className='grid grid-cols-6'>
                <div className="col-span-4 section-1">
                    <Section1 />
                </div>
                <div className="col-span-2 section-2">
                    <Section2 />
                </div>
            </div>
        </>
    )
}
