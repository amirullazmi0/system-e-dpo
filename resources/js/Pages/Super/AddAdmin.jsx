import { Head, Link } from '@inertiajs/react'
import React from 'react'
import Sidebar from '@/Components/Super/Sidebar';
import Header from '@/Components/Super/Header';
import FormAddAdmin from '@/Components/Super/FormAddAdmin';


export default function AddAdmin(props) {
    console.log('props', props);
    return (
        <>
            <Head title='Tambah Admin' />
            <div className="grid grid-cols-7">
                <div className="col-span-2">
                    <Sidebar active={'admin'} />
                </div>
                <div className="col-span-5 ">
                    <Header login={props.flash.login} auth={props.auth} />
                    <FormAddAdmin error={props.errors} />
                </div>
            </div>
        </>
    )
}
