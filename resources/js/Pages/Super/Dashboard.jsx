import { Head, Link } from '@inertiajs/react'
import React from 'react'
import Sidebar from '@/Components/Super/Sidebar';
import Header from '@/Components/Super/Header';
import Section from '@/Components/Super/Section';
import SidebarSM from '@/Components/Super/SidebarSM';
import { useState } from 'react';

export default function Dashboard(props) {
    const [sidebarSm, setSidebarSm] = useState(false)
    const handleSidebarSm = (e) => {
        setSidebarSm(e)
    }
    return (
        <>
            <Head title={"Super Admin"} />
            <div className="lg:grid lg:grid-cols-7">
                <div className="lg:col-span-2 lg:block hidden">
                    <Sidebar active={'admin'} />
                </div>
                <div className="lg:hidden">
                    <SidebarSM handle={handleSidebarSm} on={sidebarSm} active={'admin'} />
                </div>
                <div className="lg:col-span-5 ">
                    <Header handle={handleSidebarSm} login={props.flash.login} auth={props.auth} />
                    <Section notif={props.flash} user={props.user} />
                </div>
            </div>
        </>
    )
}
