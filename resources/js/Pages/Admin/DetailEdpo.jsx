import { Head, Link } from '@inertiajs/react'
import React from 'react'
import Sidebar from '@/Components/Admin/Sidebar';
import Header from '@/Components/Super/Header';
import SectionDetailEdpo from '@/Components/Admin/SectionDetailEdpo';

export default function DetailEdpo(props) {
    console.log('props', props);
    return (
        <>
            <Head title={"Detail E-DPO"} />
            <div className="grid grid-cols-7">
                <div className="col-span-2">
                    <Sidebar active={'edpo'} />
                </div>
                <div className="col-span-5 ">
                    <Header login={props.flash.login} auth={props.auth} />
                    <SectionDetailEdpo edpo={props.edpo[0]} />
                </div>
            </div>
        </>
    )
}
