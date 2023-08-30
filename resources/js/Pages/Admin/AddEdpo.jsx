import { Head, Link } from '@inertiajs/react'
import React from 'react'
import Sidebar from '@/Components/Admin/Sidebar';
import Header from '@/Components/Super/Header';
import FormAddEdpo from '@/Components/Admin/FormAddEdpo';


export default function AddEdpo(props) {
    console.log('props', props);
    return (
        <>
            <Head title='Tambah E-DPO' />
            <div className="grid grid-cols-7">
                <div className="col-span-2">
                    <Sidebar active={'edpo'} />
                </div>
                <div className="col-span-5 ">
                    <Header login={props.flash.login} auth={props.auth} />
                    <FormAddEdpo auth={props.auth} error={props.errors} />
                </div>
            </div>
        </>
    )
}
