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
            <div className='grid grid-cols-6'>
                <div className="col-span-4 section-1">
                    <Section1Tertangkap edpo={props.edpo} />
                </div>
                <div className="col-span-2 section-2">
                    <Section2Tertangkap active={props.active} />
                </div>
            </div>
        </>
    )
}
