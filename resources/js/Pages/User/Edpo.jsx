import Header from '@/Components/User/Header'
import Section1Edpo from '@/Components/User/Home/Section1Edpo'
import Section2Edpo from '@/Components/User/Home/Section2Edpo'
import Navbar from '@/Components/User/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Edpo(props) {
    return (
        <>
            <Head title='Daftar E-DPO' />
            <Header />
            <Navbar active={'edpo'} />
            <div className='lg:grid lg:grid-cols-6'>
                <div className="lg:col-span-4 section-1">
                    <div className="lg:hidden">
                        <Section2Edpo active={props.active} />
                    </div>
                    <Section1Edpo edpo={props.edpo} />
                </div>
                <div className="lg:block hidden lg:col-span-2 section-2">
                    <Section2Edpo active={props.active} />
                </div>
            </div>
        </>
    )
}
