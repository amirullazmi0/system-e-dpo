import { Head, Link } from '@inertiajs/react'
import React, { useState } from 'react'
import Sidebar from '@/Components/Admin/Sidebar';
import Header from '@/Components/Super/Header';
import FormAddEdpo from '@/Components/Admin/FormAddEdpo';
import SidebarSM from '@/Components/Admin/SidebarSm';


export default function AddEdpo(props) {
    const [sidebarSm, setSidebarSm] = useState(false)
    const handleSidebarSm = (e) => {
        setSidebarSm(e)
    }
    return (
        <>
            <Head title='Tambah E-DPO' />
            <div className="lg:grid lg:grid-cols-7">
                <div className="lg:col-span-2 lg:block hidden">
                    <Sidebar active={'edpo'} />
                </div>
                <div className="lg:hidden">
                    <SidebarSM handle={handleSidebarSm} on={sidebarSm} active={'edpo'} />
                </div>
                <div className="lg:col-span-5 ">
                    <Header handle={handleSidebarSm} login={props.flash.login} auth={props.auth} />
                    <FormAddEdpo auth={props.auth} error={props.errors} />
                </div>
            </div>
        </>
    )
}
