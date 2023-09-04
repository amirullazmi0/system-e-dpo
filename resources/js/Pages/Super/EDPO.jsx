import { Head, Link } from '@inertiajs/react'
import React, { useState } from 'react'
import Sidebar from '@/Components/Super/Sidebar';
import Header from '@/Components/Super/Header';
import SectionEdpo from '@/Components/Super/SectionEdpo';
import SidebarSM from '@/Components/Super/SidebarSM';

export default function EDPO(props) {
    const [sidebarSm, setSidebarSm] = useState(false)
    const handleSidebarSm = (e) => {
        setSidebarSm(e)
    }
    return (
        <>
            <Head title='Daftar E-DPO' />
            <div className="lg:grid lg:grid-cols-7">
                <div className="lg:col-span-2 lg:block hidden">
                    <Sidebar active={'edpo'} />
                </div>
                <div className="lg:hidden">
                    <SidebarSM handle={handleSidebarSm} on={sidebarSm} active={'edpo'} />
                </div>
                <div className="col-span-5 ">
                    <Header handle={handleSidebarSm} login={props.flash.login} auth={props.auth} />
                    <SectionEdpo notif={props.flash} edpo={props.edpo} />
                </div>
            </div>
        </>
    )
}
