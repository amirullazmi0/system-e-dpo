import { Head, Link } from '@inertiajs/react'
import React from 'react'
import Sidebar from '@/Components/Super/Sidebar';
import Header from '@/Components/Super/Header';
import SectionTertangkap from '@/Components/Super/SectionTertangkap';

export default function Tertangkap(props) {
    console.log('props', props.edpo);
    return (
        <>
            <Head title='Daftar Tertangkap' />
            <div className="grid grid-cols-7">
                <div className="col-span-2">
                    <Sidebar active={'tertangkap'} />
                </div>
                <div className="col-span-5 ">
                    <Header login={props.flash.login} auth={props.auth} />
                    <SectionTertangkap notif={props.flash} edpo={props.edpo} />
                </div>
            </div>
        </>
    )
}