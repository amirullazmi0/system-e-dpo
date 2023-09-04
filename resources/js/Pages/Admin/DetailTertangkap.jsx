import { Head, Link } from '@inertiajs/react'
import React, { useState } from 'react'
import Sidebar from '@/Components/Admin/Sidebar';
import Header from '@/Components/Super/Header';
import SectionDetailTertangkap from '@/Components/Admin/SectionDetailTertangkap';
import SidebarSM from '@/Components/Admin/SidebarSm';

export default function DetailTertangkap(props) {
    const [sidebarSm, setSidebarSm] = useState(false)
    const handleSidebarSm = (e) => {
        setSidebarSm(e)
    }
    return (
        <>
            <Head title={"Detail Tertangkap"} />
            <div className="lg:grid lg:grid-cols-7">
                <div className="lg:col-span-2 lg:block hidden">
                    <Sidebar active={'tertangkap'} />
                </div>
                <div className="lg:hidden">
                    <SidebarSM handle={handleSidebarSm} on={sidebarSm} active={'tertangkap'} />
                </div>
                <div className="lg:col-span-5 ">
                    <Header handle={handleSidebarSm} login={props.flash.login} auth={props.auth} />
                    <SectionDetailTertangkap edpo={props.edpo[0]} />
                </div>
            </div>
        </>
    )
}
