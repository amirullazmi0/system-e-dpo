import { Head, Link } from '@inertiajs/react'
import React from 'react'
import Sidebar from '@/Components/Admin/Sidebar';
import Header from '@/Components/Super/Header';
import SectionEdpo from '@/Components/Admin/SectionEdpo';
export default function Dashboard(props) {
    console.log('props', props);
    return (
        <>
            <Head title={"Admin"} />
            <div className="grid grid-cols-7">
                <div className="col-span-2">
                    <Sidebar active={'edpo'} />
                </div>
                <div className="col-span-5 ">
                    <Header login={props.flash.login} auth={props.auth} />
                    <SectionEdpo auth={props.auth} notif={props.flash} edpo={props.edpo} />
                </div>
            </div>
        </>
    )
}
