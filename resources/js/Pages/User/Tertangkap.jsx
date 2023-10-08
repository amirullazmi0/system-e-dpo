import Header from '@/Components/User/Header'
import Section1Tertangkap from '@/Components/User/Home/Section1Tertangkap'
import Section2Tertangkap from '@/Components/User/Home/Section2Tertangkap'
import Navbar from '@/Components/User/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Tertangkap(props) {
    return (
        <>
            <Head title='Daftar Tertangkap' />
            <Header />
            <Navbar active={'tertangkap'} />
            <div className='lg:grid lg:grid-cols-6'>
                <div className="lg:col-span-4 section-1">
                    <div className="lg:hidden">
                        <Section2Tertangkap active={props.active} />
                    </div>
                    <Section1Tertangkap edpo={props.edpo} />
                </div>
                <div className="lg:col-span-2 lg:block hidden section-2">
                    <Section2Tertangkap active={props.active} />
                </div>
            </div>
        </>
    )
}
