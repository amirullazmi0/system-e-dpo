import { Head, Link } from '@inertiajs/react'
import React from 'react'
import Sidebar from '@/Components/Super/Sidebar';
import Header from '@/Components/Super/Header';
import FormEditEdpo from '@/Components/Super/FormEditEdpo';



export default function EditEdpo(props) {
    console.log('props', props);
    return (
        <>
            <Head title='Edit E-DPO' />
            <div className="grid grid-cols-7">
                <div className="col-span-2">
                    <Sidebar active={'edpo'} />
                </div>
                <div className="col-span-5 ">
                    <Header login={props.flash.login} auth={props.auth} />
                    <FormEditEdpo edpo={props.edpo[0]} error={props.errors} />
                </div>
            </div>
        </>
    )
}
