import { Head, Link } from '@inertiajs/react'
import React, { useState } from 'react'
import Sidebar from '@/Components/Super/Sidebar';
import Header from '@/Components/Super/Header';
import FormEditAdmin from '@/Components/Super/FormEditAdmin';
import SidebarSM from '@/Components/Super/SidebarSM';



export default function EditAdmin(props) {
    const [sidebarSm, setSidebarSm] = useState(false)
    const handleSidebarSm = (e) => {
        setSidebarSm(e)
    }
    return (
        <>
            <Head title='Edit Admin' />
            <div className="lg:grid lg:grid-cols-7">
                <div className="lg:col-span-2 lg:block hidden">
                    <Sidebar active={'admin'} />
                </div>
                <div className="lg:hidden">
                    <SidebarSM handle={handleSidebarSm} on={sidebarSm} active={'admin'} />
                </div>
                <div className="lg:col-span-5">
                    <Header handle={handleSidebarSm} login={props.flash.login} auth={props.auth} />
                    <FormEditAdmin notif={props.flash} user={props.user} error={props.errors} />
                </div>
            </div>
        </>
    )
}
