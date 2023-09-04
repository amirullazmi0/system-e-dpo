import { Head, Link } from '@inertiajs/react'
import React, { useState } from 'react'
import Sidebar from '@/Components/Super/Sidebar';
import Header from '@/Components/Super/Header';
import SectionTertangkap from '@/Components/Super/SectionTertangkap';
import SidebarSM from '@/Components/Super/SidebarSM';

export default function Tertangkap(props) {
    const [sidebarSm, setSidebarSm] = useState(false)
    const handleSidebarSm = (e) => {
        setSidebarSm(e)
    }
    return (
        <>
            <Head title='Daftar Tertangkap' />
            <div className="lg:grid lg:grid-cols-7">
                <div className="lg:col-span-2 lg:block hidden">
                    <Sidebar active={'tertangkap'} />
                </div>
                <div className="lg:hidden">
                    <SidebarSM handle={handleSidebarSm} on={sidebarSm} active={'tertangkap'} />
                </div>
                <div className="lg:col-span-5 ">
                    <Header handle={handleSidebarSm} login={props.flash.login} auth={props.auth} />
                    <SectionTertangkap notif={props.flash} edpo={props.edpo} />
                </div>
            </div>
        </>
    )
}
