import { Head, Link } from '@inertiajs/react'
import React from 'react'
import Sidebar from '@/Components/Super/Sidebar';
import Header from '@/Components/Super/Header';
import SectionDetailTertangkap from '@/Components/Super/SectionDetailTertangkap';

export default function DetailTertangkap(props) {
    console.log('props', props);
    return (
        <>
            <Head title={"Detail Tertangkap"} />
            <div className="grid grid-cols-7">
                <div className="col-span-2">
                    <Sidebar active={'tertangkap'} />
                </div>
                <div className="col-span-5 ">
                    <Header login={props.flash.login} auth={props.auth} />
                    <SectionDetailTertangkap edpo={props.edpo[0]} />
                </div>
            </div>
        </>
    )
}
