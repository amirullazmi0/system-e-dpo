import { Link } from '@inertiajs/react'
import React from 'react'
import Sidebar from '@/Components/Super/Sidebar';
import Header from '@/Components/Super/Header';
import SectionEdpo from '@/Components/Super/SectionEdpo';

export default function EDPO(props) {
    console.log('props', props);
    return (
        <>
            <div className="grid grid-cols-7">
                <div className="col-span-2">
                    <Sidebar active={'edpo'} />
                </div>
                <div className="col-span-5 ">
                    <Header login={props.flash.login} auth={props.auth} />
                    <SectionEdpo notif={props.flash} user={props.user} />
                </div>
            </div>
        </>
    )
}
